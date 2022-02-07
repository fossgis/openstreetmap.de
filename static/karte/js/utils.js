/*
 *  OpenStreetMap.de - Webseite
 *
 *	This program is free software; you can redistribute it and/or modify
 *	it under the terms of the GNU AFFERO General Public License as published by
 *	the Free Software Foundation; either version 3 of the License, or
 *	any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU Affero General Public License
 *	along with this program; if not, write to the Free Software
 *	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *	or see http://www.gnu.org/licenses/agpl.txt.
 */
 
/**
 * Title: utils.js
 * Description: Some utility functions
 *
 * @version 0.1 2011-10-29
 */
 
	var projmerc = new OpenLayers.Projection("EPSG:900913");
	var proj4326 = new OpenLayers.Projection("EPSG:4326");
	
	function parseParams(handler) {
	    var perma = location.search.substr(1);
	    if (perma != '') {
	        paras = perma.split('&');
	        for (var i = 0; i < paras.length; i++) {
	            var p = paras[i].split('=');
	            handler(p[0], p[1]);
	        }
	    }
	}
	
	function jumpTo(lon, lat, zoom) {
	    var lonlat = new OpenLayers.LonLat(lon, lat);
	    lonlat.transform(proj4326, projmerc);
	    map.setCenter(lonlat, zoom);
	    return false;
	}
	
	function makeIcon(url, x, y) {
	    var size = new OpenLayers.Size(x, y);
	    var offset = new OpenLayers.Pixel(-(size.w/2), -(size.h/2));
	    return new OpenLayers.Icon(url, size, offset);
	}
	
	var icon = makeIcon('img/localgroup.png', 16, 16);
	
	function addMarker(layer, lon, lat, popupContentHTML) {
	    var lonlat = new OpenLayers.LonLat(lon, lat);
	    lonlat.transform(proj4326, projmerc);
	    var feature = new OpenLayers.Feature(layer, lonlat); 
	    feature.closeBox = true;
	    feature.popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {minSize: new OpenLayers.Size(300, 180) } );
	    feature.data.popupContentHTML = popupContentHTML;
	    feature.data.overflow = "hidden";
	            
	    var marker = new OpenLayers.Marker(lonlat, icon.clone());
	    marker.feature = feature;
	
	    var markerClick = function(evt) {
	        if (this.popup == null) {
	            this.popup = this.createPopup(this.closeBox);
	            map.addPopup(this.popup);
	            this.popup.show();
	        } else {
	            this.popup.toggle();
	        }
	        OpenLayers.Event.stop(evt);
	    };
	    marker.events.register("mousedown", feature, markerClick);
	
	    layer.addMarker(marker);
	}
	
	function setMarker() {
	    if (marker != null) {
	        layer_marker.removeMarker(marker);
	        marker.destroy();
	    }
	    var size = new OpenLayers.Size(21, 25);
	    var offset = new OpenLayers.Pixel(-size.w/2-1, -size.h-1);
	    var icon = new OpenLayers.Icon('/img/marker.png', size, offset);
	    var lonlat = new OpenLayers.LonLat(mlon, mlat);
	    marker = new OpenLayers.Marker(lonlat.transform(proj4326, projmerc), icon);
	    layer_marker.addMarker(marker);
	}

	function mapMoved() {
	    var lonlat = map.getCenter().clone();
	    
	    // Hack - FIXME ! (see geocode.js), otherwise center would not be at marker
		lonlat.lon += 450;
	    
	    lonlat.transform(projmerc, proj4326);
	    // Build URLs for routing services, editing and bug reporting
	    var pos = '?lon=' + lonlat.lon.toFixed(5) + '&lat=' + lonlat.lat.toFixed(5) + '&zoom=' + map.getZoom();
	    var posORS = '?n2=' + lonlat.lon.toFixed(5) + '&n1=' + lonlat.lat.toFixed(5) + '&n3=' + map.getZoom();
	    var posOSRM = '?hl=de&dest=' + lonlat.lat.toFixed(5) + ',' + lonlat.lon.toFixed(5) + '&z=' + map.getZoom() + '&center=' + lonlat.lat.toFixed(5) + ',' + lonlat.lon.toFixed(5);
	    var posNote = '#map=' + map.getZoom() + '/' + lonlat.lat.toFixed(5) + '/' + lonlat.lon.toFixed(5);
    	
    	document.getElementById('Route').innerHTML = '<button class="btn dropdown-toggle" data-toggle="dropdown">Route<span class="caret"></span></button><ul class="dropdown-menu"><li><a href="https://graphhopper.com/maps/" target="_blank">GraphHopper <span class="descRoute">diverse | weltweit</span></a></li><li><a href="https://openrouteservice.org/directions'+posORS+'" target="_blank">Openrouteservice <span class="descRouteORS">diverse</span></a></li><li><a href="https://routing.openstreetmap.de/'+posOSRM+'" target="_blank">OSRM <span class="descRoute">Auto, Fahrrad, Fußgänger | weltweit</span></a></li></ul>';
	    document.getElementById('editMap').innerHTML = '<a class="btn success" href="https://www.openstreetmap.org/edit'+pos+'" target="_blank">Karte bearbeiten</a>';
		// updated "Fehler melen" to use the notes feature instead of OpenStreetBugs: 
	    document.getElementById('errorMap').innerHTML = '<a class="btn danger" href="https://www.openstreetmap.org/note/new'+posNote+'" target="_blank">Fehler melden</a>';
	    																			 
	}
	
