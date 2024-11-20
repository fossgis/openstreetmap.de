---
title: Themenportal
layout: single
menus:
    main:
        weight: 5
        name: Themenportal
---

# Themenportal

OpenStreetMap ist nicht nur eine Karte. Es ist eine große Sammlung von
Geodaten, die man für viele verschiedene thematische Karten und spezielle
Anwendungen nutzen kann. Diese Seite zeigt eine Auswahl. Die Darstellung
weiterer Themen ist in Arbeit ...

{{< themen.inline >}}
<div class="topics-menu">
{{ range sort (site.Menus.themen) ".Name" -}}
    <a class="topics-menu-item" style="background-image: url({{ .URL | relURL }}thumb.jpg);" href="{{ .URL | relURL }}"><span class="topics-menu-item-name">{{ .Name }}</span></a>
{{ end -}}
</div>
{{< /themen.inline >}}

