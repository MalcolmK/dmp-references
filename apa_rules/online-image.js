var shorttags = require("../helper_modules/shorttags.js");

var referenceEntry = "";
var shortHands = {
    "author"              : "auth",
    "date-of-publishment" : "dop",
    "document-title"      : "title",
    "date-of-consultancy" : "doc",
    "url"                 : "url",
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

function addSeparator(separator) {
    if (typeof separator === 'undefined') {
        separator = ". "
    }

    referenceEntry += separator;
}

function addDateOfConsultancy($reference) {
    if (shorties.hasUsedTag("date-of-consultancy")) {
        var dateOfConsultancy = shorties.getAttribute("date-of-consultancy");
        referenceEntry += "Gedownload op " + dateOfConsultancy;
        addSeparator(", ");
    }
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
        referenceEntry += "<i>" + documentTitle + "</i> [Online afbeelding]";
        addSeparator();
    }
}

function addAuthor($reference) {
    if (shorties.hasUsedTag("author")) {
        var author = shorties.getAttribute("author");
        referenceEntry += author;
        addSeparator(" ");
    }
}

function addURL($reference) {
    if ($reference.attr('url')) {
        var url = shorties.getAttribute("url");
        referenceEntry += "van " + url;
        addSeparator("");
    }
}
