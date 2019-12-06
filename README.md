# quiz-game
A website for taking quizzes that saves high scores locally

## Description

This page lets users take a quiz.  They can choose one or more of the available topics, and a ten-question quiz will be dynamically generated from the available questions in those topics.

## Features

Player can select one or more quizzes.

Quiz will be dynamically created with randomly selected questions, presented in a randomized order.

The quiz is timed, with time deducted for wrong answers.

Player is given a score at the end that is equal to the time remaining.

Takes players initials as input and saves scores in local storage.

## Opportunities For Further Development

The page desperately needs CSS styling.  I just ran out of time on this.  I intend to work on this over the next day or two.

I would love to add more topics/questions.  The code was written to allow for more to be introduced in a pretty seamless way.  Adding a topic just requires creating the js file with the question data, linking the file in HTML, and adding the name of the topic to the main topics array in script.js.

There is very little feedback to the player currently when they submit an answer to indicate whether their answer was correct or not. At present there is only the audio cues and the timer getting docked 15 seconds (or not).

## Credits

This site uses [Bootstrap 4](https://getbootstrap.com/) (copyright 2019 Twitter).

The sounds used were downloaded from [freesound.org](https://freesound.org).  Specifically:
[Raclure's "Loading Chime"](https://freesound.org/people/Raclure/sounds/405546/)
and
[Psykoosiossi's "Chime"](https://freesound.org/people/Psykoosiossi/sounds/398661/)

## Reference Sources Used

[w3schools.com](https://www.w3schools.com/)

## License

Copyright (c) Benjamin Ferriman. All rights reserved.
Licensed under the [MIT](https://github.com/bferriman/portfolio/blob/master/LICENSE.txt) license.