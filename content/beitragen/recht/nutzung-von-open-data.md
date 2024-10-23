---
title: Nutzung von Geodaten unter Open-Data-Lizenzen in OpenStreetMap
---

# Nutzung von Geodaten unter Open-Data-Lizenzen in OpenStreetMap

OpenStreetMap (OSM) kann nur solche Daten sammeln, für die OSM auch
entsprechende Rechte eingeräumt werden. Sammelt jemand selbst Daten und trägt
diese bei OpenStreetMap bei, gibt es dabei kein Problem. Der Beitragende hat
bei der Registrierung den ["OpenStreetMap Contributor
Terms"](https://osmfoundation.org/wiki/Licence/Contributor_Terms) zugestimmt,
die es OSM erlauben, diese Daten zu nutzen.

Anders ist die Situation, wenn man Daten in OSM integrieren möchte, die schon
von jemand anderem gesammelt wurden. Dann braucht es die Erlaubnis des
Rechteinhabers. Häufig sind solche Daten schon unter einer Open-Data-Lizenz
veröffentlicht. Die muss aber nicht unbedingt kompatibel mit der [Open Database
License (ODbL)](https://opendatacommons.org/licenses/odbl/) sein, die von OSM
verwendet wird.

## Lizenzen

Es gibt verschiedene Lizenzen, die nach der [Open
Definition](https://opendefinition.org/) für Open Data in Frage kommen. Am
weitesten verbreitet sind die verschiedenen Varianten der [Creative
Commons (CC)](https://creativecommons.org/)-Lizenzen und, in Deutschland, die
verschiedenen Varianten der [Datenlizenz
Deutschland (DL-DE)](https://www.govdata.de/lizenzen).

Daneben gibt es auch noch die Einordnung als *public domain*, die eher aus dem
angelsächsischen Rechtsraum kommt, die ein komplettes Fehlen von Rechten
darstellt. Das ist zum Beispiel relevant für Daten der amerikanischen
Bundesregierung, die per Gesetz *public domain* sind und keinerlei Rechten
unterliegen. Von Creative Commons und der Datenlizenz Deutschland gibt es
dazu entsprechende Varianten
([CC0](https://creativecommons.org/public-domain/cc0/) und [Datenlizenz
Deutschland – Zero](https://www.govdata.de/dl-de/zero-2-0)).

## Namensnennung

Viele Lizenzen setzen eine *Namensnennung* (*attribution*) voraus. Das heißt,
dass der Lizenzgeber der Nutzung der Daten zustimmt, wenn bei jeder Nutzung der
Name des Lizenzgebers genannt wird. In welcher Form das passiert hängt von der
Art der Nutzung ab und kann in der Regel vom Nutzer entschieden werden. Üblich
ist zum Beispiel bei Online-Karten, dass unten auf der Karte ein kleiner
Hinweis erfolgt. In einem gedruckten Werk geschieht so etwas häufig im
Impressum.

OpenStreetMap benutzt Daten, die von tausenden Lizenzgebern beigetragen wurden.
Es sollte klar sein, dass es nicht möglich ist, alle diese Lizenzgeber bei
jeder einzelnen OpenStreetMap-basierten Karte zu nennen. Stattdessen hat sich
folgendes Verfahren etabliert: OpenStreetMap nennt den Lizenzgeber auf einer
speziellen Webseite, der [Contributors-Seite von
OpenStreetMap](https://wiki.openstreetmap.org/wiki/Contributors) und/oder im
sogenannten Änderungssatz (*changeset*). Jede Änderung und Ergänzung von
OpenStreetMap-Daten ist so einem Änderungssatz zugeordnet, über den man sehen
kann, wer wann welche Änderungen vorgenommen hat. Der Änderungssatz kann mit
beliebigen Kommentaren versehen werden, in diesem Fall also der Namensnennung
des Lizenzgebers. Darüber ist es also möglich, den ursprünglichen Urheber
der Daten zu finden.

Damit es zu keinerlei Missverständnissen oder Unstimmigkeiten kommen kann,
erklärt der Lizenzgeber in einer Erklärung (Addendum, *waiver*) als Ergänzung
zur Lizenz, dass er mit diesem Vorgehen einverstanden ist.

Für OpenStreetMap-Benutzer heißt das also, dass sie nur OpenStreetMap als
Quelle nennen müssen. Das Recht des Lizenzgebers auf Namensnennung bleibt
aber trotzdem gewahrt.

## Verbot von Einschränkungen

Manche Lizenzen sehen es vor, dass bei der weiteren Verwendung der Daten keine
zusätzlichen Einschränkungen erlaubt sind, zum Beispiel durch Einsatz von DRM
(*digital rights management*). Damit soll sichergestellt werden, dass Daten,
die einmal öffentlich sind, auch öffentlich bleiben.

Die von OSM verwendete ODbL hat das gleiche Ziel, geht aber etwas anders vor:
Sie erlaubt zusätzliche Einschränkungen in gewissen Situationen, aber nur dann,
wenn die zugrundeliegenden Daten auf andere Weise frei zugänglich gemacht
werden. Dies erlaubt letztlich mehr verschiedenartige Nutzungen aber sorgt
ebenfalls dafür, dass die Daten immer auch für andere nutzbar bleiben.

Durch die beiden verschiedenen Ansätze entsteht jetzt aber bei der Nutzung von
Daten, deren Lizenz weitere Einschränkungen verbietet, ein Problem. Die
Lizenzen widersprechen sich nach dem Wortlaut, auch wenn sie letztlich das
gleiche erreichen wollen. Da der Lizenzgeber die Daten ja sowieso nicht nur
OpenStreetMap zur Verfügung stellt, sondern alle anderen sie auch von ihm
bekommen können, ist die Nutzbarkeit der Daten aber in jedem Fall immer
gewährleistet.

Praktisch gelöst wird das dadurch, dass der Lizenzgeber eine Erklärung
(Addendum, *waiver*) als Ergänzung zur Lizenz abgibt, in der er klarstellt,
dass die Nutzung in OpenStreetMap in Ordnung ist.

## Nutzung von Daten für OpenStreetMap

Je nach Lizenz, unter der die Daten stehen, muss man anders vorgehen, wenn
man sie für OSM nutzbar machen will:

* **Public Domain, CC0, DL-DE Zero:** Völlig problemlos ist die Nutzung von
  Daten, die *gemeinfrei* ("public domain") sind. Auch
  [CC0](https://creativecommons.org/publicdomain/zero/1.0/) drückt das gleiche
  aus und die [DL-DE Zero](https://www.govdata.de/dl-de/zero-2-0) hat einen
  sehr ähnlichen Effekt. **&rarr; Diese Daten können ohne weiteres für
  OpenStreetMap genutzt werden.**

* **CC-BY - Creative Commons - Attribution:** Daten, die unter der Lizenz
  [CC-BY](https://creativecommons.org/licenses/by/4.0/) stehen, unterliegen der
  "Namensnennung" und dem "Verbot von Einschränkungen", wie oben beschrieben.
  **&rarr; Daten können für OSM genutzt werden, wenn ein
  [Addendum](/beitragen/recht/addendum-cc-by/) des Lizenzgebers zur
  Namensnennung und zum Verbot der Einschränkungen vorliegt.**

* **DL-DE-BY - Datenlizenz Deutschland - Namensnennung:**
  [DL-DE-BY](https://www.govdata.de/dl-de/by-2-0) "Namensnennung" wie oben
  beschrieben. **&rarr; Daten können für OSM genutzt werden, wenn ein
  [Addendum](addendum-dl-de-by) des Lizenzgebers zur Namensnennung vorliegt.**

* **ODbL - Open Database License:** Auch wenn OpenStreetMap selbst die ODbL
  verwendet heißt das nicht, dass alle Daten unter der ODbL automatisch
  kompatibel sind! Hierbei ist einerseits zu beachten, dass die ODbL eine
  Namensnennung verlangt, aber wer genannt werden soll ist bei verschiedenen
  Datenquellen natürlich verschieden. Zudem werden Daten zwar von OpenStreetMap
  unter ODbL verteilt, aber die Ergänzung der OpenStreetMap-Daten erfolgt nicht
  unter der ODbL sondern wird durch die ["OpenStreetMap Contributor
  Terms"](https://osmfoundation.org/wiki/Licence/Contributor_Terms) geregelt.
  OpenStreetMap ermöglicht sich dadurch, seine Lizenz (in Grenzen) zu ändern,
  falls das in Zukunft mal nötig sein sollte. Würde man Daten unter der ODbL
  übernehmen, ginge das aber nicht mehr. **&rarr; Zur Zeit ist unklar, wie
  unter der ODbL stehende Daten übernommen werden können.**

## Zugriffsrechte für Luftbilder

OpenStreetMap-Mitwirkende benutzen häufig Luftbilder als Basis für die Erhebung
von Daten für OSM. Rechtlich gesehen ist das eine andere Situation als bei der
Nutzung von Daten. OpenStreetMap will ja nicht die Luftbilder selbst weiter
verbreiten, sondern nur die Daten, die mit Hilfe der Luftbilder erhoben wurden.

**&rarr; Daten können für OSM genutzt werden, wenn eine [Erklärung des
Lizenzgebers](/beitragen/recht/erlaubnis-luftbilder/) vorliegt.**

## Praktisches Vorgehen

### Sie haben Daten, die Sie OSM zur Verfügung stellen wollen?

Wenn Sie sich noch nicht für eine Lizenz entschieden haben, dann überlegen Sie
sich, welche Lizenz Sie verwenden wollen. Sie können die Daten auch unter
mehreren Lizenzen parallel veröffenlichen. In die Entscheidung für die eine
oder andere Lizenz fließen verschiedene Kriterien ein, auf die wir hier nicht
alle eingehen können. In diesem Dokument gehen wir nur auf die Beziehung zu
OpenStreetMap ein.

Die Freigabe Ihrer Daten als *public domain* mit Hilfe der CC0 oder DL-DE Zero
macht die Nutzung Ihrer Daten besonders einfach. Nicht nur durch OpenStreetMap,
sondern auch durch viele andere.

Veröffentlichen Sie die Daten unter CC-BY oder DL-DE-BY, dann veröffentlichen
Sie mit den Daten und der Lizenzangabe auch das passende Addendum.

### Du bist Mapper und würdest gerne die Daten einer Organisation nutzen?

Als erstes mache Dich mit den Fragen zu den Lizenzen soweit vertraut, dass Du
Dir das Folgende zutraust. Wenn Dir das alles etwas kompliziert erscheint,
dann frag doch im [Community Forum](https://community.openstreetmap.org/), ob
Dir jemand hilft, oder ob das jemand übernehmen will.

Dann schreibst Du eine Anfrage an den Lizenzgeber, in der Du die Situation
erklärst und freundlich um Freigabe der Daten bittest. Einen Entwurf für so ein
Anschreiben gibt es hier **TODO**. Du sollest auf der Wiki-Seite
[DE:Permissions](https://wiki.openstreetmap.org/wiki/DE:Permissions) einen
Eintrag anlegen, damit andere Mapper sehen, dass für diese Quelle schon eine
Anfrage läuft.

Wenn die Anfrage positiv beschieden wird, dann trägst Du die Informationen dazu
auf der [DE:Permissions](https://wiki.openstreetmap.org/wiki/DE:Permissions)
ein. Wenn der Lizenzgeber das Addendum auf seiner Webseite zusammen mit den
Daten veröffentlicht, dann ist nichts weiter zu machen. Wenn er das Addendum an
Dich geschickt hast, dann trage es im Wiki ein und verlinke es von der
Permissions-Seite. Bitte mache dabei persönliche Daten in ausgetauschen E-Mails
und dergleichen unkenntlich. Die "ungeschwärzten" Originale kannst Du an den
FOSSGIS e.V. senden (wie ? **TODO**), wir bewahren sie dann auf, falls es mal
Nachfragen gibt. Zusätzlich machst Du auf der [Contributors-Seite von
OpenStreetMap](https://wiki.openstreetmap.org/wiki/Contributors) einen
entsprechenden Eintrag.

Wenn die Anfrage ignoriert wird oder negativ beschieden, dann trage das bitte
auf der Permissions-Seite entsprechend ein. Und nimm es dem Lizenzgeber nicht
übel. Vielleicht ändert er ja ein paar Jahre später seine Meinung.

## Weitere Informationen

Wenn Du mehr zu dem ganzen Thema wissen willst, dann gibt es hier weitere
Informationsquellen.

**TODO**

* https://osmfoundation.org/wiki/Licence/Licence_Compatibility
* https://open.nrw/system/files/media/document/file/opennrw_rechtl_gutachten_datenlizenzen_lowres_web.pdf
* https://wiki.openstreetmap.org/wiki/DE:Permissions
* https://pretalx.com/fossgis2024/talk/QHQQA9/

