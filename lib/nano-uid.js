"use strict";

/**
 * This https://github.com/phuu/nano-uid/blob/master/lib/memorizer.js
 * is what is used to look like. I nuked it because it was broken and
 * the last commit was 2013. I would replace it within the project entirely
 * but time constraints. Will circle back round to fix this properly.
 * Until then...
 *
 * Dave <3
 */

module.exports = () => {

  var uid = {
    generate: (length, cb) => {
      const str = Date.now().toString(36).split("").sort(() => .5 >= Math.random()).join("").substr(0, length || 5);

      return cb(null, str);
    },

    // Nuked.
    end: () => ({})

  };

  return uid;

};
