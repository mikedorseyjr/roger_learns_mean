'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Ldsmoney = new Module('ldsmoney');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Ldsmoney.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Ldsmoney.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Ldsmoney.menus.add({
        title: 'LDS Money',
        link: 'all lds money individuals',
        roles: ['authenticated']
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Ldsmoney.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Ldsmoney.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Ldsmoney.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Ldsmoney;
});
