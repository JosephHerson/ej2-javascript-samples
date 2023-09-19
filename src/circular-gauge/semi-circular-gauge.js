this.default = function () {
    var circulargauge = new ej.circulargauge.CircularGauge({
        moveToCenter: false,
        background:'transparent',
        axes: [{
            hideIntersectingLabel: true,
            startAngle: 270, endAngle: 90,
            lineStyle: { width: 3 },
            labelStyle: {
                position: 'Outside', autoAngle: true,
                font: { fontWeight: 'normal', fontFamily: 'inherit' },
                format: '{value}%'
            }, majorTicks: {
                position: 'Inside', width: 2, height: 15, interval: 10
            }, minorTicks: {
                position: 'Inside', height: 8, width: 1, interval: 2
            },
            radius: '100%', minimum: 0, maximum: 100,
            pointers: [{
                animation: { enable: false },
                value: 30,
                radius: '75%',
                pointerWidth: 7,
                cap: { radius: 8, border: { width: 0 } },
                needleTail: { length: '13%' }
            }]
        }],
        load: function (args) {
            // custom code start
            var selectTheme = location.hash.split('/')[1];
            selectTheme = selectTheme ? selectTheme : 'Material';
            args.gauge.theme = (selectTheme.charAt(0).toUpperCase() +
                selectTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            // custom code end
        }
    });
    circulargauge.appendTo('#gauge');

    var radiusAngle;
    var highlightCheckBox = new ej.buttons.CheckBox({
        change: radiusAngle, checked: false,
    }, '#angle');
        
    highlightCheckBox.change = radiusAngle = function (e) {
        var centerX = document.getElementById('centerX');
        var centerY = document.getElementById('centerY');
        if (e.checked) {
            circulargauge.centerX = null;
            circulargauge.centerY = null;
            circulargauge.moveToCenter = true;
            centerX.disabled = true;
            centerY.disabled = true;
        }
        else {
            circulargauge.centerX = centerX.value + '%';
            circulargauge.centerY = centerY.value + '%';
            centerX.disabled = false;
            centerY.disabled = false;
            circulargauge.moveToCenter = false;
        }
        circulargauge.refresh();
    };
    document.getElementById('start').onpointermove = document.getElementById('start').ontouchmove =
        document.getElementById('start').onchange = function () {
            var min = parseInt(document.getElementById('start').value, 10);
            document.getElementById('rangeStart').innerHTML = min + '°';
            circulargauge.axes[0].startAngle = min;
            circulargauge.refresh();
        };
    document.getElementById('end').onpointermove = document.getElementById('end').ontouchmove =
        document.getElementById('end').onchange = function () {
            var max = parseInt(document.getElementById('end').value, 10);
            document.getElementById('rangeEnd').innerHTML = max + '°';
            circulargauge.axes[0].endAngle = max;
            circulargauge.refresh();
        };
    document.getElementById('radius').onpointermove = document.getElementById('radius').ontouchmove =
        document.getElementById('radius').onchange = function () {
            var max = parseInt(document.getElementById('radius').value, 10);
            document.getElementById('radius1').innerHTML = max + '%';
            circulargauge.axes[0].radius = '' + max + '%';
            circulargauge.refresh();
        };
    document.getElementById('centerX').onpointermove = document.getElementById('centerX').ontouchmove =
        document.getElementById('centerX').onchange = function () {
            if (!highlightCheckBox.checked) {
                var max = parseInt(document.getElementById('centerX').value, 10);
                document.getElementById('center1').innerHTML = max + '%';
                circulargauge.centerX = '' + max + '%';
                circulargauge.refresh();
            }
        };
    document.getElementById('centerY').onpointermove = document.getElementById('centerY').ontouchmove =
        document.getElementById('centerY').onchange = function () {
            if (!highlightCheckBox.checked) {
                var max = parseInt(document.getElementById('centerY').value, 10);
                document.getElementById('center2').innerHTML = max + '%';
                circulargauge.centerY = '' + max + '%';
                circulargauge.refresh();
            }
        };
    var hiddenLabel;
    var labelIntersectionCheckBox = new ej.buttons.CheckBox({
        checked: true,
    }, '#hidelabel');
    labelIntersectionCheckBox.change = hiddenLabel = function (e) {
        circulargauge.axes[0].hideIntersectingLabel = e.checked;
        circulargauge.refresh();
    };
};
