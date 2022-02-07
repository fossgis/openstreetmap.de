/**
 * Class: OpenLayers.Layer.OSM.Mapnik
 *
 * Inherits from:
 *  - <OpenLayers.Layer.OSM>
 */
OpenLayers.Layer.OSM.Mapnik = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.Mapnik
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "https://a.tile.openstreetmap.org/${z}/${x}/${y}.png",
            "https://b.tile.openstreetmap.org/${z}/${x}/${y}.png",
            "https://c.tile.openstreetmap.org/${z}/${x}/${y}.png"
        ];
        options = OpenLayers.Util.extend({
            numZoomLevels: 19,
            buffer: 0,
            transitionEffect: "resize"
        }, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.Mapnik"
});

/**
 * Class: OpenLayers.Layer.OSM.CycleMap
 *
 * Inherits from:
 *  - <OpenLayers.Layer.OSM>
 */
OpenLayers.Layer.OSM.CycleMap = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.CycleMap
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "https://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
            "https://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
            "https://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"
        ];
        options = OpenLayers.Util.extend({
            numZoomLevels: 19,
            buffer: 0,
            transitionEffect: "resize"
        }, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.CycleMap"
});

/**
 * Class: OpenLayers.Layer.OSM.TransportMap
 *
 * Inherits from:
 *  - <OpenLayers.Layer.OSM>
 */
OpenLayers.Layer.OSM.TransportMap = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.TransportMap
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "https://a.tile2.opencyclemap.org/transport/${z}/${x}/${y}.png",
            "https://b.tile2.opencyclemap.org/transport/${z}/${x}/${y}.png",
            "https://c.tile2.opencyclemap.org/transport/${z}/${x}/${y}.png"
        ];
        options = OpenLayers.Util.extend({
            numZoomLevels: 19,
            buffer: 0,
            transitionEffect: "resize"
        }, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.TransportMap"
});

/**
 * Class: OpenLayers.Layer.OSM.MapQuest
 *
 * Inherits from:
 *  - <OpenLayers.Layer.OSM>
 */
OpenLayers.Layer.OSM.MapQuest = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.MapQuest
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "https://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
            "https://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
            "https://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png"
        ];
        options = OpenLayers.Util.extend({ numZoomLevels: 19, buffer: 0 }, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.MapQuest"
});


/**
 * Class: OpenLayers.Layer.OSM.Stamen.Watercolor
 *
 * Inherits from:
 *  - <OpenLayers.Layer.OSM>
 */
OpenLayers.Layer.OSM.StamenWatercolor = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.Stamen.watercolor
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
     initialize: function(name, options) {
        var url = [
            "https://a.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg",
            "https://b.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg",
            "https://c.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg"
        ];
        options = OpenLayers.Util.extend({ displayOutsideMaxExtent: true, numZoomLevels: 19, buffer: 0, "transitionEffect": "resize",  tileOptions : {crossOriginKeyword: null}}, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.StamenWatercolor"
});

OpenLayers.Layer.OSM.StamenToner = OpenLayers.Class(OpenLayers.Layer.OSM, {
    /**
     * Constructor: OpenLayers.Layer.OSM.Stamen.toner
     *
     * Parameters:
     * name - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "https://a.tile.stamen.com/toner/${z}/${x}/${y}.png",
            "https://b.tile.stamen.com/toner/${z}/${x}/${y}.png",
            "https://c.tile.stamen.com/toner/${z}/${x}/${y}.png"
        ];
        options = OpenLayers.Util.extend({ "numZoomLevels": 20, "buffer": 0, "transitionEffect": "resize", minZoomLevel: 0, maxZoomLevel: 20 , tileOptions : {crossOriginKeyword: null}}, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.OSM.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.OSM.StamenToner"
});
