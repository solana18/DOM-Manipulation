function selectSize(theSize) {
  // Find the size radio button with the specified value
  const selectedSizeRadio = document.querySelector(
    `input[name="Size"][value="${theSize}"]`
  );

  // Check if the size radio button exists
  if (selectedSizeRadio) {
    // Click on the corresponding label to select the size
    const labelForSizeRadio = document.querySelector(
      `label[for="${selectedSizeRadio.id}"]`
    );
    labelForSizeRadio.click();

    // Add the product to bag
    const addToBagButton = document.querySelector('button[name="add"]');
    addToBagButton.click();
  }
}


// Example usage:
selectSize("L");
