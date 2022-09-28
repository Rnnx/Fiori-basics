/** The new formatter file is placed in the model folder of the app, 
 * because formatters are working on data properties and format them 
 * for display on the UI. */
sap.ui.define([], function() {
    'use strict';

    return {
        /** Function statusText gets the technical status from the data 
         * model as input parameter and returns a human-readable text that 
         * is read from the resourceBundle file. */
        statusText : function (sStatus) {
            var resourceBundle = this.getView().getModel('i18n').getResourceBundle()
            switch (sStatus) {
                case 'A':
                    return resourceBundle.getText('invoiceStatusA')
                case 'B':
                    return resourceBundle.getText('invoiceStatusB')
                case 'C':
                    return resourceBundle.getText('invoiceStatusC')
                default:
                    return sStatus
            }
        }
    }
})