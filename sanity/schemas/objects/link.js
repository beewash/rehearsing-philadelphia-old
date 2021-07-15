const link = {
    name: 'link',
    type: 'url',
    validation: (Rule) =>
    Rule.required().uri({
      allowRelative: true, // Allow relative links
      relativeOnly: false, // Force only relative links
      scheme: ["https", "http", "mailto"], // Default is ["https", "http"]
    }),
};

export default link;