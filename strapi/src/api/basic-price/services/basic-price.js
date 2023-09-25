'use strict';

/**
 * basic-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-price.basic-price');
