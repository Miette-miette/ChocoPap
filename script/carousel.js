let imageIndex = 1;
showImage(imageIndex);


// Thumbnail image controls
function imageActive(n) {
  showImage(imageIndex = n);
}

function showImage(n) {
  let i;
  let image = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("dot");

  if (n > image.length) {
    imageIndex = 1
  }

  if (n < 1) {
    imageIndex = image.length
  }

  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  image[imageIndex-1].style.display = "block";
  dots[imageIndex-1].className += " active";
}