$(document).ready(function(){
  var arrayOfImagesLeft, arrayOfImagesRightTop, arrayOfImagesRightBottom;
  console.log("hahahahaha");
  arrayOfImagesLeft = ['images/left/left-1.jpg', 'images/left/left-2.jpg', 'images/left/left-3.jpg', 'images/left/left-4.jpg', 'images/left/left-5.jpg', 'images/left/left-6.jpg', 'images/left/left-7.jpg', 'images/left/left-8.jpg', 'images/left/left-9.jpg', 'images/left/left-10.jpg', 'images/left/left-11.jpg', 'images/left/left-12.jpg', 'images/left/left-13.jpg', 'images/left/left-14.jpg', 'images/left/left-15.jpg', 'images/left/left-16.jpg', 'images/left/left-17.jpg', 'images/left/left-18.jpg', 'images/left/left-19.jpg', 'images/left/left-20.jpg', 'images/left/left-21.jpg', 'images/left/left-22.jpg', 'images/left/left-23.jpg', 'images/left/left-24.jpg'];
  arrayOfImagesRightTop = ['images/right-top/right-top1.jpg', 'images/right-top/right-top2.jpg', 'images/right-top/right-top3.jpg', 'images/right-top/right-top4.jpg', 'images/right-top/right-top5.jpg', 'images/right-top/right-top6.jpg', 'images/right-top/right-top7.jpg', 'images/right-top/right-top8.jpg', 'images/right-top/right-top9.jpg', 'images/right-top/right-top10.jpg', 'images/right-top/right-top11.jpg', 'images/right-top/right-top12.jpg', 'images/right-top/right-top13.jpg', 'images/right-top/right-top14.jpg', 'images/right-top/right-top15.jpg', 'images/right-top/right-top16.jpg', 'images/right-top/right-top17.jpg', 'images/right-top/right-top18.jpg', 'images/right-top/right-top19.jpg', 'images/right-top/right-top20.jpg', 'images/right-top/right-top21.jpg', 'images/right-top/right-top22.jpg', 'images/right-top/right-top23.jpg', 'images/right-top/right-top24.jpg'];
  arrayOfImagesRightBottom = ['images/right-bottom/right-bottom-1.jpg', 'images/right-bottom/right-bottom-2.jpg', 'images/right-bottom/right-bottom-3.jpg', 'images/right-bottom/right-bottom-4.jpg', 'images/right-bottom/right-bottom-5.jpg', 'images/right-bottom/right-bottom-6.jpg', 'images/right-bottom/right-bottom-7.jpg', 'images/right-bottom/right-bottom-8.jpg', 'images/right-bottom/right-bottom-9.jpg', 'images/right-bottom/right-bottom-10.jpg', 'images/right-bottom/right-bottom-11.jpg', 'images/right-bottom/right-bottom-12.jpg', 'images/right-bottom/right-bottom-13.jpg', 'images/right-bottom/right-bottom-14.jpg', 'images/right-bottom/right-bottom-15.jpg', 'images/right-bottom/right-bottom-16.jpg', 'images/right-bottom/right-bottom-17.jpg', 'images/right-bottom/right-bottom-18.jpg', 'images/right-bottom/right-bottom-19.jpg', 'images/right-bottom/right-bottom-20.jpg', 'images/right-bottom/right-bottom-21.jpg', 'images/right-bottom/right-bottom-22.jpg', 'images/right-bottom/right-bottom-23.jpg', 'images/right-bottom/right-bottom-24.jpg'];
  $('#left').rollerblade({
    imageArray: arrayOfImagesLeft,
    sensitivity: 30,
    drag: false
  });
  $('#right-top').rollerblade({
    imageArray: arrayOfImagesRightTop,
    sensitivity: 120,
    drag: false
  });
  return $('#right-bottom').rollerblade({
    imageArray: arrayOfImagesRightBottom,
    sensitivity: 80,
    drag: false
  });
});