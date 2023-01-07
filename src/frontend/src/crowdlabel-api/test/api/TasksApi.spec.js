/**
 * CrowdLabelAPI
 * API for CrowdLabel
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CrowdLabelApi);
  }
}(this, function(expect, CrowdLabelApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CrowdLabelApi.TasksApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TasksApi', function() {
    describe('claimTaskTasksTaskIdClaimPost', function() {
      it('should call claimTaskTasksTaskIdClaimPost successfully', function(done) {
        //uncomment below and update the code to test claimTaskTasksTaskIdClaimPost
        //instance.claimTaskTasksTaskIdClaimPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTaskTasksTaskIdDelete', function() {
      it('should call deleteTaskTasksTaskIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteTaskTasksTaskIdDelete
        //instance.deleteTaskTasksTaskIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadTaskResultsTasksTaskIdDownloadGet', function() {
      it('should call downloadTaskResultsTasksTaskIdDownloadGet successfully', function(done) {
        //uncomment below and update the code to test downloadTaskResultsTasksTaskIdDownloadGet
        //instance.downloadTaskResultsTasksTaskIdDownloadGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editTaskTasksTaskIdPatch', function() {
      it('should call editTaskTasksTaskIdPatch successfully', function(done) {
        //uncomment below and update the code to test editTaskTasksTaskIdPatch
        //instance.editTaskTasksTaskIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCoverTasksTaskIdCoverImageGet', function() {
      it('should call getCoverTasksTaskIdCoverImageGet successfully', function(done) {
        //uncomment below and update the code to test getCoverTasksTaskIdCoverImageGet
        //instance.getCoverTasksTaskIdCoverImageGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTaskTasksTaskIdGet', function() {
      it('should call getTaskTasksTaskIdGet successfully', function(done) {
        //uncomment below and update the code to test getTaskTasksTaskIdGet
        //instance.getTaskTasksTaskIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchTasksTasksPut', function() {
      it('should call searchTasksTasksPut successfully', function(done) {
        //uncomment below and update the code to test searchTasksTasksPut
        //instance.searchTasksTasksPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadTaskTasksUploadPost', function() {
      it('should call uploadTaskTasksUploadPost successfully', function(done) {
        //uncomment below and update the code to test uploadTaskTasksUploadPost
        //instance.uploadTaskTasksUploadPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));