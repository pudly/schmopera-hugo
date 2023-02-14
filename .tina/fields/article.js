const article = [
  {
    type: "string",
    name: "title",
    label: "Title of article",
    required: true,
  },
  {
    type: "string",
    name: "slug",
    label: "Slug",
    required: true,
  },
  {
    type: "datetime",
    name: "date",
    label: "Date",
  },
  {
    type: "string",
    name: "author",
    label: "Author(s)",
    list: true,
  },
  {
    type: "string",
    name: "categories",
    label: "Category",
    options: [
      "Editorial",
      "How-To",
      "Humour",
      "Interview",
      "Meta",
      "Op-Ed",
      "Review",
    ],
  },
  {
    type: "image",
    name: "primary_image",
    label: "Primary Image",
  },
  {
    type: "string",
    name: "primary_image_credit",
    label: "Primary Image Credit",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "short_description",
    label: "Short Description",
    ui: {
      component: "textarea",
    },
    required: true,
  },
  {
    type: "string",
    name: "disclaimer",
    label: "Disclaimer",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "preamble",
    label: "Preamble",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "postamble",
    label: "Postamble",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "youtube_url",
    label: "Youtube URL",
  },
  {
    type: "string",
    name: "related_articles",
    label: "Related Articles",
    list: true,
  },
  {
    type: "string",
    name: "related_people",
    label: "People",
    list: true,
  },
  {
    type: "string",
    name: "related_companies",
    label: "Companies",
    list: true,
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body of Document",
    description: "This is the markdown body",
    isBody: true,
  },
];

export default article;
