export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ]
}

export default async function ProuductDetail({ params }: { params: Promise<{ id: string }>}) {

  const { id } = await params
  console.log(id)

  return <div>Prouduct { id }  date: { new Date().toLocaleTimeString()}</div>;
}
