$(document).ready(function() {
  //Global vars
  var alarm = $("#alarm")[0];
  var workLen = parseInt($("#work-num").html());
  var breakLen = parseInt($("#break-num").html());
  //---
  $("#reset").hide();
  $("#newPom").hide();
  //START
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    workLen *= 60;
    breakLen *= 60;
    function timer() {
      $(
        "#start, #subWork, #addWork, #work-title, #break-title, #subBreak, #addBreak, #break-num"
      ).hide();
      $("#work-type").show();
      $("#work-type").html("Session Timer: ");

      workLen -= 1;
      if (workLen === 0) {
        alarm.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#work-num, #work-type").hide();
      }
      if (workLen % 60 >= 10) {
        $("#work-num").html(Math.floor(workLen / 60) + ":" + workLen % 60);
      } else {
        $("#work-num").html(
          Math.floor(workLen / 60) + ":" + "0" + workLen % 60
        );
      }

      function breakTimer() {
       
        $("#break-type").show();
        $("#break-type").html("Break Timer: ");

        $("#break-num").show();
        breakLen -= 1;
        if (breakLen === 0) {
          clearInterval(startBreak);
          alarm.play();
          $("#break-num").hide();
          $("#break-type").hide();
          $("#reset").show();
          $("#newPom").show();
        }
        if (breakLen % 60 >= 10) {
          $("#break-num").html(Math.floor(breakLen / 60) + ":" + breakLen % 60);
        } else {
          $("#break-num").html(
            Math.floor(breakLen / 60) + ":" + "0" + breakLen % 60
          );
        }
      }
    }
  });
  //RESET
  $("#reset").click(function() {
    workLen = 25;
    breakLen = 5;
    $("#work-num").html(workLen);
    $("#break-num").html(breakLen);
    $(
      "#start, #work-title, #addWork, #subWork, #work-num, #break-title, #addBreak, #subBreak, #break-num"
    ).show();
    $("#reset").hide();
    $("#newPom").hide();
    console.log(breakLen);
  });
  //---
  //ADD SUB Btns
  $("#subWork").click(function() {
    if (workLen > 5) {
      workLen -= 5;
      //console.log(workLen);
      $("#work-num").html(workLen);
    }
  });
  $("#addWork").click(function() {
    if (workLen < 55) {
      workLen += 5;
      $("#work-num").html(workLen);
    }
  });

  $("#subBreak").click(function() {
    if (breakLen > 5) {
      breakLen -= 5;
      $("#break-num").html(breakLen);
    }
  });
  $("#addBreak").click(function() {
    if (breakLen < 55) {
      breakLen += 5;
      $("#break-num").html(breakLen);
    }
  });
  //---
});