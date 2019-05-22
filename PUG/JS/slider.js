function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var tech = GetURLParameter('id');
$(window).on('load', function () {
  console.log(tech);
  currentSlide(tech);
});

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
$(document).on('click', '.card-body__action__buy', function () {
  axios.get('http://localhost:3000/newProducts').then(function (res) {
    var existing = localStorage.getItem('tranquanlam');
    res.data.forEach(function (element) {
      console.log(element);
      if (tech == element.id) {
        existing = existing ? existing.split(',') : [];
        // Add new data to localStorage Array
        existing.push(JSON.stringify(element));
        console.log(existing);
        // Save back to localStorage
        localStorage.setItem('tranquanlam', existing.toString());
      }
    });
  });
});