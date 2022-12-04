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