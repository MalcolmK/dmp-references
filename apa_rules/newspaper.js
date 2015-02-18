var shorttags = require("../helper_modules/shorttags.js");

var referenceEntry = "";
var shortHands = {
    "author"              : "auth",
    "date-of-publishment" : "dop",
    "document-title"      : "doc-title",
    "article-title"       : "art-title",
    "page-numbers"        : "p",
};

module.exports = function($reference) {
	// For some reason, the reference entry must be reset.
	referenceEntry = "";

    shorties = shorttags($reference, shortHands);

	// Add author.
    addAuthor($reference);

    // Add date of publishment.
    addDateOfPublishment($reference);

    // Add article title.
    addArticleTitle($reference);

    // Add document title.
    addDocumentTitle($reference);

    // Add page number.
    addPageNumbers($reference);

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

function addArticleTitle($reference) {
    if (shorties.hasUsedTag("article-title")) {
        var articleTitle = shorties.getAttribute("article-title");
        referenceEntry += articleTitle;
        addSeparator();
    }
}

function addDocumentTitle($reference) {
    if (shorties.hasUsedTag("document-title")) {
        var documentTitle = shorties.getAttribute("document-title");
        referenceEntry += "<i>" + documentTitle + "</i>";

        // If there is a volume or page number, use a different separator.
        separator = ". ";
        if (shorties.hasUsedTag("page-numbers")) {
            separator = "<i>, </i>";
        }
        addSeparator(separator);
    }
}

function addAuthor($reference) {
    if (shorties.hasUsedTag("author")) {
        var author = shorties.getAttribute("author");
        referenceEntry += author
        addSeparator(" ");
    }
}

function addPageNumbers($reference) {
    if (shorties.hasUsedTag("page-numbers")) {
        var pageNumbers = shorties.getAttribute("page-numbers");
        referenceEntry += "p. " + pageNumbers;
        addSeparator();
    }
}
