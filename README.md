# FAMILY FRIENDLY

### BACKGROUND

Every parent and caregiver is far too familiar with the drama of diaper changing on-the-go. My family will seek out Starbucks while on road trips, knowing they will provide: changing tables accessible by caregivers regardless of gender, assorted snacks, a standard of cleanliness, and of course coffee for us sleep deprived adults.

My wife suggested building an app that would allow an overstressed parent to quickly look and see whether a rest stop option included those basic childcare amenities, and thus Family Friendly was born! As a simple MVP (minimum viable product), the app currently plots a map showing spots that feature a changing table, and what type of restroom it's in (Womens Only, Both, etc). Users can view this data based on their geolocation, and if they choose to securely log in with their Google account, they can add their own places and report when they encounter (or don't) the unicorn that is changing tables in BOTH bathrooms.

### SCREENSHOTS

##### Mobile

![Screenshot](./docs/mobile-splash.jpg 'Mobile Screenshot')
![Screenshot](./docs/mobile-reports.jpg 'Mobile Screenshot')

##### Desktop (Logged Out)

![Screenshot](./docs/desktop-list-loggedout.png 'Desktop Screenshot')

##### Desktop (Logged In Google OAuth)

![Screenshot](./docs/desktop-list.png 'Desktop Screenshot')

### TECH

- Front-End: HTML, CSS, Javascript, EJS
- Back-End: Node.js (Express, Passport), MongoDB Atlas, Mongoose
- APIs: Google OAuth2, Google Maps Javascript API
- Development: Git, GitHub, VSCode, Prettier, Draw.io, Trello

### RESOURCES

- [Water.css](https://watercss.kognise.dev/)
- [Material Design Icons](http://google.github.io/material-design-icons/)
- [Styling HTML Buttons](https://fdossena.com/?p=html5cool/buttons/i.frag)
- [Forcing HTTPS with Express / Heroku](https://jaketrent.com/post/https-redirect-node-heroku)
- [PNG Tree](pngtree.com) and [Toptal](https://www.toptal.com/designers/subtlepatterns/) - Royalty Free Images

### DEVELOPMENT

![Initial Wireframe](./docs/wireframe.jpg 'Initial Wireframe - Main Page')
![ERD](./docs/erd.drawio.svg 'Entity Relationship Diagram')

- [Trello Board](https://trello.com/b/y4dMEE1k/project-2)

### POTENTIAL FURTHER DEVELOPMENT

- Choose an existing place (from Google Places API?) for user to report.
- Add meta tags etc to html.
- Display city and country name in list of places.
- Save a user's last known location, and default to that. Only use geolocation once or when user requests an update.
- More report options: Parking, Seating, Breastfeeding Room, Play Area, Stroller Friendly, etc.
- Filter mapped results based on caregiver and child needs.

### GETTING STARTED

Please enable geolocation when prompted, and be sure the web address begins with HTTPS. Development was done in Google Chrome.

- View [GitHub Repo](https://github.com/benhammondmusic/familyfriendly)
- Launch [Family Friendly](https://benhammond-familyfriendly.herokuapp.com)
