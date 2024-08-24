"use strict";

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "@tanstack/query",
    "json-format",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { fixStyle: "inline-type-imports", prefer: "type-imports" },
    ],
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-misused-promises": [
      "warn",
      { checksVoidReturn: { attributes: false } },
    ],

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      { allowNumber: true },
    ],
    curly: "warn",
    "react/jsx-sort-props": [
      "warn",
      { callbacksLast: true, reservedFirst: true, shorthandFirst: true },
    ],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys-fix/sort-keys-fix": "warn",
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
  },
  settings: {
    "json/sort-package-json": "pro",
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl", "cn", "cva"],
    },
  },
};
