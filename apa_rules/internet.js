var referenceEntry = "";

module.exports = function($reference) {
	// For some reason, the reference entry must be reset.
	referenceEntry = "";

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
    if ($reference.attr("date-of-consultancy")) {
        referenceEntry += "Geraadpleegd op " + $reference.attr("date-of-consultancy");
        addSeperator(", ");
    }
}

function addDateOfPublishment($reference) {
    if ($reference.attr("date-of-publishment")) {
        referenceEntry += "(" + $reference.attr("date-of-publishment") + ")";
        addSeperator();
    }
}

function addDocumentTitle($reference) {
    if ($reference.attr("document-title")) {
        referenceEntry += "<i>" + $reference.attr("document-title") + "</i>";
        addSeperator();
    }
}

function addAuthor($reference) {
    if ($reference.attr("author")) {
        referenceEntry += $reference.attr("author");
        addSeperator(" ");
    }
}

function addURL($reference) {
    if ($reference.attr('url')) {
        referenceEntry += "van " + $reference.attr('url');
        addSeperator("");
    }
}
