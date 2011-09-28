(function($) {
  Sammy = Sammy || {};

  // A simple plugin that pings Mixpanel tracker
  // every time a route is triggered
  //
  // === Arguments
  //
  // +tracker+:: the Mixpanel mpq object. Defaults to
  // the default object defined by the Mixpanel snippet, or pass your own if you
  // have a custom install
  Sammy.Mixpanel = function(app, tracker) {
    var _tracker = tracker || window.mpq,
      shouldTrack = true;

    this.helpers({
      noTrack: function() {
        disableTracking();
      }
    });

    this.bind('event-context-after', function() {
      if(typeof _tracker != 'undefined' && shouldTrack) {
        console.log('tracking', document.location.href);
        _tracker.track_pageview();
      }
      enableTracking();
    });

    function disableTracking() {
      shouldTrack = false;
    }

    function enableTracking() {
      shouldTrack = true;
    }
  };
})(jQuery);