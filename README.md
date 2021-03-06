# JavTube

## Description
This web application is a basic YouTube clone that was created using Stephen Grider's Modern React with Redux course on Udemy as a guide. When the app first loads, it connects to the YouTube API using Axios to make a get request and the response returns 5 video results based on the default search term entered in the componentDidMount function of the App.js component. The 5 video results are displayed in the VideoList component on the right side of the page using 5 separate VideoItem components.

The app also has an embedded video player which by default will show the first video result from the API's response which comes from the search term that is submitted in the SearchBar component (or the default search term when the app loads).

Below the embedded video player, there is the VideoDetail component which shows the selected video's title and description which comes from the response.

## Technologies/Libraries Used:
* Node.js <https://nodejs.org/en/>
* React.js <https://facebook.github.io/react/>
* Axios <https://github.com/mzabriskie/axios/>
* Semantic-UI <https://github.com/Semantic-Org/Semantic-UI>


## Instructions to run this application on your machine:

1. Clone this repository to your computer by opening the terminal and running the command 'git clone git@github.com:jav1ts/JavTube.git'.
2. Once you have cloned the repo, CD into the JavTube directory, then run the command "npm install" to all of the node packages for this app.
3. Once you have installed the node packages, run the command 'npm start' to load up the application.


When the app first loads, you will see a search bar at the top, an embedded video player showing a video for Cornell Tech, and a list of 5 related videos on the right side.

<img width="1047" alt="Screen Shot 2020-09-09 at 8 17 12 AM" src="https://user-images.githubusercontent.com/55659287/92597630-afa2d100-f275-11ea-94df-0cd556a1f81c.png">

Type in the search bar the video that you want to search for and press enter. The embedded video player will update to show the first result from the YouTube API and the list on the right will update to show 5 related videos.

<img width="1053" alt="Screen Shot 2020-09-09 at 8 18 37 AM" src="https://user-images.githubusercontent.com/55659287/92597633-afa2d100-f275-11ea-94bf-9c9b9c382e2a.png">

If you select one of the videos from the list on the right, the embedded video player and the video's details (title & description) will update below it as well.

<img width="1049" alt="Screen Shot 2020-09-09 at 8 19 25 AM" src="https://user-images.githubusercontent.com/55659287/92597635-b03b6780-f275-11ea-927c-f81679d429cb.png">