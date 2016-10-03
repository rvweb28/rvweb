var modal = $('#myModal');

var modalImg = $('#modal_img');
var captionText = $('#caption');

var currentImg = undefined;
var totalImgAmount = 0;

$(document).ready(function() {

  var imgNumber = 1;

  $('.clickable-img').each(function() {

    $(this).attr('data-img-no', imgNumber);
    imgNumber++;
  });
  totalImgAmount = imgNumber;
});

$(".clickable-img").on('click', function() {

  currentImg = $(this).attr('data-img-no');
  modal.css('display', 'block');
  modalImg.attr('src', $(this).attr('data-gallery'));
  captionText.html($(this).next().html());
  $("body").addClass("disable-scroll");
});

$('.close-span').on('click', function() {
  modal.css('display', 'none');
  $("body").removeClass("disable-scroll");
});

$('#next-btn').on('click', function() {

  if(currentImg < totalImgAmount-1) {
    currentImg++;
    var imgSrc = $('div[data-img-no="'+currentImg+'"]').attr('data-gallery');

    modalImg.animate({left: '-100%'}, 350, function() {

      modalImg.css('left', '100%');
      modalImg.attr('src', imgSrc);
      modalImg.animate({left: '0'}, 150);
    });
  }
});

$('#previous-btn').on('click', function() {

  if(currentImg > 1) {
    currentImg--;
    var imgSrc = $('div[data-img-no="'+currentImg+'"]').attr('data-gallery');

    modalImg.animate({left: '100%'}, 350, function() {

      modalImg.css('left', '-100%');
      modalImg.attr('src', imgSrc);
      modalImg.animate({left: '0'}, 150);
    });
  }
});
