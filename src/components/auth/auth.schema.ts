export const UserLoginSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
};

export const UserRegistrationSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    role: {
      type: "number",
      required: false,
    },
  },
};
