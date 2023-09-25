'use strict';

/**
 * client-py service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-py.client-py');
