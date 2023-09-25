'use strict';

/**
 * client-javascript service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-javascript.client-javascript');
