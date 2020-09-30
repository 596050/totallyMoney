export const formatString = (str?: string) =>
  String(str || "")
    ?.toLowerCase()
    .trim();
