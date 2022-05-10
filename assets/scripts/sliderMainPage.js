//SLider
const $slider = document.querySelector(".slider");

//SLider buttons (arrow)
const $sliderBtnPrev = document.querySelector(".slider-btn_prev");
const $sliderBtnNext = document.querySelector(".slider-btn_next");

//SLides (Left and Right)
const $slideLeft = document.querySelector(".slide_left");
const $slideRight = document.querySelector(".slide_right");

//All animals ID
const $allID = petsArray.map((e) => String(e.animalID));
//Current animals ID
let $currentID = Array.from(document.querySelectorAll(".card")).map(
  (e) => e.dataset.animalid
);

const getRandomFreeID = (arr, currentArr) => {
  let result = [];
  let freeID = arr.filter((e) => !currentArr.includes(e));
  while (result.length !== 3) {
    let i = Math.floor(Math.random() * freeID.length);
    if (!result.includes(freeID[i])) result.push(freeID[i]);
  }
  return result;
};

//Function create card
const createCard = (animal) => {
  return `
  <div class="card" data-animalID="${animal.animalID}">
    <div class="card__image">
      <img
      src="${animal.img}"
      alt="${animal.name}"
      />
    </div>
    <p class="card__title">${animal.name}</p>
    <a href="#" class="card__btn btn btn_contur">Learn more</a>
  </div>
`;
};

const addNewCards = (s, slide) => {
  let $indexNewCards;
  $indexNewCards = getRandomFreeID($allID, $currentID);
  $indexNewCards.forEach((e) => {
    let animal = petsArray.find((animal) => animal.animalID == e);
    let newCard = createCard(animal);
    slide.insertAdjacentHTML("beforeend", newCard);
  });
  if (s === "left") {
    $currentID = $indexNewCards.concat($currentID.slice(3));
  } else {
    $currentID = $currentID.slice(0, 3).concat($indexNewCards);
  }
};

//Move functions
//Function move previous
const movePrev = () => {
  $slider.classList.add("transition-prev");
  $sliderBtnPrev.removeEventListener("click", movePrev);
  $sliderBtnNext.removeEventListener("click", moveNext);
};
//Function move next
const moveNext = () => {
  $slider.classList.add("transition-next");
  $sliderBtnPrev.removeEventListener("click", movePrev);
  $sliderBtnNext.removeEventListener("click", moveNext);
};

$sliderBtnPrev.addEventListener("click", movePrev);
$sliderBtnNext.addEventListener("click", moveNext);

$slider.addEventListener("animationend", (animation) => {
  let changedSlide;
  let side;
  if (animation.animationName === "move-prev") {
    $slider.classList.remove("transition-prev");
    changedSlide = $slideLeft;
    side = "left";
    document.querySelector(".slide_center").innerHTML = $slideLeft.innerHTML;
  } else {
    $slider.classList.remove("transition-next");
    changedSlide = $slideRight;
    side = "right";
    document.querySelector(".slide_center").innerHTML = $slideRight.innerHTML;
  }
  changedSlide.innerHTML = "";
  addNewCards(side, changedSlide);

  $sliderBtnPrev.addEventListener("click", movePrev);
  $sliderBtnNext.addEventListener("click", moveNext);
});
