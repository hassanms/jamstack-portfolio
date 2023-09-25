'use strict';

/**
 * resume-education service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resume-education.resume-education');
