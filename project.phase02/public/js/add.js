document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
  
      // Validate Planet Name
      const planetName = document.getElementById('planetName');
      const planetNameError = document.getElementById('planetNameError');
      if (!planetName.value.trim()) {
        planetNameError.innerText = 'Please enter the Planet Name';
        isValid = false;
      } else {
        planetNameError.innerText = '';
      }
  
      // Validate Price
      const price = document.getElementById('price');
      const priceError = document.getElementById('priceError');
      if (!price.value.trim()) {
        priceError.innerText = 'Please enter the Price';
        isValid = false;
      } else {
        priceError.innerText = '';
      }
  
      // Validate Description
      const description = document.getElementById('description');
      const descriptionError = document.getElementById('descriptionError');
      if (!description.value.trim()) {
        descriptionError.innerText = 'Please enter the Description';
        isValid = false;
      } else {
        descriptionError.innerText = '';
      }
  
      // Validate Image
      const image = document.getElementById('image_plant');
      const imageError = document.getElementById('imageError');
      if (!image.value.trim()) {
        imageError.innerText = 'Please choose an Image';
        isValid = false;
      } else {
        imageError.innerText = '';
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  

