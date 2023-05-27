$(document).ready(function () {
  $("#generate_otp_btn").click(function () {
    var NewrandomNumber = generateRandomNumber();
    console.log(NewrandomNumber);
    var currentno = $("#otp_show").val(NewrandomNumber);
    // var currentNo = $("#otp_show").;
    console.log("current no:", currentno.val());
  });

  // ------for copy the genereted number

  $("#copy_otp_btn").click(function () {
    if ($("#otp_show").val() != "") {
      $("#otp_show").focus().select();
      document.execCommand("copy");

      alert("OTP copied:" + $("#otp_show").val());
    } else {
      alert(" please generate no:");
    }
  });

  // for pasting otp directly-----

  $(".otp_items").bind("paste", function (e) {
    var pastedText = e.originalEvent.clipboardData.getData("text");
    console.log("before:" + pastedText);
    pastedText = pastedText.replace(/\s/g, "");
    console.log("after:" + pastedText);
    var otp_boxes = $(".otp_items");
    for (var i = 0; i < otp_boxes.length; i++) {
      var substring = pastedText.substring(i, i + 1);
      $(otp_boxes[i]).val(substring);
    }
  });
  console.log();
  //   key press
  $(".otp_items").keydown(function (e) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // if (characters.indexOf(e.key) !== -1) {
    //   console.log(e.key + " is a valid character.");
    console.log("value of top_item:" + $("#otp_items"));
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 97 && e.keyCode <= 122)
    ) {
      var otp_boxes = $(".otp_items");
      for (i = 0; i < otp_boxes.length; i++) {
        if (otp_boxes[i] === document.activeElement) {
          if (otp_boxes[i + 1]) {
            otp_boxes[i + 1].focus();
          }
          break;
        }
      }
    } else {
    }
  });

  // when someone press backspace this is not complete

  $(document).on("keyup", "pasted length", function (e) {
    var otp_boxes = $(".otp_items");
    for (i = otp_boxes.legth; i > 0; i--) {
      if (e.keyCode === 8) {
        $(this).val("");
        $(otp_boxes[i - 1])
          .focus()
          .select();
      }
    }
  });

  //   console.log($(".otp_items").length);
});

function generateRandomNumber() {
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randomNumber = "";
  for (var i = 0; i < 6; i++) {
    randomNumber += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomNumber;
}
