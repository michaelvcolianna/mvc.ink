// place files you want to import through the `$lib` alias in this folder.
export function makeClasses(array) {
  return array.filter(c => c).join(' ')
}

export const orientations = {
  left: 'orient-left',
  center: 'orient-center',
  right: 'orient-right',
}

export const textAlignments = {
  left: 'text-center md:text-left',
  center: 'text-center',
  right: 'text-center md:text-right',
}

export const imagePositions = {
  left: 'object-left',
  center: 'object-center',
  right: 'object-right',
}
