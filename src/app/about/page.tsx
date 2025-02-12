import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookiesStore = await cookies()
  const theme = cookiesStore.get('theme')
  console.log({ theme })
  console.log("About server component")
  return <div>AboutPage {new Date().toLocaleDateString()}</div>;
}
