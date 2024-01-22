import React from 'react'

type Props = {

}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
    <div>layout</div>
    {children}
    </div>
  )
}

export default layout