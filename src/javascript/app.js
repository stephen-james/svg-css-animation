var _ = require('underscore');

var twoCirclesSvg = require('../images/two-circles.svg');

var app = {
    boilerplate: true
};

var container = document.getElementById('container');

container.innerHTML = twoCirclesSvg;

module.exports = app;
