export default {
    root: true,
    extends: [
        "html-validate:recommended",
        "html-validate:document",
        "html-validate:prettier",
    ],
    elements: ["html5", { style: { flow: true } }],
    rules: {
        /* disallow absolute urls */
        "allowed-links": [
            "error",
            {
                allowExternal: true,
                allowRelative: true,
                allowAbsolute: false,
                allowBase: true,
            },
        ],

        /* some pages, especially imported README files, already have a h1 */
        "heading-level": [
            "error",
            {
                allowMultipleH1: true,
            },
        ],

        /* currently there are duplicate id where a title "title" clashes with
         * base layout */
        "no-dup-id": "off",

        "no-inline-style": "off",
        "no-trailing-whitespace": "off",

        /* as a hack some rules are disabled in the generated output (so users
         * of doc-generator can benefin) but also in this configuration, so to
         * prevent errors for unused disabled rules we disable this rule */
        "no-unused-disable": "off",

        /* generated examples does not have sri (yet) */
        "require-sri": "off",
    },
};
