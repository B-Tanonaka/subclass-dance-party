const pitouHead = '<img class="head" src="lib/Neferpitou_Head_Chibi.png"></img>';
const pitouBody = '<img class="body" src="lib/Neferpitou.png"></img>';
const kiteHead = '<img class="head" src="lib/Kite_Chibi_head.png"></img>';
const kiteBody = '<img class="body" src="lib/Kite_body.png"></img>';


var AnimeDancer = function (character, top, left, timeBetweenSteps) {
  //this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$head;
  this.$body;
  this.bigHead = false;
  this.character = character;
  this.tiltDirection = true;
  this.setCharacter();
};

AnimeDancer.prototype = Object.create(Dancer.prototype);
AnimeDancer.prototype.constructor = AnimeDancer;

AnimeDancer.prototype.setCharacter = function () {
  if (this.character === 'kite') {
    this.$head = $(kiteHead);
    this.$body = $(kiteBody);
  } else {
    this.$head = $(pitouHead);
    this.$body = $(pitouBody);
  }
  let charImg = $(`<div id="${this.character}"></div>`).append(this.$head).append(this.$body);
  this.$node.append(charImg);
};


AnimeDancer.prototype.step = function () {
  if (this.$node.children() !== undefined) {
    Dancer.prototype.step.call(this);
    var rotH, rotB, rotS;
    if (this.character === 'kite') {
      rotH = this.tiltDirection ? 45 : -5;
      rotB = 5 * this.tiltDirection;
      rotS = 1000;
    } else {
      rotH = this.tiltDirection ? 27 : -27;
      rotB = 5 * this.tiltDirection;
      rotS = 1700;
    }
    // console.log(this.$node);
    // // console.log($($(this.$node.children()[0]).children()[0]));
    // debugger;
    //console.log(this.$node);

    //Head
    $($(this.$node.children()[0]).children()[0]).animate(
      { deg: rotH },
      {
        duration: rotS,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
    //Body
    $($(this.$node.children()[0]).children()[1]).animate(
      { deg: rotB },
      {
        duration: 1200,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
    this.tiltDirection = !(this.tiltDirection);
  }
};


var makeAnimeDancer = function (character, top, left, timeBetweenSteps) {
  return new AnimeDancer(character, top, left, timeBetweenSteps);
};



// var KiteDancer = function (top, left, timeBetweenSteps) {
//   BlinkyDancer.call(this, top, left, timeBetweenSteps);
// };

// KiteDancer.prototype = Object.create(BlinkyDancer.prototype);
// KiteDancer.prototype.constructor = KiteDancer;

// KiteDancer.prototype.headMove = function () {
//   BlinkyDancer.prototype.step.call(this);
//   this.$node.tilt();
// };