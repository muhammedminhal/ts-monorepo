// eslint.config.mjs (Flat config version)

import jsdoc from "eslint-plugin-jsdoc";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    // Specify the file types for ESLint
    files: ["**/*.ts", "**/*.tsx"],

    // Define language options and specify the TypeScript parser
    languageOptions: {
      parser: typescriptParser,  // Use TypeScript parser
    },

    // Define the plugins to use
    plugins: {
      jsdoc: jsdoc,
      "@typescript-eslint": typescriptEslintPlugin,  // TypeScript plugin
    },

    // Manually add the rules instead of using `extends`
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional, adjust to your needs
      "@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables
      "@typescript-eslint/no-explicit-any": "warn", // Warn about the use of `any` type

      // Add TypeScript-specific rules (adjust to your version of @typescript-eslint/eslint-plugin)
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/explicit-function-return-type": "off", // Optional, adjust to your needs

      // Add ESLint recommended rules (manually defined)
      "no-console": "warn", // Example of manually adding a rule
      "no-empty-function": "error", // Example of manually adding a rule
      "eqeqeq": "error", // Example of manually adding a rule
      "no-unused-vars": "warn", // Example of manually adding a rule

      // Add JSDoc rules
      "jsdoc/require-description": "error",
      "jsdoc/check-values": "error",
    },
  },
];
