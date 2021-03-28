module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
    "react-hooks",
    "@typescript-eslint",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      1,
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    curly: ["error", "all"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "dot-location": ["error", "property"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "no-else-return": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "newline-per-chained-call": "error",
    "no-lonely-if": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true },
        ImportDeclaration: {
          multiline: true,
        },
        ExportDeclaration: { multiline: true, minProperties: 2 },
      },
    ],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        ArrayExpression: 1,
        VariableDeclarator: 1,
        ObjectExpression: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoredNodes: ["TSTypeParameterInstantiation"],
      },
    ],
    "no-multi-spaces": "error",
    "no-useless-return": "error",
    yoda: "error",
    "space-infix-ops": "error",
    "object-curly-spacing": [
      "error",
      "always",
      { arraysInObjects: true, objectsInObjects: true },
    ],
    "key-spacing": [
      "error",
      { beforeColon: false, afterColon: true, mode: "strict" },
    ],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
      },
    ],
    "template-tag-spacing": ["error", "never"],
    "arrow-body-style": 0,
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "array-bracket-spacing": ["error", "never"],
    "array-bracket-newline": ["error", "consistent"],
    "array-element-newline": ["error", "consistent"],
    "no-console": "error",
    "no-extra-boolean-cast": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-curly-brace-presence": [
      2,
      { props: "never", children: "never" },
    ],
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    "react/jsx-indent": ["error", 2],
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "jsx-quotes": ["error", "prefer-single"],
    "quote-props": ["error", "as-needed"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "only-multiline",
        functions: "never",
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-nested-ternary": "error",
    semi: ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": ["error", "last"],
    "sort-vars": "error",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "new-parens": ["error", "always"],
    "import/default": 0,
    "import/no-unresolved": 0,
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "error",
      {
        groups: [
          "object",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [">", "}"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  overrides: [
    {
      files: [
        "*.test.ts",
        "*.test.tsx",
        "*.spec.ts",
        "*.spec.tsx",
        "*.worker.tsx",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
      },
    },
  ],
};
