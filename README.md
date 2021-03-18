# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Andrew Smith**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/andrews-memory-game

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [N] More than 4 functional game buttons
* [N] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [N] Player only loses after 3 mistakes (instead of on the first mistake)
* [N] Game button appearance change goes beyond color (e.g. add an image)
* [N] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [N] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [3] List anything else that you can get done to improve the app!
- I can add a sound that alerts the user that he/she was correct.
- I can add a sound that alrets the user that he.she was incorrect.
- I can difficulty buttons (shorter sound clues).

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://recordit.co/JjzKESfexQ]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- The main tool I used was the website w3schools.com for color palets and some refreshers on things such as Math.Rand.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- Closing the app and reopening the app mutes the audio which is stated in the console. I figured a work around by just changing something and
  deleting it. Refreshing just by itself didnt unmute it. the other solution was to use resume() but for now I just left it how it is.

- Another problem that I encountered was trying to edit the README.md file. I do not know if this was a common feature to not be edited however
  I did overcome this by just renaming the file to "README.md copy". Then I was allowed to edit this file. I removed the "copy" part of the file
  to revert it back to how it was so it can no longer be edited.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- When taking a web development course after half way into the semester we stopped using html and began using jsp. I was wondering if using 
  html by itself is still used in advanced coding or would I be using JSP and/or PHP all of the time.

- One thing that I noticed is that code will still run even if I forget to put a ";" at the end of a JS line. I was wondering if this is
  this will always remain true throughout the whole programming. I am use to programming in C++ in which one error like that will cause the whole
  program to just not work.

- Would glitch be the recommended way to test web pages? Before I was using eclipse to test web pages and glitch has been way easier than eclipse.
  Otherwise my guess would be that glitch is not compatible with using JSP and PHP in which I have no choice but to use eclipse.
  
- Whether I am accepted or not I want to continue gaining knowledge with coding. I already gained some new knowledge from this program alone so I was hoping
  if there was another site I can use to practice coding.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- As a gamer I would first add more challenges to make the gameplay more exciting for the user such as more buttons, shorter cluesounds and also a blind mode that the user would have to memorize the pattern based on
  the sounds that was played out rather than the visual ques.
  
- I would add an images to lighten or brighten the mood. Or I can add images to the page if the user loses or wins.

- I would also add an endless mode to the game. Since there is already a score implemented into the game the user can see how high he can get.

- I Would add a link to the orginal creators of the game, or to this particular game.


## License

    Copyright Andrew Smith

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.