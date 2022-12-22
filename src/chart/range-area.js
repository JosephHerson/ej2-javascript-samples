/**
 * Sample for Range Area series
 */
this.default = function () {
    var series1 = [];
    var value = 35;
    var point1;
    for (var i = 1; i < 360; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        }
        else {
            value -= Math.random();
        }
        point1 = {
            x: new Date(2015, 0, i),
            high: value, low: value - 10
        };
        series1.push(point1);
    }
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime', labelFormat: 'dd MMM',  edgeLabelPlacement: (ej.base.Browser.isDevice) ? 'Shift' : 'Hide', majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}˚C', minimum: -10, maximum: 25, interval: 5, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLine: { width: 0 }
        },
        //Initializing Zooming
      
        //Initializing Chart Series
        series: [
            {
                type: 'RangeArea',
                enableTooltip: true,
                dataSource: window.chartDatas,
                xName: 'x', high: 'high', low: 'low', opacity: 0.4,
                border: { width:2 },
                marker: {
                    visible: false,
                    height: 7,
                    width: 7,
                    opacity: 1,
                    dataLabel: { visible: false, position: 'Outer' },
                }
            },
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        tooltip: { enable: true, shared: false, format:'Temperature : <b>${point.low} - ${point.high}</b>', header :'<b>${point.x}</b>' }, 
        title: 'Temperature Variation by Month',
        legendSettings: { visible: false },
          
           seriesRender: function (args) {
            var areathemes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast'];
            var borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4'];
            args.series.border.color = borderColor[areathemes.indexOf(args.series.chart.theme.toLowerCase())];
        },
        load: function (args)  {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + 
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
        },
           
    });
    chart.appendTo('#range-container1');
};
