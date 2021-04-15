const burger = document.getElementById("burger");
const ul = document.querySelector("nav ul");
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

tabs.forEach(tab => {
  tab.addEventListener('click', ()=> {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    target.classList.add('active');
    tab.classList.add('active')
  })
})