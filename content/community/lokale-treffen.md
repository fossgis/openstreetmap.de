---
title: Lokale Treffen
description: "Finde lokale OpenStreetMap-Gruppen und Treffen, tausche dich aus und starte gemeinsame Mapping-Aktionen. Lerne, wie du eine Gruppe gründen kannst."
---

# Lokale Treffen

In einigen Städten und Regionen sind lokale Gruppen entstanden, die sich mehr
oder weniger regelmäßig treffen. Die Gruppen sind informell, die Treffen sind
öffentlich, jeder kann vorbei kommen. Eine ideale Möglichkeit, erfahrene Mapper
zu treffen und vielleicht auch gemeinsame Mapping-Aktionen zu starten.

## Lokale Gruppen

<style>
#local-groups {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}
#local-groups a {
    background-color: #f0f0f0;
    border-radius: 4px;
    padding: 4px 8px;
}
#local-groups a:hover {
    background-color: #e0e0e0;
}
</style>

<div id="local-groups"></div>

<script>
const el = document.getElementById('local-groups');
fetch('/osm_user_groups_DACH.kml')
    .then( (response) => response.text() )
    .then( (text) => new window.DOMParser().parseFromString(text, "text/xml") )
    .then( (data) => {
        var groups = [];
        data.querySelectorAll('Placemark').forEach( (place) => {
            var name = place.querySelector('name').textContent;
            name = name.replace(/(OSM[ -]?|OpenStreetMap[ -]?)?(Stammtisch|Treffen)( für)?/, ' ');
            name = name.replace('Mappertreffen', ' ');
            name = name.replace('und Umgebung', ' ');
            name = name.replace(/(Städte)?Region/, ' ');
            name = name.replace(/\s+/, ' ').trim();
            groups.push({ 'name': name,
                          'url': place.querySelector('wiki').textContent });
        });
        groups.sort( (a, b) => a.name > b.name );
        groups.forEach( (group) => {
            const link = document.createElement('a');
            link.textContent = group.name;
            link.href = group.url;
            el.appendChild(link);
        });
    });
</script>

Die lokalen Gruppen sind im Wiki [zu
finden](https://wiki.openstreetmap.org/wiki/Category:Lokale_Gruppe). (Deine
lokale Gruppe fehlt in der Liste? Lege eine Infoseite im Wiki an und baue dort
das Template [Lokale
Gruppe](https://wiki.openstreetmap.org/wiki/Template:User_group) ein.)

## Wie starte ich eine Gruppe?

Eine neue Gruppe zu starten ist einfach:

* Finde einen Veranstaltungsort, das kann eine Kneipe oder ein Restaurant sein
  oder ein Clubraum oder dergleichen. In vielen Städten gibt es Organisationen,
  die Räume haben, wo man vielleicht unterkommen kann. Fragen kostet nichts.
  Nebenzimmer in Restaurants bekommt man häufig nur, wenn man eine
  Mindestabnahme garantiert, aber ein Nebenzimmer muss nicht sein.
* Finde einen ersten Termin. Abends unter der Woche geht es meist am besten.
* Lege eine Seite im OSM-Wiki an und trage dort das Template [Lokale
  Gruppe](https://wiki.openstreetmap.org/wiki/Template:User_group) ein.
* Trag den Termin im [OSM-Kalender](https://osmcal.org/) ein.
* Meist wird man ohne Anmeldung auskommen, aber wenn Du das brauchst, kannst
  Du das über das Wiki oder den OSM-Kalender organisieren.
* Mach Reklame im Forum, Social Media usw. Wenn keiner von dem Termin weiß,
  dann kommt auch keiner. Über [diese Webseite](https://resultmaps.neis-one.org/)
  kann man Mapper in der Gegend finden und dann über ihr Profil bei OSM
  ansprechen.

Wenn Du mal angefangen hast:

* Regelmäßige Termine sind auf Dauer besser, damit sich (potentielle)
  Teilnehmer daran gewöhnen. Einmal im Monat oder alle zwei Monate sind
  typische Intervalle.
* Auf jeden Fall eine Weile durchhalten, auch wenn nur wenige Leute kommen. Es
  braucht Zeit, bis potentielle Teilnehmende das Angebot wahrnehmen und man sein
  Publikum findet. Termine nicht wegen zu wenig Teilnehmenden absagen!
  Man weiß nie, wer sich nicht angemeldet hat und dann doch spontan kommen will.
* Über den Event reden hilft dabei, Teilnehmer zu finden. Im Forum, Blogs,
  Social Media, usw.
* Dran denken, Termine im OSM-Kalender immer wieder einzutragen.
* Ihr könnt überlegen zu den Terminen bestimmte Themen einzuplanen oder sogar
  Vorträge anzubieten (wenn der Veranstaltungsort das zuläßt). Das kostet
  Arbeit, aber zieht auch immer mehr Leute an als nur ein Stammtisch.

