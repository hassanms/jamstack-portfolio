'use strict';

/**
 * standard-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::standard-pricing.standard-pricing');
