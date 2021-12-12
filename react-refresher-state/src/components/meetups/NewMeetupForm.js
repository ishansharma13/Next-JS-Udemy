import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(props){
    const enteredTitle = useRef(); 
    const enteredImage = useRef(); 
    const enteredAddress = useRef(); 
    const enteredDescription = useRef(); 
    function onSubmitHandler(event){
        event.preventDefault();
        const filledForm = {
            title: enteredTitle.current.value,
            image: enteredImage.current.value,
            address: enteredAddress.current.value,
            description: enteredDescription.current.value,
        };

        props.addDataHandler(filledForm);
    }


    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={enteredTitle}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={enteredImage}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={enteredAddress}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea id="description" required size="5" ref={enteredDescription}></textarea>
                </div>
                <div className={classes.actions}>
                   <button>New Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;