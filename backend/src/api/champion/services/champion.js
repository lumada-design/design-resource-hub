'use strict';

/**
 * champion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::champion.champion');
