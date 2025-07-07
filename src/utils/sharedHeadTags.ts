const FONT_PATH = "/src/assets/fonts";

export const sharedHeadTags = [
  {
    type: "link" as const,
    attributes: {
      rel: "preload",
      href: `${FONT_PATH}/exxon-icons.ttf`,
      as: "font",
      type: "font/ttf",
      crossorigin: "anonymous",
    },
  },
  {
    type: "link" as const,
    attributes: {
      rel: "preload",
      href: `${FONT_PATH}/EMprint-Semibold.woff2`,
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  },
  {
    type: "link" as const,
    attributes: {
      rel: "preload",
      href: `${FONT_PATH}/EMprint-RegularItalic.woff2`,
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  },
  {
    type: "link" as const,
    attributes: {
      rel: "preload",
      href: `${FONT_PATH}/EMprint-Regular.woff2`,
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  },
  {
    type: "link" as const,
    attributes: {
      rel: "preload",
      href: `${FONT_PATH}/EMprint-Light.woff2`,
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  }
];
