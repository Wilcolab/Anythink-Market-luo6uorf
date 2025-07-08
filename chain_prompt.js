function toKebabCase(str) {
    return str
        .replace(/[\s_]+/g, '-')   // Replace spaces and underscores with hyphens
        .toLowerCase();            // Convert to lowercase
}