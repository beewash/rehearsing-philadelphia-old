const emailVal = {
    name: 'emailVal',
    type: 'string',
    validation: (Rule) =>
    Rule.regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      {
        name: "email", // Error message is "Does not match email-pattern"
        invert: false, // Boolean to allow any value that does NOT match pattern
      },
    ),    
};

export default emailVal;