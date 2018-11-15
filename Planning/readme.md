# GiveBlack-Project2

## Background

GiveBlack is a grassroots-giving marketplace. Every year, those who can, give to causes and organizations they are most passionate about. Often times those organzations are widely known and heavily funded with vast donor development infrastructures.

GiveBlack is a marketplace for users who wish to donate to organzations that are led by, in support of, or protect communities of color from the various harms these communities face living on the margins of society. These organzations are often severly underfudned and do not have the fundraising infastructure compared to their larger, well-known counterparts.

## Description

Users can select organizations they would like to donate to, that appear on the user dashboard (no limit) with the donation amount equally divided by the number of organizations selected, allowing users to donate to multiple causes on one platform.

Happy Giving!

## List of features/User Stories

- Users are prompted to Sign Up or LogIn to begin giving. Users cannot donate without making a profile.
- Users will be able to create a new profile, view the list of organizations they can donte to, update/delete their profile at any time.
- When updating, users can click on update, they are taken to their profile, with original sign up form, they can then replace any field they wish and it will be updated in the database.
- Once a profile is made, users are taken to their Dashboard where they will see a list of organizations they can donate to.
- Users will be shown the organization name, mission statement, and organization url, which will open in a new window. This allows users to learn more about the organization without leaving the GiveBlack platform.
- Users can then select organizations they wish to give to and proceed to 'checkout' where they will be prompted to enter payment information and receive a confirmation upon comletion.
- Users will be able to view their giving dashboard in their profile for yearly reporting of charitable contributions.

## Approach

- Used RESTFUL routes to complete CRUD funtionality on User, allowing for creation, readability, updating, and deleting users.
- Required Mongoose and created Org database to inlcude organization name, mission, url, results are displayed on user dashboard once logged in.
- Used Handlebars view engine to display login, signup, profile, and dahboard functionality
- Give option is triggered by selecting the organization logo in the user dashboard, prompting a flash message thanking them for their (simulated) donation. This is gathered using the Give model and querying the mongoose database.

## Tech Used

Express
Mongoose
Handlebars
