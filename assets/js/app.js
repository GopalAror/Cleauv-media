let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span1 = document.querySelector(".span1")
let logo = document.querySelector(".logo-show")
let crs = document.querySelector(".crs")
let cross = document.querySelector(".cross")

menu.addEventListener("click", function () {
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden")
  logo.classList.toggle("d-none")
  span1.classList.toggle("d-none")
  cross.classList.add("d-block")
  cross.classList.toggle("d-none")
});
// backto top//
function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 500) {
      topbtn.style.display = 'block';
  }
  else{
      topbtn.style.display = 'none';
  }
})
// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);
// --------------------------------------------slider-1-----------------------------------------//

$('.slidr1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ---------------------------------------------------slider-2--------------------------------------///
$('.slidr2').slick({
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick"
    }
  ]
});
//----------------------------------------------------- slider-3-------------------------------------//

$('.slider3').slick({
  centerMode: true,
  centerPadding: '230px',
  slidesToShow: 1,
  prevArrow:false,
  nextArrow:false, 
  dots:true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});


