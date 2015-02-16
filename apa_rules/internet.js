var referenceEntry = "";
var shortHands = {
    "date-of-consultancy" : "doc",
    "date-of-publishment" : "dop",
    "document-title" : "title",
};

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
    if (hasDateOfConsultancy($reference)) {
        var dateOfConsultancy = getAttribute($reference, "date-of-consultancy");
        referenceEntry += "Geraadpleegd op " + dateOfConsultancy;
        addSeperator(", ");
    }
}

function hasDateOfConsultancy($reference) {
    return hasUsedTag($reference, "date-of-consultancy");
}

function addDateOfPublishment($reference) {
    if (hasDateOfPublishment($reference)) {
        var dateOfPublishment = getAttribute($reference, "date-of-publishment");
        referenceEntry += "(" + dateOfPublishment + ")";
        addSeperator();
    }
}

function hasDateOfPublishment($reference) {
    return hasUsedTag($reference, "date-of-publishment");
}

function addDocumentTitle($reference) {
    if (hasUsedTag($reference, "document-title")) {
        var title = getAttribute($reference, "document-title");
        referenceEntry += "<i>" + title + "</i>";
        addSeperator();
    }
}

function addAuthor($reference) {
    if (hasUsedTag($reference, "author")) {
        var author = getAttribute($reference, "author");
        referenceEntry += author;
        addSeperator(" ");
    }
}

function addURL($reference) {
    if (hasUsedTag($reference, "url")) {
        var url = getAttribute($reference, "url");
        referenceEntry += "van " + url;
        addSeperator("");
    }
}

function getAttribute($reference, fullTag) {
    if (hasUsedFullTag($reference, fullTag)) {
        return $reference.attr("" + fullTag + "");
    }

    if (hasUsedShortTag($reference, fullTag)) {
        var shortTag = getShortTag(fullTag);
        return $reference.attr("" + shortTag + "");
    }
}

function hasUsedTag($reference, fullTag) {
    if ($reference.attr(fullTag)) {
        return true;
    }

    return hasUsedShortTag($reference, fullTag);
}

function hasUsedFullTag($reference, fullTag) {
    if ($reference.attr(fullTag)) {
        return true;
    }
    return false;
}

function hasUsedShortTag($reference, fullTag) {
    var shortTag = getShortTag(fullTag);
    if ($reference.attr(shortTag)) {
        return true;
    }
    return false;
}

function getShortTag(fullTag) {
    return shortHands[fullTag];
}
