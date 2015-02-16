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
    if ($reference.attr("date-of-publishment")) {
        referenceEntry += "(" + $reference.attr("date-of-publishment") + ")";
        addSeperator();
    }
}

function addDocumentTitle($reference) {
    if ($reference.attr("document-title")) {
        referenceEntry += "<i>" + $reference.attr("document-title") + "</i>";

        // If a description is provided, use a different separator.
        seperator = ". ";
        if (hasDescription($reference)) {
            seperator = " ";
        }
        addSeperator(seperator);

        addDescription($reference);
    }
}

function addAuthor($reference) {
    if ($reference.attr("author")) {
        referenceEntry += $reference.attr("author");

        addSeperator(" ");
    }
}

function addDescription($reference) {
    if (hasDescription($reference)) {
        referenceEntry += "(" + $reference.attr("description") + ")";
        addSeperator();
    }
}

function hasDescription($reference) {
    if ($reference.attr("description")) {
        return true;
    }
    return false;
}

function addPublisher($reference) {
    if ($reference.attr("location")) {
        referenceEntry += $reference.attr("location");

        // If the publisher is also mentioned, use a different seperator.
        var seperator = ". ";
        if ($reference.attr("publisher")) {
            var seperator = ": ";
        }

        addSeperator(seperator);
    }

    if ($reference.attr("publisher")) {
        referenceEntry += $reference.attr("publisher");
        addSeperator();
    }
}
