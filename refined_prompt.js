/**
 * Converts a given string or number to dot.case (lowercase words separated by dots).
 *
 * Handles various input formats including:
 * - camelCase (e.g., "mobileNumber" → "mobile.number")
 * - PascalCase (e.g., "ScreenName" → "screen.name")
 * - snake_case (e.g., "user_id" → "user.id")
 * - kebab-case (e.g., "mobile-number" → "mobile.number")
 * - Space separated (e.g., "first name" → "first.name")
 * - Uppercase (e.g., "SCREEN_NAME" → "screen.name")
 *
 * @param {string|number} input - The input value to convert. Must be a string or number.
 * @returns {string} The converted string in dot.case format.
 * @throws {Error} Throws if input is undefined, null, or not a string/number.
 *
 * @example
 * toDotCase('first name'); // returns "first.name"
 * toDotCase('user_id'); // returns "user.id"
 * toDotCase('SCREEN_NAME'); // returns "screen.name"
 * toDotCase('mobile-number'); // returns "mobile.number"
 * toDotCase('mobileNumber'); // returns "mobile.number"
 */
function toDotCase(input) {
    if (input === undefined || input === null) {
        throw new Error('Input cannot be undefined or null.');
    }
    if (typeof input !== 'string' && typeof input !== 'number') {
        throw new Error('Input must be a string or number.');
    }
    let str = String(input).trim();
    if (str.length === 0) return '';

    // Replace camelCase or PascalCase with spaces before uppercase letters
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // Split by common delimiters: space, underscore, hyphen
    const words = str
        .split(/[\s_\-]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());

    return words.join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // "first.name"
// console.log(toDotCase('user_id')); // "user.id"
// console.log(toDotCase('SCREEN_NAME')); // "screen.name"
// console.log(toDotCase('mobile-number')); // "mobile.number"
// console.log(toDotCase('mobileNumber')); // "mobile.number"
