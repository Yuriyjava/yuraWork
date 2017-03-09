define({
    designObj: [
        {
            "Id": "558a9c7a-d3c8-40ae-85b0-922fd37d2220",
            "FormId": "Soooome Schema",
            "Schema": [
                {
                    "Id": "b182948f-de3e-497d-b82c-f1edf2c37108",
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "EUR"
          },
                            {
                                "value": "GBP"
          },
                            {
                                "value": "RUB"
          },
                            {
                                "value": "USD"
          }
        ],
                        "DefaultValue": "RUB",
                        "SortAlphabetically": true,
                        "TooltipMessage": "Drop Down control",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "EUR",
                                "active": true
          },
                            {
                                "value": "GBP",
                                "active": true
          },
                            {
                                "value": "RUB",
                                "active": true
          },
                            {
                                "value": "USD",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    },
                {
                    "Id": "f0358f1e-8d94-40c9-9d1e-bf7bdd1fd20d",
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": true
                    }
    },
                {
                    "Id": "6660167e-30ab-4427-9e58-1a0b9a65394b",
                    "FieldId": "season_delivery",
                    "FieldName": "Delivery",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "N/A"
          },
                            {
                                "value": "1"
          },
                            {
                                "value": "2"
          },
                            {
                                "value": "3"
          }
        ],
                        "DefaultValue": "N/A",
                        "SortAlphabetically": false,
                        "TooltipMessage": "Select a delivery... ",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "N/A",
                                "active": true
          },
                            {
                                "value": "1",
                                "active": true
          },
                            {
                                "value": "2",
                                "active": true
          },
                            {
                                "value": "3",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    }
  ],
            "Custom": [
                {
                    "Id": "3c4bd75c-e3aa-4ede-bed0-268baf8aea0d",
                    "company_id": null,
                    "FieldId": "text",
                    "FieldName": "Text",
                    "FieldType": "Text",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "zxc",
                        "MaxValueCharacters": 240,
                        "TooltipMessage": "Text control",
                        "Required": false
                    },
                    "Order": 1
    },
                {
                    "Id": "65e6ed62-9aa6-49eb-af9f-2ee5a1c6de0e",
                    "company_id": null,
                    "FieldId": "number",
                    "FieldName": "Number",
                    "FieldType": "Number",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "TooltipMessage": "Number control",
                        "Required": false
                    },
                    "Order": 5
    },
                {
                    "Id": "c5c964cc-f9e7-47c8-b0ab-e04c410b215b",
                    "company_id": null,
                    "FieldId": "decimal",
                    "FieldName": "Decimal",
                    "FieldType": "Decimal",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Decimal control",
                        "Required": false
                    },
                    "Order": 6
    },
                {
                    "Id": "88a4e1f5-e53d-4cbc-a26e-a5f7f606cc79",
                    "company_id": null,
                    "FieldId": "combo_box",
                    "FieldName": "ComboBox",
                    "FieldType": "ComboBox",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1"
          },
                            {
                                "value": "Choice 2"
          },
                            {
                                "value": "Choice 3"
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "active": true
          },
                            {
                                "value": "Choice 3",
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
                    },
                    "Order": 10
    },
                {
                    "Id": "b1d4f159-1e92-4134-aa48-c93114950435",
                    "company_id": null,
                    "FieldId": "users",
                    "FieldName": "Users",
                    "FieldType": "Users",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "FullName": "AAAAAAAAAA AAAAAAAAAA",
                                "FirstName": "AAAAAAAAAA",
                                "LastName": "AAAAAAAAAA",
                                "UserName": "AAA_NAME"
          },
                            {
                                "FullName": "AAAAAAAAAAA ",
                                "FirstName": "AAAAAAAAAAA",
                                "LastName": null,
                                "UserName": "awdawdad"
          },
                            {
                                "FullName": "LSKHJFGLADKFJH a.jsdnasj.dnf",
                                "FirstName": "LSKHJFGLADKFJH",
                                "LastName": "a.jsdnasj.dnf",
                                "UserName": "asfasasfawfa"
          },
                            {
                                "FullName": "Ruslan Novyk",
                                "FirstName": "Ruslan",
                                "LastName": "Novyk",
                                "UserName": "ruslan.novyk@iccuracy.com"
          },
                            {
                                "FullName": "TRUSER ",
                                "FirstName": "TRUSER",
                                "LastName": null,
                                "UserName": "TRUSER"
          },
                            {
                                "FullName": "Test test",
                                "FirstName": "Test",
                                "LastName": "test",
                                "UserName": "testUser"
          },
                            {
                                "FullName": "Vladimir Chernikov",
                                "FirstName": "Vladimir",
                                "LastName": "Chernikov",
                                "UserName": "volodymyr.chernikov@iccuracy.com"
          },
                            {
                                "FullName": "awdawd adawd",
                                "FirstName": "awdawd",
                                "LastName": "adawd",
                                "UserName": "d"
          },
                            {
                                "FullName": "awdawd dawdawd",
                                "FirstName": "awdawd",
                                "LastName": "dawdawd",
                                "UserName": "dddawd"
          },
                            {
                                "FullName": "awdawdawdawda awdawdawdawdawdw",
                                "FirstName": "awdawdawdawda",
                                "LastName": "awdawdawdawdawdw",
                                "UserName": "awdawdawdawdawdawd"
          },
                            {
                                "FullName": "eeeee eeeew",
                                "FirstName": "eeeee",
                                "LastName": "eeeew",
                                "UserName": "user"
          },
                            {
                                "FullName": "lesha voynov",
                                "FirstName": "lesha",
                                "LastName": "voynov",
                                "UserName": "fastex"
          },
                            {
                                "FullName": "qweqweqweqweqwe wddddwdw",
                                "FirstName": "qweqweqweqweqwe",
                                "LastName": "wddddwdw",
                                "UserName": "awdadadddwwdwd"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test3"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test2"
          },
                            {
                                "FullName": "teststt ssssss",
                                "FirstName": "teststt",
                                "LastName": "ssssss",
                                "UserName": "useruser"
          }
        ],
                        "DefaultValue": "Vladimir Chernikov",
                        "AllUsers": false,
                        "TooltipMessage": "Users control",
                        "Required": false
                    },
                    "Order": 15
    },
                {
                    "Id": "f0709df3-ad15-40d6-8310-625e4f936e2d",
                    "company_id": null,
                    "FieldId": "measure",
                    "FieldName": "Measure",
                    "FieldType": "Measure",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "CM",
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Measure control",
                        "Required": false
                    },
                    "Order": 13
    },
                {
                    "Id": "880c6272-29c4-4290-aa6a-306568d256bf",
                    "company_id": null,
                    "FieldId": "memo",
                    "FieldName": "Memo",
                    "FieldType": "Memo",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "Yeeehaaa",
                        "MaxValueCharacters": 1000,
                        "TooltipMessage": "Memo control",
                        "Required": false
                    },
                    "Order": 2
    },
                {
                    "Id": "d31da39e-0ed7-476f-ab85-6b0269f377ad",
                    "company_id": null,
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "Currency",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "CurrencyType": "USD",
                        "DefaultValue": 3,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Currency control",
                        "Required": false
                    },
                    "Order": 7
    },
                {
                    "Id": "4e91da61-ba14-4af6-9a6e-8cd5e89079d6",
                    "company_id": null,
                    "FieldId": "Label",
                    "FieldName": "Label",
                    "FieldType": "LabelText",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Label",
                        "Required": false,
                        "Formula": "[memo] \\ [[drop_down]] \\ [currency]"
                    },
                    "Order": 17
    },
                {
                    "Id": "e13ccba1-b55d-4623-9f90-fc79b2ed07d2",
                    "company_id": null,
                    "FieldId": "true_false",
                    "FieldName": "True/False",
                    "FieldType": "TrueFalse",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": true,
                        "TooltipMessage": "True/False control"
                    },
                    "Order": 9
    },
                {
                    "Id": "b8f453d7-4c06-4194-b20c-66299cda85d4",
                    "company_id": null,
                    "FieldId": "formula_field",
                    "FieldName": "FormulaField",
                    "FieldType": "FormulaField",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "FormulaField control",
                        "Formula": null
                    },
                    "Order": 12
    },
                {
                    "Id": "bbcf7970-c33c-4b12-9884-dce1fbeb30c6",
                    "company_id": null,
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": false
                    },
                    "Order": 3
    },
                {
                    "Id": "bc005287-4454-4696-a67f-dcae4471b43c",
                    "company_id": null,
                    "FieldId": "date_time",
                    "FieldName": "Date-Time",
                    "FieldType": "DateTime",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date-Time control",
                        "Required": false,
                        "ColumnWidth": 2
                    },
                    "Order": 4
    },
                {
                    "Id": "80c94270-41fe-4ca5-84b4-ead1db312673",
                    "company_id": null,
                    "FieldId": "drop_down",
                    "FieldName": "Drop Down",
                    "FieldType": "DropDown",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "aa5dd1ea-93e9-46bf-916f-fe424b9d8cfa",
                    "company_id": null,
                    "FieldId": "multi_select",
                    "FieldName": "MultiSelect",
                    "FieldType": "MultiSelect",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "acdce577-8253-43e8-bf37-9ce8b7999698",
                    "company_id": null,
                    "FieldId": "percent",
                    "FieldName": "Percent",
                    "FieldType": "Percent",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 0.05,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Percent control",
                        "Required": false
                    },
                    "Order": 11
    },
                {
                    "Id": "78782425-9c87-4be3-a730-7e29c0985c54",
                    "company_id": null,
                    "FieldId": "weight",
                    "FieldName": "Weight",
                    "FieldType": "Weight",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "G",
                        "DefaultValue": null,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Weight control",
                        "Required": false
                    },
                    "Order": 14
    }
  ],
            "Control": {
                "Form": [
      [
        "text",
        "number",
        "decimal",
        "combo_box",
        "users",
        "measure"
      ],
      [
        "memo",
        "currency",
        "Label",
        "true_false",
        "formula_field"
      ],
      [
        "date",
        "date_time",
        "drop_down",
        "multi_select",
        "percent",
        "weight"
      ]
    ],
                "Grid": [

    ],
                "Search": [

    ],
                "List": [

    ],
                "Report": [

    ]
            }
},
        {
            "Id": "558a9c7a-d3c8-40ae-85b0-922fd37d2220",
            "FormId": "Soooome Schema 2",
            "Schema": [
                {
                    "Id": "b182948f-de3e-497d-b82c-f1edf2c37108",
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "EUR"
          },
                            {
                                "value": "GBP"
          },
                            {
                                "value": "RUB"
          },
                            {
                                "value": "USD"
          }
        ],
                        "DefaultValue": "RUB",
                        "SortAlphabetically": true,
                        "TooltipMessage": "Drop Down control",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "EUR",
                                "active": true
          },
                            {
                                "value": "GBP",
                                "active": true
          },
                            {
                                "value": "RUB",
                                "active": true
          },
                            {
                                "value": "USD",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    },
                {
                    "Id": "f0358f1e-8d94-40c9-9d1e-bf7bdd1fd20d",
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": true
                    }
    },
                {
                    "Id": "6660167e-30ab-4427-9e58-1a0b9a65394b",
                    "FieldId": "season_delivery",
                    "FieldName": "Delivery",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "N/A"
          },
                            {
                                "value": "1"
          },
                            {
                                "value": "2"
          },
                            {
                                "value": "3"
          }
        ],
                        "DefaultValue": "N/A",
                        "SortAlphabetically": false,
                        "TooltipMessage": "Select a delivery... ",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "N/A",
                                "active": true
          },
                            {
                                "value": "1",
                                "active": true
          },
                            {
                                "value": "2",
                                "active": true
          },
                            {
                                "value": "3",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    }
  ],
            "Custom": [
                {
                    "Id": "3c4bd75c-e3aa-4ede-bed0-268baf8aea0d",
                    "company_id": null,
                    "FieldId": "text",
                    "FieldName": "Text",
                    "FieldType": "Text",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "zxc",
                        "MaxValueCharacters": 240,
                        "TooltipMessage": "Text control",
                        "Required": false
                    },
                    "Order": 1
    },
                {
                    "Id": "65e6ed62-9aa6-49eb-af9f-2ee5a1c6de0e",
                    "company_id": null,
                    "FieldId": "number",
                    "FieldName": "Number",
                    "FieldType": "Number",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "TooltipMessage": "Number control",
                        "Required": false
                    },
                    "Order": 5
    },
                {
                    "Id": "c5c964cc-f9e7-47c8-b0ab-e04c410b215b",
                    "company_id": null,
                    "FieldId": "decimal",
                    "FieldName": "Decimal",
                    "FieldType": "Decimal",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Decimal control",
                        "Required": false
                    },
                    "Order": 6
    },
                {
                    "Id": "88a4e1f5-e53d-4cbc-a26e-a5f7f606cc79",
                    "company_id": null,
                    "FieldId": "combo_box",
                    "FieldName": "ComboBox",
                    "FieldType": "ComboBox",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1"
          },
                            {
                                "value": "Choice 2"
          },
                            {
                                "value": "Choice 3"
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "active": true
          },
                            {
                                "value": "Choice 3",
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
                    },
                    "Order": 10
    },
                {
                    "Id": "b1d4f159-1e92-4134-aa48-c93114950435",
                    "company_id": null,
                    "FieldId": "users",
                    "FieldName": "Users",
                    "FieldType": "Users",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "FullName": "AAAAAAAAAA AAAAAAAAAA",
                                "FirstName": "AAAAAAAAAA",
                                "LastName": "AAAAAAAAAA",
                                "UserName": "AAA_NAME"
          },
                            {
                                "FullName": "AAAAAAAAAAA ",
                                "FirstName": "AAAAAAAAAAA",
                                "LastName": null,
                                "UserName": "awdawdad"
          },
                            {
                                "FullName": "LSKHJFGLADKFJH a.jsdnasj.dnf",
                                "FirstName": "LSKHJFGLADKFJH",
                                "LastName": "a.jsdnasj.dnf",
                                "UserName": "asfasasfawfa"
          },
                            {
                                "FullName": "Ruslan Novyk",
                                "FirstName": "Ruslan",
                                "LastName": "Novyk",
                                "UserName": "ruslan.novyk@iccuracy.com"
          },
                            {
                                "FullName": "TRUSER ",
                                "FirstName": "TRUSER",
                                "LastName": null,
                                "UserName": "TRUSER"
          },
                            {
                                "FullName": "Test test",
                                "FirstName": "Test",
                                "LastName": "test",
                                "UserName": "testUser"
          },
                            {
                                "FullName": "Vladimir Chernikov",
                                "FirstName": "Vladimir",
                                "LastName": "Chernikov",
                                "UserName": "volodymyr.chernikov@iccuracy.com"
          },
                            {
                                "FullName": "awdawd adawd",
                                "FirstName": "awdawd",
                                "LastName": "adawd",
                                "UserName": "d"
          },
                            {
                                "FullName": "awdawd dawdawd",
                                "FirstName": "awdawd",
                                "LastName": "dawdawd",
                                "UserName": "dddawd"
          },
                            {
                                "FullName": "awdawdawdawda awdawdawdawdawdw",
                                "FirstName": "awdawdawdawda",
                                "LastName": "awdawdawdawdawdw",
                                "UserName": "awdawdawdawdawdawd"
          },
                            {
                                "FullName": "eeeee eeeew",
                                "FirstName": "eeeee",
                                "LastName": "eeeew",
                                "UserName": "user"
          },
                            {
                                "FullName": "lesha voynov",
                                "FirstName": "lesha",
                                "LastName": "voynov",
                                "UserName": "fastex"
          },
                            {
                                "FullName": "qweqweqweqweqwe wddddwdw",
                                "FirstName": "qweqweqweqweqwe",
                                "LastName": "wddddwdw",
                                "UserName": "awdadadddwwdwd"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test3"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test2"
          },
                            {
                                "FullName": "teststt ssssss",
                                "FirstName": "teststt",
                                "LastName": "ssssss",
                                "UserName": "useruser"
          }
        ],
                        "DefaultValue": "Vladimir Chernikov",
                        "AllUsers": false,
                        "TooltipMessage": "Users control",
                        "Required": false
                    },
                    "Order": 15
    },
                {
                    "Id": "f0709df3-ad15-40d6-8310-625e4f936e2d",
                    "company_id": null,
                    "FieldId": "measure",
                    "FieldName": "Measure",
                    "FieldType": "Measure",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "CM",
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Measure control",
                        "Required": false
                    },
                    "Order": 13
    },
                {
                    "Id": "880c6272-29c4-4290-aa6a-306568d256bf",
                    "company_id": null,
                    "FieldId": "memo",
                    "FieldName": "Memo",
                    "FieldType": "Memo",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "Yeeehaaa",
                        "MaxValueCharacters": 1000,
                        "TooltipMessage": "Memo control",
                        "Required": false
                    },
                    "Order": 2
    },
                {
                    "Id": "d31da39e-0ed7-476f-ab85-6b0269f377ad",
                    "company_id": null,
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "Currency",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "CurrencyType": "USD",
                        "DefaultValue": 3,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Currency control",
                        "Required": false
                    },
                    "Order": 7
    },
                {
                    "Id": "4e91da61-ba14-4af6-9a6e-8cd5e89079d6",
                    "company_id": null,
                    "FieldId": "Label",
                    "FieldName": "Label",
                    "FieldType": "LabelText",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Label",
                        "Required": false,
                        "Formula": "[memo] \\ [[drop_down]] \\ [currency]"
                    },
                    "Order": 17
    },
                {
                    "Id": "e13ccba1-b55d-4623-9f90-fc79b2ed07d2",
                    "company_id": null,
                    "FieldId": "true_false",
                    "FieldName": "True/False",
                    "FieldType": "TrueFalse",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": true,
                        "TooltipMessage": "True/False control"
                    },
                    "Order": 9
    },
                {
                    "Id": "b8f453d7-4c06-4194-b20c-66299cda85d4",
                    "company_id": null,
                    "FieldId": "formula_field",
                    "FieldName": "FormulaField",
                    "FieldType": "FormulaField",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "FormulaField control",
                        "Formula": null
                    },
                    "Order": 12
    },
                {
                    "Id": "bbcf7970-c33c-4b12-9884-dce1fbeb30c6",
                    "company_id": null,
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": false
                    },
                    "Order": 3
    },
                {
                    "Id": "bc005287-4454-4696-a67f-dcae4471b43c",
                    "company_id": null,
                    "FieldId": "date_time",
                    "FieldName": "Date-Time",
                    "FieldType": "DateTime",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date-Time control",
                        "Required": false,
                        "ColumnWidth": 2
                    },
                    "Order": 4
    },
                {
                    "Id": "80c94270-41fe-4ca5-84b4-ead1db312673",
                    "company_id": null,
                    "FieldId": "drop_down",
                    "FieldName": "Drop Down",
                    "FieldType": "DropDown",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "aa5dd1ea-93e9-46bf-916f-fe424b9d8cfa",
                    "company_id": null,
                    "FieldId": "multi_select",
                    "FieldName": "MultiSelect",
                    "FieldType": "MultiSelect",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "acdce577-8253-43e8-bf37-9ce8b7999698",
                    "company_id": null,
                    "FieldId": "percent",
                    "FieldName": "Percent",
                    "FieldType": "Percent",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 0.05,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Percent control",
                        "Required": false
                    },
                    "Order": 11
    },
                {
                    "Id": "78782425-9c87-4be3-a730-7e29c0985c54",
                    "company_id": null,
                    "FieldId": "weight",
                    "FieldName": "Weight",
                    "FieldType": "Weight",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "G",
                        "DefaultValue": null,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Weight control",
                        "Required": false
                    },
                    "Order": 14
    }
  ],
            "Control": {
                "Form": [
      [
        "text",
        "number",
        "decimal",
        "combo_box",
        "users",
        "measure"
      ],
      [
        "memo",
        "currency",
        "Label",
        "true_false",
        "formula_field"
      ],
      [
        "date",
        "date_time",
        "drop_down",
        "multi_select",
        "percent",
        "weight"
      ]
    ],
                "Grid": [

    ],
                "Search": [

    ],
                "List": [

    ],
                "Report": [

    ]
            }
},
        {
            "Id": "558a9c7a-d3c8-40ae-85b0-922fd37d2220",
            "FormId": "Soooome Schema 3",
            "Schema": [
                {
                    "Id": "b182948f-de3e-497d-b82c-f1edf2c37108",
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "EUR"
          },
                            {
                                "value": "GBP"
          },
                            {
                                "value": "RUB"
          },
                            {
                                "value": "USD"
          }
        ],
                        "DefaultValue": "RUB",
                        "SortAlphabetically": true,
                        "TooltipMessage": "Drop Down control",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "EUR",
                                "active": true
          },
                            {
                                "value": "GBP",
                                "active": true
          },
                            {
                                "value": "RUB",
                                "active": true
          },
                            {
                                "value": "USD",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    },
                {
                    "Id": "f0358f1e-8d94-40c9-9d1e-bf7bdd1fd20d",
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": true
                    }
    },
                {
                    "Id": "6660167e-30ab-4427-9e58-1a0b9a65394b",
                    "FieldId": "season_delivery",
                    "FieldName": "Delivery",
                    "FieldType": "DropDown",
                    "Prefix": "Schema",
                    "Fixed": false,
                    "Properties": {
                        "Choices": [
                            {
                                "value": "N/A"
          },
                            {
                                "value": "1"
          },
                            {
                                "value": "2"
          },
                            {
                                "value": "3"
          }
        ],
                        "DefaultValue": "N/A",
                        "SortAlphabetically": false,
                        "TooltipMessage": "Select a delivery... ",
                        "Required": false,
                        "ChoicesDesigner": [
                            {
                                "value": "N/A",
                                "active": true
          },
                            {
                                "value": "1",
                                "active": true
          },
                            {
                                "value": "2",
                                "active": true
          },
                            {
                                "value": "3",
                                "active": true
          }
        ],
                        "ChoicesField": "ChoicesDesigner",
                        "ValueField": "value",
                        "TextField": "value",
                        "WithCode": true,
                        "ShowCode": true
                    }
    }
  ],
            "Custom": [
                {
                    "Id": "3c4bd75c-e3aa-4ede-bed0-268baf8aea0d",
                    "company_id": null,
                    "FieldId": "text",
                    "FieldName": "Text",
                    "FieldType": "Text",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "zxc",
                        "MaxValueCharacters": 240,
                        "TooltipMessage": "Text control",
                        "Required": false
                    },
                    "Order": 1
    },
                {
                    "Id": "65e6ed62-9aa6-49eb-af9f-2ee5a1c6de0e",
                    "company_id": null,
                    "FieldId": "number",
                    "FieldName": "Number",
                    "FieldType": "Number",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "TooltipMessage": "Number control",
                        "Required": false
                    },
                    "Order": 5
    },
                {
                    "Id": "c5c964cc-f9e7-47c8-b0ab-e04c410b215b",
                    "company_id": null,
                    "FieldId": "decimal",
                    "FieldName": "Decimal",
                    "FieldType": "Decimal",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Decimal control",
                        "Required": false
                    },
                    "Order": 6
    },
                {
                    "Id": "88a4e1f5-e53d-4cbc-a26e-a5f7f606cc79",
                    "company_id": null,
                    "FieldId": "combo_box",
                    "FieldName": "ComboBox",
                    "FieldType": "ComboBox",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1"
          },
                            {
                                "value": "Choice 2"
          },
                            {
                                "value": "Choice 3"
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "active": true
          },
                            {
                                "value": "Choice 3",
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
                    },
                    "Order": 10
    },
                {
                    "Id": "b1d4f159-1e92-4134-aa48-c93114950435",
                    "company_id": null,
                    "FieldId": "users",
                    "FieldName": "Users",
                    "FieldType": "Users",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "FullName": "AAAAAAAAAA AAAAAAAAAA",
                                "FirstName": "AAAAAAAAAA",
                                "LastName": "AAAAAAAAAA",
                                "UserName": "AAA_NAME"
          },
                            {
                                "FullName": "AAAAAAAAAAA ",
                                "FirstName": "AAAAAAAAAAA",
                                "LastName": null,
                                "UserName": "awdawdad"
          },
                            {
                                "FullName": "LSKHJFGLADKFJH a.jsdnasj.dnf",
                                "FirstName": "LSKHJFGLADKFJH",
                                "LastName": "a.jsdnasj.dnf",
                                "UserName": "asfasasfawfa"
          },
                            {
                                "FullName": "Ruslan Novyk",
                                "FirstName": "Ruslan",
                                "LastName": "Novyk",
                                "UserName": "ruslan.novyk@iccuracy.com"
          },
                            {
                                "FullName": "TRUSER ",
                                "FirstName": "TRUSER",
                                "LastName": null,
                                "UserName": "TRUSER"
          },
                            {
                                "FullName": "Test test",
                                "FirstName": "Test",
                                "LastName": "test",
                                "UserName": "testUser"
          },
                            {
                                "FullName": "Vladimir Chernikov",
                                "FirstName": "Vladimir",
                                "LastName": "Chernikov",
                                "UserName": "volodymyr.chernikov@iccuracy.com"
          },
                            {
                                "FullName": "awdawd adawd",
                                "FirstName": "awdawd",
                                "LastName": "adawd",
                                "UserName": "d"
          },
                            {
                                "FullName": "awdawd dawdawd",
                                "FirstName": "awdawd",
                                "LastName": "dawdawd",
                                "UserName": "dddawd"
          },
                            {
                                "FullName": "awdawdawdawda awdawdawdawdawdw",
                                "FirstName": "awdawdawdawda",
                                "LastName": "awdawdawdawdawdw",
                                "UserName": "awdawdawdawdawdawd"
          },
                            {
                                "FullName": "eeeee eeeew",
                                "FirstName": "eeeee",
                                "LastName": "eeeew",
                                "UserName": "user"
          },
                            {
                                "FullName": "lesha voynov",
                                "FirstName": "lesha",
                                "LastName": "voynov",
                                "UserName": "fastex"
          },
                            {
                                "FullName": "qweqweqweqweqwe wddddwdw",
                                "FirstName": "qweqweqweqweqwe",
                                "LastName": "wddddwdw",
                                "UserName": "awdadadddwwdwd"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test3"
          },
                            {
                                "FullName": "test2 ",
                                "FirstName": "test2",
                                "LastName": null,
                                "UserName": "test2"
          },
                            {
                                "FullName": "teststt ssssss",
                                "FirstName": "teststt",
                                "LastName": "ssssss",
                                "UserName": "useruser"
          }
        ],
                        "DefaultValue": "Vladimir Chernikov",
                        "AllUsers": false,
                        "TooltipMessage": "Users control",
                        "Required": false
                    },
                    "Order": 15
    },
                {
                    "Id": "f0709df3-ad15-40d6-8310-625e4f936e2d",
                    "company_id": null,
                    "FieldId": "measure",
                    "FieldName": "Measure",
                    "FieldType": "Measure",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "CM",
                        "DefaultValue": 2,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Measure control",
                        "Required": false
                    },
                    "Order": 13
    },
                {
                    "Id": "880c6272-29c4-4290-aa6a-306568d256bf",
                    "company_id": null,
                    "FieldId": "memo",
                    "FieldName": "Memo",
                    "FieldType": "Memo",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": "Yeeehaaa",
                        "MaxValueCharacters": 1000,
                        "TooltipMessage": "Memo control",
                        "Required": false
                    },
                    "Order": 2
    },
                {
                    "Id": "d31da39e-0ed7-476f-ab85-6b0269f377ad",
                    "company_id": null,
                    "FieldId": "currency",
                    "FieldName": "Currency",
                    "FieldType": "Currency",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "CurrencyType": "USD",
                        "DefaultValue": 3,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Currency control",
                        "Required": false
                    },
                    "Order": 7
    },
                {
                    "Id": "4e91da61-ba14-4af6-9a6e-8cd5e89079d6",
                    "company_id": null,
                    "FieldId": "Label",
                    "FieldName": "Label",
                    "FieldType": "LabelText",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Label",
                        "Required": false,
                        "Formula": "[memo] \\ [[drop_down]] \\ [currency]"
                    },
                    "Order": 17
    },
                {
                    "Id": "e13ccba1-b55d-4623-9f90-fc79b2ed07d2",
                    "company_id": null,
                    "FieldId": "true_false",
                    "FieldName": "True/False",
                    "FieldType": "TrueFalse",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": true,
                        "TooltipMessage": "True/False control"
                    },
                    "Order": 9
    },
                {
                    "Id": "b8f453d7-4c06-4194-b20c-66299cda85d4",
                    "company_id": null,
                    "FieldId": "formula_field",
                    "FieldName": "FormulaField",
                    "FieldType": "FormulaField",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "FormulaField control",
                        "Formula": null
                    },
                    "Order": 12
    },
                {
                    "Id": "bbcf7970-c33c-4b12-9884-dce1fbeb30c6",
                    "company_id": null,
                    "FieldId": "date",
                    "FieldName": "Date",
                    "FieldType": "Date",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date control",
                        "Required": false
                    },
                    "Order": 3
    },
                {
                    "Id": "bc005287-4454-4696-a67f-dcae4471b43c",
                    "company_id": null,
                    "FieldId": "date_time",
                    "FieldName": "Date-Time",
                    "FieldType": "DateTime",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": null,
                        "TooltipMessage": "Date-Time control",
                        "Required": false,
                        "ColumnWidth": 2
                    },
                    "Order": 4
    },
                {
                    "Id": "80c94270-41fe-4ca5-84b4-ead1db312673",
                    "company_id": null,
                    "FieldId": "drop_down",
                    "FieldName": "Drop Down",
                    "FieldType": "DropDown",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "aa5dd1ea-93e9-46bf-916f-fe424b9d8cfa",
                    "company_id": null,
                    "FieldId": "multi_select",
                    "FieldName": "MultiSelect",
                    "FieldType": "MultiSelect",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Choices": [
                            {
                                "value": "Choice 1",
                                "code": ""
          },
                            {
                                "value": "Choice 2",
                                "code": ""
          },
                            {
                                "value": "Choice 3",
                                "code": ""
          }
        ],
                        "ChoicesDesigner": [
                            {
                                "value": "Choice 1",
                                "code": "",
                                "active": true
          },
                            {
                                "value": "Choice 2",
                                "code": "",
                                "active": true
          },
                            {
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
                    },
                    "Order": 8
    },
                {
                    "Id": "acdce577-8253-43e8-bf37-9ce8b7999698",
                    "company_id": null,
                    "FieldId": "percent",
                    "FieldName": "Percent",
                    "FieldType": "Percent",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "DefaultValue": 0.05,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Percent control",
                        "Required": false
                    },
                    "Order": 11
    },
                {
                    "Id": "78782425-9c87-4be3-a730-7e29c0985c54",
                    "company_id": null,
                    "FieldId": "weight",
                    "FieldName": "Weight",
                    "FieldType": "Weight",
                    "Prefix": "Custom",
                    "Fixed": false,
                    "System": false,
                    "CreatedBy": null,
                    "CreatedAt": null,
                    "ModifiedBy": null,
                    "ModifiedAt": null,
                    "Active": false,
                    "SharedMasterFolders": [

      ],
                    "Properties": {
                        "Units": "G",
                        "DefaultValue": null,
                        "MaxDigits": 10,
                        "DecimalPoints": 3,
                        "TooltipMessage": "Weight control",
                        "Required": false
                    },
                    "Order": 14
    }
  ],
            "Control": {
                "Form": [

    ],
                "Grid": [

        "text",
        "number",
        "decimal",
        "combo_box",
        "users",
        "measure"

    ],
                "Search": [

    ],
                "List": [

    ],
                "Report": [

    ]
            }
}
],
    designers: [],
    getDesignersObj: function () {

        if (localStorage.designers) {
            this.designers = JSON.parse(localStorage.designers);
        } else {
            localStorage.designers = JSON.stringify(this.designObj);
            this.designers = JSON.parse(localStorage.designers);
        }
        if (localStorage.designers.length == 0) {
            localStorage.clear();
        }

    },
    getDesignersArray: function () {
        this.getDesignersObj();
        
        var designersArray = [];
        this.designers.forEach(function (elem, index, arr) {

            designersArray.push({
                "formId": elem.FormId,
                "description": "description " + elem.FormId
            });
        });
        return designersArray;
    },
    getDataFromId: function (formId) {
        this.getDesignersObj();
        var i = 0;
        while (this.designers[i].FormId != formId) {
            i++;
        }
        var obj = {
            shema: [],
            custom: [],
            system: []
        };
        obj = {
            shema: this.designers[i].Schema,
            custom: this.designers[i].Custom,
            system: this.designers[i].System
        };
        if (obj.system) {
            //noinspection UnnecessaryLocalVariableJS
            var objArr = obj.shema.concat(obj.custom, obj.system);
            return objArr;
        } else {
            //noinspection UnnecessaryLocalVariableJS
            var objArr = obj.shema.concat(obj.custom);
            return objArr;
        }
    },

    getControlFromId: function (formId) {
        this.getDesignersObj();
        var i = 0;
        while (this.designers[i].FormId != formId) {
            i++;
        }
        return this.designers[i].Control;
    },
    
    setControlFromId: function(control, formId){
          this.getDesignersObj();
        var i = 0;
        while (this.designers[i].FormId != formId) {
            i++;
        }

        this.designers[i].Control=control;
       localStorage.designers = JSON.stringify(this.designers);
        
    },

    setDataFromId: function(data, formId){
        this.getDesignersObj();
        var i = 0,
            schema=[],
            custom=[],
            system=[];

        while (this.designers[i].FormId != formId) {
            i++;
        };



        data.forEach(function (elem) {
          switch (elem.Prefix){
              case "Schema":{
                  schema.push(elem);
                  break;}
              case "Custom":{
                  custom.push(elem);
                  break;}
              case "System":{
                  system.push(elem);
                  break;}
          }
        });
        this.designers[i].Schema=schema;
        this.designers[i].Custom=custom;
        this.designers[i].System=system;

        localStorage.designers = JSON.stringify(this.designers);
    }
});