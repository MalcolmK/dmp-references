var referenceEntry = "";

module.exports = function($reference) {
	// For some reason, the reference entry must be reset.
	referenceEntry = "";

	// Add author.
    addAuthor($reference);

    // Add date of publishment.
    addDateOfPublishment($reference);

    // Add article title.
    addArticleTitle($reference);

    // Add document title.
    addDocumentTitle($reference);

    // Add volume number.
    addVolume($reference);

    // Add page number.
    addPageNumbers($reference);

    return referenceEntry;
}

function addSeperator(seperator) {
    if (typeof seperator === 'undefined') {
        seperator = ". "
    }

    referenceEntry += seperator;
}

function addDateOfPublishment($reference) {
    if ($reference.attr("date-of-publishment")) {
        referenceEntry += "(" + $reference.attr("date-of-publishment") + ")";
        addSeperator();
    }
}

function addArticleTitle($reference) {
    if ($reference.attr("article-title")) {
        referenceEntry += $reference.attr("article-title");
        addSeperator();
    }
}

function addDocumentTitle($reference) {
    if ($reference.attr("document-title")) {
        referenceEntry += "<i>" + $reference.attr("document-title") + "</i>";

        // If there is a volume or page number, use a different seperator.
        seperator = ". ";
        if (hasVolume($reference) || hasPageNumber($reference)) {
            seperator = ", ";
        }
        addSeperator(seperator);
    }
}

function addVolume($reference) {
    if (hasVolume($reference)) {
        referenceEntry += "<i>" + $reference.attr("volume") + "</i>";

        addEdition($reference);

        // If have page numbers, use a different seperator.
        seperator = ". ";
        if (hasPageNumber($reference)) {
            seperator = ", ";
        }
        addSeperator(seperator);
    }
}

function hasPageNumber($reference) {
    if ($reference.attr("page-numbers")) {
        return true;
    }
    return false;
}

function addEdition($reference) {
    if ($reference.attr("edition")) {
        referenceEntry += "(" + $reference.attr("edition") + ")";
    }
}

function hasVolume($reference) {
    if ($reference.attr("volume")) {
        return true;
    }
    return false;
}

function addAuthor($reference) {
    if ($reference.attr("author")) {
        referenceEntry += $reference.attr("author");
        addSeperator(" ");
    }
}

function addPageNumbers($reference) {
    if (hasPageNumber($reference)) {
        referenceEntry += $reference.attr("page-numbers");
        addSeperator();
    }
}
