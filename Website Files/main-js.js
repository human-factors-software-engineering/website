/*Switching images based on screen size - code snippet edited from https://stackoverflow.com/a/36402526*/
var image1 =  $('.carousel-image-1').find("img");
var image2 =  $('.carousel-image-2').find("img");

function setImages() {
  var windowWidth = window.innerWidth,
      src1 = (windowWidth < 768) ? 'images/home-page-imgs/carousel-pt1-small-screen.svg' : 'images/home-page-imgs/carousel-pt1.svg';
      src2 = (windowWidth < 768) ? 'images/home-page-imgs/carousel-pt2-small-screen.svg' : 'images/home-page-imgs/carousel-pt2.svg';
  image1.attr('src', src1);
  image2.attr('src', src2);
}

$(window).on('resize', setImages);
setImages();

/*Switch icon color on hover*/
/*This could be way more efficient...*/

/*-------profWebIcon-------*/
function mouseOnW(webIcon) {
  webIcon.src = 'images/people-page-imgs/web-icon-gray.svg';
}

function mouseOffW(webIcon) {
  webIcon.src = 'images/people-page-imgs/web-icon-orange.svg';
}
/*-------profGitIcon-------*/
function mouseOnG(gitIcon) {
  gitIcon.src = 'images/github-logo-small-gray.svg';
}

function mouseOffG(gitIcon) {
  gitIcon.src = 'images/github-logo-small-orange.svg';
}