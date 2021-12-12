import { useRouter } from 'next/router';
import {Fragment} from 'react';
import {getFilteredEvents} from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import ErrorAlert from '../../components/ui/ErrorAlert';

function eventSearchPage(){
    const router = useRouter();
    const urlParams = router.query.search;

    if (!urlParams){
      return <p className='center'>...Loading</p>;
    }
    const year = urlParams[0];
    const month = urlParams[1];
    
    if (isNaN(year) || isNaN(month) || month<1 || month>12){
      return <ErrorAlert><p> Wrong Filter, Try Again</p></ErrorAlert>;
    }
    const numYear = +year;
    const numMonth = +month;
    const filteredEvents = getFilteredEvents({year: numYear,month: numMonth});
    console.log(filteredEvents);
    if (!filteredEvents || filteredEvents.length === 0){
      return <ErrorAlert><p>No Events Exist for the selected Parameters</p></ErrorAlert>;
    }
    
    const date = new Date(year=numYear,month=numMonth-1);
    return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList events={filteredEvents}/>
      </Fragment>);
  }
  
  export default eventSearchPage;