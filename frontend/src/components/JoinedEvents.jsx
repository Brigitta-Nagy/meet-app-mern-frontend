import React, {useEffect, useState} from 'react'
import axios from "axios"



function JoinedEvents() {
  const [joinedEvents, setJoinedEvents] = useState([])

  useEffect(()=>{
    axios
    .get("/joined")
    .then( res => {console.log(res)
    setJoinedEvents(res.data)})
    .catch(err => console.log(err))

  }, [])
  

  return (
    <>
    <div>
       <h3 className='m-3'>Events you will join :</h3>
    </div>
    {joinedEvents ? (
      <>
      {joinedEvents.map(joinedEvent => {
        return (
          <div>
            <h2>{joinedEvent.title}</h2>
            {/* <h4>{joinedEvent.address}</h4> */}
          </div>
        )
      })}
      </>

    ):"Choose an event"}
    </>
  )

}

export default JoinedEvents