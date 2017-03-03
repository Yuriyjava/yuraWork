define(["resurces/controls.js"], function (JSControls) {
    return {
        init : function () {
            var uniqeProps = JSControls.controls.uniqProperties;
            if (localStorage.uniqeProps) {
                uniqeProps = JSON.parse(localStorage.uniqeProps);
            } else {
                localStorage.uniqeProps = JSON.stringify(uniqeProps);
                uniqeProps              = JSON.parse(localStorage.uniqeProps);
            }

            function getUniqProps(value) {
                function doFilter(type) {
                    return type.FieldType == value;
                }

                var uniqePropsArr = uniqeProps.filter(doFilter);
                return uniqePropsArr[0];
            }

            this.getUniqProps = getUniqProps;

            function addUniqProps(value) {
                var newType = {
                    "FieldType"  : value,
                    "Properties" : []
                };
                uniqeProps.push(newType);
                localStorage.properties = JSON.stringify(props);
                return getUniqProps(value);
            }
            this.addUniqProps = addUniqProps;

            function addPropeties(typeToAdd, newProp) {

                function doFilter(type) {
                    return type.FieldType == typeToAdd;
                }

                var typeToAddArr           = uniqeProps.filter(doFilter);
                typeToAddArr[0].Properties = newProp;
                localStorage.uniqeProps    = JSON.stringify(uniqeProps);

            }

            this.addPropeties = addPropeties;


            function getFieldTypeList() {
                var fieldTypeList = [];
                uniqeProps.forEach(function (element, index, array) {
                    fieldTypeList.push({
                        name : element.FieldType
                    });
                });
                return fieldTypeList;
            }

            this.getFieldTypeList = getFieldTypeList;

            function getAllPropertiesOfFieldType(fieldType) {
                var fieldTypeProps = {};
                uniqeProps.forEach(function (elem) {
                    if (elem.FieldType == fieldType) {
                        fieldTypeProps = elem.Properties;
                    }

                });
                return fieldTypeProps;

            }

            this.getAllPropertiesOfFieldType = getAllPropertiesOfFieldType;
        }
    }
});