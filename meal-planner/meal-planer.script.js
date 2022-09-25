// const btnRecipe = document.querySelectorAll(".btn-recipe");
// const btnIngredients = document.querySelector(".btn-ingredients");
// const containerRecipe = document.querySelector(".container-recipe");
// const containerIngredients = document.querySelector(".container-ingredients");
// let container;

// const reveal = function (e) {
//   e.preventDefault();
//   container = e.target;
//   containerRecipe.classList.remove("hidden");
//   containerIngredients.classList.add("hidden");
// };

// btnRecipe.forEach((btn) => {
//   // console.log(btn);
//   return btn.addEventListener("click", reveal);
//   // return btn.addEventListener("click", flipCard);
// });

// btnIngredients.addEventListener("click", function () {
//   console.log("test");
//   containerRecipe.classList.add("hidden");
//   containerIngredients.classList.remove("hidden");
// });
const tabs = document.querySelectorAll(".operations__tab");
const tab = document.querySelectorAll(".tab");

const tabsContainer = document.querySelectorAll(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const tabsContainerMain = document.querySelectorAll(".tab-container-main");

console.log(tabsContainerMain);

// tabsContainerMain.forEach((t) =>

// );

tabsContainer.forEach((t) =>
  t.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
    //guard clause
    if (!clicked) return;

    //remove active classes for both tab and content
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    tabsContent.forEach((c) => {
      c.classList.remove(`active`);
    });

    //active tab
    clicked.classList.add("active");

    //active content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("active");
  })
);
