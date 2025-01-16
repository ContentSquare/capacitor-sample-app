export const environment = {
  production: true,
  piiSelectors: {
    PIISelectors: ['.css-mask-element, ion-avatar'], // DOM elements to be skipped
    Attributes: [
      {
        selector: 'select#month option, select#year option', // CSS selectors
        attrName: 'id', // Attribute name u want to mask
      },
      {
        selector: '.link-page-7', // CSS selectors
        attrName: ['href', 'name'], // Array  attribute names you want to mask
      },
    ],
  },
};
