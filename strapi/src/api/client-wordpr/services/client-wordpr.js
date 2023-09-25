'use strict';

/**
 * client-wordpr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-wordpr.client-wordpr');
