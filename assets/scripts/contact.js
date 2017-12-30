function send() {

  removeErrors();
  if(check()) {

    $(".loader").removeClass('hidden');
    $(".loader").fadeIn();

    var $form = $("#contact-form");
    $.post($form.attr("action"), $form.serialize()).then(function() {

      $("#email").val("");
      $("#message").val("");
      $("#alert3").removeClass('hidden');
      $(".loader").fadeOut();
    });
  }
}
function check() {

  var email = $("#email").val().trim();
  var msg = $("#message").val().trim();

  if(email == '' || msg == '') {

    $("#alert1").removeClass('hidden');
    return false;
  }
  return true;
}
function removeErrors() {
  $("#alert1").addClass('hidden');
  $("#alert2").addClass('hidden');
  $("#alert3").addClass('hidden');
}
