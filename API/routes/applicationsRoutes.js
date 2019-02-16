'use strict';
module.exports = function (app) {

    var application = require('../controllers/applicationsCtrl');

    /**
   
    * Post an application  
    *    RequiredRoles: None
    * get an application 
    *    RequiredRoles: None
 
   * @section application
   * @type post get
   * @url /v1/applications
   * @param {string} sortedBy (status)
   */

    app.route('/v1/applications/:status')
        .post(application.create_an_application)
        .get(application.search_applications);

    /**
   * Put an applications
   * Delete an applications
  
   * @section applications
   * @type  put delete
   * @url /v1/application/:ticker
  */

    app.route('/v1/applications/:_id')
        .put(application.update_an_application)
        .delete(application.delete_an_application);
}