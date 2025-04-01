interface Content {
  title: string;
  description: string;
  key: string;
  value?: boolean
}

const list: Array<Content> = [
  {
    value: false,
    key: "functional",
    title: "Functional cookies",
    description:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in or filling in forms.",
  },
  {
    value: true,
    key: "performance",
    title: "Performance cookies",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.",
  },
  {
    value: true,
    key: "targeting",
    title: "Targeting cookies",
    description:
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
  },
];

export { list };
export type { Content };
