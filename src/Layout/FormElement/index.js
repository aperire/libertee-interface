const Elements = {
  Email: {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    controlId: "formBasicEmail",
  },
  Username: {
    label: "Username",
    name: "nickName",
    type: "text",
    placeholder: "Enter username",
    required: true,
    controlId: "formBasicUsername",
  },
  Bio: {
    label: "Bio",
    name: "bio",
    type: "text",
    placeholder: "Enter bio",
    required: true,
    controlId: "formBasicBio",
  },
  Website: {
    label: "Website",
    name: "website",
    type: "text",
    placeholder: "Enter website",
    required: true,
    controlId: "formBasicWebsite",
  },
  UploadProfile: {
    label: "Upload Profile",
    name: "image",
    type: "file",
    placeholder: "Upload profile",
    required: true,
    controlId: "formBasicUploadProfile",
  },

  Github: {
    label: "Github",
    name: "github",
    type: "text",
    placeholder: "Github",
    required: true,
    controlId: "formBasicGithub",
  },
  Telegram: {
    label: "Telegram",
    name: "telegram",
    type: "text",
    placeholder: "Telegram",
    required: true,
    controlId: "formBasicTelegram",
  },
};

export const AccountFormFields = [
  Elements.Username,
  Elements.Bio,
  Elements.Website,
  Elements.UploadProfile,
];
