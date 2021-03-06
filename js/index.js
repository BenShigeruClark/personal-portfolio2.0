// function for photo cross fade

function crossFade() {
  const $active = $('#slide-show .active');
  const $next = ($active.next().length > 0) ? $active.next() : $('#slide-show img:first');
  $next.css('z-index', 2);
  $active.fadeOut(1500, function() {
    $active.css('z-index', 1).show().removeClass('active');
    $next.css('z-index', 3).addClass('active');
  });
}

$(document).ready(function() {
  setInterval('crossFade()', 4500)
})

// function to animate text
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 200
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 2500,
    easing: "easeOutExpo",
    delay: 2000
  })