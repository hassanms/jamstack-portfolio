'use strict';

/**
 * basic-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-pricing.basic-pricing');
