"use strict";

module.exports = () => {

  var uid = {
    /**
     *
     */
    generate: length => {
      const str = Date.now().toString(36).split("").sort(() => .5 >= Math.random()).join("").substr(0, length || 5);

      return cb(null, str);
    },

    // Nuked.
    end: () => ({})

  };

  return uid;

};
