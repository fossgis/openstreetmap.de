# openstreetmap.de Webseite

Aus diesem Repository wird die Webseite
[openstreetmap.de](https://openstreetmap.de) generiert.

## Inhalt anlegen

Die openstreetmap.de-Website wird aus den Inhalten, die in den untergeordneten Verzeichnissen existieren, erzeugt.

Um einen neuen Artikel anzulegen, muss eine neue Datei in `content` mit der Endung `.md` (Markdown) angelegt werden. Ein Artikel beginnt mit den Metadaten ganz oben:

	---
	title: "Dies ist ein Titel"
	date: "2019-02-29T15:00:00+02:00"
	author: "Marta Musterfrau"
	---

Anschließend kann der Inhalt geschrieben werden, z.B.

```markdown
## Unterüberschrift

Hier ist etwas Text.

Und hier ist ein neuer Absatz.
```

Statische Inhalte wie Bilder und dergleichen, die nicht von Hugo interpretiert werden sollen, gehören unter `static`, nicht nach `content`.

Lokal kann die Webseite mithilfe von hugo generiert werden: [Hugo Installationsanweisungen](https://gohugo.io/getting-started/installing/). Anschließend kann im Verzeichnis `hugo serve` ausgeführt werden. Dies startet einen lokalen Webserver, der üblicherweise unter [http://localhost:1313](http://localhost:1313) zu erreichen ist.

Im Zweifelsfall Inhalte anlegen und Pull Request öffnen, wir finden eine Lösung :)

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

## Generierung der Webseite

Jedes mal, wenn dieses Repository auf Github geändert wird (entweder weil man
auf Github eine Datei ändert oder wenn man in den `main` Branch pushed), dann
wird die Webseite neu generiert und auf den Webserver übertragen. Das passiert
über die "Github actions"-Funktion, die unter
`.github/workflows/build-and-deploy.yml` konfiguriert wird. Der neue Inhalt ist
dann nach wenigen Sekunden auf dem Webserver verfügbar.

