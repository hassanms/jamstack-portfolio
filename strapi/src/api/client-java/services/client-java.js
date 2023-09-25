'use strict';

/**
 * client-java service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-java.client-java');
