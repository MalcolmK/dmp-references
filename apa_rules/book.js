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

        // If this is not the first edition, add the edition.
        addEdition($reference);

        addSeperator();
    }
}

function addEdition($reference) {
    if ($reference.attr("edition")) {
        addSeperator(" ");
        referenceEntry += "(" + $reference.attr("edition") + ")";
    }
}

function addAuthor($reference) {
    if ($reference.attr("author")) {
        referenceEntry += $reference.attr("author");

        addSeperator(" ");
        // If the author is the same as the editor, show it.
        addAuthorIsEditor($reference);
    }
}

function addAuthorIsEditor($reference) {
    if ($reference.attr("author-is-editor")) {
        referenceEntry += "(" + $reference.attr("author-is-editor") + ")";
        addSeperator();
    }
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
