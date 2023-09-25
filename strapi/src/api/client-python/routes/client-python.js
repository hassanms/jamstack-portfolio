'use strict';

/**
 * client-python router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-python.client-python');
