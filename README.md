# React.js Web Frontend For RpgManager Project

This is a fully functional React.js + Vite web frontend for RpgManager, a self-management app that combines game and organization. The purpose of this project is to create a single application that combines self-management tools with gaming-like features to provide a comfortable and rewarding experience in managing your life.

See RPG Manager API <a href="https://github.com/Definitely-Human/rpgmanager-api">here</a>.

## Table of Contents

-   [The Goal](#the-goal)
-   [Technical Details](#technical-details)
-   [Installation](#installation)
-   [Known Issues](#known-issues)
-   [Contributing](#contributing)

## The Goal

The goal of this manager is to organize yourself using four main components:

-   Tasks
-   Lists
-   Routines
-   Notes

While combining it with gaming-like features such as:

-   Character
-   Level
-   Rewards for completion of tasks, etc.
-   Skills
-   Coins
-   Reward items

### Design

The design for the web interface was made by me in Figma:

![alt text](https://i.imgur.com/LHJJg3f.png)

This design is in early stages and will be improved upon.

## Technical Details

Here is the list of all technologies used in this project: HTML, CSS, TailwindCSS, JavaScript, React, Vite, React Testing Library, Cypress, ESLint, Redux Toolkit, Axios, Docker, Git, Github CI.

Some of the features that already work:

-   Responsive web interface made with React and <b>TailwindCSS</b>
-   Multi-paged app layout with protected routes using <b>React Router</b>.
-   Multiple unit tests with <b>React Testing Library</b> and E2E tests with <b>Cypress</b>.
-   Can perform CRUD operations on Tasks and Categories using UI.

## Installation

1. Clone this project.
2. Install Docker Desktop.
3. Run `docker-compose up`, and all dependencies will be automatically installed.

## Known Issues

-   Error are not being displayed correctly.

## Contributing

If you know how to fix a bug or have a cool or useful feature to add, feel free to clone this repository and submit a pull request.
