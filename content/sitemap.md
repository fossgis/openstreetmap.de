---
title: Sitemap
---

# Sitemap

{{< sitemap.inline >}}
<table class="sitemap"><tbody>
{{ range sort .Site.AllPages ".File.Path" }}
    <tr><td class="sitemap-source">{{ with .File }}<a href="{{ $.Site.Params.GithubLink }}/content/{{ .Path }}">{{ .Path }}</a>{{ end }}</tt></td><td><a href="{{ .RelPermalink }}">{{ .Title }}</a></td></tr>
{{ end }}
</tbody></table>
{{< /sitemap.inline >}}

