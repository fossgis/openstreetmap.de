---
title: Onlinekarten
menus: themen
---

Mit den weltweiten Geodaten von OpenStreetMap kannst du eigene Karten ins Web
bringen. Ein Verein zeigt so zum Beispiel seine Treffpunkte, eine Gemeinde ihre
Spielplätze oder ein Projekt den Stand seiner Arbeit. Manche dieser Karten sind
in wenigen Minuten ohne Programmierung zusammengeklickt, andere entstehen mit
freien Javascript-Bibliotheken und laufen auf dem eigenen Server. Hier findest du einen Überblick, welche Werkzeuge es gibt und wofür
sie sich eignen.

## uMap

<figure class="float-right">
<img src="/themen/onlinekarten/umap-logo.svg" width="96" height="96" alt="Logo von uMap" loading="lazy"/>
</figure>

Mit [uMap](https://umap-project.org/) erstellst du bearbeitbare Karten direkt im
Browser, ganz ohne Programmierung. Du kannst Punkte, Linien und Flächen zeichnen,
beschriften und auf mehreren Ebenen sortieren. GeoJSON, KML, CSV oder GPX lassen
sich importieren. Statt fester Daten kann eine Ebene auch das Ergebnis einer
Abfrage an die [Overpass API](#overpass-api) anzeigen. Du kannst die
Hintergrundkarte wählen, die Karte in deine Webseite einbinden und festlegen, wer
sie nur ansehen und wer mitzeichnen darf.

Karten kannst du anonym anlegen. Wenn du dich mit deinem OpenStreetMap-Konto
anmeldest, bekommst du unter anderem eine Übersicht deiner Karten und kannst im
Team gemeinsam an einer Karte arbeiten.

Weltweit gibt es mehrere öffentliche uMap-Server. Für Deutschland betreibt der
[FOSSGIS e.V.](https://www.fossgis.de/)
[uMap unter umap.openstreetmap.de](https://umap.openstreetmap.de/), mit
datenschutzfreundlichen Grundeinstellungen und ohne Werbe- oder Tracking-Dienste
von Drittanbietern.

## QGIS und Webexport

<figure class="float-right">
<img src="/themen/onlinekarten/qgis-logo.svg" width="80" height="80" alt="Logo von QGIS" loading="lazy"/>
</figure>

[QGIS](https://qgis.org/) ist ein weit verbreitetes freies Desktop-GIS. Mit dem
Plugin [qgis2web](https://plugins.qgis.org/plugins/qgis2web/) kannst du Layer
und ihre Darstellung aus einem QGIS-Projekt als interaktive Webkarte exportieren,
die im Browser mit Leaflet oder OpenLayers läuft. Das ist besonders bequem, wenn
du deine Daten ohnehin in QGIS bearbeitest und daraus eine Karte für deine eigene
Webseite brauchst.

## Leaflet, OpenLayers und MapLibre

Wer Karten in eine Webseite einbindet und dafür selbst programmiert, greift oft
zu freien Javascript-Bibliotheken. Welche passt, hängt vom Vorhaben ab.

### Leaflet

<figure class="float-right">
<img src="/themen/onlinekarten/leaflet-logo.svg" width="120" height="32" alt="Logo von Leaflet" loading="lazy"/>
</figure>

[Leaflet](https://leafletjs.com/) ist schlank und einfach zu lernen. Es eignet
sich gut für klassische Rasterkarten mit zusätzlichen Ebenen wie Markern oder
eingezeichneten Flächen.

### OpenLayers

<figure class="float-right">
<img src="/themen/onlinekarten/openlayers-logo.svg" width="72" height="72" alt="Logo von OpenLayers" loading="lazy"/>
</figure>

[OpenLayers](https://openlayers.org/) bietet einen sehr großen Funktionsumfang.
Es lohnt sich etwa, wenn du viele Datenquellen kombinieren willst, besondere
Kartenprojektionen brauchst oder die Karte viele eigene Bedienelemente bekommen
soll.

### MapLibre

<figure class="float-right">
<img src="/themen/onlinekarten/maplibre-logo.svg" width="72" height="72" alt="Logo von MapLibre" loading="lazy"/>
</figure>

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) nutzt man vor allem
für Vektorkarten. Die Karte wird erst im Browser aus Vektordaten gezeichnet,
dadurch bleiben Linien, Flächen und Beschriftungen auf jeder Zoomstufe scharf und
der Kartenstil lässt sich frei anpassen. MapLibre entstand 2020 als freier Fork
von Mapbox GL JS, nachdem Mapbox die Lizenz seiner Bibliothek geändert hatte.

### Hintergrundkarten und Quellenangabe

Alle drei Bibliotheken lassen sich mit Hintergrundkarten auf Basis von
OpenStreetMap kombinieren. Wenn du dafür fremde Kachelserver nutzt, halte dich an
deren Nutzungsbedingungen, etwa die
[Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/) der
OpenStreetMap Foundation. Der FOSSGIS e.V. betreibt einen
[eigenen Kachelserver](/nutzen/dienste-osm-de/) mit deutschen Beschriftungen,
der unter bestimmten
[Bedingungen](https://www.fossgis.de/arbeitsgruppen/osm-server/nutzungsbedingungen/)
eingebunden werden darf.

Jede Karte und jede Anwendung, die OpenStreetMap-Daten zeigt, braucht eine
Quellenangabe. Wie die aussehen muss, steht auf
[openstreetmap.org/copyright](https://www.openstreetmap.org/copyright/de) und in
den [Attribution Guidelines](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines)
der OpenStreetMap Foundation.

## Overpass API und Nominatim

Oft sollen auf einer Karte nur bestimmte Objekte aus OpenStreetMap erscheinen,
zum Beispiel alle Trinkwasserbrunnen in einer Stadt. Daneben braucht man häufig
eine Suche nach Orten und Adressen. Dabei helfen die Overpass API und Nominatim.

### Overpass API

<figure class="float-right">
  <a href="/themen/onlinekarten/overpass-api.png" aria-label="Abbildung der Overpass-API-Startseite vergrößern">
    <img class="with-border" src="/themen/onlinekarten/overpass-api.png" width="280" height="134" alt="Startseite der Overpass API mit Links zu Abfrageformularen und Dokumentation" loading="lazy"/>
  </a>
  <figcaption>Startseite der Overpass API</figcaption>
</figure>

Die [Overpass API](https://overpass-api.de/) ist eine reine Leseschnittstelle für
OpenStreetMap-Daten, bearbeiten kannst du damit nichts. Abfragen schreibst du in
der Sprache [Overpass QL](https://wiki.openstreetmap.org/wiki/DE:Overpass_API/Overpass_QL).
Die Antworten gibt es unter anderem als XML, JSON oder GeoJSON. Einzelheiten
stehen im [OSM-Wiki zur Overpass API](https://wiki.openstreetmap.org/wiki/DE:Overpass_API).

Die öffentlichen Server, darunter [mehrere des FOSSGIS e.V.](/nutzen/dienste-osm-de/),
sind nicht für sehr große oder dauerhaft automatisierte Abfragen gedacht. Dafür
eignet sich eine
[eigene Overpass-Installation](https://wiki.openstreetmap.org/wiki/DE:Overpass_API/Installation)
oder ein kommerzielles Angebot mit derselben Technik.

### Overpass Turbo

<figure class="float-right">
  <a href="/themen/onlinekarten/overpass-turbo.png" aria-label="Abbildung von Overpass Turbo vergrößern">
    <img class="with-border" src="/themen/onlinekarten/overpass-turbo.png" width="280" height="100" alt="Overpass Turbo mit Abfrageeditor und Karte (Beispiel Berlin)" loading="lazy"/>
  </a>
  <figcaption>Overpass Turbo mit Editor und Karte, Kartendaten © OpenStreetMap-Mitwirkende</figcaption>
</figure>

[Overpass Turbo](https://overpass-turbo.eu/) verbindet einen Editor für Overpass QL
mit einer Karte und einer Datenansicht. Eingebaute Beispiele und ein Assistent
("Wizard") helfen dir beim Formulieren der Abfrage. Ergebnisse kannst du unter
anderem als GeoJSON, GPX oder KML exportieren und die Abfrage per Link
weitergeben.

### Nominatim

<figure class="float-right">
  <a href="/themen/onlinekarten/nominatim.png" aria-label="Abbildung der Nominatim-Suche vergrößern">
    <img class="with-border" src="/themen/onlinekarten/nominatim.png" width="280" height="227" alt="Nominatim Web-Oberfläche mit Suchfeld und Weltkarte" loading="lazy"/>
  </a>
  <figcaption>Nominatim Suchoberfläche</figcaption>
</figure>

[Nominatim](https://nominatim.org/) ist die Suchmaschine von OpenStreetMap. Sie
findet zu Adressen und Ortsnamen die Koordinaten und umgekehrt. Die Webseite dient
vor allem zum Ausprobieren, für eigene Programme gibt es eine
[Programmierschnittstelle](https://nominatim.org/release-docs/latest/api/Overview/).
Für den öffentlichen Server gelten
[Nutzungsregeln](https://operations.osmfoundation.org/policies/nominatim/). Wer
viele Anfragen stellt oder Nominatim dauerhaft in einer Anwendung nutzt, braucht
eine [eigene Installation](https://nominatim.org/release-docs/latest/admin/Installation/)
oder einen anderen Anbieter. Mehr Hintergrund findest du im
[OSM-Wiki zu Nominatim](https://wiki.openstreetmap.org/wiki/DE:Nominatim).

## Eigene Karten ausliefern

Onlinekarten bestehen meist aus vielen kleinen quadratischen Ausschnitten, den
Kacheln. Der Browser lädt nur die Kacheln, die gerade zu sehen sind. Es gibt
Rasterkacheln, also fertige Bilder, und Vektorkacheln, die nur die Daten enthalten
und erst im Browser zur Karte gezeichnet werden, zum Beispiel mit MapLibre.

Wer nicht von fremden Servern abhängig sein will, kann die Kacheln selbst
bereitstellen. Dafür gibt es zwei Wege.

### Fertige Vektorkacheln nutzen

Am einfachsten ist es, fertige Vektorkacheln herunterzuladen. [VersaTiles](https://versatiles.org/)
stellt fertig aufbereitete OSM-Vektordaten für die ganze Welt bereit,
[Protomaps](https://protomaps.com/) bietet Daten und passende Werkzeuge an. Oft
liegen die Kacheln dabei in einer einzigen [PMTiles](https://github.com/protomaps/PMTiles)-Datei,
die ein normaler Webserver ausliefern kann, ganz ohne eigenen Kachelserver.

Eigene Daten, zum Beispiel aus einer Geodatenbank wie PostgreSQL mit der
Erweiterung PostGIS, kannst du dann als zusätzliche Ebene über diese
Hintergrundkarte legen.

### Kacheln selbst erzeugen

Wer mehr Kontrolle über Inhalt und Aktualität braucht, erzeugt die Kacheln selbst
aus einem Auszug der OSM-Daten. Dafür gibt es unter anderem
[Planetiler](https://github.com/onthegomap/planetiler) und
[tilemaker](https://github.com/systemed/tilemaker). Zum Ausliefern dienen zum
Beispiel [TileServer GL](https://github.com/maptiler/tileserver-gl) oder, für
Daten direkt aus PostGIS, [Martin](https://github.com/maplibre/martin),
[pg_tileserv](https://github.com/CrunchyData/pg_tileserv) und
[BBOX](https://www.bbox.earth/).

## Weiterführende Informationen

[uMap Deutschland (FOSSGIS e.V.)](https://umap.openstreetmap.de/)
{.link-extern}

[Dienste von OSM Deutschland](/nutzen/dienste-osm-de/)
{.link-intern}

[Quellenangabe für OpenStreetMap](https://www.openstreetmap.org/copyright/de)
{.link-extern}

[Overpass API im OSM-Wiki](https://wiki.openstreetmap.org/wiki/DE:Overpass_API)
{.link-extern}

[Overpass Turbo](https://overpass-turbo.eu/)
{.link-extern}

[Nominatim im OSM-Wiki](https://wiki.openstreetmap.org/wiki/DE:Nominatim)
{.link-extern}

[VersaTiles-Downloads](https://download.versatiles.org/)
{.link-extern}
