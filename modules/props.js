define({
    properties: [
        {
            "FieldType": "Text",
            "Properties": {
                "DefaultValue": "zxc",
                "MaxValueCharacters": 240,
                "TooltipMessage": "Text control",
                "Required": false
            }
    }
    , {
            "FieldType": "Number",
            "Properties": {
                "DefaultValue": 2,
                "MaxDigits": 10,
                "TooltipMessage": "Number control",
                "Required": false
            }
    }
    , {
            "FieldType": "Decimal",
            "Properties": {
                "DefaultValue": 2,
                "MaxDigits": 10,
                "DecimalPoints": 3,
                "TooltipMessage": "Decimal control",
                "Required": false
            }
    }
    , {
            "FieldType": "ComboBox",
            "Properties": {
                "Choices": [
                    {
                        "value": "Choice 1"
                }

            ],
                "ChoicesDesigner": [
                    {
                        "value": "Choice 1",
                        "active": true
                }

            ],
                "ChoicesField": "ChoicesDesigner",
                "DefaultValue": "Choice 2",
                "ValueField": "value",
                "TextField": "value",
                "UseObjectValue": false,
                "SortAlphabetically": false,
                "TooltipMessage": "ComboBox control",
                "Required": false
            }
    }
    , {
            "FieldType": "Users",
            "Properties": {
                "Choices": [
                    {
                        "FullName": "AAAAAAAAAA AAAAAAAAAA",
                        "FirstName": "AAAAAAAAAA",
                        "LastName": "AAAAAAAAAA",
                        "UserName": "AAA_NAME"
                }

            ],
                "DefaultValue": "Vladimir Chernikov",
                "AllUsers": false,
                "TooltipMessage": "Users control",
                "Required": false
            }
    }
    , {
            "FieldType": "Measure",
            "Properties": {
                "Units": "CM",
                "DefaultValue": 2,
                "MaxDigits": 10,
                "DecimalPoints": 3,
                "TooltipMessage": "Measure control",
                "Required": false
            }
    }
    , {
            "FieldType": "Memo",
            "Properties": {
                "DefaultValue": "Yeeehaaa",
                "MaxValueCharacters": 1000,
                "TooltipMessage": "Memo control",
                "Required": false
            }
    }
    , {
            "FieldType": "Currency",
            "Properties": {
                "CurrencyType": "USD",
                "DefaultValue": 3,
                "MaxDigits": 10,
                "DecimalPoints": 3,
                "TooltipMessage": "Currency control",
                "Required": false
            }
    }
    , {
            "FieldType": "LabelText",
            "Properties": {
                "DefaultValue": null,
                "TooltipMessage": "Label",
                "Required": false,
                "Formula": "[memo] \\ [[drop_down]] \\ [currency]"
            }
    }
    , {
            "FieldType": "TrueFalse",
            "Properties": {
                "DefaultValue": true,
                "TooltipMessage": "True/False control"
            }
    }
    , {
            "FieldType": "FormulaField",
            "Properties": {
                "DefaultValue": null,
                "TooltipMessage": "FormulaField control",
                "Formula": null
            }
    }
    , {
            "FieldType": "Date",
            "Properties": {
                "DefaultValue": null,
                "TooltipMessage": "Date control",
                "Required": false
            }
    }
    , {
            "FieldType": "DateTime",
            "Properties": {
                "DefaultValue": null,
                "TooltipMessage": "Date-Time control",
                "Required": false,
                "ColumnWidth": 2
            }
    }
    , {
            "FieldType": "DropDown",
            "Properties": {
                "Choices": [
                    {
                        "value": "Choice 1",
                        "code": ""
                }
                , {
                        "value": "Choice 2",
                        "code": ""
                }
                , {
                        "value": "Choice 3",
                        "code": ""
                }
            ],
                "ChoicesDesigner": [
                    {
                        "value": "Choice 1",
                        "code": "",
                        "active": true
                }
                , {
                        "value": "Choice 2",
                        "code": "",
                        "active": true
                }
                , {
                        "value": "Choice 3",
                        "code": "",
                        "active": true
                }
            ],
                "ChoicesField": "ChoicesDesigner",
                "DefaultValue": "Choice 2",
                "ValueField": "value",
                "TextField": "value",
                "UseObjectValue": false,
                "WithCode": true,
                "ShowCode": true,
                "SortAlphabetically": false,
                "TooltipMessage": "Drop Down control",
                "Required": false
            }
    }
    , {
            "FieldType": "MultiSelect",
            "Properties": {
                "Choices": [
                    {
                        "value": "Choice 1",
                        "code": ""
                }
                , {
                        "value": "Choice 2",
                        "code": ""
                }
                , {
                        "value": "Choice 3",
                        "code": ""
                }
            ],
                "ChoicesDesigner": [
                    {
                        "value": "Choice 1",
                        "code": "",
                        "active": true
                }
                , {
                        "value": "Choice 2",
                        "code": "",
                        "active": true
                }
                , {
                        "value": "Choice 3",
                        "code": "",
                        "active": true
                }
            ],
                "ChoicesField": "ChoicesDesigner",
                "DefaultValue": "Choice 2",
                "ValueField": "value",
                "TextField": "value",
                "UseObjectValue": false,
                "WithCode": true,
                "ShowCode": true,
                "SortAlphabetically": false,
                "TooltipMessage": "MultiSelect control",
                "Required": false
            }
    }
    , {
            "FieldType": "Percent",
            "Properties": {
                "DefaultValue": 0.05,
                "MaxDigits": 10,
                "DecimalPoints": 3,
                "TooltipMessage": "Percent control",
                "Required": false
            }
    }
    , {
            "FieldType": "Weight",
            "Properties": {
                "Units": "G",
                "DefaultValue": null,
                "MaxDigits": 10,
                "DecimalPoints": 3,
                "TooltipMessage": "Weight control",
                "Required": false
            }
    }
],
    init: function () {
        var props = [];
        localStorage.clear();
        if (localStorage.properties) {
           
            props = JSON.parse(localStorage.properties);
        } else {
            localStorage.properties = JSON.stringify(properties);
            props = JSON.parse(localStorage.properties);
        }

        var commonProps = ["Required", "DefaultValue"];
        if (localStorage.commonProps) {
            commonProps = JSON.parse(localStorage.commonProps);
        } else {
            localStorage.commonProps = JSON.stringify(commonProps);
            commonProps = JSON.parse(localStorage.commonProps);
        }


        var uniqeProps = [];
        if (localStorage.uniqeProps) {
            uniqeProps = JSON.parse(localStorage.uniqeProps);
        } else {
            localStorage.uniqeProps = JSON.stringify(uniqeProps);
            uniqeProps = JSON.parse(localStorage.uniqeProps);
        }

        function getUniqProps(value) {
            props.forEach(function (element, index, array) {
                var elemProp = Object.keys(element.Properties);
                var newType = {
                    "FieldType": element.FieldType,
                    "Properties": []
                }
                elemProp.forEach(function (elem, ind, arr) {
                    if (!commonProps.includes(elem)) {
                        var typeProp = typeof (element.Properties[elem]);
                        var descrProp = elem + " description";
                        var fieldProp = elem;
                        newType.Properties.push({
                            field: fieldProp,
                            description: descrProp,
                            type: typeProp
                        });
                    };
                });
                uniqeProps.push(newType);
                localStorage.uniqeProps = JSON.stringify(uniqeProps);
                uniqeProps = JSON.parse(localStorage.uniqeProps);
            });


            function doFilter(type) {
                return type.FieldType == value;
            }
            var uniqePropsArr = uniqeProps.filter(doFilter);

            if (uniqePropsArr[0]) {
                return uniqePropsArr[0];
            } else {
                return addUniqProps(value);


            }
        };
        this.getUniqProps = getUniqProps;

        function addUniqProps(value) {
            var newType = {
                "FieldType": value,
                "Properties": []
            }
            props.push(newType);
            localStorage.properties = JSON.stringify(props);
            return getUniqProps(value);
        };
        this.addUniqProps = addUniqProps;

        function addPropeties(typeToAdd, newProp) {

            function doFilter(type) {
                return type.FieldType == typeToAdd;
            }
            var typeToAddArr = uniqeProps.filter(doFilter);
            typeToAddArr[0].Properties = newProp;
            localStorage.uniqeProps = JSON.stringify(uniqeProps);

        };
        this.addPropeties = addPropeties;


        function getFieldTypeList() {
            var fieldTypeList = [];
            props.forEach(function (element, index, array) {
                fieldTypeList.push({
                    name: element.FieldType
                });
            });
            return fieldTypeList;
        };
        this.getFieldTypeList = getFieldTypeList;

        function getAllPropertiesOfFieldType(fieldType) {
            var fieldTypeProps = {};
            props.forEach(function (elem) {
                if (elem.FieldType == fieldType) {
                    fieldTypeProps = elem.Properties;
                }

            });
            return fieldTypeProps;

        };
        this.getAllPropertiesOfFieldType = getAllPropertiesOfFieldType;
    },
});