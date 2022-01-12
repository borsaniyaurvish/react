import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
function NewMeetupForm() {
      const titleInputRef = useRef();
      const imageInputRef = useRef();
      const addressInputRef = useRef();
      const descriptionInputRef = useRef();

      function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredaddress = addressInputRef.current.value;
        const entereddescription = descriptionInputRef.current.value;

        const meetupData = {
              title: enteredTitle,
              image: enteredImage,
              address: enteredaddress,
              description: entereddescription
        };

        console.log(meetupData);
      }
      return (
      <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                  <div className={classes.control}>
                   <label htmlFor="title">Meetup title</label>
                   <input type='text' required id='title'ref={titleInputRef}/>
                   </div>
                  <div className={classes.control}>
                   <label htmlFor="image">Meetup image</label>
                   <input type='url' required id='image'ref={imageInputRef}/>
                   </div>
                  <div className={classes.control}>
                   <label htmlFor="address">Address</label>
                   <input type='text' required id='address'ref={addressInputRef}/>
                   </div>
                  <div className={classes.control}>
                   <label htmlFor="description">Description</label>
                   <textarea id="description" required rows='5'ref={descriptionInputRef}></textarea>
                   </div>
                   <div className={classes.action}>
                         <button onSubmit={submitHandler}>Add Meetup</button>
                   </div>
            </form>
      </Card>
      );
}

export default NewMeetupForm;