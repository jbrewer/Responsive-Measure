Responsive-Measure
==================

# Automatic Responsive Measure

A jQuery-based script for automatically creating responsive measure that 

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jbrewer/Responsive-Measure/master/dist/jquery.rm.min.js
[max]: https://raw.github.com/jbrewer/Responsive-Measure/master/dist/jquery.rm.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.rm.js"></script>
<link href="src/typographic_scale.css" rel="stylesheet">

  <script type="text/javascript">

    $('section').responsiveMeasure({
			 maximumFontSize: (defaults to 300),

      // good chance you don't want the the text going below a certain size
      minimumFontSize: 16,

      // you can pass in any ratio you like
      ratio: 4/3,

      // I found that 'n' acutally gives you the most acurate measure (it varies a lot) — or you can put an actual string of your text or whatever you want, and we have a default as well
      sampleText: "Four score and seven years ago, our forefathers were actually five"
			// this is the number of steps this will go up and down from your ideal Font Size to create a typographical scale (see Extended Features)
			scaleIncrements: (defaults to 6)
    });

  </script>

```

### Extended feature(s)

This plugin includes a feature for generating a typographic scale that you can apply automagically on resize. 

```html
$(document).on('responsiveMeasureUpdated', function(e, data) {
	// data.fontRatios returns an array of font-sizes based on the ideal font size and a ratio you pass in (default is 4/3)
  // you can assign the values to elements or classes on the fly
	$('.giga').css('fontSize', (data.fontRatios[9] / data.idealFontSize) + 'rem');
	$('h1').css('fontSize', (data.fontRatios[8] / data.idealFontSize) + 'rem');
	$('h2').css('fontSize', (data.fontRatios[7] / data.idealFontSize) + 'rem');
	$('h3').css('fontSize', (data.fontRatios[6] / data.idealFontSize) + 'rem');
	$('aside, small').css('fontSize', (data.fontRatios[4] / data.idealFontSize) + 'rem');
});

## Documentation
_(Coming soon)_

## Examples

Check out the [`examples`](http://jbrewer.github.com/Responsive-Measure/examples) directory for samples of the plugin in use.directory for examples.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Josh Brewer  
Licensed under the MIT, GPL licenses.
