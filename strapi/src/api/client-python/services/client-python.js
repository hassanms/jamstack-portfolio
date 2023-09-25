'use strict';

/**
 * client-python service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-python.client-python');
