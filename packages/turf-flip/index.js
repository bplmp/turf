var coordEach = require('turf-meta').coordEach;

/**
 * Takes input features and flips all of their coordinates
 * from `[x, y]` to `[y, x]`.
 *
 * @module turf/flip
 * @category misc
 * @param {(Feature|FeatureCollection)} input input features
 * @returns {(Feature|FeatureCollection)} a feature or set of features of the same type as `input` with flipped coordinates
 * @example
 * var serbia = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [20.566406, 43.421008]
 *   }
 * };
 *
 * //=serbia
 *
 * var saudiArabia = turf.flip(serbia);
 *
 * //=saudiArabia
 */
module.exports = function (_) {
    // ensure that we don't modify features in-place and changes to the
    // output do not change the previous feature, including changes to nested
    // properties.
    var input = JSON.parse(JSON.stringify(_));

    coordEach(input, function (coord) {
        coord.reverse();
    });
    return input;
};
