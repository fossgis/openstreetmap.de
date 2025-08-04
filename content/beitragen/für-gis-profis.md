---
title: Für GIS-Profis
description: "Unterschiede zwischen OpenStreetMap (OSM) und traditionellen GIS-Systemen: OSM-Objekte, Tags, Geometrien und das Knoten-Kanten-Modell im Detail."
---

# Hinweise für GIS-Profis

Wenn du mit den „üblichen“ GIS (Geographic Information System) vertraut bist,
dann wird dir bei OSM einiges bekannt vorkommen, aber vieles ist auch mehr
oder weniger subtil anders. Das kann anfangs etwas verwirrend sein, aber dafür
gibt es diese Seite.

## Feature

Was der GISler „Feature” nennt, nennen wir „OSM-Objekt“. OSM-Objekte haben
immer eine eindeutige numerische ID. Für die verschiedenen Objektarten (Nodes,
Ways, Relations) gibt es getrennte ID-Räume, das heißt, es gibt sowohl einen
Node mit der Nummer 17 als auch einen Way 17.

## Layer

OSM kennt keine Layer. Oder, anders gesehen, gibt es nur einen. GIS
unterscheidet typischerweise zwischen dem Typ eines Features und den Attributen.
Der Typ wird durch den Layer bestimmt, in dem das Feature ist.
Bei OSM werden sowohl der Typ als auch die Attribute durch die Tags bestimmt.

## Attribute/Tags

Die Attribute heißen bei OSM „Tags“ und sie haben keinen Typ wie im GIS. Alle
Tags bestehen aus einem „Key“ und einem „Value“, die beide Strings sind. In der
Praxis sind Keys immer Strings, Values sind häufig auch Integer oder
Boolean-Werte, werden aber immer in String-Form ausgedrückt.

## Geometrien

Vom GIS kennt man Geometrien mit verschiedenen Typen: Point, LineString,
Polygon, und deren Multi-Varianten. Das gibt es bei OSM nicht.

Nur Nodes haben eine Geometrie, eine Punkt-Geometrie. Ways haben keine eigene
Geometrie, sondern verweisen nur auf die Nodes. Damit kann man aber einen
LineString (und für geschlossene Wege auch ein Polygon) zusammenbauen.

Relations sind noch komplexer und können, je nach Typ, zu allen möglichen
Geometrien zusammengebaut werden.

## Knoten-Kanten-Modell

In vieler Hinsicht ist das OSM-Datenmodell eher ein Knoten-Kanten-Graph,
wie man ihn für das Routing braucht. Das macht die Arbeit manchmal etwas
umständlich, aber man kann in diesem Modell den Unterschied zwischen einer
echten Verbindung und einer (zufälligen) Überlappung richtig abbilden.

## Maßstab/Detail

GIS-Profis erwarten bei Daten häufig, dass sie einen definierten Detailgrad
haben oder für einen bestimmten Maßstab gemacht sind. Bei OSM ist das nicht der
Fall. Daten werden mit mehr oder weniger Detail erfaßt und Positionen mit mehr
oder weniger Genauigkeit, je nachdem, was die Datenquelle (GPS, Luftbilder,
...) hergibt und wie wichtig die Genauigkeit ist.

Generell ist die absolute Positionsgenauigkeit in OSM nicht so hoch. Sie ist
aber für das, was wir damit machen, auch nicht so wichtig wie die relative
Genauigkeit. Es ist eben wichtiger, dass sich Gebäude und Straße nicht
überlappen, als dass die Lage auf den Zentimeter genau stimmt.

## Konvertierung

Es gibt verschiedene Programme, die OSM-Daten in GIS-Formate transformieren
können. Dabei gehen aber immer Informationen verloren! Außer in ganz einfachen
Fällen muss man diese Konvertierung entsprechend konfigurieren, damit man
die Daten sinnvoll herausbekommt.

