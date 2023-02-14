const companySingle = {
  name: "company_single",
  label: "New Company Page",
  defaultItem: () => {
    return {
      _template: "company_single",
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
      name: "type_of_company",
      label: "Type of Company",
    },
    {
      type: "string",
      name: "website",
      label: "Website",
    },
    {
      type: "string",
      name: "address",
      label: "Address",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "email",
      label: "Contact Email",
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
      name: "related_people",
      label: "Related People",
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

export default companySingle;
