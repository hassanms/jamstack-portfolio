'use strict';

/**
 * premium-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::premium-pricing.premium-pricing');
