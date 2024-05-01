// index.js
fetch('http://localhost:3000/ramens')
.then((res) => res.json())
.then(ramenMenu => {
  const ramenDisplay = document.querySelector('#ramen-menu');
  ramenMenu.forEach(ramen => {
    const img = document.createElement('img');
    img.src = `${ramen.image}`;
    ramenDisplay.append(img);
  });
});

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
