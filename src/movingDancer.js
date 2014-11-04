var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps/20);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " moving";
  this.direction = 'right';
  // this.collide();
  // this.$node
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  if (this.left >= $("body").width()*0.8) {
    this.direction = 'left';
    // this.left -= Math.random()* 30;
  }
  else if (this.left <= 100){
    this.direction = 'right';
  }
  else if (this.top >= $("body").height()*0.9) {
   this.direction = 'leftAndUp';
  }
  else if (this.top <= 300) {
   this.direction = 'downAndRight';
  };

  if (this.direction == 'right') {
    this.top -= Math.random()* 1;
    this.left += Math.random()* 3;
  }
  else if (this.direction == 'left'){
    this.top += Math.random()* 2;
    this.left -= Math.random()* 3;
  }
  else if (this.direction == 'leftAndUp'){
    this.top -= Math.random()* 2;
    this.left -= Math.random()* 3;
  }
  else if (this.direction == 'downAndRight'){
    this.top += Math.random()* 2;
    this.left += Math.random()* 3;
  }

  this.setPosition(this.top, this.left);
  window.collide();

};



// var sallyJumpyDancer = new JumpyDancer(100, 200, 100)
