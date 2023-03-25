export const nameRules = {
  required: "Name is required!",
  minLength: {
    value: 4,
    message: "Name must be at least 4 characters long.",
  },
  maxLength: {
    value: 15,
    message: "Name can't be longer than 15 characters.",
  },
};

export const selectRules = {
  required: "Selection is required!",
};

export const emailRules = {
  required: "E-mail is required!",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "E-mail is not valid!",
  },
};

export const animalsList = [
  {
    value: "macka",
    label: "Mačka",
  },
  {
    value: "pas",
    label: "Pas",
  },
  {
    value: "hrcak",
    label: "Hrčak",
  },
];
