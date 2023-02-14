import { defineConfig } from "tinacms";
import companyList from "./collections/company-list";
import companySingle from "./collections/company-single";
import peopleList from "./collections/people-list";
import peopleSingle from "./collections/people-single";
import article from "./fields/article";
import author from "./fields/author";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        label: "Articles",
        name: "articles",
        path: "content/articles",
        format: "md",
        fields: [...article],
      },
      {
        label: "Featured Articles",
        name: "featured_articles",
        path: "content/featured",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
          },
          {
            type: "string",
            name: "url",
            label: "URL",
          },
          {
            type: "string",
            name: "articles",
            label: "Featured Article List",
            list: true,
          },
        ],
      },
      {
        label: "Authors",
        name: "authors",
        path: "content/authors",
        format: "md",
        fields: [...author],
      },
      {
        label: "Companies",
        name: "companies",
        path: "content/scene/companies",
        format: "md",
        templates: [companyList, companySingle],
      },
      {
        label: "People",
        name: "people",
        path: "content/scene/people",
        format: "md",
        templates: [peopleList, peopleSingle],
      },
      {
        label: "About",
        name: "about",
        path: "content/about",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
