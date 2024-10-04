---
title: OpenStreetMap-Daten herunterladen
---

# OpenStreetMap-Daten herunterladen

Alle OpenStreetMap-Daten können kostenlos und ohne Anmeldung heruntergeladen
werden.

{{% infobox %}}

Denk daran, dass diese Daten einer Lizenz unterliegen. Du musst bestimmte Dinge
bei der Nutzung beachten. Das wichtigste ist die Pflicht zur
[Namensnennung](/nutzen/namensnennung/).

[Weitere Informationen zum Copyright](https://www.openstreetmap.org/copyright)
{.link-extern}

{{% /infobox %}}

## Datenformate

OpenStreetMap benutzt Dateiformate, die speziell für OpenStreetMap entwickelt
wurden.

Das heute am häufigsten benutzte Datenformat heißt PBF. Dateien haben meist
die Endung `.osm.pbf`. Dieses Binär-Format komprimiert die OSM-Daten auf eine
besondere Weise, damit sie besonders klein werden. (Trotzdem brauchen alle
Daten für den Planeten ca. 80 GByte!)

Fast alle Software, die mit OSM-Daten arbeitet, unterstützt dieses Format
und kann damit besonders effizient arbeiten. Wenn möglich, solltest Du mit
diesem Format arbeiten.

{{% infobox %}}

Auch für Vektor-Kacheln wird manchmal die Dateiendung `.pbf` verwendet. Das
ist aber ein ganz anderes Format, sie haben nichts miteinander zu tun.

{{% /infobox %}}

Manchmal noch verwendet wird das Original-Format von OSM, das auf XML
basiert. Selbst gepackt (zum Beispiel mit bzip2) sind die Daten aber fast
doppelt so groß wie im PBF-Format und die Verarbeitung ist aufwändiger und
langsamer.

Es gibt für so ziemlich alle Programmiersprachen entsprechende Bibliotheken,
die diese Formate lesen und schreiben können.

[PBF-Format im OSM-Wiki](https://wiki.openstreetmap.org/wiki/PBF_Format)
{.link-extern}

## Datenausschnitte

Häufig braucht man nicht alle OSM-Daten auf einmal, sondern nur die für ein
Land oder eine Region. Verschiedene Anbieter stellen Datenausschnitte zur
Verfügung. Bei der Geofabrik gibt es Ausschnitte für Länder und Kontinente und
teilweise auch für kleinere Regionen, die täglich aktualisiert werden. Bei
BBBike kann man den Ausschnitt selbst wählen.

[Download bei der Geofabrik](https://download.geofabrik.de/)
{.link-extern}

[Download bei BBBike](https://download.bbbike.org/osm/)
{.link-extern}

[Weitere Download-Optionen im Wiki](https://wiki.openstreetmap.org/wiki/Planet.osm)
{.link-extern}

## Daten für den ganzen Planeten

Alle OpenStreetMap-Daten für den ganzen Planeten gibt es zum Download bei der
OSM Foundation. Einmal pro Woche wird ein kompletter Datenbank-Dump zur
Verfügung gestellt.

Die Verarbeitung von OSM-Daten für den ganzen Planet stellt hohe Anforderungen
an Hardware und Software. Bevor Du mit den Daten für die ganze Welt arbeitest,
sammle erstmal etwas Erfahrung mit Ausschnitten der Daten.

Download auf [planet.openstreetmap.org](https://planet.openstreetmap.org/)
{.link-extern}

## Änderungsdateien

Damit man alle Änderungen an den OSM-Daten nachvollziehen kann, gibt es bei der
OSM Foundation Änderungsdatensätze zum Herunterladen. Jede Minute wird ein
neuer Datensatz erzeugt. Diese werden dann zu stündlichen und täglichen
Datensätzen zusammengefaßt. Manche OSM-Software kann diese Daten automatisch
herunterladen und zum Beispiel eine Datenbank damit aktualisieren.

Änderungsdatensätze auf [planet.openstreetmap.org](https://planet.openstreetmap.org/replication/)
{.link-extern}

## Historische Daten

Meistens braucht man nur die aktuellen OSM-Daten. Aber alle Änderungen an den
OpenStreetMap-Daten werden bei OSM gespeichert, das heißt alte Versionen der
Objekte und auch gelöschte Objekte sind in der Datenbank vorhanden. Für
bestimmte Auswertungen können diese Daten nützlich sein.

Achtung! Die meiste OSM-Software kommt mit diesen Daten nicht zurecht. Schau
Dir erst die Anleitung der Software an, ob sie damit arbeiten kann. Ein
Komplettauszug der OSM-Daten mit Historie braucht selbst im PBF-Format 130
GByte!

[Full history dumps](https://planet.openstreetmap.org/pbf/full-history/)
{.link-extern}

