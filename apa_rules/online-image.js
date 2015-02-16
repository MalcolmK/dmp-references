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

function addSeparator(separator) {
    if (typeof separator === 'undefined') {
        separator = ". "
    }

    referenceEntry += separator;
}

function addDateOfConsultancy($reference) {
    if ($reference.attr("date-of-consultancy")) {
        referenceEntry += "Gedownload op " + $reference.attr("date-of-consultancy");
        addSeparator(", ");
    }
}

function addDateOfPublishment($reference) {
    if ($reference.attr("date-of-publishment")) {
        referenceEntry += "(" + $reference.attr("date-of-publishment") + ")";
        addSeparator();
    }
}

function addDocumentTitle($reference) {
    if ($reference.attr("document-title")) {
        referenceEntry += "<i>" + $reference.attr("document-title") + "</i> [Online afbeelding]";
        addSeparator();
    }
}

function addAuthor($reference) {
    if ($reference.attr("author")) {
        referenceEntry += $reference.attr("author");
        addSeparator(" ");
    }
}

function addURL($reference) {
    if ($reference.attr('url')) {
        referenceEntry += "van " + $reference.attr('url');
        addSeparator("");
    }
}
