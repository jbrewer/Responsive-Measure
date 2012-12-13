/*
 * Responsive Measure
 * http://github.com/jbrewer/Responsive-Measure
 *
 * August 2012
 *
 * @version 0.1
 * @author Josh Brewer http://jbrewer.me
 * @author Mark Christian http://markchristian.org/
 * @license MIT
 *
 * Responsive Measure is a simple script that allows you to pass in a selector (ideally the
 * container where your primary content will go) and based on that, finds the ideal font
 * size to give you the best measure and then affect your overall design.
 * Ideally, it is a resolution independent font-scale based on the ideal font size needed
 * to render your ideal measure.
 *
 */
(function($) {
  'use strict';

  function calculateIdealLineLength() {
    //  Set to Bringhurst's recommendation for an ideal measure
    return 66;
  }

  function fontSizeForIdealLineLength($element, sampleText, maximumFontSize) {
    //  Add a new element to the DOM with the same width as the element we're trying to size
    var $container = $('<div/>').appendTo(document.documentElement);
    $container.css({
      position: 'absolute',
      left: '-9999em',
      width: $element.width() + 'px',
      visibility: 'hidden'
    });

    //  Put an element in that container with the sample text in it
    var $ruler = $('<span/>').appendTo($container);

    //  Starting with font-size 0, measure the text and bump the size until it wraps onto two lines
    var fontSize = 0, heightWithOneLetter, heightWithSampleText;
    while (fontSize < maximumFontSize) {
      fontSize++;
      $ruler.css('font-size', fontSize + 'px');

      $ruler.text('M');
      heightWithOneLetter = $ruler.height();
      $ruler.text(sampleText);
      heightWithSampleText = $ruler.height();

      if (heightWithSampleText > heightWithOneLetter) {
        break;
      }
    }

    //  Clean up
    $container.remove();

    return fontSize - 1;
  }

  function getSampleText(baseText, idealLineLength) {
    //  Make sure our sample text is the right length
    var sampleText = baseText;
    while(sampleText.length < idealLineLength) {
      sampleText += " " + baseText;
    }

    return sampleText.substring(0, idealLineLength).trim();
  }

  function fontRatiosForFontSize(baseSize, ratio, scaleIncrements, minimumFontSize) {
    var scale = [], multiplier, fontSize;
    for(var i = -scaleIncrements; i < scaleIncrements; i++) {
      if(i < 0) {
        multiplier = Math.pow(1/ratio, -i);
      } else if(i == 0) {
        multiplier = 1;
      } else {
        multiplier = Math.pow(ratio, i);
      }

      scale.push(baseSize * multiplier);
    }
    return scale;
  }

  function responsiveMeasure(opts) {
    var defaultOptions = {
      idealLineLength: calculateIdealLineLength,
      maximumFontSize: 300,
      ratio: 4/3,
      scaleIncrements: 5,
      sampleText: "Four score and seven years ago, our forefathers were actually five *"
    }

    opts = $.extend(defaultOptions, opts || {})

    if(this.length == 0) {
      //  We don't match any elements
      return;
    } else if(this.length != 1) {
      //  Too many elements
      throw new Error("responsiveMeasure must be applied with a selector that matches only one element.");
      return;
    }

    var $element = this;
    var idealLineLength = typeof(opts.idealLineLength) == 'function' ? opts.idealLineLength.call(this, $element) : parseInt(opts.idealLineLength, 10);
    if (idealLineLength == 0) {
      throw new Error("responsiveMeasure was given an ideal line length of 0; this doesn't make any sense. Doing nothing.");
      return;
    }

    var sampleText = getSampleText(opts.sampleText, idealLineLength);

    var idealFontSize = fontSizeForIdealLineLength($element, sampleText, opts.maximumFontSize);

    if(typeof opts.minimumFontSize != 'undefined') {
      idealFontSize = Math.max(idealFontSize, opts.minimumFontSize)
    }

    var fontRatios = fontRatiosForFontSize(idealFontSize, opts.ratio, opts.scaleIncrements, opts.minimumFontSize);

    var $docElement = $(document.documentElement);
    $docElement.css('font-size', idealFontSize + 'px');
    $docElement.trigger('responsiveMeasureUpdated', {
      idealFontSize: idealFontSize,
      fontRatios: fontRatios
    });
  };

  $.fn.responsiveMeasure = function(opts) {
    //  Calculate now
    responsiveMeasure.call(this, opts);

    //  Update when page is resized
    var lastUpdateTime = new Date;
    var minimumUpdateDelay = 100;
    var nextUpdateTimer = null;
    $(window).on('resize', function() {
      if (new Date - lastUpdateTime < minimumUpdateDelay) {
        //  It's been less than minimumUpdateDelay milleseconds since the last time we updated;
        //  wait a while so we don't overwhelm the browser.
        if (!nextUpdateTimer) {
          nextUpdateTimer = setTimeout(function() {
            nextUpdateTimer = null;
            responsiveMeasure.call(this, opts);
          }.bind(this), minimumUpdateDelay);
        }
      } else {
        //  It's been more than minimumUpdatedelay milleseconds; update now
        responsiveMeasure.call(this, opts);
      }
      lastUpdateTime = new Date;
    }.bind(this));
  }


})(jQuery);