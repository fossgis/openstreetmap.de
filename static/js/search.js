const summaryInclude = 180;
let fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    includeScore: true,
    tokenize: true,
    ignoreLocation: true,
    minMatchCharLength: 3,
    threshold: 0.01,
    keys: [
        {name: 'title', weight: 0.6},
        {name: 'contents', weight: 0.4},
/*        {name: 'title', weight: 0.45},
        {name: 'contents', weight: 0.4},
        {name: 'tags', weight: 0.1},
        {name: 'categories', weight: 0.05}*/
    ]
};

// =============================
// Search
// =============================

function param(name) {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

const inputBox = document.getElementById('search-query');
if (inputBox !== null) {
    const searchQuery = param('q');
    if (searchQuery) {
        inputBox.value = searchQuery || '';
        executeSearch(searchQuery);
    } else {
        document.getElementById('search-results').innerHTML = '<p class="search-results-empty">Bitte geben Sie ein oder mehrere Worte Suchfeld oben ein.</p>';
    }
}

function executeSearch(searchQuery) {
    const loadingElement = document.querySelector('.search-loading')
    loadingElement.style.display = 'block';

    fetch('/index.json').then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        // Examine the text in the response
        response.json().then(function (pages) {
            fuseOptions.minMatchCharLength = searchQuery.length;
            const fuse = new Fuse(pages, fuseOptions);
            const result = fuse.search(searchQuery);
            if (result.length > 0) {
                populateResults(result);
            } else {
                document.getElementById('search-results').innerHTML = '<p class="search-results-empty">Nichts gefunden</p>';
            }
            loadingElement.style.display = 'none';
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    });
}

function populateResults(results) {
    const searchQuery = document.getElementById('search-query').value;
    const searchResults = document.getElementById('search-results');

    // pull template from hugo template definition
    const templateDefinition = document.getElementById('search-result-template').innerHTML;

    results.forEach(function (value, key) {
        const position = Math.max(0, value.matches[0].indices[0][0] - summaryInclude);
//        console.log(value, key, position);
        const contents = value.item.contents;

        const snippet = '&hellip;' + contents.substring(position, position + summaryInclude * 2) + '&hellip;';

        //replace values
        let tags = '';
        if (value.item.tags) {
            value.item.tags.forEach(function (element) {
                tags = tags + "<a href='/tags/" + element + "'>" + "#" + element + "</a> "
            });
        }

        const output = render(templateDefinition, {
            key: key,
            title: value.item.title,
            link: value.item.permalink,
            tags: tags,
            categories: value.item.categories,
            snippet: snippet
        });
        searchResults.innerHTML += output;

        const mark = new Mark(document.getElementById('summary-' + key));
        mark.mark(searchQuery);
    });
}

function render(templateString, data) {
    const conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    let copy = templateString;
    let conditionalMatches = null;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            //valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            //not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], '');
        }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    for (const key in data) {
        const find = '\\$\\{\\s*' + key + '\\s*\\}';
        const re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}

