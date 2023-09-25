'use strict';

/**
 * client-wordpress service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-wordpress.client-wordpress');
