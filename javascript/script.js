function type(text, speed) {
  let title = text.html()
  let collector = ''
  let integer = 0

  let stopInterval = setInterval(() => {
    if (collector === title) {
      return clearInterval(stopInterval)
    }
    collector += title[integer]
    text.html(collector)
    integer++

  }, speed);
}

type($('.header__title'), 150)
type($('.header__text'), 40)

// nav menu 

$(window).on('scroll', (e) => {

  position()
})

function position() {
  let windowHeight = $(window).height()
  let elHeight = $('.nav').outerHeight();
  let windowScrollTop = $(window).scrollTop()
  let top = windowHeight - elHeight - windowScrollTop

  if (top > 0) {
    $('.nav').css({
      position: 'fixed',
      width: 100 + '%',
      top: `${top}px`,
      zIndex: 5
    })
  } else {
    $('.nav').css({
      position: 'fixed',
      width: 100 + '%',
      top: 0
    })
  }
}
position()

// Scroll top icon will be out

$(window).scroll(() => {
  let wHeight = $(window).height()
  let scrollHeight = $(window).scrollTop()

  if (wHeight < wHeight + scrollHeight) {
    $('.js-btn-top').addClass('show');
  } else {
    $('.js-btn-top').removeClass('show');
  }
})

$('.js-btn-top').click(() => {
  $('html, body').animate({
    scrollTop: 0
  }, 1000)
})

// Accordion

$('.ask').click((e) => {
  $('.ask').not($(e.target)).next().stop().slideUp()
  $(e.target).next().stop().slideToggle()
  $('.ask').not($(e.target)).removeClass('active')
  $(e.target).toggleClass('active')
  console.log($(e.target).next());
})

// To open the similarities of elements in the progress of clicks

$('.js-filter').click((e) => {
  let attr = $(e.target).attr('data-filter')
  if (attr === 'all') {
    $('.js-filter-card').stop().slideDown()
  } else {
    $('.js-filter-card').stop().slideUp()
    $(`.js-filter-card[data-filter=${attr}]`).stop().slideDown()
  }
  $('.js-filter').not($(e.target)).removeClass('active')
  $(e.target).addClass('active')
})

// Login should be showed when it is pressed / clicked

$('.js-modal-show').click(() => {
  $('.modal').fadeIn()
})

$('.close').click(() => {
  $('.modal').fadeOut()
})

$('.modal').click((e) => {
  if (e.target === e.currentTarget) {
    $('.modal').fadeOut()
  }
})



$('.read-more').click(() => {
  if ($('.read-more').html().trim() == 'Read-More') {
    $('.read-more').html('Hidden')
    $('.hidden').css({
      display: `flex`
    })
  } else if ($('.read-more').html().trim() == 'Hidden') {
    console.log(1);
    $('.read-more').html('Read-More')
    $('.hidden').css({
      display: `none`
    })
    console.log(0);
  }
})

$('.js-sroll-to-id').click(() => {
  
})