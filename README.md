# React Redux with Sagas
For this weekend challenge, you'll be building a portfolio site to showcase your work. 

## Feature List

### Project Page
- [x] Client side route that displays projects that are stored in the database
- [x] Each project should conditionally render a name, description, thumbnail, website, date complete and a tag. Many of the fields are optional, only show properties that aren't null.
- [x] Include a link to GitHub that opens in a new window
- [x] Add your name at the top of the page
- [x] Use Sagas for API requests to your server

### Admin Page
- [x] Client side route that displays a form
- [x] Form allows you to add a new project to your portfolio
- [ ] Include a drop down menu with a list of tags
- [ ] Send data to the server and notify the user of success or failure
- [ ] List projects by name and allow the user to delete them
- [x] Include a button that navigates to the project page

### General Tasks
- [x] Commit your code frequently! You should have at least 15 commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

## Wireframes
> NOTE: Feel free to modify the styling and layout of content on the page. 

### Project Page
<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/project_page.png" width="560">


### Admin Page
<img src="https://github.com/PrimeAcademy/weekend-6-portfolio/raw/master/wireframes/admin_page.png" width="560">

## Stretch Goals
- [ ] Use the GitHub API to get user information to display at the top of the page
- [ ] Improve styling on the page using Material UI
- [ ] Include a form on the admin page for adding new tags
- [ ] Implement additional features of the GitHub API

## Notes

### Tags
We've given you some starter tags. Feel free to change or add some.

For base mode, you should only include **one** tag per project. This gives you a one to many relationship. We'll cover many to many SQL queries next week. 

### Screenshots
To take a screenshot of your project, use `Command-Shift-4` on your mac. It turns the cursor into a crosshair, which you can drag to select a portion of your screen to capture. The image will appear on your desktop.

Place thumbnail images in the `public/images` folder. 

**Do not implement image upload for base mode.**

