// 2nd text animate on intro section
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3500,
    delay: (el, i) => 150 * (i+15)
  })