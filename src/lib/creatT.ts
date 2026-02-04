export function createT(translations: any) {
  return function t(path: string, vars?: Record<string, string>) {
    const keys = path.split(".");
    let value = keys.reduce((obj, key) => obj?.[key], translations);
    if (typeof value !== "string") return path;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(`{{${k}}}`, v);
      });
    }
    return value;
  };
}
