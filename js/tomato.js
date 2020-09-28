let playMode = "sustain";
let sample;

function setup() {
  // put setup code here
  // runs once and is used for initialization
  createCanvas(1792, 985);
  soundFormats("mp3", "ogg");
  sample = loadSound("img/SPLAT_sound.mp3");
  noCursor();
}

function draw() {
  // put drawing code here
  // runs repeatedly and is used for animation

  drawSprites();

  // second attempt drawSprites();

  // first attempt
  // noStroke()
  // if (mouseIsPressed) {
  // 	fill(0);

  // } else {
  // 	fill(255, 0);
  // }
  // ellipse(mouseX,mouseY,80,80);
}

function mousePressed() {
  sample.play();

  var newSprite = createSprite(mouseX, mouseY);

  newSprite.addAnimation(
    "normal",
    "img/SPLAT_1_FRESH.png",
    "img/SPLAT_2_FRESH.png",
    "img/SPLAT_3_FRESH.png",
    "img/SPLAT_4_FRESH.png",
    "img/SPLAT_5_FRESH.png"
  );
  // 'https://i.imgur.com/egulNsK.png',
  // 'https://i.imgur.com/QldNt5P.png',
  // 'https://i.imgur.com/nrQMUII.png',
  // 'https://i.imgur.com/CmL8K4V.png',
  // 'https://i.imgur.com/pfSaml8.png');

  newSprite.animation.stop();
  var f = round(random(0, newSprite.animation.getLastFrame()));
  const count = newSprite.animation.getLastFrame();
  console.error("@@ count:", count);
  console.error("@@ f:", f);
  newSprite.animation.changeFrame(f);

  $(".cursor").hide();

  // second attempt
  // 	fill (3)
  // 	var s = createSprite(mouseX, mouseY, 30, 30);
}

function togglePlayMode() {
  if (playMode === "sustain") {
    playMode = "restart";
  } else {
    playMode = "sustain";
  }
  sample.playMode(playMode);
}

$("body")
  .mousemove(function (e) {
    $(".cursor").show().css({
      left: e.clientX,
      top: e.clientY,
    });
  })
  .mouseout(function () {
    $(".cursor").hide();
  });
