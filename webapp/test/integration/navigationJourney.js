/** global QUnit, opaTest */

sap.ui.define([
    'sap/ui/demo/walkthrough/localService/mockserver',
    'sap/ui/test/opaQunit',
    './pages/App'
], function(mockserver) {
    'use strict';

    QUnit.module('Navigation')

    opaTest('Should open the Hello dialog', function(Given, When, Then) {
        // initialize the mock server
        mockserver.init()

        /** On the given object we can call arrangement functions like iStartMyUIComponent 
         * to load our app component for integration testing. */

        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: 'sap.ui.demo.walkthrough'
            }
        })

        /** Contains custom actions that we can execute to get the application in 
         * a state where we can test the expected behavior. */

        // Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton()
    
        /** Contains custom assertions that check a specific constellation in the 
         * application and the teardown function that removes our component again. */

        // Assertion
        Then.onTheAppPage.iShouldSeeTheHelloDialog()

        // Cleaning
        Then.iTeardownMyApp()
    })

})