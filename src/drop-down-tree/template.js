this.default = function () {
var ddtreeObj = new ej.dropdowns.DropDownTree({
  fields: { dataSource: window.templateData, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' },
  headerTemplate: '#headerTemplate',
  itemTemplate: '#itemTemplate',
  footerTemplate: '#footerTemplate',
  width: '350px',
  cssClass:"ddt-template",
  placeholder: 'Select an employee',
  popupHeight: '250px'

});
ddtreeObj.appendTo('#template');
};