import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

  function AllMeetupsPage() {
   const [isLoading, setIsLoading] = useState(true);
   const[loadedMeetups, setLoadedMeetups] = useState([]);

   useEffect(() => {
    setIsLoading(true);
    fetch('https://react-4844-default-rtdb.firebaseio.com/meetups.json'
    )
    .then(response => {
      response.json();
    })
    .then((data) => {
      const meetups = [];
        
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[keyboard]
        };
        meetup.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  
   }, []);

 
  if (isLoading){
    return <section>
      <p>Loading.......</p>
    </section>
  }

    return (
    <section>
        <h1>All Meetups</h1>
         <MeetupList meetups={loadedMeetups} />
    </section>
    );
}

export default AllMeetupsPage;