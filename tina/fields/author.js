const author = [
  {
    type: "string",
    name: "title",
    label: "Title",
    required: true,
  },
  {
    type: "string",
    name: "slug",
    label: "Slug",
    required: true,
  },
  {
    type: "image",
    name: "primary_image",
    label: "Primary Image",
  },
  {
    type: "string",
    name: "short_bio",
    label: "Short bio",
    ui: {
      component: "textarea",
    },
  },
  {
    type: "string",
    name: "email",
    label: "Email Address",
  },
  {
    type: "string",
    name: "website",
    label: "Website",
  },
  {
    type: "object",
    list: true,
    label: "Social Media",
    name: "social_media",
    templates: [
      {
        fields: [
          {
            type: "string",
            name: "platform",
            label: "Platform",
            options: [
              "Facebook",
              "Twitter",
              "Instagram",
              "Youtube",
              "Linkedin",
              "Soundcloud",
            ],
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
        ],
        label: "Social Media",
        name: "social_media",
      },
    ],
  },
  {
    type: "rich-text",
    name: "body",
    label: "Body of Document",
    description: "This is the markdown body",
    isBody: true,
  },
];

export default author;
