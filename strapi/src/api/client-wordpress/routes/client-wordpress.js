'use strict';

/**
 * client-wordpress router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-wordpress.client-wordpress');
