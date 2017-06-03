'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        if (window.CP.shouldStopExecution(2)) {
            break;
        }
        var source = arguments[i];
        for (var key in source) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
        window.CP.exitedLoop(1);
    }
    return target;
    window.CP.exitedLoop(2);
};
var COLORS = {
    RED: '#FD5061',
    YELLOW: '#FFCEA5',
    BLACK: '#29363B',
    WHITE: 'white',
    VINOUS: '#A50710'
};
var burst1 = new mojs.Burst({
    left: 0,
    top: 0,
    count: 8,
    radius: { 50: 150 },
    children: {
        shape: 'line',
        stroke: [
            'white',
            '#FFE217',
            '#FC46AD',
            '#D0D202',
            '#B8E986',
            '#D0D202'
        ],
        scale: 1,
        scaleX: { 1: 0 },
        degreeShift: 'rand(-90, 90)',
        radius: 'rand(20, 40)',
        delay: 'rand(0, 150)',
        isForce3d: true
    }
});
var largeBurst = new mojs.Burst({
    left: 0,
    top: 0,
    count: 4,
    radius: 0,
    angle: 45,
    radius: { 0: 450 },
    children: {
        shape: 'line',
        stroke: '#4ACAD9',
        scale: 1,
        scaleX: { 1: 0 },
        radius: 100,
        duration: 450,
        isForce3d: true,
        easing: 'cubic.inout'
    }
});
var CIRCLE_OPTS = {
    left: 0,
    top: 0,
    scale: { 0: 1 }
};
var largeCircle = new mojs.Shape(_extends({}, CIRCLE_OPTS, {
    fill: 'none',
    stroke: 'white',
    strokeWidth: 4,
    opacity: { 0.25: 0 },
    radius: 250,
    duration: 600
}));
var smallCircle = new mojs.Shape(_extends({}, CIRCLE_OPTS, {
    fill: 'white',
    opacity: { 0.5: 0 },
    radius: 30
}));
document.addEventListener('click', function (e) {
    burst1.tune({
        x: e.pageX,
        y: e.pageY
    }).generate().replay();
    largeBurst.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
    largeCircle.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
    smallCircle.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
});