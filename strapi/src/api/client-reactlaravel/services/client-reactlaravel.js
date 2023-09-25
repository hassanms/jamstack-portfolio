'use strict';

/**
 * client-reactlaravel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-reactlaravel.client-reactlaravel');
