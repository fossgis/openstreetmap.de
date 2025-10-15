---
title: "FAQ: Antworten auf häufig gestellte Fragen"
description: "Antworten auf häufig gestellte Fragen rund um OpenStreetMap. Finde Lösungen für gängige Probleme und entdecke nützliche Informationen für Mapper."
linkTitle: FAQ
aliases: [/faq.html]
_build:
    render: always
cascade:
    _build:
        list: local
        publishResources: false
        render: never
---

# FAQ: Antworten auf häufig gestellte Fragen

{{< faq.inline >}}
{{ with .Site.GetPage "/faq" }}
    {{ range .Pages.ByWeight }}
      {{ $icon := printf "icons/%s.svg" .Description }}
<section class="faq-section">
    <h2 class="faq-section-title">{{ if eq hugo.Environment "development" }}{{ .Weight }}. {{ end -}}{{ with resources.Get $icon }}{{ .Content | safeHTML }}{{ end }} {{ .Title }}</h2>
        {{ range .Pages.ByWeight }}
    <details class="faq-item" id="{{ urls.Anchorize .Title }}">
        <summary class="faq-question">{{ if eq hugo.Environment "development" }}{{ .Weight }}. {{ end -}}{{ .Title }} <a class="faq-permalink" href="#{{ urls.Anchorize .Title }}" title="Link zu dieser Frage">&#x1f517;</a></summary>
        {{ .Content }}
    </details>
        {{ end }}
</section>
    {{ end }}
{{ end }}
<script>
const hashid = decodeURI(window.location.hash.substr(1));
if (hashid) {
    document.getElementById(hashid).setAttribute('open', 'open');
}
</script>
{{< /faq.inline >}}

