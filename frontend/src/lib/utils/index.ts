import { API_URL } from "lib/api/constants";
import { To } from "react-router-dom";

/**
 * Format a string to replace all \n with new lines
 * @param str - The string to format
 * @returns The formatted string
 */
export const formatText = (str?: string) => {
  return str?.replace(/\\n/g, "\n");
};

/**
 * Format a URL to include the API_URL if it doesn't already have it
 * @param url - The URL to format
 * @returns The formatted URL
 */
export const formatUrl = (url: string) => {
  const isURL = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/.test(url);
  return isURL ? url : `${API_URL}${url}`;
};

/**
 * Add plural to a string if it doesn't already have it
 * @param inputString - The string to add plural to
 * @returns The string with plural added
 */
export const addPluralIfNeeded = (inputString) => {
  if (inputString.endsWith("s") || inputString.endsWith("es")) {
    return inputString;
  } else {
    return inputString + "s";
  }
};

/**
 * Get the resource types from a resource
 * @param resource - The resource to get the types from
 * @returns An array of resource types
 */
export const getResourceTypes = (resource) => {
  const resourceTypes: string[] = [];

  Object.keys(resource.attributes).forEach((key) => {
    const isResource = key.includes("resource_");
    if (isResource) {
      const value = key.replace("resource_", "");
      resourceTypes.push(value);
    }
  });

  return resourceTypes;
};

/**
 * Check if the current page has history
 * @returns True if the current page has history
 */
export const hasHistory = () => window.history.length > 2;
