// Define a function to check if the survey is complete
function isSurveyComplete() {
  // Check if the Qualtrics API is available
  if (typeof(Qualtrics.SurveyEngine) !== 'undefined') {
    // Get the survey engine instance
    const survey = Qualtrics.SurveyEngine.getInstance();

    // Check the survey completion status
    return survey.isComplete();
  } else {
    // Qualtrics API not available
    return false;
  }
}

// Define a variable to track the survey completion status
let surveyIsComplete = false;

// Check the survey completion status every second
setInterval(() => {
  if (isSurveyComplete()) {
    surveyIsComplete = true;
    console.log('Survey is complete!');
  } else {
    surveyIsComplete = false;
  }
}, 1000);
