$(document).ready(function() {
  removeErrors();
  $(".loader").hide();
});
function send() {

  removeErrors();
  if(check()) {

    var email = $("#email").val().trim();
    var msg = $("#msg").val().trim();

    $(".loader").fadeIn();

    $.post("https://robert-voit.de/send_mail",
    {
      email: email,
      msg: msg
    },
    function(data, status) {

      if(data == 'ok') {

        $("#email").val("");
        $("#msg").val("");
        $("#alert3").show();

      } else {

        $("#alert2").show();
      }
      $(".loader").fadeOut();
    });
  }
}
function check() {

  var email = $("#email").val().trim();
  var msg = $("#msg").val().trim();

  if(email == '' || msg == '') {

    $("#alert1").show();
    return false;
  }
  return true;
}
function removeErrors() {
  $("#alert1").hide();
  $("#alert2").hide();
  $("#alert3").hide();
}
