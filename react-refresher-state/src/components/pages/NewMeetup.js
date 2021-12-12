import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetups/NewMeetupForm';
function NewMeetUpPage(){
    const navigate = useNavigate();
    function addDataHandler(formData){
        fetch('https://react-nextjs-72aac-default-rtdb.firebaseio.com/meetups.json',
        {method: "POST",
        body: JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json'
        }}).then(()=>{
            navigate('/');
        });

    }
    return (<div>
        <NewMeetupForm addDataHandler={addDataHandler}/>
    </div>);
}

export default NewMeetUpPage;