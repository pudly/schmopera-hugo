const md = {
  name: "md",
  label: "MD",
  match: {
    start: "{{%",
    end: "%}}",
  },
  fields: [
    {
      name: "children",
      label: "MD Value",
      type: "rich-text",
      required: true,
      isBody: true,
    },
  ],
};

export default md;
