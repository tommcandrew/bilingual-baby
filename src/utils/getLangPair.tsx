export const getLangPair = (lang1: string, lang2: string) => {
  let res;
  const selectedLanguages = [lang1, lang2];

  if (
    selectedLanguages.includes("english") &&
    selectedLanguages.includes("turkish")
  ) {
    res = "enTr";
  } else if (
    selectedLanguages.includes("english") &&
    selectedLanguages.includes("spanish")
  ) {
    res = "enEs";
  } else if (
    selectedLanguages.includes("turkish") &&
    selectedLanguages.includes("spanish")
  ) {
    res = "esTr";
  }
  return res;
};
