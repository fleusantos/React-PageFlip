import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import ReactDOMServer from 'react-dom/server';
import './styles.css'

let rendered = false

const Page = React.forwardRef(({ pageIndex, currentPageContent }, ref) =>
  <div className="page" ref={ref} key={`react-book-${pageIndex}`} >
    <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ padding: '10px' }}>{currentPageContent}</div>
      <div className="page-footer" style={{ padding: '10px' }}>Page-{pageIndex}</div>
    </div>
  </div>)

function MyBook({ pageWidth, pageHeight }) {
  const bookContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
  `

  // content is string
  const reArrangePageContents = (content) => {
    const words = content?.split(' ')
    const divElements = [];
    let pageIndex = 1;
    let currentPageContent = "";

    words.forEach((word) => {
      // Append the current word to the current page content
      currentPageContent += word + ' ';

      const pageHTMLString = ReactDOMServer.renderToString(<Page pageIndex={pageIndex} currentPageContent={currentPageContent} />);

      // Create a new page if the current page content overflows its fixed height
      if (shouldCreateNewPage(pageHTMLString)) {
        divElements.push(
          <Page pageIndex={pageIndex} currentPageContent={currentPageContent} />
        );

        // Reset the current page content for the next page
        currentPageContent = "";
        pageIndex++;
      }
    });

    // Push any remaining content as the last page
    if (currentPageContent !== "") {
      divElements.push(
        <Page pageIndex={pageIndex} currentPageContent={currentPageContent} />
      );
    }

    return divElements;
  }

  const shouldCreateNewPage = (content) => {
    // Create a temporary element to measure the content height
    const tempElement = document.createElement("div");
    tempElement.style.height = "auto";
    tempElement.style.width = `${pageWidth}px`; // Adjust as needed
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.innerHTML = content;

    // Append the temporary element to the document body
    document.body.appendChild(tempElement);

    // Check if the content height exceeds the page height
    const contentHeight = tempElement.scrollHeight;
    const shouldCreatePage = contentHeight > pageHeight;

    // Remove the temporary element from the document body
    document.body.removeChild(tempElement);

    return shouldCreatePage;
  };

  useEffect(() => {
    window.addEventListener('load', function () {
      // render just once
      if (rendered) return
      rendered = true
    })
  }, [])

  return (
    <HTMLFlipBook width={pageWidth} height={pageHeight}>
      {reArrangePageContents(bookContent)}
    </HTMLFlipBook>
  );
}

export default MyBook