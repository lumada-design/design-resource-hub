import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationMenuItem extends Schema.Component {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu Item';
  };
  attributes: {
    label: Attribute.String;
    target: Attribute.String;
  };
}

export interface SectionSingleColumn extends Schema.Component {
  collectionName: 'components_section_single_columns';
  info: {
    displayName: 'Single Column';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button_label: Attribute.String;
    button_target: Attribute.String;
  };
}

export interface SectionTwoColumn extends Schema.Component {
  collectionName: 'components_section_two_columns';
  info: {
    displayName: 'Two Column';
    description: '';
  };
  attributes: {
    title_1: Attribute.String;
    description_1: Attribute.Text;
    button_label_1: Attribute.String;
    button_target_1: Attribute.String;
    title_2: Attribute.String;
    description_2: Attribute.Text;
    button_label_2: Attribute.String;
    button_target_2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation.menu-item': NavigationMenuItem;
      'section.single-column': SectionSingleColumn;
      'section.two-column': SectionTwoColumn;
    }
  }
}
