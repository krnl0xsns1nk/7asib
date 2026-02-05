import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import getBrowserLocale from "@/lib/getLocal"
export default async function RootPage() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  
  const userLocale = getBrowserLocale(acceptLanguage)
  
  redirect(`/${userLocale}`)
}
