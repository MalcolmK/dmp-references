module.exports = function($reference, shorttags) {
    var methods = {};

    methods.getAttribute = function(fullTag) {
        if (methods.hasUsedFullTag(fullTag)) {
            return $reference.attr("" + fullTag + "");
        }

        if (methods.hasUsedShortTag(fullTag)) {
            var shortTag = methods.getShortTag(fullTag);
            return $reference.attr("" + shortTag + "");
        }
    };

    methods.hasUsedTag = function(fullTag) {
        if ($reference.attr(fullTag)) {
            return true;
        }

        return methods.hasUsedShortTag(fullTag);
    };

    methods.hasUsedFullTag = function(fullTag) {
        if ($reference.attr(fullTag)) {
            return true;
        }
        return false;
    };

    methods.hasUsedShortTag = function(fullTag) {
        var shortTag = methods.getShortTag(fullTag);
        if ($reference.attr(shortTag)) {
            return true;
        }
        return false;
    };

    methods.getShortTag = function(fullTag) {
        return shorttags[fullTag];
    }

    return methods;
}
