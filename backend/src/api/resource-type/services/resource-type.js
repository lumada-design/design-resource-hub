"use strict";

/**
 * resource-type service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::resource-type.resource-type");
