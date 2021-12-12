import { useRouter } from 'next/router';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
function allEventsPage(){
    const allEvents = getAllEvents();
    const router = useRouter();
    function searchHandler(year,month){
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
    }
    return (<div>
      <EventsSearch onSearch={searchHandler}/>
      <EventList events={allEvents} />    
      </div>);
  }
  
  export default allEventsPage;