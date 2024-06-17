import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Peter John",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      date: "09-12-23"
    },
    {
        id: "728ed52f",
        name: "Grace Davies",
        amount: 100,
        status: "processing",
        email: "m@example.com",
        date: "08-12-23"
      },
      {
        id: "728ed52f",
        name:"John Snow",
        amount: 100,
        status: "success",
        email: "m@example.com",
        date: "10-12-23"
      },
      {
        id: "728ed52f",
        name:"Wayne Bushing",
        amount: 100,
        status: "failed",
        email: "m@example.com",
        date: "19-12-23"
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className=" mx-auto">
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
