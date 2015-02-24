# Documark References

Documark plugin for listing references.

[![npm version](https://badge.fury.io/js/dmp-references.svg)](http://badge.fury.io/js/dmp-references)
[![dependency status](https://david-dm.org/malcolmk/dmp-references.svg)](https://david-dm.org/malcolmk)

## Usage

1. Load the references plugin:

    ```yaml
    plugins:
      - dmp-references
    ```

2. Add a `reference-list` element to your document:

    ```jade
    h1 References
    reference-list
    ```

3. Use references throughout your document as explained below.

    They will be collected and added as to a ordered list (`ol`) that is appended to the `reference-list` element.

## Reference types

The following types of references are supported:
- [Internet](#reference-type-internet)
- [Book](#reference-type-book)
- [Magazine](#reference-type-magazine)
- [Newspaper article](#reference-type-newspaper)
- [Not published reference](#reference-type-not_published)
- [Online image](#reference-type-online_image)

### Source

There are different types of references. As of now not all types of references are supported yet. Below there is a list with all the supported types and how they should be used.

### General structure

First of all, the general structure of a reference. A reference to a source has the following structure:

```jade
reference(
    reference-type="[reference-type]"
    [optional attributes])
```

The "optional attributes" are relative to the specific reference types. These types are below. There is no specific sequence needed when defining the optional attributes. For some optional attributes, there are also shorthands available.

<a name="reference-type-internet"></a>
#### [Internet](http://specials.han.nl/themasites/studiecentra/verwerken-en-delen/bronnen-vermelden/apa-normen/#comp00004b902de60000000b27453d)

##### Full example

```jade
reference(
    reference-type="internet"
    date-of-consultancy="13 februari 2015"
    document-title="Aandachtsgebieden"
    date-of-publishment="2013, september"
    author="Kindermans, M."
    url="https://www.tno.nl/nl/aandachtsgebieden/")
```


##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
|__Author:__| `author` | `auth` | Name of the person who wrote this reference. |
|__Date of publishment:__| `date-of-publishment` | `dop` | Date when this reference was published. |
|__Document title:__| `document-title` | `title` | The title of the reference. |
|__Date of consultancy:__| `date-of-consultancy` | `doc` | The date when you  consulted this reference. |
|__Location of the reference:__| `url` | | The url to the internet source. |

<a name="reference-type-book"></a>
#### Book

##### Full example

```jade
reference(
    reference-type="book"
    author="Adriaansen, M. & Caris, J."
    date-of-publishment="2011"
    document-title="Elementaire sociale vaardigheden"
    edition="3e druk"
    location="Houten"
    publisher="Bohn Stafleu Van Loghum")
```

##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
|__Author:__ |`author` | `auth` | Name of the person who wrote this reference.|
|__When the author and the editor are the same:__ |`author-is-editor` | `editor` | When the author and the editor are the same person, add the title of an editor in the same language as the title of the book to the attributes:|
|__Date of publishment:__ |`date-of-publishment` | `dop` | Date when this reference was published.|
|__Document title:__ |`document-title` | `title` | The title of the reference.|
|__Edition:__ |`edition` | `ed` | It is possible to add the used edition, this will be appended to the title within brackets.|
|__Publisher:__ |`publisher` | `pub` | The name of the publisher of this reference.|
|__Location of publishment:__ | `location` | `loc` | The location where the reference was published.|

<a name="reference-type-magazine"></a>
#### Magazine

##### Full example

```jade
reference(
    reference-type="magazine-article"
    author="Ouwekerk, D. van, & Grinten, J. van der."
    date-of-publishment="2014"
    article-title="De kracht van zacht: Wat mannen over vrouwelijke vergaderstijlen kunnen leren"
    document-title="Interne Communicatie"
    volume="3"
    edition="4"
    page-numbers="11-13")
```

##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
| __Author:__ | `author` | `auth` | Name of the person who wrote this reference. |
| __Date of publishment:__ | `date-of-publishment` | `dop` | Year when this reference was published. |
| __Name of the magazine:__ | `document-title` | `doc-title` | The title of the magazine itself. |
| __Title of this specific article:__ | `article-title` | `art-title` | The title of the article that is used. |
| __Volume:__ | `volume` | `vol` | Volume of the magazine. In general this is the number of the year it is published. |
| __Edition:__ | `edition` | `ed` | The edition of the magazine. In general this is the number of the edition in this volume (this year). |
| __Page numbers:__ | `page-numbers` | `p` | Generally you are not using the whole magazine. So use this attribute to tell which pages are used. |

<a name="reference-type-newspaper"></a>
#### Newspaper article

##### Full example

```jade
reference(
    reference-type="newspaper-article"
    author="Havelaar, R."
    date-of-publishment="2006, 13 december"
    article-title="Student leert minder uren omdat hij werkt"
    document-title="De Volkskrant"
    page-numbers="13")
```

##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
| __Author:__ | `author` | `auth` | Name of the person who wrote this reference. |
| __Date of publishment:__ | `date-of-publishment` | `dop` | Year when this reference was published. |
| __Name of the newspaper:__ | `document-title` | `doc-title` | The title of the magazine itself. |
| __Title of this specific article:__ | `article-title` | `art-title` | The title of the article that is used. |
| __Page numbers:__ | `page-numbers` | `p` | Generally you are not using the whole magazine. So use this attribute to tell which pages are used. |

<a name="reference-type-not_published"></a>
#### Not published reference

##### Full example

```jade
reference(
        reference-type="not-published"
        author="Drogendijk, A. N., et al."
        date-of-publishment="2004"
        document-title="Leidende en misleidende verwachtingen: Een kwalitatief onderzoek onder Turkse getroffenen van de vuurwerkramp Enschede omtrent de psychosociale nazorg"
        publisher="Instituut voor Psychotrauma")
```

##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
| __Author:__ | `author` | `auth` | Name of the person who wrote this reference. |
| __Date of publishment:__ | `date-of-publishment` | `dop` | Year when this reference was published. |
| __Name of the document:__ | `document-title` | `title` | The title of the publication. |
| __Publisher:__ | `publisher` | `pub` | The name of the publisher of this reference. |
| __Location of publishment:__ | `location` | `title` | The location where the reference was published. |
| __Description of the document:__ | `description` | `descr` | Provide a description of the reference. |

<a name="reference-type-online_image"></a>
#### Online image

##### Full example

```jade
reference(
        reference-type="online-image"
        author="HAN."
        date-of-publishment="2011, 24 februari"
        document-title="Studenten vragen Pieter van den Hoogenband hemd van het lijf bij Topsportuur"
        date-of-consultancy="25 februari 2011"
        url="http://www.han.nl/gebied/sport-beweging/nieuws/nieuws/studenten-vragen-pieter-v/_images/hoogenband.jpg/large")
```

##### Optional attributes

| Element | Attribute | Short | Description |
|:--------|:----------|:------|:------------|
| __Author:__ | `author` | `auth` | Name of the person who wrote this reference. |
| __Date of publishment:__ | `date-of-publishment` | `dop` | Date when this reference was published. |
| __Document title:__ | `document-title` | `title` | The title of the reference. |
| __Date of consultancy:__ | `date-of-consultancy` | `doc` | The date when you consulted this reference. |
| __Location of the reference:__ | `url` | `url` | The url to the internet source. |

## Output

The final HTML structure will look something like this:

At the place where the reference was made, so in your text, the following will be placed:

```html
<sup>
    <a href="#reference-entry-[index]">[index]</a>
</sup>
```

At the place of the `[index]`, there will be the index. So when e.g. this is the reference for the second index, it will look like this:

```html
<sup>
    <a href="#reference-entry-2">2</a>
</sup>
```

At the place with the list of references, the final html will look something like this:

```html
<reference-list>
    <ol>
        <li>
            <a class="reference-entry-style" name="reference-entry-1">[Reference 1 text]</a>
        </li>
        <li>
            <a class="reference-entry-style" name="reference-entry-2">[Reference 2 text]</a>
        </li>
        <li>
            <a class="reference-entry-style" name="reference-entry-3">[Reference 3 text]</a>
        </li>
    </ol>
</reference-list>
```
