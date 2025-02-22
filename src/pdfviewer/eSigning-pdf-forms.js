/* jshint esversion: 11 */
var currentUser = 'andrew@mycompany.com';
var isStatus = false;
var isPreventChange = false;
var finishedBackground = '#daeaf7ff';
var anneBackground = '#eff7ef';
var andrewBackground = '#ffefef';
this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer({
        documentPath: "https://cdn.syncfusion.com/content/pdf/eSign_filling.pdf",
        resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
        serviceUrl: 'https://services.syncfusion.com/js/production/api/pdfviewer'
    });
    viewer.enableToolbar = false;
    viewer.enableNavigationToolbar = false;
    viewer.enableAnnotationToolbar = false;
    viewer.designerMode = true;
    viewer.downloadFileName = 'eSign_filling.pdf';

    viewer.appendTo('#pdfViewer');
    viewer.documentLoad = function () {
        currentUser = "andrew@mycompany.com";
        viewer.magnification.fitToPage();
        viewer.designerMode = false;
        updateUserFormField();
    };
    var toolbarObj = new ej.navigations.Toolbar({
        overflowMode: 'Popup',
        cssClass: 'template',
        items: [
            {
                type: 'Input',
                align: 'Left',
                template:
                    "<div id='e-pv-e-sign-user-field' style='width: 200px;'><div class='e-pv-e-sign-user-dropdown' style='width: 200px;'> <input id='userMenu' width='200px'></input></div></div>",
            },

            {
                type: 'Input', align: 'Right', template: "<div> <button id='e-pv-e-sign-finish-btn'>Finish Signing</button></div>"
            },
        ]
    });
    toolbarObj.appendTo('#e-pv-e-sign-toolbar_user_viewer');
    var userDetails = [
        {
            Name: 'Andrew Fuller',
            Eimg: 'profile2',
            Mail: 'andrew@mycompany.com',
            fieldIds: [],
        },
        {
            Name: 'Anne Dodsworth',
            Eimg: 'profile1',
            Mail: 'anne@mycompany.com',
            fieldIds: [],
        }
    ];
    var listObj = new ej.dropdowns.DropDownList({
        dataSource: userDetails,
        fields: { text: 'Mail', value: 'Eimg', fieldIds: 'fieldIds' },
        index: 0,
        width: '200px',
        popupWidth: '215px',
        itemTemplate: function(data) {
          return '<div style="display:flex;">' +
                 '<img class="e-pv-e-sign-empImage" style="border: 1px solid ' + getBorderColor(data.Mail) + ';" src="styles/images/pdfviewer/employees/' + data.Eimg + '.png" alt="employee" />' +
                 '<div>' +
                 '<div class="ename" style="font-size:14px;height:18px;">' + data.Name + '</div>' +
                 '<div class="mail" style="font-size:12px;">' + data.Mail + '</div>' +
                 '</div>' +
                 '</div>';
        },
        valueTemplate: function(data) {
          return '<div style="display:flex;">' +
                 '<img class="value" style="border: 1px solid ' + getBorderColor(data.Mail) + '; margin: 0px 0px 5px 15px; border-radius:50%;" src="styles/images/pdfviewer/employees/' + data.Eimg + '.png" height="32px" width="32px" alt="employee" />' +
                 '<div style="margin-top: 3px;">' +
                 '<div class="name" style="font-size:12px;margin-left: 12px;">' + data.Name + '</div>' +
                 '<div class="mail" style="font-size:8px;margin-left: 12px;">' + data.Mail + '</div>' +
                 '</div>' +
                 '</div>';
        }
    });
    listObj.appendTo("#userMenu");

    function getBorderColor(email) {
        return email === 'andrew@mycompany.com' ? 'red' : 'green';
    }

    listObj.select = function (args) {
        currentUser = args.itemData.Mail;
        updateUserFormField();
        if (isPreventChange) {
            args.cancel = true;
        }
    };

    var finishBtnObj = new ej.buttons.Button({
        cssClass: 'e-outline',
    });
    finishBtnObj.appendTo('#e-pv-e-sign-finish-btn');
    finishBtnObj.disabled = true;

    finishBtnObj.element.onclick = function(){
        for (var formField of viewer.formFieldCollections) {
            viewer?.formDesignerModule.updateFormField(formField, { backgroundColor: finishedBackground });
        }
        viewer.serverActionSettings.download = "FlattenDownload";
        viewer.download();
        viewer.serverActionSettings.download = "Download";
    };

    viewer.downloadEnd = function (args) {
        viewer.load(args.downloadDocument, null);
        finishBtnObj.disabled = true;
        listObj.enabled = false;
    };

    var dialogObj = new ej.popups.Dialog({
        width: '350px',
        minHeight: '50px',
        isModal: true,
        visible: isStatus,
        buttons: [{ click: dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } }]
    });
    dialogObj.appendTo('#dialog');

    function dlgButtonClick() {
        isStatus = false;
        dialogObj.hide();
    }

    function updateUserFormField() {
        var otherFormFieldDetails = viewer.formFieldCollections.filter(function(formField) {
            return formField.customData.author === "anne";
        });
        var currentFormFieldDetails = viewer.formFieldCollections.filter(function(formField) {
            return formField.customData.author === "andrew";
        });
        if (currentUser === 'andrew@mycompany.com') {
            otherFormFieldDetails.forEach(function(field) {
                if (field.value !== '') {
                    var mainFieldUpdateData = {
                        backgroundColor: finishedBackground,
                        isReadOnly: true
                    };

                    viewer.formDesigner.updateFormField(field, mainFieldUpdateData);

                    currentFormFieldDetails.forEach(function(currentField) {
                        var currentFieldUpdateData = {
                            backgroundColor: andrewBackground,
                            isReadOnly: true
                        };

                        viewer.formDesigner.updateFormField(currentField, currentFieldUpdateData);
                    });
                } else {
                    currentFormFieldDetails.forEach(function(currentField) {
                        var currentFieldUpdateData = {
                            backgroundColor: andrewBackground,
                        };

                        viewer.formDesigner.updateFormField(currentField, currentFieldUpdateData);
                    });
                }
                var otherUserField = document.getElementById(field.id + '_content_html_element');
                if (otherUserField) {
                    var currentFormField = viewer.formFieldCollections.find(function(formField) {
                        return formField.id === field.id;
                    });
                    if (currentFormField.type !== 'DropDown' && otherUserField) {
                        if (!currentFormField.value) {
                            viewer.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' });
                        }
                    } else {
                        if (currentFormField.value.length !== 0 && otherUserField) {
                            viewer.formDesignerModule.updateFormField(currentFormField, { visibility: 'hidden' });
                        }
                    }
                }
            });
        } else {
            validation(currentFormFieldDetails);
            if (!isStatus) {
                currentFormFieldDetails.forEach(function(field) {
                    var currentFieldUpdateData = {
                        backgroundColor: finishedBackground,
                        isReadOnly: true
                    };
                    viewer.formDesigner.updateFormField(field, currentFieldUpdateData);

                    otherFormFieldDetails.forEach(function(otherField) {
                        var otherFieldUpdateData = {
                            backgroundColor: anneBackground,
                            isReadOnly: false
                        };

                        viewer.formDesigner.updateFormField(otherField, otherFieldUpdateData);
                    });
                });
                otherFormFieldDetails.forEach(function(field) {
                    viewer.formDesignerModule.updateFormField(field, { visibility: 'visible' });
                });
            }
        }
    }

    function validation(args) {
        var errorMessage = "Required Field(s): ";
        var forms = args;
        var flag = false;
        var allFieldsValid = true;
        var radioGroupName = "";
    
        for (var i = 0; i < forms.length; i++) {
            var text = "";
            if (forms[i].isRequired) {
                if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                    text = forms[i].name;
                    allFieldsValid = false;
                } else if (forms[i].type == "RadioButton" && flag == false) {
                    radioGroupName = forms[i].name;
                    if (forms[i].isSelected == true)
                        flag = true;
                } else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" && (forms[i].value === "" || ((typeof args.newValue === 'string') && args.newValue === ""))) {
                    text = forms[i].name;
                    allFieldsValid = false;
                } else if (forms[i].type.toString() == "DropdownList" && forms[i].value.length == 0) {
                    text = forms[i].name;
                    allFieldsValid = false;
                }
                if (text != "") {
                    if (errorMessage == "Required Field(s): ") {
                        errorMessage += text;
                    } else {
                        errorMessage += ", " + text;
                    }
                }
            }
        }
        if (!flag && radioGroupName != "") {
            if (errorMessage == "Required Field(s): ")
                errorMessage += radioGroupName;
            else
                errorMessage += ", " + radioGroupName;
            allFieldsValid = false;
        }
        if (errorMessage != "Required Field(s): ") {
            isStatus = true;
            dialogObj.content = errorMessage;
            dialogObj.show();
            isPreventChange = true;
        } else {
            isStatus = false;
            isPreventChange = false;
        }
    }
    
    viewer.formFieldPropertiesChange = function (args) {
        var errorMessage = "Required Field(s): ";
        var forms = viewer.formFieldCollections;
        var flag = false;
        var allFieldsValid = true;
        var radioGroupName = "";
    
        for (var i = 0; i < forms.length; i++) {
            var text = "";
            if (forms[i].isRequired) {
                if (forms[i].type.toString() == "Checkbox" && forms[i].isChecked == false) {
                    text = forms[i].name;
                    allFieldsValid = false;
                } else if (forms[i].type == "RadioButton" && flag == false) {
                    radioGroupName = forms[i].name;
                    if (forms[i].isSelected == true)
                        flag = true;
                } else if (forms[i].type.toString() != "Checkbox" && forms[i].type != "RadioButton" && (forms[i].value === "" || ((typeof args.newValue === 'string') && args.newValue === ""))) {
                    text = forms[i].name;
                    allFieldsValid = false;
                } else if (forms[i].type.toString() == "DropdownList" && forms[i].value.length == 0) {
                    text = forms[i].name;
                    allFieldsValid = false;
                }
                if (text != "") {
                    if (errorMessage == "Required Field(s): ") {
                        errorMessage += text;
                    } else {
                        errorMessage += ", " + text;
                    }
                }
            }
        }
        if (!flag && radioGroupName != "") {
            if (errorMessage == "Required Field(s): ")
                errorMessage += radioGroupName;
            else
                errorMessage += ", " + radioGroupName;
            allFieldsValid = false;
        }
        finishBtnObj.disabled = !allFieldsValid;
    };    
};