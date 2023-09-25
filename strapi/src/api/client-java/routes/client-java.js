'use strict';

/**
 * client-java router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-java.client-java');
