var fs     = require('fs');
var path   = require('path');
var crypto = require('crypto');

// These file include the apa rules.
var apaInternet     = require("./apa_rules/internet.js");
var apaBook         = require("./apa_rules/book.js");
var apaMagazine     = require("./apa_rules/magazine.js");
var apaNewspaper    = require("./apa_rules/newspaper.js");
var apaNotPublished = require("./apa_rules/not-published.js");
var apaOnlineImage  = require("./apa_rules/online-image.js");

var indexHolder = [];

module.exports = function dmpReferences ($, document, cb) {
    var options     = document.config().pdf;
    var $references = $('reference-list');
    var hasList     = ($references.length > 0);

    $.root().append('<link rel="stylesheet" type="text/css" href="file://' + path.join(__dirname, 'assets', 'style.css') + '"/>');

    if (hasList) {
        var $list = $('<ol/>');
        var index = 1;
        $('reference').each(function () {
            var $reference = $(this);

            // Build the reference line.
            var $referenceEntry = buildReferenceLine($reference);

            if (isDuplicateReference($referenceEntry)) {
                var referenceIndex = getReferenceIndex($referenceEntry);
                var inlineReferenceItem = getInlineReferenceItem(referenceIndex);
            } else {
                if ($referenceEntry !== "") {
                    var referenceEntryItem = getReferenceEntryItem(index, $referenceEntry);
                    var inlineReferenceItem = getInlineReferenceItem(index);

                    $list.append(referenceEntryItem);

                    addReferenceHolder($referenceEntry, index);

                    index += 1;
                }
            }
            $reference.after(inlineReferenceItem);
            $reference.remove();
        });

        // console.log($list);
        $references.append($list);
    }

    cb();
}

function getReferenceEntryItem(index, $referenceEntry) {
    return '<li><a class="reference-entry-style" name="reference-entry-' + index + '">' + $referenceEntry + '</a></li>';
}

function getInlineReferenceItem(refIndex) {
    return '<sup><a href="#reference-entry-' + refIndex + '">' + refIndex + '</a></sup>'
}

function addReferenceHolder($referenceEntry, index) {
    var referenceObject = {};
    var hashedEntry = hashString($referenceEntry);
    indexHolder[hashedEntry] = index;
}

function hashString(inputString) {
    return crypto.createHash('md5').update(inputString).digest('hex');
}

function isDuplicateReference($referenceEntry) {
    var hashedEntry = hashString($referenceEntry);
    return hashedEntry in indexHolder;
}

function getReferenceIndex($referenceEntry) {
    var hashedEntry = hashString($referenceEntry);
    return indexHolder[hashedEntry];
}

function buildReferenceLine($reference) {
    var $referenceEntry = false;
    var referenceType = $reference.attr("reference-type");

    if (! referenceType) {
		referenceType = $reference.attr("type");
    }

    if (! referenceType) {
        return;
    }

    // Return the reference entry based on the type of reference.
    if (referenceType == "internet") {
        return apaInternet($reference);
    }

    if (referenceType == "book") {
        return apaBook($reference);
    }

    // if (referenceType == "book-chapter") {
    //     return apaBookChapter($reference);
    // }

    if (referenceType == "magazine-article") {
        return apaMagazine($reference);
    }

    if (referenceType == "newspaper-article") {
        return apaNewspaper($reference);
    }

    if (referenceType == "not-published") {
        return apaNotPublished($reference);
    }

    // if (referenceType == "audio-visual") {
    //     return apaAudioVisual($reference);
    // }

    // if (referenceType == "lyrics") {
    //     return apaLyrics($reference);
    // }

    if (referenceType == "online-image") {
        return apaOnlineImage($reference);
    }

    // if (referenceType == "patent") {
    //     return apaPatent($reference);
    // }

    // if (referenceType == "program-or-app") {
    //     return apaProgramOrApp($reference);
    // }

    // if (referenceType == "datafile") {
    //     return apaDatafile($reference);
    // }

    return $referenceEntry;
}
