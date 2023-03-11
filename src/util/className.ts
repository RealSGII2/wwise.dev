/**
 * Converts many arguments into an acceptable className. Useful for conditional classnames.
 * @param classNames Any number of arguments to convert to a className
 * @returns A string of all the truthy arguments, separated by strings.
 */
const className = (...classNames: any[]): string => {
    // Filtering an array item by itself returns true if the item is truthy, false if it's falsy 
    return classNames.filter(x => x).join(' ');
};

/**
 * Converts many arguments into an acceptable className, pulling from a style object. Useful for conditional classnames.
 * @param styleObject The object to pull classNames from
 * @param classNames Any number of arguments to convert to a className
 * @returns A string of all the truthy arguments, separated by strings.
 */
export const classNameFrom = (styleObject: any, ...classNames: any[]): string => {
    return classNames.filter(x => x).map(x => styleObject[x]).join(' ');
};

export default className;
