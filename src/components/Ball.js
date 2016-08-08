import React, {Component} from 'react';

export default class Ball extends Component {
  constructor(){
    super()
    this.state={play: false, speed: 1}
  }
  DrawBall() {
    let self = this
    // speed = self.state.speed;

    let requestAnimFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(callback) {
              window.setTimeout(callback, 1000 / 60);
          };
  })();

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var ballRadius = 10;
  var x = canvas.width / 2;
  var y = canvas.height - 30;
  // var dx = self.state.speed;
  // var dy = -self.state.speed;

  function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#0095DD';
      ctx.fill();
      ctx.closePath();
  }

  var dx = self.state.speed;
  var dy = -self.state.speed;

  function speedUpdate() {
     dx = self.state.speed;
     dy = -self.state.speed;
  }
  function draw() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
          dy = -dy;
      }

      x += dx;
      y += dy;
  }

  function animate(lastTime, myCircle, runAnimation, canvas, context) {
      if (self.state.play) {
          // update
          var time = (new Date()).getTime();
          draw();

          // request new frame
          requestAnimFrame(function() {
              animate(time, myCircle, runAnimation, canvas, context);
          });
      }
  }
  var context = canvas.getContext('2d');

  var myCircle = {
      x: 100,
      y: 75,
      ballRadius: 20
  };

  /*
   * define the runAnimation boolean as an obect
   * so that it can be modified by reference
   */
  var runAnimation = {
      value: self.state.play
  };

  // add click listener to canvas
  document.getElementById('myCanvas').addEventListener('click', function() {
      // flip flag
      self.setState({play: !self.state.play})
      if (self.state.play) {
          var date = new Date();
          var time = date.getTime();
          animate(time, myCircle, runAnimation, canvas, context);
      }
  });
  var elem = document.getElementById('myCanvas');
  if (elem.addEventListener) {
      if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener('wheel', onWheel);
      } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener('mousewheel', onWheel);
      } else {
          // Firefox < 17
          elem.addEventListener('MozMousePixelScroll', onWheel);
      }
  } else { // IE8-
      elem.attachEvent('onmousewheel', onWheel);
  }


  // Это решение предусматривает поддержку IE8-
  function onWheel(e) {
      e = e || window.event;

      // deltaY, detail содержат пиксели
      // wheelDelta не дает возможность узнать количество пикселей
      // onwheel || MozMousePixelScroll || onmousewheel
      var delta = e.deltaY || e.detail || e.wheelDelta;

      // var info = document.getElementById('delta');

      var modSpeed = +self.state.speed - delta / 100;
      self.setState({speed: modSpeed})
      speedUpdate()
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
}

  componentDidMount(){
    this.DrawBall();
  }

  render() {
    return (
      <div>
        <div>click to Play/Stop</div>
        <canvas id='myCanvas' width='500' height='320'>
          Doesnt support canvas
        </canvas>
        <span>play: {this.state.play.toString()}</span>{"  "}
        <span>speed: {this.state.speed}</span>
      </div>
    );
  }
}
