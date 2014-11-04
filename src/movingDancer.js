var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps*3);
  this.top = top;
  this.left = left;
  // this.setPosition(top, left);
  this.$node[0].className += " moving";
  this.direction = 'left';
  // this.$node
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (this.left >= $("body").width()*0.8) {
    this.direction = 'right';
    // this.left -= Math.random()* 30;
  }
  else if (this.left <= 100){
    this.direction = 'left';
  }
  if (this.direction == 'left') {
    this.top -= Math.random()* 10;
    this.left += Math.random()* 30;
  }
  else if (this.direction == 'right'){
    this.top += Math.random()* 10;
    this.left -= Math.random()* 30;
  }


  this.setPosition(this.top, this.left);

  // if (this.top < 300) {
  //   this.$node.fadeOut(1500);
  //   // this.setPosition(1000, this.left);
  //   // this.$node.fadeIn(200);
  //   // console.log("hello")
  // };
};

// var sallyJumpyDancer = new JumpyDancer(100, 200, 100)
