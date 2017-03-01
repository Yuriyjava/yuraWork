define({


    controls: {
        "baseFields": [
            {
                "field": "FieldId",
                "description": "Defines control field Id",
                "type": "string"
                }
                , {
                "field": "FieldName",
                "description": "Defines control field Name",
                "type": "string"
                }
                , {
                "field": "FieldType",
                "description": "Defines control field Type",
                "type": "string"
                }
                , {
                "field": "Prefix",
                "description": "Defines control field Prefix",
                "type": "string"
                }
                , {
                "field": "System",
                "description": "Defines if the control is system",
                "type": "boolean"
                }
                , {
                "field": "Fixed",
                "description": "Defines if field can be deleted from grid & form",
                "type": "boolean"
                }
                , {
                "field": "Properties",
                "description": "Defines if field can be deleted from grid & form",
                "type": "Object"
                }

            ],
        "baseProperties": [
            {
                "field": "TooltipMessage",
                "description": "Defines control Tooltip Message",
                "type": "string"
                }
                , {
                "field": "Active",
                "description": "Defines if the control is active",
                "type": "boolean"
                }
                , {
                "field": "DefaultValue",
                "description": "Defines Default Value of field",
                "type": "string"
                },
            {
                "field": "Required",
                "description": "Defines Required of field",
                "type": "boolean"
                }

            ],
        "uniqProperties": [{
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "iyiyui",
            "Properties": []
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "iyiyui",
            "Properties": []
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "iyiyui",
            "Properties": []
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "iyiyui",
            "Properties": []
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "iyiyui",
            "Properties": []
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Text",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Number",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Decimal",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "ComboBox",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Users",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "AllUsers",
                "description": "AllUsers description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Measure",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Memo",
            "Properties": [{
                "field": "MaxValueCharacters",
                "description": "MaxValueCharacters description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Currency",
            "Properties": [{
                "field": "CurrencyType",
                "description": "CurrencyType description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "LabelText",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "string"
    }]
}, {
            "FieldType": "TrueFalse",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "FormulaField",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "Formula",
                "description": "Formula description",
                "type": "object"
    }]
}, {
            "FieldType": "Date",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "DateTime",
            "Properties": [{
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }, {
                "field": "ColumnWidth",
                "description": "ColumnWidth description",
                "type": "number"
    }]
}, {
            "FieldType": "DropDown",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "MultiSelect",
            "Properties": [{
                "field": "Choices",
                "description": "Choices description",
                "type": "object"
    }, {
                "field": "ChoicesDesigner",
                "description": "ChoicesDesigner description",
                "type": "object"
    }, {
                "field": "ChoicesField",
                "description": "ChoicesField description",
                "type": "string"
    }, {
                "field": "ValueField",
                "description": "ValueField description",
                "type": "string"
    }, {
                "field": "TextField",
                "description": "TextField description",
                "type": "string"
    }, {
                "field": "UseObjectValue",
                "description": "UseObjectValue description",
                "type": "boolean"
    }, {
                "field": "WithCode",
                "description": "WithCode description",
                "type": "boolean"
    }, {
                "field": "ShowCode",
                "description": "ShowCode description",
                "type": "boolean"
    }, {
                "field": "SortAlphabetically",
                "description": "SortAlphabetically description",
                "type": "boolean"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Percent",
            "Properties": [{
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}, {
            "FieldType": "Weight",
            "Properties": [{
                "field": "Units",
                "description": "Units description",
                "type": "string"
    }, {
                "field": "MaxDigits",
                "description": "MaxDigits description",
                "type": "number"
    }, {
                "field": "DecimalPoints",
                "description": "DecimalPoints description",
                "type": "number"
    }, {
                "field": "TooltipMessage",
                "description": "TooltipMessage description",
                "type": "string"
    }]
}]
    },
    typeArray: [
            "number"
            , "string"
            , "boolean"
            , "object"
            , "null"
            , "undefined"
        ]





});