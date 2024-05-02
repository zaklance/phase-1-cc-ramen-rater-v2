// index.js

// Callbacks
const handleClick = () => {
  const ramenMenu = document.querySelector('#ramen-menu');
  ramenMenu.addEventListener('click', event => {
    console.log("The user clicked on '" + event.target.id + "'.");
    fetch(`http://localhost:3000/ramens/${event.target.id}`)
    .then((res) => res.json())
    .then(data => {
      let ramenDetailImg = document.querySelector('#ramen-detail img');
      let ramenDetailName = document.querySelector('#ramen-detail h2');
      let ramenDetailRest = document.querySelector('#ramen-detail h3');
      let ramenDetailRating = document.querySelector('#rating-display');
      let ramenDetailComm = document.querySelector('#comment-display');
      ramenDetailImg.src = `${data.image}`;
      ramenDetailName.textContent = `${data.name}`;
      ramenDetailRest.textContent = `${data.restaurant}`;
      ramenDetailRating.textContent = `${data.rating}`;
      ramenDetailComm.textContent = `${data.comment}`;
    }
  )})
};

const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", event => {
    event.preventDefault();
    let ramenName = event.target.name.value;
    let ramenRest = event.target.restaurant.value;
    let ramenImg = event.target.image.value;
    let ramenRating = event.target.rating.value;
    let ramenComm = event.target['new-comment'].value;
    fetch('http://localhost:3000/ramens', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: ramenName,
        restaurant: ramenRest,
        image: ramenImg,
        rating: ramenRating,
        comment: ramenComm
      }),
    })
    .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    })
};

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then((res) => res.json())
  .then(data => {
  const ramenMenu = document.querySelector('#ramen-menu');
  data.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.id = ramen.id;
    ramenMenu.append(img);
  });
});
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => displayRamens() + handleClick() + addSubmitListener());
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
