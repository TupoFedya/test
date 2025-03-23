const all = document.querySelector('.all');
const block = document.querySelector('.block');
const about = document.querySelector('.aboutButton');
const mypc = document.querySelector('.pcButton');
const aboutText = document.querySelector('.about');
const pcText = document.querySelector('.mypc');
const back = document.querySelector('.back');

about.addEventListener('click', function () {
  all.classList.add("allUp");
  block.classList.remove("blockUp");
  aboutText.classList.remove("blockHide");
})
mypc.addEventListener('click', function () {
  all.classList.add("allUp");
  block.classList.remove("blockUp");
  pcText.classList.remove("blockHide");
})

back.addEventListener('click', function () {
  all.classList.remove("allUp");
  block.classList.add("blockUp");
  setTimeout(
    () => {
      aboutText.classList.add("blockHide");
      pcText.classList.add("blockHide");
    },
    400
  );
})