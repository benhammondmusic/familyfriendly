# FAMILY FRIENDLY

### BACKGROUND

Every parent and caregiver is far too familiar with the drama of diaper changing on-the-go. My family will seek out Starbucks while on road trips, knowing they will provide: changing tables accessible by caregivers regardless of gender, assorted snacks, a standard of cleanliness, and of course coffee for us sleep deprived adults.

My wife suggested building an app that would allow an overstressed parent to quickly look and see whether a rest stop option included those basic childcare amenities, and thus Family Friendly was born! As a simple MVP (minimum viable product), the app currently plots a map showing spots that feature a changing table, and what type of restroom it's in (Womens Only, Both, etc). Users can view this data based on their geolocation, and if they choose to securely log in with their Google account, they can add their own places and report when they encounter (or don't) the unicorn that is changing tables in BOTH bathrooms.

### SCREENSHOTS

![Mobile Screenshot](./mobile-screenshot.jpg 'Initial Deploy - Mobile Screenshot')

### TECH USED

- Front-End: HTML, CSS, Javascript
- Back-End: Node.js (EXPRESS, PASSPORT), MONGO DB ATLAS, MONGOOSE
- APIs: Google OAuth2, Google Maps Javascript API
- Development: Git, GitHub, VSCode, Draw.io, Trello
- Resources: [Water.css](https://watercss.kognise.dev/), [Material Design Icons](http://google.github.io/material-design-icons/), [Styling HTML Buttons](https://fdossena.com/?p=html5cool/buttons/i.frag), [Forcing HTTPS with Express / Heroku](https://jaketrent.com/post/https-redirect-node-heroku)

### GETTING STARTED

Please enable geolocation when prompted, and be sure the web address begins with HTTPS. Development was done in Google Chrome.

- Launch [Family Friendly](https://benhammond-familyfriendly.herokuapp.com)
- View [GitHub Repo](https://github.com/benhammondmusic/familyfriendly)

### DEVELOPMENT

![Initial Wireframe](./wireframe.jpg 'Initial Wireframe - Main Page')
![ERD](./erd.drawio.svg 'Entity Relationship Diagram')

### NEXT STEPS

- add cards meta tags etc to html
- get city, country name to display on place info page
- save USER location and only have browser get it once
- make repo public
