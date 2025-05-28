// Definitions for image position styles
export const imagePositions = {
  left: 'object-left',
  center: 'object-center',
  right: 'object-right'
};

/**
 * Takes the array of classes and creates a string
 *
 * @param {Array} array
 * @returns string
 */
export const makeClasses = (array) => array.filter((c) => c).join(' ');

// Definitions for section/image orientation styles
export const orientations = {
  left: 'orient-left',
  center: 'orient-center',
  right: 'orient-right'
};

// Definitions for text alignment styles
export const textAlignments = {
  left: 'text-center md:text-left',
  center: 'text-center',
  right: 'text-center md:text-right'
};
