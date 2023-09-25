'use strict';

/**
 * client-javascript router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-javascript.client-javascript');
