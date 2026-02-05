const supportedLocales = ['ar', 'fr'];
const defaultLocale = 'fr';
export default function getBrowserLocale(acceptLanguage: string): string {
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, priority = 'q=1'] = lang.trim().split(';')
      return {
        code: code.split('-')[0], // ar-SA → ar
        priority: parseFloat(priority.replace('q=', ''))
      }
    })
    .sort((a, b) => b.priority - a.priority)

  for (const lang of languages) {
    if (supportedLocales.includes(lang.code)) {
      return lang.code
    }
  }
  return defaultLocale
}
