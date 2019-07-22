var jQuery = require("jquery");
var scrollify = require("jquery-scrollify");

var landingPage = {
  init: function init() {
    var sections = jQuery(".full-height");

    var sectionsArr = jQuery.makeArray(sections);
    console.log(sectionsArr);
  }
};

module.exports = landingPage;
