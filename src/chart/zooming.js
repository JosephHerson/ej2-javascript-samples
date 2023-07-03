
this.default = function () {
    var series1 = [];
    var point1;
    var value = 80;
    var i;
    for (i = 1; i < 500; i++) {
        if (Math.random() > 0.5) {
            value += Math.random();
        }
        else {
            value -= Math.random();
        }
        point1 = { x: new Date(1960, i + 2, i), y: Math.round(value) };
        series1.push(point1);
    }
/**
 * Sample for Zooming in Chart
 */
var selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
var themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast', 'Bootstrap5', 'Tailwind','MaterialDark', 'FabricDark', 'BootstrapDark', 'TailwindDark', 'Bootstrap5Dark', 'Fluent', 'FluentDark', 'Material3', 'Material3Dark'];
var borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#FFD939', '#6355C7', '#4F46E5','#9ECB08', '#4472c4', '#a16ee5', '#8B5CF6', '#8F80F4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF'];
var fill = 'url(#' + selectedTheme + '-gradient-chart)';
    var chart = new ej.charts.Chart({
        chartArea: { border: { width: 0 } },
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Profit ($)',
            rangePadding: 'None', labelFormat: '${value}k',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'SplineArea',
                dataSource: series1,
                name: 'Product X',
                xName: 'x',
                yName: 'y',
                fill: fill,
                animation: { enable: false },
                border: { width: 2, color: borderColor[themes.indexOf(theme)] },
            },
        ],
        //Initializing Zooming
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: 'X',
            showToolbar: true
        },
        //Initializing Chart Title
        title: 'Sales History of Product X',
        legendSettings: { visible: false },
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        theme: theme,
    });
    chart.appendTo('#zoom-container');
};