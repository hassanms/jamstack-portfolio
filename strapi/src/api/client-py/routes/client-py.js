'use strict';

/**
 * client-py router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-py.client-py');
