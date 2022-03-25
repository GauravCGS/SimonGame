var flag = 1;
var randNum, level = 1;
var pc = [];
var p1 = [];

$(document).click(function() {
  $("#level-title").text("Level 1");
  pcPlay();
  $(document).unbind();
  game();
});


function pcPlay() {
  randNum = Math.floor(Math.random() * 4 + 1);
  pc.push(randNum);
  $(".b" + randNum).fadeIn(100).fadeOut(100).fadeIn(100);;
  console.log(pc);
}

function game() {
  $(".btn").click(function() {
    p1.push(Number(this.id));
    console.log(p1);
    var bt = $("#" + this.id).addClass("pressed");
    setTimeout(function() {
      bt.removeClass("pressed")
    }, 100);
    var colorSound = new Audio("sounds/yellow.mp3");
    colorSound.play();
    for (var i = 0; i < p1.length; i++) {
      if (pc[i] != p1[i]) {
        flag = 0;
        break;
      }
    }
    if (pc.length == p1.length && flag == 1) {
      console.log("Shabash");
      $("body").addClass("green");
      setTimeout(function() {
        $("body").removeClass("green")
      }, 300);
      level++;
      $("#level-title").text("Level " + level);
      p1 = [];
      setTimeout(function() {
        pcPlay();
      }, 600);
    } else if (flag == 0) {
      console.log("Game Over");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over :(");
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
      $(".btn").unbind();
      $("footer").text("Click to reload");
      $(document).keydown(function() {
        location.reload();
      });
    }
  });
}
