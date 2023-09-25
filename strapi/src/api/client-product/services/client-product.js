'use strict';

/**
 * client-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-product.client-product');
