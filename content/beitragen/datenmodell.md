---
title: Wie die OSM-Daten aussehen
---

# Wie die OSM-Daten aussehen (Datenmodell)

Ganz unten bestehen die OSM-Daten aus „OSM-Objekten“. Jedes OSM-Objekt hat
eine eindeutigen numerische ID und sogenannte „Tags“, die angeben, was das
für ein Objekt ist.

Bei OSM gibt es drei Arten von Objekten:

{{% rawhtml %}}

<div class="grid-container">

<div class="grid-box">

## <img src="/img/node.svg" alt="" width="24"/> Nodes

Nodes (englisch für „Knotenpunkte“) sind Punkte auf der Welt. Sie haben einen
Längen- und einen Breitengrad.

Nodes werden benutzt, um sogenannte Points of Interest zu mappen. Zum Beispiel
einen Briefkasten oder eine Ampel oder einen Baum. Alles, was so klein ist,
dass man die Ausdehnung des Objektes nicht braucht, oder wie die nicht so
wichtig ist.

</div>

<div class="grid-box">

## <img src="/img/way.svg" alt="" width="24"/> Ways

Ways (englisch für „Wege“) sind for linienförmige Objekte wie Straßen, Wege,
Bahnlinien, kleine Flüsse, und so weiter. Oder, wenn die Linie wieder zum
Anfangspunkt zurückführt, auch für flächenhafte Objekte, wie Gebäude, Wälder
oder Seen.

Ways enthalten selbst keine Koordinaten, sie verweisen dazu auf die Nodes.
Hat man zwei Straßen, die sich kreuzen, benutzen sie einen gemeinsamen Node.
Dadurch erkennt man, dass hier eine Verbindung besteht. Geht eine Straße über
eine Brücke über einen Fluß hinweg, haben sie keinen gemeinsamen Node, gibt
es einen, dann ist da eine Furt.

</div>

<div class="grid-box">

## <img src="/img/relation.svg" alt="" width="24"/> Relations

Mit Relations (englisch für „Verbindung“ oder „Zusammenhang“) kann man
komplexere Gebilde bauen. Relations werden zum beispiel benutzt, um Buslinien
oder ausgeschilderte Wanderwege einzutragen. Die häufigste Anwendung sind
sogenannte Multipolygon-Relationen (für Polygone mit mehreren Bestandteilen
und/oder Löchern, zum Beispiel ein Gebäude mit Innenhof) und Grenzen von
Ländern, Gemeinden und dergleichen.

</div>

</div> <!-- grid-container -->

{{% /rawhtml %}}

Je nach benutztem Editor wird mehr oder weniger davon vor Dir versteckt sein,
beziehungsweise anders dargestellt werden. Aber es hilft mit den Grundlagen und
Begriffen vertraut zu sein. Am Anfang solltest Du Dich eher an Nodes und Ways
halten, Relations sind schon etwas für Fortgeschrittene.

## Weitere Informationen

Mehr über [Tags](/beitragen/tags/)
{.link-intern}

[Hinweise für GIS-Profis](/beitragen/für-gis-profis/)
{.link-intern}

