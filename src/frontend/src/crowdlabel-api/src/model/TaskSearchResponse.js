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

import ApiClient from '../ApiClient';
import Task from './Task';

/**
 * The TaskSearchResponse model module.
 * @module model/TaskSearchResponse
 * @version 0.1.0
 */
class TaskSearchResponse {
    /**
     * Constructs a new <code>TaskSearchResponse</code>.
     * @alias module:model/TaskSearchResponse
     */
    constructor() { 
        
        TaskSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSearchResponse} obj Optional instance to populate.
     * @return {module:model/TaskSearchResponse} The populated <code>TaskSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskSearchResponse();

            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskSearchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskSearchResponse</code>.
     */
    static validateJSON(data) {
        if (data['tasks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tasks'])) {
                throw new Error("Expected the field `tasks` to be an array in the JSON data but got " + data['tasks']);
            }
            // validate the optional field `tasks` (array)
            for (const item of data['tasks']) {
                Task.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Task>} tasks
 */
TaskSearchResponse.prototype['tasks'] = undefined;

/**
 * @member {Number} total
 * @default 0
 */
TaskSearchResponse.prototype['total'] = 0;






export default TaskSearchResponse;
