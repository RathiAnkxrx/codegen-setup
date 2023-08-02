import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/services/graphql/*.graphql"], // where all graphql queries are written
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/types/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: true,
      },
    },
  },
};

export default config;
// /Users/ankurrathi/Documents/Projects/graphql/codegen-setup/codegen/src/pages/services/graphql/starwars.graphql
