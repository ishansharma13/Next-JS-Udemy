import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';

function mainPage(){
  const featuredEvents = getFeaturedEvents();
    return (<div>
      <EventList events={featuredEvents} />    
      </div>);
}

export default mainPage;