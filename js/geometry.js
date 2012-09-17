$(document).ready(function(){
  $('<div id="grid"/>').appendTo('body').css({
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'z-index': -1
  });
  $('<link rel="stylesheet" href="geometry.css" />').appendTo('head');

  // var radians = (Math.PI/180) * degrees;

  var w = (window.innerWidth);
  var h = (window.innerHeight);

  var hyp = Math.sqrt((Math.pow(w, 2) + Math.pow(h, 2)));
  var hyp_rotation = Math.atan2(h,w) * 57.29577951308232;
  var rtadeg = Math.atan2(h, w/2) * 57.29577951308232;
  var rta = Math.sqrt((Math.pow(w, 2) + Math.pow(w, 2))) ;

  $("<div/>", { "id": "square" }).appendTo("#grid").css({'height': window.innerHeight,'width': window.innerHeight, 'left': ((window.innerWidth - window.innerHeight) / 2)});

  function centered() {
    $("<div/>", { "class": "line", "id": "v_center" }).appendTo("#grid").css('left', '50%');
    $("<div/>", { "class": "line hrz", "id": "h_center" }).appendTo("#grid").css('top', '50%');
    $("<div/>", { "id": "circle" }).appendTo("#grid").css({'height': window.innerWidth,'width': window.innerWidth, 'top': '0'}); // create circle based on the width of the viewport, swap .innerWidth for .innerHeight to base on height of viewport
  }

  function circles() {
    var left = ((window.innerWidth - window.innerHeight) / 2);
    $("<div/>", { "id": "circle" }).appendTo("#grid").css({'height': window.innerHeight,'width': window.innerHeight, 'left': left});
    //$("<div/>", { "id": "circle2" }).appendTo("#grid").css({'height': window.innerHeight,'width': window.innerHeight, 'left': '0'});
    //$("<div/>", { "id": "circle3" }).appendTo("#grid").css({'height': window.innerHeight,'width': window.innerHeight, 'right': '0'});
  }

  function phi_center (argument) {
    // body...
  }

  function angles() {
    $("<div/>", { "id": "tl_hyp", "class": "diag" }).appendTo("#grid").css({'width': hyp, '-webkit-transform': 'rotate(' + hyp_rotation + 'deg)'});
    $("<div/>", { "id": "bl_hyp", "class": "diag" }).appendTo("#grid").css({'width': hyp, '-webkit-transform': 'rotate(-' + hyp_rotation + 'deg)'});
    $("<div/>", { "id": "tl_center", "class": "diag" }).appendTo("#grid").css({'width': rta, '-webkit-transform': 'rotate('+ rtadeg + 'deg)'});
    $("<div/>", { "id": "bl_center", "class": "diag" }).appendTo("#grid").css({'width': rta, '-webkit-transform': 'rotate(-'+ rtadeg + 'deg)'});
    $("<div/>", { "id": "tr_center", "class": "diag" }).appendTo("#grid").css({'width': rta, '-webkit-transform': 'rotate(-'+ (rtadeg + 180) + 'deg)', 'left': w, 'top': '0'});
    $("<div/>", { "id": "br_center", "class": "diag" }).appendTo("#grid").css({'width': rta, '-webkit-transform': 'rotate('+ (rtadeg + 180) +'deg)', 'left': w, 'bottom': '0'});
  }


  function armature() { // Armature of the rectangle
    $("<div/>", { "class": "line", "id": "v_16" }).appendTo("#grid").css('left', '16.6666667%');
    $("<div/>", { "class": "line", "id": "v_15" }).appendTo("#grid").css('left', '20%');
    $("<div/>", { "class": "line", "id": "v_14" }).appendTo("#grid").css('left', '25%');
    $("<div/>", { "class": "line", "id": "v_13" }).appendTo("#grid").css('left', '33.3333333%');
    $("<div/>", { "class": "line", "id": "v_25" }).appendTo("#grid").css('left', '40%');
    $("<div/>", { "class": "line", "id": "v_12" }).appendTo("#grid").css('left', '50%');
    $("<div/>", { "class": "line", "id": "v_35" }).appendTo("#grid").css('left', '60%');
    $("<div/>", { "class": "line", "id": "v_23" }).appendTo("#grid").css('left', '66.6666667%');
    $("<div/>", { "class": "line", "id": "v_34" }).appendTo("#grid").css('left', '75%');
    $("<div/>", { "class": "line", "id": "v_45" }).appendTo("#grid").css('left', '80%');
    $("<div/>", { "class": "line", "id": "v_56" }).appendTo("#grid").css('left', '83.3333333%');

    $("<div/>", { "class": "line hrz", "id": "h_16" }).appendTo("#grid").css('top', '16.6666667%');
    $("<div/>", { "class": "line hrz", "id": "h_15" }).appendTo("#grid").css('top', '20%');
    $("<div/>", { "class": "line hrz", "id": "h_14" }).appendTo("#grid").css('top', '25%');
    $("<div/>", { "class": "line hrz", "id": "h_13" }).appendTo("#grid").css('top', '33.3333333%');
    $("<div/>", { "class": "line hrz", "id": "h_25" }).appendTo("#grid").css('top', '40%');
    $("<div/>", { "class": "line hrz", "id": "h_12" }).appendTo("#grid").css('top', '50%');
    $("<div/>", { "class": "line hrz", "id": "h_35" }).appendTo("#grid").css('top', '60%');
    $("<div/>", { "class": "line hrz", "id": "h_23" }).appendTo("#grid").css('top', '66.6666667%');
    $("<div/>", { "class": "line hrz", "id": "h_34" }).appendTo("#grid").css('top', '75%');
    $("<div/>", { "class": "line hrz", "id": "h_45" }).appendTo("#grid").css('top', '80%');
    $("<div/>", { "class": "line hrz", "id": "h_56" }).appendTo("#grid").css('top', '83.3333333%');
  }
  function nines() { // Armature of the rectangle
    $("<div/>", { "class": "line", "id": "v_1" }).appendTo("#grid").css('left', (1/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_2" }).appendTo("#grid").css('left', (2/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_3" }).appendTo("#grid").css('left', (3/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_4" }).appendTo("#grid").css('left', (4/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_5" }).appendTo("#grid").css('left', (5/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_6" }).appendTo("#grid").css('left', (6/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_7" }).appendTo("#grid").css('left', (7/9) * 100 + '%');
    $("<div/>", { "class": "line", "id": "v_8" }).appendTo("#grid").css('left', (8/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_1" }).appendTo("#grid").css('top', (1/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_2" }).appendTo("#grid").css('top', (2/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_3" }).appendTo("#grid").css('top', (3/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_4" }).appendTo("#grid").css('top', (4/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_5" }).appendTo("#grid").css('top', (5/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_6" }).appendTo("#grid").css('top', (6/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_7" }).appendTo("#grid").css('top', (7/9) * 100 + '%');
    $("<div/>", { "class": "line hrz", "id": "h_8" }).appendTo("#grid").css('top', (8/9) * 100 + '%');
  }

  //centered();
  //angles();
  //nines();
  //circles();
  armature();

  //window.addEventListener('resize', nines, false);

});