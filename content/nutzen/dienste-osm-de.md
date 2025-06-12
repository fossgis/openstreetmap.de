---
title: Dienste von OSM Deutschland
---

{{< spendenbutton >}}
Der Betrieb dieser Dienste kostet uns viel Geld und viel Arbeit. Wir freuen
uns über eine Spende!
{{< /spendenbutton >}}

# OSM-basierte Dienste von OSM Deutschland

OpenStreetMap Deutschland (vertreten durch den FOSSGIS e.V.) bietet
verschiedene Dienste an. Diese Dienste betreiben wir für die OSM-Community in
Deutschland und der ganzen Welt. Sie sind &mdash; mit Einschränkungen &mdash;
aber auch durch die allgemeine Öffentlichkeit nutzbar.

Für alle Dienste gilt: Sie werden von Freiwilligen in ihrer Freizeit betreut.
Wir können nicht garantieren, dass die Dienste jederzeit zur Verfügung stehen,
korrekt funktionieren oder morgen noch da sind. Die Erfahrung der letzten
Jahre zeigt allerdings, dass sie sehr zuverlässig laufen.

<div class="infobox">

Alle Dienste sind ohne eine Registrierung benutzbar. Aber bitte haltet Euch an
die
[Nutzungsbedingungen](https://www.fossgis.de/arbeitsgruppen/osm-server/nutzungsbedingungen/)!

</div>

Alle diese Dienste basieren auf Open-Source-Software, die Du auch selbst
installieren kannst. Es gibt auch Dienstleister, die Dir bei der Installation
(und eventuellen Anpassung) helfen oder die die Dienste im Auftrag betreiben.
Wenn das für Dich interessant sein könnte, dann schau Dich auf unserer
[Dienstleisterliste](https://dienstleister.fossgis.de/) um.

<div class="grid-container">

<div class="grid-box">

## Karten-Server (*„tile server“*)

<img class="float-right" src="vector_tiles_pyramid_structure.png" title="Pyramidenstruktur von Tiles. Quelle: QGIS-Dokumentation" width="160"/>

Wir betreiben einen Karten-Server, der Karten-Kacheln für die ganze Welt zur
Verfügung stellt. Der Stil basiert auf dem Standard-OSM-Stil, mit kleinen
Änderungen. Namen auf der Karte werden zusätzlich zur lokalen Sprache auch auf
Deutsch angezeigt.

Der Server kann auch in eigene Webseiten eingebunden werden. Aber eine
gewerbliche Nutzung ist nur mit Einschränkungen erlaubt!

Infos zum Kartenstil: [Projekt](https://github.com/giggls/openstreetmap-carto-de), [Wiki-Seite](https://wiki.openstreetmap.org/wiki/German_Style)
{.link-extern}

</div>
<div class="grid-box">

## uMap

<svg class="float-right" viewBox="0 0 128 128" width="80" height="80">
  <path d="M36.5 6.2A64 64 0 0 0 64 128C14.5 81.8 3.1 24.8 36.5 6.2zM64 128A64 64 0 0 0 91.5 6.2c33.4 18.6 22 75.6-27.5 121.8z" fill="#323e56"/>
  <path d="M87.7 33.8a23.7 23.7 0 1 1-47.4 0 23.7 23.7 0 0 1 47.4 0z" fill="#323e56"/>
</svg>

Mit uMap kannst Du ganz einfach und schnell eine individuelle Karte
zusammenstellen. Die OpenStreetMap-Karte im Hintergrund kannst Du durch
darübergelegte Punkte, Linien und Flächen ergänzen oder auch externe Daten
importieren.

Im OpenStreetMap-Projekt benutzen wir diese Karten gerne, um uns lokal
abzusprechen, woran man vielleicht arbeiten will. Aber uMap eignet sich auch
prima dazu, den Anfahrtplan zu Deiner Grillparty aufzumalen oder
Schlaglöcher in Deiner Gemeinde zu erfassen.

Unser uMap-Server auf [umap.openstreetmap.de](https://umap.openstreetmap.de/de/)
{.link-extern}

[uMap-Projektseite](https://umap-project.org/)
{.link-extern}

</div>
<div class="grid-box">

## Overpass API

<img class="float-right" src="/img/logos/overpass.png" width="175" height="70"/>

Wir betreiben mehrere „Overpass API Server“. Diese Server haben alle aktuellen
OSM-Daten gespeichert (und auch die historischen!) und stellen sie über die
Overpass API zur Verfügung. Damit kann man Webdienste bauen, ohne selbst die
OSM-Daten herunterladen zu müssen oder einen Server betreiben zu müssen.

Mehr Informationen zur Nutzung der Overpass API gibt es auf der
[Projektseite](https://overpass-api.de/)
{.link-extern}

Unter [overpass turbo](https://overpass-turbo.eu/) gibt es eine Oberfläche
zur Nutzung der Overpass API
{.link-extern}

</div>
<div class="grid-box">

## Routing-Server: OSRM

<img class="float-right" src="/img/logos/osrm.svg" alt="" width="160"/>

Open Source Routing Machine (OSRM) ist ein Open-Source-Routing-Server.
OpenStreetMap Deutschland betreibt mehrere Test-/Demo-Server. Dort kann man
sich Routen für Autos, Radfahrer und Fußgänger errechnen lassen.

Der Dienst kann über die API auch in eigene Seiten eingebunden werden.

Zum [OSRM
Demo-Server](https://map.project-osrm.org/?z=6&center=51.536086%2C10.634766&hl=de&alt=0&srv=1)
{.link-extern}

[OSRM-Projektseite](https://project-osrm.org/) &mdash; [Projektseite auf
Github](https://github.com/Project-OSRM)
{.link-extern}

[Über den Demo-Server](https://map.project-osrm.org/about.html)
{.link-extern}

</div>
<div class="grid-box">

## Routing-Server: Valhalla

<img class="float-right" src="/img/logos/valhalla.png" alt="" width="100" height="100"/>

Valhalla ist ein Open-Source-Routing-Server. OpenStreetMap Deutschland betreibt
mehrere Test/Demo-Server. Dort kann man die Navigation für sechs verschiedene
Verkehrsmittel berechnen lassen, mit vielen Zusatzoptionen. Außerdem ist es
möglich, Isochronen berechnen zu lassen. Das sind die Bereiche, die in einer
vorgegebenen Zeit mit einem Verkehrsmittel erreicht werden können.

Der Dienst kann über die API auch in eigene Seiten eingebunden werden.

Zum [Valhalla Demo-Server](https://valhalla.openstreetmap.de/)
{.link-extern}

[Dokumentation des Valhalla-Projektes](https://valhalla.github.io/valhalla/)
{.link-extern}

</div>
<div class="grid-box">

## Datendownload

Für viele Anwendungen braucht man Polygone der Landmassen dieser Erde, oder
alternativ Polygone der Ozeane. Für Weltkarten auch wichtig sind die Eisflächen
der Antarktis. Beides braucht bei OpenStreetMap eine spezielle Vorverarbeitung.
Damit das nicht jeder selbst machen muss, stellen wir diese Daten zum Download
zur Verfügung. In der Regel werden die Daten täglich aus den OSM-Daten
aktualisiert.

Zum [Download-Server](https://osmdata.openstreetmap.de/)
{.link-extern}

</div>
</div> <!-- grid-container -->

<div class="infobox">

Alle von uns betriebene Software ist freie und Open-Source-Software. Du kannst
sie selbst bei Dir installieren und bei der Weiterentwicklung helfen. Unser
[Sysadmin-Team](https://www.fossgis.de/arbeitsgruppen/osm-server/) kümmert
sich um dem Betrieb. Wenn Du etwas Sysadmin-Erfahrung hast und noch mehr lernen
willst, dann hilf uns doch dabei!

</div>

