"use strict";

/**
 * resource-type router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::resource-type.resource-type");
