var fs   = require('fs');
var path = require('path');

// These file include the apa rules.
var apaInternet     = require("./apa_rules/internet.js");
var apaBook         = require("./apa_rules/book.js");
var apaMagazine     = require("./apa_rules/magazine.js");
var apaNewspaper    = require("./apa_rules/newspaper.js");
var apaNotPublished = require("./apa_rules/not-published.js");
var apaOnlineImage  = require("./apa_rules/online-image.js");

function buildReferenceLine($reference) {
    var $referenceEntry = false;

    if (! $reference.attr("reference-type")) {
        return;
    }

    var referenceType = $reference.attr("reference-type");

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

module.exports = function dmpReferences ($, document, cb) {
    var options     = document.config().pdf;
    var $references = $('reference-list');
    var hasList     = ($references.length > 0);

    if (hasList)
    {
        var $list = $('<ol/>');
        var index = 1;
        $('reference').each(function () {
            var $reference = $(this);

            // Build the reference line.
            var $referenceEntry = buildReferenceLine($reference);

            if ($referenceEntry !== "") {
                // Add reference to list.
                $list.append('<li>' + $referenceEntry + '</li>');
                $reference.after('<sup>' + index + '</sup>');
                $reference.remove();
                index += 1;
            }
        });

        // console.log($list);
        $references.append($list);
    }

    cb();
};
