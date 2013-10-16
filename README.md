#rotateQuotes

jQuery plugin to rotate quotes or testimonials on a website (but feel free to use it for anything else!)

###How to use the plugin

**Note:** As this is a jQuery plugin, you will need to include jQuery prior to using this plugin.
See [index.html](https://github.com/JayHuang/rotateQuotes/blob/master/index.html) for sample implementation.

Call rotateQuotes() on the items you wish to rotate:

    $('.rotate-quote').rotateQuotes();
    
The plugin has 4 optional settings -- `speed`, `delay`, `hoverpause`, and `random`

`speed` dictates the amount of time the transition takes

`delay` dictates the amount of delay until the quote is replaced

`hoverpause` makes the elements stop rotating when a mouse is hovered over the element

`random` causes the quotes to rotate random order, not repeating until all quotes have been shown

All settings are in ms (milliseconds).


The default settings are:
```
speed: 		700, 
delay: 		5000,
hoverpause: false,
random: 	false
```

You can call rotateQuotes and pass in any or all of these settings to change the behaviour of the plugin.

    $('.rotate-quote').rotateQuotes({speed: 300, delay: 1000, hoverpause: true, random: true});
    
**Warning:** Setting `speed` too low (below 100) may cause unexpected behavior in certain browsers. `speed` also has to be lower than `delay` for quotes to appear in time.
    
###Live demo

You can see the plugin live on my website's [about page](http://www.jayhuang.org/about).

#Copyright and license

Copyright 2013 Jay Huang under the MIT license.
