/**
 * Pivot Table Summary Customization Sample
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            filterSettings: [{ name: 'Products', items: ['Gloves', 'Helmets', 'Shorts', 'Vests'], type: 'Include' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            enableSorting: true,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            dataSource: window.Pivot_Data,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            expandAll: false,
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            showGrandTotals: true,
            grandTotalsPosition: 'Bottom',
        },
        width: '100%',
        height: 500,
        gridSettings: { columnWidth: 140 }
    });
    pivotObj.appendTo('#PivotView');

    var radioButton = new ej.buttons.RadioButton({ label: 'Row', name: 'total', value: 'Row', change: onChange });
    radioButton.appendTo('#summary-radio1');
    radioButton = new ej.buttons.RadioButton({ label: 'Column', name: 'total', value: 'Column', change: onChange });
    radioButton.appendTo('#summary-radio2');
    radioButton = new ej.buttons.RadioButton({ label: 'Both', name: 'total', value: 'Both', change: onChange });
    radioButton.appendTo('#summary-radio3');
    radioButton = new ej.buttons.RadioButton({ label: 'None', name: 'total', value: 'None', checked: true, change: onChange });
    radioButton.appendTo('#summary-radio4');

    var radioButton1 = new ej.buttons.RadioButton({ label: 'Top', name: 'position', value: 'Top', change: onChange1 });
    radioButton1.appendTo('#summary-radio5');
    radioButton1 = new ej.buttons.RadioButton({ label: 'Bottom', name: 'position', value: 'Bottom', checked: true, change: onChange1 });
    radioButton1.appendTo('#summary-radio6');

    var fields = [
        { Name: 'Country' },
        { Name: 'Year' }
    ];
    var valuesddl = new ej.dropdowns.MultiSelect({
        dataSource: fields,
        mode: 'CheckBox',
        showDropDownIcon: true,
        showClearButton: false,
        enableSelectionOrder: false,
        fields: { text: 'Name' },
        placeholder: 'Select fields to hide its sub-totals',
        select: function (args) {
            for (var i = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
                if ((pivotObj.dataSourceSettings.columns[i].name || pivotObj.dataSourceSettings.columns[i].caption) === args.itemData.Name) {
                    pivotObj.dataSourceSettings.columns[i].showSubTotals = false;
                }
            }
            for (var j = 0; j < pivotObj.dataSourceSettings.rows.length; j++) {
                if ((pivotObj.dataSourceSettings.rows[j].name || pivotObj.dataSourceSettings.rows[j].name) === args.itemData.Name) {
                    pivotObj.dataSourceSettings.rows[j].showSubTotals = false;
                }
            }
        },
        removed: function (args) {
            for (var i = 0; i < pivotObj.dataSourceSettings.columns.length; i++) {
                if ((pivotObj.dataSourceSettings.columns[i].name || pivotObj.dataSourceSettings.columns[i].caption) === args.itemData.Name) {
                    pivotObj.dataSourceSettings.columns[i].showSubTotals = true;
                }
            }
            for (var j = 0; j < pivotObj.dataSourceSettings.rows.length; j++) {
                if ((pivotObj.dataSourceSettings.rows[j].name || pivotObj.dataSourceSettings.rows[j].name) === args.itemData.Name) {
                    pivotObj.dataSourceSettings.rows[j].showSubTotals = true;
                }
            }
        },
        open: function (args) {
            args.popup.element.querySelector(".e-filter-parent").style.display = 'none';
        }
    });
    valuesddl.appendTo('#summary-values');
    function onChange(args) {
        if (args.value === 'None') {
            pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: false } }, true);
            pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
            pivotObj.setProperties({ dataSourceSettings: { showColumnGrandTotals: true } }, true);
            pivotObj.dataSourceSettings.showGrandTotals = true;
        }
        else {
            pivotObj.setProperties({ dataSourceSettings: { showGrandTotals: true } }, true);
            pivotObj.setProperties({ dataSourceSettings: { showRowGrandTotals: true } }, true);
            pivotObj.setProperties({ dataSourceSettings: { showColumnGrandTotals: true } }, true);
            if (args.value === 'Column') {
                pivotObj.dataSourceSettings.showColumnGrandTotals = false;
            }
            else if (args.value === 'Row') {
                pivotObj.dataSourceSettings.showRowGrandTotals = false;
            }
            else if (args.value === 'Both') {
                pivotObj.dataSourceSettings.showGrandTotals = false;
            }
        }
    }
    function onChange1(args) {
        if (args.value === 'Top') {
            pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Bottom' } }, true);
            pivotObj.dataSourceSettings.grandTotalsPosition = 'Top';
        }
        else if (args.value === 'Bottom') {
            pivotObj.setProperties({ dataSourceSettings: { grandTotalsPosition: 'Top' } }, true);
            pivotObj.dataSourceSettings.grandTotalsPosition = 'Bottom';
        }
    }
};
