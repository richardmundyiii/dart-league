# Dart League Website

<div id="header" align="center">

<img src="https://i.imgur.com/Cxz7d4M.png" width="600" height="400">

  <div id="description" align="center">

# Santa Cruz Dart League

### [CLICK TO DEMO](https://dart-league-rdm.herokuapp.com/)

##### Richard Mundy

[![LinkedIn Badge](https://img.shields.io/badge/-@richardmundy3-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/richardmundy3/)

## :pencil: Description

All your dart league needs in one comprehensive site. From users ability to check their own stats and team rankings, to admins uploading stats, managing venues and teams, and uploading blog posts to keep players up-to-date.

  </div>
  </div>

<div>

## :camera_flash: Screenshots

|        Description        | Screenshot                                                |
| :-----------------------: | --------------------------------------------------------- |
|       <h3>ERD</h3>        | <img src="https://i.imgur.com/1sFJuij.png" width="700" /> |
|    <h3>Wireframes</h3>    | <img src='https://i.imgur.com/QKFOTwV.png' width="700" /> |
|  <h3>Team Standings</h3>  | <img src='https://i.imgur.com/zAZTKqU.png' width="700" /> |
| <h3>Player Standings</h3> | <img src='https://i.imgur.com/NUNr3ND.png' width="700" /> |
|    <h3>Admin Edit</h3>    | <img src='https://i.imgur.com/TSuOu7k.png' width="700" /> |

</div>

<div>

## :computer: Technologies Used

![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb)
![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express)
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)
![Node](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)
![AWS S3](https://img.shields.io/badge/-AWS_S3-05122A?style=flat&logo=amazons3)
![JWT](https://img.shields.io/badge/-JSON_Web_Tokens-05122A?style=flat&logo=jsonwebtokens)
![Mongoose ODM](https://img.shields.io/badge/-Mongoose_ODM-05122A?style=flat&logo=mongodb)
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
![Trello](https://img.shields.io/badge/-Trello-05122A?style=flat&logo=trello)
![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)

</div>

<div>

## :fire: Getting Started

<details open>
  <summary> Adding Player </summary>
    1. First you will need to login from the navbar.
    2. Assuming you had isAdmin rights, you can navigate to Team Standings
    3. From here you will see 'Add A Player' form. 
    4. Select which division and team for the new player.
    5. Click save when all data is filld out.
</details>

<details>
  <summary> How to Add/Edit Player Stats </summary>
    1. Ensure you are logged in from the navbar.
    2. Go to Teams Standings Page
    3. Select a team
    4. Select Player
    5. Edit player stats as needed or delete.
</details>

</div>

<div>

## Current Features

</div>

<details open>
  <summary>Webscrapping Team Standings</summary>
  To save time for league admins, this league is using DartConnect to "manage" its league stats through their game app. Unfortunately, they do not have an API to pull data from. So I built a webscrapper to pull just league standings. You can find more details on the web scrapping at my other repo here: https://github.com/richardmundyiii/dart-connect-scraper

|      Description      | Screenshot                                                |
| :-------------------: | --------------------------------------------------------- |
| <h3>Scraper Code</h3> | <img src="https://i.imgur.com/DaEDUEd.png" width="700" /> |

</details>

<details open>

<summary>Admin Blog w/ Formatting</summary>

To keep all players up-to-date on latest league news, admins can create 'blog' style posts that saves to the database. Additionally, on the homepage near the bottom are the latest 2 posts rendering dynamically. To create more visually appealing posts I included React's [Draft.js](https://draftjs.org/) to allow spell checking and formatting posts. Admins can also edit posts in the same form and delete unnecessary posts.

|        Description         | Screenshot                                                |
| :------------------------: | --------------------------------------------------------- |
| <h3>Admin Blog Portal</h3> | <img src="https://i.imgur.com/zVrog8P.png" width="700" /> |
|   <h3>Homepage News</h3>   | <img src="https://i.imgur.com/dnoM51O.png" width="700" /> |

</details>

<div>

## :satellite: Upcoming Features

- [:white_check_mark:] Add admin blog

- [:x:] Create user profiles

- [:x:] Connect Stripe for payments

</div>
