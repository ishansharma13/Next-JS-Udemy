import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/ErrorAlert';
function eventDetailsPage(){
    const router = useRouter();
    console.log(router.query.id);
    const event = getEventById(router.query.id);
    if (!event){
      return <ErrorAlert><p>No Event Found</p></ErrorAlert>;
    }
    return (<div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} image={event.image} address={event.location} imageAlt={event.title} />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
        </Fragment>    
      </div>);
  }
  
  export default eventDetailsPage;