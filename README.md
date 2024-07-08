# openstreetmap.de Webseite

Aus diesem Repository wird die Webseite
[openstreetmap.de](https://openstreetmap.de) generiert.

## Hugo

Diese Webseite benutzt [Hugo](https://gohugo.io/), um aus den Dateien in diesem
Repository eine Webseite zu bauen.

Derzeit verwendet wir Hugo Version 0.111.3, wie es bei Debian installiert wird.

Du kannst Hugo selbst installieren und lokal laufen lassen, um die Webseite zu
generieren: [Hugo
Installationsanweisungen](https://gohugo.io/getting-started/installing/).
Anschließend kann im Verzeichnis `hugo serve` ausgeführt werden. Dies startet
einen lokalen Webserver, der üblicherweise unter
[http://localhost:1313/](http://localhost:1313/) zu erreichen ist.

## Automatische Generierung der Webseite

Jedes mal, wenn dieses Repository auf Github geändert wird (entweder weil man
auf Github eine Datei ändert oder wenn man in den `main` Branch pushed), dann
wird die Webseite neu generiert und auf den Webserver übertragen. Das passiert
über die "Github actions"-Funktion, die unter
`.github/workflows/build-and-deploy.yml` konfiguriert wird. Der neue Inhalt ist
dann nach wenigen Sekunden auf dem Webserver verfügbar.

Zum Testen wird zusätzlich der Inhalt des `staging` Branches nach
staging.openstreetmap.de installiert, auf das man nur mit einem Passwort
zugreifen kann.

## Inhalt anlegen

Die openstreetmap.de-Website wird aus den Inhalten, die in den untergeordneten
Verzeichnissen existieren, erzeugt. Webseiten gehören in das Verzeichnis
`content`, sie werden dort im
[Markdown-Format](https://www.markdownguide.org/tools/hugo/) angelegt und
automatisch nach HTML konvertiert.

Statische Inhalte wie Bilder gehören nach `static`. Für Inhalte, die nur von
einer Webseite gebraucht werden wird dabei eine zum `content`-Verzeichnis
parallele Dateihierarchie benutzt. Mehrfach genutzte Bilder gehören nach
`static/img/'.

Achtung: Die Quelle für die Index-Seite hat bei Hugo einen führenden
Unterstrich:

```
_index.md
```

## Kalender

Auf der [Kalenderseite](https://openstreetmap.de/kalender/) werden drei
Event-Listen angezeigt:

1. Eine kuratierte Sammlung von wichtigen OSM-Events.
   Events werden unter `data/osmevents.toml` eingetragen.
2. Kuratierte Sammlung externer Events auf denen wir mit einem Stand vertreten
   sind. Events werden unter `data/otherevents.toml` eingetragen.
3. Per Javascript automatisch von osmcal.org erzeugte Liste von Events in
   Deutschland.

Für die ersten beiden Listen gilt: Events werden automatisch nach
Anfangsdatum sortiert. Vergangene Events werden nicht angezeigt, wenn die Seite
neu generiert wird. Trotzdem sollte man alte Events gelegentlich entfernen.
Für Events kann ein Bild hinterlegt werden, das muss im Verzeichnis
`static/img/cal/` abgelegt werden.

## Suchfunktion

Da wir mit statischen Seiten arbeiten, gibt es keine Suchunterstützung vom
Server. Stattdessen wird beim Erzeugen der Seiten auch eine Datei `index.json`
erzeugt, die alle Inhalte aller Seiten enthält. Die wird dann bei der Suche
im Browser von etwas Javascript geladen und darin gesucht.

Dazu werden diese Javascript-Libraries benutzt:

* [Fuse.js](https://www.fusejs.io/) für die Suche.
* [Mark.js](https://markjs.io/) für das Markieren der Suchergebnisse.

Die Implementierung in `static/js/search.js` basiert auf [dieser
Beschreibung](https://makewithhugo.com/add-search-to-a-hugo-site/).

