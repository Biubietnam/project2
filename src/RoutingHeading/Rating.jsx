import React, { useState } from 'react';
import { TextField, Button, Rating, Box } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';

function Ratings({ CloseRaiting }) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!feedback.trim()) {
      alert("Feedback cannot be empty.");
      return;
    }

    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }

    console.log('Form submitted');
    console.log('Feedback:', feedback);
    console.log('Rating:', rating);

    setFeedback('');
    setRating(0);
  };

  return (
    <div className="con-modal">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '60%',
          height: '50vh',
          margin: 'auto',
          backgroundColor: 'lightgray',
          padding: '20px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '10'
        }}
      >


        <h1>
          <FeedbackIcon fontSize="larger" />
        </h1>


        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />


        <TextField
          label="Your Feedback"
          multiline
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          variant="outlined"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Feedback
        </Button>

        <div className="btn-detail">
          <button type="button" className="btn" onClick={CloseRaiting}>
            <CloseIcon />
          </button> 
        </div>
      </Box>
    </div>
  );
}

export default Ratings;