import React ,{useContext} from 'react'
import CountContext from '../contexts/countContext'


const Count = () => {

    const couter = useContext(CountContext)

  return (
    <div>
      The Count is {couter}
    </div>
  )
}

export default Count
