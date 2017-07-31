
function send() {

  removeErrors();
  if(check()) {

    var email = $("#email").val().trim();
    var msg = $("#msg").val().trim();

    $(".loader").removeClass('hidden');
    $(".loader").fadeIn();

    $.post("https://robert-voit.de/send_mail",
    {
      email: email,
      msg: msg
    },
    function(data, status) {

      if(data === 'ok') {

        $("#email").val("");
        $("#msg").val("");
        $("#alert3").removeClass('hidden');

      } else {

        $("#alert2").removeClass('hidden');
      }
      $(".loader").fadeOut();
    });
  }
}
function check() {

  var email = $("#email").val().trim();
  var msg = $("#msg").val().trim();

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
