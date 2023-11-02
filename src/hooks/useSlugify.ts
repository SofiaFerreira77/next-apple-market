export default function useSlugify(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
