---
title: "Deutscher Kartenstil"
aliases: [/germanstyle.html]
---

# Deutscher Kartenstil

## Geschichte

Die Geschichte des deutschen Kartenstils reicht zurück bis zur ersten
Auflage des [OpenStreetMap-Buchs](http://openstreetmap.info/) von
Frederik Ramm und Jochen Topf, das im Jahr 2008 erschien.

Die Grundidee des Stils war von Anfang an die Verwendung in Deutschland
üblicher Straßenfarben und Kartensymbole wie sie unter anderem aus dem
weit verbreiteten
[Shell-Atlas](https://www.landkartenarchiv.de/deutschlandkarten.php?q=shelldeutschland_1958)
bekannt sind.

Anfang 2011 ging dann eine erste Version online, die im Rahmen einer von der
Geofabrik unterstützten Bachelorarbeit an der
[HFT Stuttgart](https://www.hft-stuttgart.de/vermessung/news/geo-challenge-des-studiengangs-vermessung-und-geoinformatik)
von Beate Braun entwickelt wurde.  Hierbei handelte es sich um einen "fork"
des damaligen Kartenstils von osm.org.

Ein Jahr später erfolgte die Umstellung auf Mapnik 2 durch Matthias Merz
und Sven Geggus, der seitdem die Betreuung übernommen hat.

Im Laufe des Jahres 2012 entwickelte Sven Geggus die ersten Versionen
der Kartenlokalisierung. Diese ist unabhängig vom Renderer und wurde
daher inzwischen in ein eigenes Repository umgezogen. Sie kann für jede
Sprache eingesetzt werden, die lateinische Schrift verwendet. Quellcode
steht unter <https://github.com/giggls/osml10n> zur
Verfügung.

Seit Mitte 2013 der OpenStreetMap Kartenstil auf CartoCSS umgestellt
wurde konnten Änderungen nicht mehr direkt in den deutschen Stil
übernommen werden. Im Zuge der Umstellung entstand zudem eine große
Dynamik bei der Weiterentwicklung des Standard OSM Kartenstils.

Eine politische Diskussion um deutsche Namen in Osteuropa auf der
deutschen Mailingliste führte zur Anpassung der Kartenlokalisierung
durch Max Berger. Fortan erschienen lokale Ortsnamen immer in Klammern.
Max hat außerdem die aus dem [französischen
Stil](https://github.com/cquest/osmfr-cartocss) übernommene Dartellung
von Sportplätzen überarbeitet.

Ende 2015 konnte Sven Geggus die Kartenlokalisierung insbesondere im
Hinblick auf die Transliteration im Rahmen eines Forschungsprojektes am
Fraunhofer IOSB entscheidend verbessern.

Anfang 2016 entstand der seit September 2016 auf
[https://openstreetmap.de](https://openstreetmap.de/karte.html)
verwendete Kartenstil als neuer Fork von OSM CartoCSS, nachdem ein
erster Versuch im Rahmen einer weiteren Bachelorarbeit an der Geofabrik
leider erfolglos war. Dieser Fork ist näher am internationalen Stil als
das bisher der Fall war. Auf diese Weise wurde es nun möglich
Änderungen leichter zu übernehmen. Auch die Betreuer von OSM CartoCSS
bemühen sich inzwischen Forks wie diesen möglich zu machen.

Im Jahre 2019 wurde deutlich, dass der Ansatz die Kartenlokalisierung auf
Basis von PostgreSQL stored procedures zu implementieren an seine Grenzen
gelangt ist.  Durch die Arbeiten von Jochen Topf an osm2pgsql (flex output)
und der Reinmplemetierung der Lokalisierungsfunktionen in LUA durch Sven
Geggus wurde es 2022 möglich die Lokalisierung stattdessen direkt beim
Import der Daten durchzuführen.  Dadurch kann nun auch die kantonesische
Sprache transkribiert werden.

Die neuen, seit 2023 vom [FOSSGIS](https://fossgis.de) betriebenen
[Tileserver](https://tile.openstreetmap.de) verwenden diesen neuen Ansatz.

Wird fortgesetzt...

## Hauptunterschiede zum Standard OSM CartoCSS Stil

  - Internationalisierung (deutsche Namen und lateinische Schrift)
  - Abkürzung von Straßennamen (z.B. Straße -\> Str.)
  - Farbgebung, Beschriftung, etc. der "Major roads" (Motorway, primary,
    secondary, ...)
  - Stil von Fußwegen, Radwegen und Pfaden
  - Stil von Feldwegen mit tracktype=grade1 bzw. surface=paved
  - Stil von "living\_street"
  - Farbgebung von Grenzen
  - Darstellung von geplanten und in Bau befindlichen Straßen
    (higway=proposed, higway=construction)
  - Symboldarstellung für Laub- und Nadelwald wie in dt. topografischen
    Karten üblich
  - Liniendarstellung auf Sportplätzen (leisure=pitch)
  - Darstellung einzelner POI-Typen (Burgen/Schlösser, Apotheken, ...)

## Quellcode

  - Kartenstil: <https://github.com/giggls/openstreetmap-carto-de>
  - Lokalisierung: <https://github.com/giggls/osml10n>

-----

## Nutzungsbedingungen

Das Massen-Herunterladen von Kacheln für andere Zwecke als die
Web-Darstellung (insbesondere durch irgendwelche Apps für die
Offline-Nutzung) ist **nicht erwünscht** (unsere Bandbreite ist
begrenzt). Wer daran Bedarf hat, kann sich den Kartenstil bei
[GitHub](https://github.com/giggls/openstreetmap-carto-de) herunterladen
und selbst Kartenkacheln herstellen. Der Server stellt pro IP-Nummer nur
eine bestimmte Menge Kacheln mit maximaler Geschwindigkeit zur Verfügung
und schaltet danach auf langsam. Das Einbinden der Kacheln in eigene
Webseites können wir aufgrund der begrenzten Bandbreite leider nur für
nichtkommerzielle Zwecke erlauben. Kleinere Webanwendungen, wie z.B. der
Anfahrtsplan auf der Firmenwebseite dürfen die Kacheln
selbstverständlich verwenden. Bitte beachten sie auch die [Tile usage
policy](https://wiki.openstreetmap.org/wiki/Tile_usage_policy).
[Ausführlichere Informationen zu den Nutzungsbedingungen findest Du
hier.](https://fossgis.de/arbeitsgruppen/osm-server/nutzungsbedingungen/)
