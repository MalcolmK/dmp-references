var shorttags = require("../helper_modules/shorttags.js");

var referenceEntry = "";
var shortHands = {
    "date-of-consultancy" : "doc",
    "date-of-publishment" : "dop",
    "document-title" : "title",
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

    // Add date of consult.
    addDateOfConsultancy($reference);

    // Add source.
    addURL($reference);

    return referenceEntry;
}

function addSeperator(seperator) {
    if (typeof seperator === 'undefined') {
        seperator = ". "
    }

    referenceEntry += seperator;
}

function addDateOfConsultancy($reference) {
    if (shorties.hasUsedTag("date-of-consultancy")) {
        var dateOfConsultancy = shorties.getAttribute("date-of-consultancy");
        referenceEntry += "Geraadpleegd op " + dateOfConsultancy;
        addSeperator(", ");
    }
}

function addDateOfPublishment($reference) {
    if (shorties.hasUsedTag("date-of-publishment")) {
        var dateOfPublishment = shorties.getAttribute("date-of-publishment");
        referenceEntry += "(" + dateOfPublishment + ")";
        addSeperator();
    }
}

function addDocumentTitle($reference) {
    if (shorties.hasUsedTag("document-title")) {
        var title = shorties.getAttribute("document-title");
        referenceEntry += "<i>" + title + "</i>";
        addSeperator();
    }
}

function addAuthor($reference) {
    if (shorties.hasUsedTag("author")) {
        var author = shorties.getAttribute("author");
        referenceEntry += author;
        addSeperator(" ");
    }
}

function addURL($reference) {
    if (shorties.hasUsedTag("url")) {
        var url = shorties.getAttribute("url");
        referenceEntry += "van " + url;
        addSeperator("");
    }
}
