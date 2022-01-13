import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();

    function onAddMeetupHandler(meetupData) {
        fetch('https://react-4844-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'content-Type': 'application/json'
            }
        }
        ).then(() => {
            history.replace('/');
        });

    }
    return <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>;
}

export default NewMeetupPage;