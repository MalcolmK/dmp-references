var shorttags = require("../helper_modules/shorttags.js");

var referenceEntry = "";

var shortHands = {
    "date-of-publishment" : "dop",
    "document-title" : "title",
    "edition" : "ed",
    "author" : "auth",
    "author-is-editor" : "editor",
    "location" : "loc",
    "publisher" : "pub",
};

module.exports = function($reference) {
    // For some reason, the reference entry must be reset.
    referenceEntry = "";

    shorties = shorttags($reference, shortHands);

    // Add author.
    addAuthor($reference);

    // Add date of publishment.
    addDateOfPublishment($reference);

    // Add document title.
    addDocumentTitle($reference);

    // Add publisher.
    addPublisher($reference);

    return referenceEntry;
}

function addSeperator(seperator) {
    if (typeof seperator === 'undefined') {
        seperator = ". "
    }

    referenceEntry += seperator;
}

function addDateOfPublishment($reference) {
    if (shorties.hasUsedTag("date-of-publishment")) {
        var dop = shorties.getAttribute("date-of-publishment");
        referenceEntry += "(" + dop + ")";
        addSeperator();
    }
}

function addDocumentTitle($reference) {
    if (shorties.hasUsedTag("document-title")) {
        var title = shorties.getAttribute("document-title");
        referenceEntry += "<i>" + title + "</i>";

        // If this is not the first edition, add the edition.
        addEdition($reference);

        addSeperator();
    }
}

function addEdition($reference) {
    if (shorties.hasUsedTag("edition")) {
        var edition = shorties.getAttribute("edition");
        addSeperator(" ");
        referenceEntry += "(" + edition + ")";
    }
}

function addAuthor($reference) {
    if (shorties.hasUsedTag("author")) {
        var author = shorties.getAttribute("author");
        referenceEntry += author;

        addSeperator(" ");
        // If the author is the same as the editor, show it.
        addAuthorIsEditor($reference);
    }
}

function addAuthorIsEditor($reference) {
    if (shorties.hasUsedTag("author-is-editor")) {
        var authIsEd = shorties.getAttribute("author-is-editor");
        referenceEntry += "(" + authIsEd + ")";
        addSeperator();
    }
}

function addPublisher($reference) {
    if (shorties.hasUsedTag("location")) {
        var loc = shorties.getAttribute("location");
        referenceEntry += loc;

        // If the publisher is also mentioned, use a different seperator.
        var seperator = ". ";
        if (shorties.hasUsedTag("publisher")) {
            var seperator = ": ";
        }

        addSeperator(seperator);
    }

    if (shorties.hasUsedTag("publisher")) {
        var publisher = shorties.getAttribute("publisher");
        referenceEntry += publisher;
        addSeperator();
    }
}
