# Sammy.js Mixpanel Plugin


## Description

A small plugin that enables Mixpanel tracking for your Sammy powered App. Following the footsteps of the great [Sammy Google Analytics Plugin](https://github.com/britg/sammy-google-analytics).

## Installation

Download sammy.mixpanel.js and install it in your public javascripts directory.
Include it in your document AFTER Sammy.

## Usage

Install Mixpanel to your site as you normally would. Modify the Mixpanel script:

```javascript
... d=["init","track","track_links","track_forms","track_pageview","register","register_once","identify","name_tag","set_config"]; ...
                                                  ^ add this!
```

Then, simply add the plugin to your Sammy App and it will automatically track all of your routes in Mixpanel. They will appear as page views to the route's path.

    $.sammy(function() { with(this) {
      use(Sammy.Mixpanel)
      
      ...
    }});

If you have routes that you do not want to track, simply call "noTrack" within the route.

    $.sammy(function() { with(this) {
      use(Sammy.Mixpanel)
      
      get('#/dont/track/me', function() {
        this.noTrack();  // This route will not be tracked
      });
    }});

## Example

[http://hleinone.github.com/sammy-mixpanel](http://hleinone.github.com/sammy-mixpanel)


## Dependencies

[Sammy](http://sammyjs.org/)

Sammy requires [jQuery](http://jquery.com) >= 1.3.2

## More!

### Learn!

* [Intro](http://sammyjs.org/intro)
* [Docs](http://sammyjs.org/docs)
* [Examples](http://github.com/quirkey/sammy/tree/master/examples/)
* [More Resources](https://github.com/quirkey/sammy/wiki/)

### Keep informed!

* [Follow @sammy_js](http://twitter.com/sammy_js)
* [Join the mailing list](http://groups.google.com/group/sammyjs)
* [Chat with us in #sammy](irc://irc.freenode.net/#sammy)

## License

Sammy is covered by the MIT License. See LICENSE for more information.

Sammy includes code originally created by John Resig ([Class implementation](http://ejohn.org/blog/simple-javascript-inheritance/)) and Greg Borenstien ([srender](http://github.com/atduskgreg/srender/tree/master)).
