/*Switching images based on screen size - code snippet edited from https://stackoverflow.com/a/36402526*/
var image1 =  $('.carousel-image-1').find("img");
var image2 =  $('.carousel-image-2').find("img");

function setImages() {
  var windowWidth = window.innerWidth,
      src1 = (windowWidth < 768) ? 'images/carousel-pt1-small-screen.svg' : 'images/carousel-pt1.svg';
      src2 = (windowWidth < 768) ? 'images/carousel-pt2-small-screen.svg' : 'images/carousel-pt2.svg';
  image1.attr('src', src1);
  image2.attr('src', src2)
}

$(window).on('resize', setImages);
setImages();

/*Switching icons based on screen size*/
