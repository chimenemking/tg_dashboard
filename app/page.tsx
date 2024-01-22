


export default function Home() {
  return (
    <main className="">
     <div className="">
     <div className='grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-6 h-screen'>
      <GridItem title="Area Chart">
      
      </GridItem>
      <GridItem title="Bar Chart">
      
      </GridItem>
      <GridItem title="Line Chart">
      
      </GridItem>
     </div>
     
     </div>
    </main>
  )
}

function GridItem({title, children}:any){
  return(
    <>
    <div className='flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl'>
      <h3 className='text-3xl font-semibol] text-white mb-4'>{title}</h3>
      {children}
    </div>
    </>
  )
}