const peopleSingle = {
  name: "people_single",
  label: "New People Page",
  defaultItem: () => {
    return {
      _template: "people_single",
    };
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
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
      name: "primary_image_credit",
      label: "Primary Image Credit",
    },
    {
      type: "string",
      name: "discipline",
      label: "Discipline",
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
      type: "string",
      name: "related_companies",
      label: "Related Companies",
      list: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ],
};

export default peopleSingle;
