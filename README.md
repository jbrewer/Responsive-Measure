Responsive-Measure
==================

A jQuery plugin for generating a responsive ideal measure.

## Getting Started
Download the [`javascript`](https://raw.github.com/jbrewer/Responsive-Measure/master/jquery.rm.js)

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.rm.js"></script>
<script type="text/javascript">

$('section').responsiveMeasure({
	// Variables you can pass in:
	idealLineLength: (defaults to 66),
	minimumFontSize: (defaults to 16),
	maximumFontSize: (defaults to 300),
	ratio: (defaults to 4/3)
});

  </script>
```

### Extended feature(s)

This plugin includes a feature for generating a typographic scale that you can apply automagically on resize.

```html
$(document).on('responsiveMeasureUpdated', function(e, data) {
	$('.giga').css('fontSize', data.fontRatios[9] + 'px');
	$('h1').css('fontSize', data.fontRatios[8] + 'px');
	$('h2').css('fontSize', data.fontRatios[7] + 'px');
	$('h3').css('fontSize', data.fontRatios[6] + 'px');
	$('p').css('fontSize', data.fontRatios[5] + 'px');
	$('.sm').css('fontSize', data.fontRatios[4] + 'px');
});
```

## Documentation
_(Coming soon)_

## Examples

Check out the [`examples`](http://responsivemeasure.com/examples/) of the plugin in use.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Josh Brewer
Licensed under the MIT, GPL licenses.
