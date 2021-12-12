import { useState, useEffect } from 'react';
import MeetUpList from "../meetups/MeetUpList";

  
function AllMeetUpsPage(){
    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(() =>{
      setIsLoading(true);
      fetch('https://react-nextjs-72aac-default-rtdb.firebaseio.com/meetups.json').then((resp)=>{
          return resp.json();
      }).then(data =>{
        const meetups = [];
        for (const key in data){
          const tmp = {id: key, ...data[key]};
          meetups.push(tmp);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      }
      );
    },[]);
    if (isLoading){
      return (
        <section>
          <p>...Is Loading</p>
        </section>
      );
    }else{
    return (<div>
        <MeetUpList data={loadedMeetups} />
    </div>);
    }
}

export default AllMeetUpsPage;