var shorttags = require("../helper_modules/shorttags.js");

var referenceEntry = "";
var shortHands = {
    "author"              : "auth",
    "date-of-publishment" : "dop",
    "document-title"      : "title",
    "publisher"           : "pub",
    "location"            : "loc",
    "description"         : "descr",
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

function addSeparator(separator) {
    if (typeof separator === 'undefined') {
        separator = ". "
    }

    referenceEntry += separator;
}

function addDateOfPublishment($reference) {
    if (shorties.hasUsedTag("date-of-publishment")) {
        var dateOfPublishment = shorties.getAttribute("date-of-publishment");
        referenceEntry += "(" + dateOfPublishment + ")";
        addSeparator();
    }
}

function addDocumentTitle($reference) {
    if (shorties.hasUsedTag("document-title")) {
        var documentTitle = shorties.getAttribute("document-title");
        referenceEntry += "<i>" + documentTitle + "</i>";

        // If a description is provided, use a different separator.
        separator = ". ";
        if (shorties.hasUsedTag("description")) {
            separator = " ";
        }
        addSeparator(separator);

        addDescription($reference);
    }
}

function addAuthor($reference) {
    if (shorties.hasUsedTag("author")) {
        var author = shorties.getAttribute("author");
        referenceEntry += author;

        addSeparator(" ");
    }
}

function addDescription($reference) {
    if (shorties.hasUsedTag("description")) {
        var description = shorties.getAttribute("description");
        referenceEntry += "(" + description + ")";
        addSeparator();
    }
}

function addPublisher($reference) {
    if (shorties.hasUsedTag("location")) {
        var location = shorties.getAttribute("location");
        referenceEntry += location;

        // If the publisher is also mentioned, use a different separator.
        var separator = ". ";
        if (shorties.hasUsedTag("publisher")) {
            var separator = ": ";
        }

        addSeparator(separator);
    }

    if (shorties.hasUsedTag("publisher")) {
        var publisher = shorties.getAttribute("publisher");
        referenceEntry += publisher;
        addSeparator();
    }
}
