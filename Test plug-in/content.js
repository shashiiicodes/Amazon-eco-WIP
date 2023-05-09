// Find the link to the product type on the page
const productTypeLink = document.querySelector('.a-link-normal[href*="/b/"]');

// If the link is found, extract the product type and add "Do not buy"
if (productTypeLink) {
  const productType = productTypeLink.textContent.trim();
  console.log(`${productType}`);

  // Create new paragraph element with "Product Type"
 const productTypeElement = document.createElement("p");
    productTypeElement.innerHTML = `Product Type: ${productType}<br>Climate change is real!`;
  
  // Add CSS styles to the element to increase text size
  productTypeElement.style.fontSize = "24px";
    productTypeElement.style.fontWeight = "bold";
    productTypeElement.style.color = "red";
  
  // Insert new paragraph element after the product type link
  productTypeLink.parentNode.insertBefore(productTypeElement, productTypeLink.nextSibling);
}
