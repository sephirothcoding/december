
if ( navigator.platform.indexOf('Win') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if ( navigator.platform.indexOf('Mac') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}


///////////
// Lights  

var bulbs = [];

var christmasLightsWrapper = document.createElement('div');
christmasLightsWrapper.classList.add('christmas_lights_wrapper');
document.body.appendChild(christmasLightsWrapper);
var line = document.createElement('div');
line.classList.add('line');
christmasLightsWrapper.appendChild(line);
var bulbWrapper = document.createElement('div');
bulbWrapper.classList.add('bulb_wrapper');
christmasLightsWrapper.appendChild(bulbWrapper);

function Bulb(pColor,pBulb,pGlas,pGlow)
{
  this.offColor = {r: pColor.r-50,g: pColor.g-50, b:pColor.b-50};
  this.onColor = {r: pColor.r+50,g: pColor.g+50, b:pColor.b+50};
  this.color = {r: pColor.r,g: pColor.g, b:pColor.b};
  this.bulb = pBulb;
  this.glas = pGlas;
  this.glow = pGlow;
  this.on = true;
  this.flick = function()
  {
    if(this.on)
    {
      this.glas.style.background = 'rgb('+this.offColor.r+','
                                         +this.offColor.g+','
                                         +this.offColor.b+')';
      this.glow.style.background = 'rgb('+this.offColor.r+','
                                         +this.offColor.g+','
                                         +this.offColor.b+')';
      this.glow.style.filter = 'blur(12px)';
      this.on = false;
    }
    else
    {
      this.glas.style.background = 'rgb('+this.onColor.r+','
                                         +this.onColor.g+','
                                         +this.onColor.b+')';
      this.glow.style.background = 'rgb('+this.onColor.r+','
                                         +this.onColor.g+','
                                         +this.onColor.b+')';
      this.glow.style.filter = 'blur(4px)';
      this.on = true;
    }
  };
};
for(var i=0; i < 24; i++)
{
  var _bulb = document.createElement('div');
  var _glow = document.createElement('span');
  var _glas = document.createElement('span');
  _bulb.classList.add('bulb');
  _glow.classList.add('glow');
  _glas.classList.add('glas');
  _bulb.appendChild(_glow);
  _bulb.appendChild(_glas);
  bulbWrapper.appendChild(_bulb);
  _bulb.style.top = Math.floor(line.clientHeight/7 * Math.sin(i*(180/23)*Math.PI/180))+"px";
  var bulb = new Bulb({r:Math.round(Math.random()*155+50),
                       b:Math.round(Math.random()*155+50),
                       g:Math.round(Math.random()*155+50)},
                       _bulb,_glas,_glow);
  bulb.flick();
  bulbs.push(bulb);
}

var _bulbs = document.getElementsByClassName('bulb');
for(var j=0; j < _bulbs.length; j++)
{
  _bulbs[j].addEventListener('mouseover',function()
  {
    this.classList.add('swing');
    setTimeout(function(){this.classList.remove('swing');}.bind(this),2000);
  });
  _bulbs[j].addEventListener('touchstart',function()
  {
    this.classList.add('swing');
    setTimeout(function(){this.classList.remove('swing');}.bind(this),2000);
  });
}

window.addEventListener('resize',function()
{
  for(var l=0; l < _bulbs.length; l++)
  {
    _bulbs[l].style.top = Math.floor(line.clientHeight/7 * Math.sin(l*(180/23)*Math.PI/180))+"px";
  }
});

var counter = 0;
setInterval(function()
{
  if(counter > bulbs.length-1)counter=0;
  bulbs[counter].flick(); 
  setTimeout(function(_counter){bulbs[_counter].flick();}.bind(this,counter),1200);
  counter++;
},150);








///////////
// Snowman
TweenMax.to("#head", 1.5, {
  startAt: {
    rotation: -10
  },
  rotation: 10,
  yoyo: true,
  transformOrigin: "50% 50%",
  repeat: -1,
  ease: Sine.easeInOut
});
TweenMax.to("#nose", 1.5, {
  startAt: {
    rotation: -10
  },
  rotation: 10,
  scaleX: .8,
  yoyo: true,
  transformOrigin: "5% 95%",
  repeat: -1,
  ease: Sine.easeInOut
});
TweenMax.to("#scarf", 1.5, {
  startAt: {
    rotation: 20
  },
  rotation: -20,
  yoyo: true,
  transformOrigin: "50% 10%",
  repeat: -1,
  ease: Sine.easeInOut
});
TweenMax.to("#shadow", 1.5, {
  startAt: {
    x: -5
  },
  x: 0,
  yoyo: true,
  repeat: -1,
  ease: Sine.easeInOut
});
TweenMax.to("#snowman", 1.5, {
  startAt: {
    rotation: -5
  },
  rotation: 7,
  yoyo: true,
  transformOrigin: "50% 90%",
  repeat: -1,
  ease: Sine.easeInOut
});
TweenMax.to("#snowman", .3, {
  scaleX: .95,
  scaleY: 1.05,
  yoyo: true,
  transformOrigin: "50% 95%",
  repeat: -1,
  ease: Sine.easeInOut
});
blink();
document.getElementById("snowman").addEventListener("click", knockHimDown);

function knockHimDown() {
  TweenMax.to("#snowman", .5, {
    rotation: -50,
    ease: Sine.easeOut
  });
  TweenMax.to("#snowman", 1.2, {
    delay: 1.2,
    rotation: 0,
    ease: Sine.easeInOut
  });
  TweenMax.set("#mouth", {
    scaleY: -1,
    transformOrigin: "50% 80%"
  });
  TweenMax.to("#snowman", 1.5, {
    delay: 3,
    rotation: 7,
    yoyo: true,
    transformOrigin: "50% 90%",
    repeat: -1,
    ease: Sine.easeInOut
  });
  TweenMax.to("#shadow", .5, {
    x: -15,
    ease: Sine.easeOut
  });
  TweenMax.to("#shadow", 1.2, {
    delay: 1.2,
    x: -5,
    ease: Sine.easeInOut
  });
  TweenMax.to("#shadow", 1.5, {
    delay: 3,
    x: 0,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut
  });
}

function blink() {
  TweenMax.to(["#eye1,#eye2"], .1, {
    delay: 5 * Math.random(),
    scaleY: .2,
    yoyo: true,
    repeat: 1,
    transformOrigin: "50% 50%",
    onComplete: blink
  });
}
////////////////
// Snow

var numFlakes = 1000;
var minScale = .15;
var maxScale = .5;
var minDuration = .3;
var maxDuration = 2;
var wind = 600;
var wiggle = 60;
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var snowflakeImage = new Image();
snowflakeImage.src = "https://dl.dropboxusercontent.com/u/1256960/ Research/JS/Snowman/snowflake.png";
var snowflakes = [];
snowflakeImage.onload = init;
onResize();
window.onresize = onResize;

// wait until the snowflake image loads
function init() {
  TweenMax.to("#scene", 0.3, {
    opacity: 1
  });
  TweenMax.to("canvas", 7, {
    delay: .3,
    opacity: 1
  });
  for (var i = 0; i < numFlakes; i++) {
    // create a snowflake object and its properties
    var snowflake = {
      initX: (canvas.width * 2 * Math.random()) - (canvas.width * .5),
      y: -16,
      scale: (Math.random() * (maxScale - minScale)) + minScale,
      angle: Math.random() * Math.PI * 2,
      drift: 0,
      radius: (Math.random() * wiggle) - (wiggle * 0.5)
    };
    snowflakes.push(snowflake);
    // create a tween that animates the angle and y properties - call update each frame
    tween = TweenMax.to(snowflake, (Math.random() * (maxDuration - minDuration)) + minDuration, {
      repeat: -1,
      angle: Math.random() * 20,
      drift: (Math.random() * wind),
      y: window.innerHeight,
      ease: Linear.easeNone,
      onUpdate: update,
      onUpdateParams: [snowflake]
    });
    tween.progress(Math.random());
  }
}

function update(snowflake) {
  // modify the x value based on cos of the angle
  snowflake.x = (snowflake.initX + Math.cos(snowflake.angle) * snowflake.radius) + snowflake.drift;
}

// create a render loop that fires approximately every 16ms
TweenMax.ticker.addEventListener("tick", render);

function render() {
  // clear old canvas
  context.clearRect(0, 0, window.innerWidth * 2, window.innerHeight);
  for (var i = 0; i < numFlakes; i++) {
    var snowflake = snowflakes[i];
    if (snowflake) {
      // draw snowflakes to canvas
      context.drawImage(snowflakeImage, snowflake.x, snowflake.y, 16 * snowflake.scale, 16 * snowflake.scale);
    }
  }
}

function onResize(e) {
  //readjust size of canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  kill();
  init();
}

function kill() {
  // shut down all currently running tweens
  for (var i = 0; i < numFlakes; i++) {
    var snowflake = snowflakes[i];
    TweenMax.killTweensOf(snowflake);
  }
  snowflakes = [];
}
