# Email Server and Client - "Correo"
> Correo is an Email server and GMail inbox clone.

## Table of Contents
- [Email Server and Client - Correo](#email-server-and-client---correo)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies and Techniques used](#technologies-and-techniques-used)
    - [Planning and Design:](#planning-and-design)
    - [Front-end:](#front-end)
    - [Back-end:](#back-end)
      - [Email Listener](#email-listener)
      - [List Emails](#list-emails)
    - [Testing:](#testing)
  - [Features](#features)
  - [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Clone the overal project:](#clone-the-overal-project)
    - [Setting up the Backend](#setting-up-the-backend)
    - [Setting up the Frontend](#setting-up-the-frontend)
  - [Usage](#usage)
  - [Project Status](#project-status)
  - [Room for Improvement](#room-for-improvement)
  - [Challenges I faced](#challenges-i-faced)


## General Information
- This is a coding challenge built to apply to the 'Senior Fullstack Developer' position at [Vertrical](https://vertrical.com/).
- This is a Fullstack project that tries to simulate an Email Server with a minimalistic UI ispired by Gmail.

## Technologies and Techniques used

### Planning and Design:
- The planning was done with the [User Story Mapping](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story-mapping/) technique, you can fin the full [User Story Map here](https://miro.com/app/board/uXjVMfb1fmQ=/?share_link_id=329505898247).
- Since there is only one resource in the project, it was developed with [Scrum](https://www.scrum.org/resources/what-is-scrum). The duration was 32 hours distributed in 6 days splited in 2-day simulated sprints. Having at the end 3 Sprints. You can see a picture of the Trello board here:

  <img src="https://user-images.githubusercontent.com/26049605/225794927-821e2e91-b591-414b-8c7c-4d6bdbb4caaa.png" width="550px" height="auto" alt="Login" title="Click to enlarge">

- The Inbox and Login Uis were inspired by [Gmail](https://mail.google.com/).
- The Systems Design Diagram can be found [here](https://drive.google.com/file/d/1awYVZcryBreVj1_nT0LUXJGtDdmlKoHM/view?usp=sharing).

  <img src="https://user-images.githubusercontent.com/26049605/225910510-36399f59-a8c2-4b8b-9678-c86e9c44a470.png" width="550px" height="auto" alt="System design" title="Click to enlarge">

- The Entity Relationship Diagram (ERD) can be found [here](https://drive.google.com/file/d/1IRz-qff3EnDrrpPMdhp_vruRbCM3Mi5T/view?usp=sharing).

  <img src="https://user-images.githubusercontent.com/26049605/225910723-9d76abb2-d638-4299-873b-968089657a52.png" width="550px" height="auto" alt="ERD" title="Click to enlarge">

- GitHub is used as source control.
- The internal project was divided in two: **Web** that represents the Frontend and **App** that represents the Backend.


| Login | Inbox | 
| ------------ | -------------- | 
| <img src="https://user-images.githubusercontent.com/26049605/225793325-5cfc2202-74bd-475a-a493-aef26cd1520e.png" width="250px" height="auto" alt="Login" title="Click to enlarge">   | <img src="https://user-images.githubusercontent.com/26049605/225793251-bee789c9-152d-4b13-a423-bf816d204c77.png" width="550px" height="auto" alt="Inbos" title="Click to enlarge">     | 


### Front-end:
- Named as **Web** in the source code.
- TypeScript as programming language.
- React.js with Vite as web bundler.
- Routing with [react-router](https://reactrouter.com/en/main).
- Socket-io was used to receive the new incoming Emails.
- Axios was use to fetch the data from the database.
- [TanStack Query](https://tanstack.com/query/latest) (formerly React Query) was used to handle the cache and async calls.
- Due to the lack of complex states on thi MVP. The Internal application state managed with the [Context API](https://legacy.reactjs.org/docs/context.html) from React.
- CSS design implemented with [Tailwind CSS](https://tailwindcss.com/). 
- Code Splitting was implemented to reduce loading wating times. This was achieved using [React Lazy loading components](https://reactjs.org/docs/code-splitting.html#reactlazy).
- ESLint and Prettier were used for linting and code styling purposes.
- Jest and React Testing libary were used to perform Unit and integration testing.
- Error handling was implemented with a custom class that can contain internal calls to a database or notifications to the support team.
- The Project's folder structure is implemented with the CLEAN architecture, the layout is below:

    ```
    📦src
    ┣ 📂assets => Media files e.g: Pictures, Video, Fonts, etc.
    ┣ 📂components => Common components that are used in multiple parts of the project.
    ┣ 📂configs => Parameters used along the project.
    ┣ 📂contexts => State manages recommended for states that are not transformed or changed a long the application.
    ┣ 📂dtos => Transfer objects used as middlewares when transfering data between different components or layers.
    ┣ 📂hooks => Custom hooks.
    ┣ 📂layouts => Common layout section that are present across the across the pages, such as Navigation bar or footer.
    ┣ 📂models => Entity representation, this is also where the typescript Interfaces are defined.
    ┣ 📂pages => Web site views (Login, Landing, Sigup, etc).
    ┣ 📂redux => Unique source of truth, stores the states that are needed globally in the project.
    ┣ 📂services => External services consumed by the application. They could be APIs or other type of interaction with the environment.
    ┣ 📂utilities => Functions or logic that is used in several parts of the project.
    ┣ 📂__mocks__ => Mock data or functions used in tests.
    ┣ 📂__tests__ => Test files.
    ┃ ┣ 📂integration
    ┃ ┗ 📂unit
    ┣ 📜App.tsx
    ┣ 📜index.css
    ┣ 📜main.tsx
    ```

### Back-end:
- Named as **App**
- TypeScript as programming language.
- NestJS was used as NodeJS framework.
- MongoDB was used as database.
- Mongoose was used as ORM.
- ESLint and Prettier were used for linting and code styling purposes.
- Jest and Supertest are being used to perform Unit and integration testing.
- Error handling was implemented with the natural Error Handling layer of NestJS.
- All the services that compose the backend are in Containers with Docker and Docker Compose.
- The services in the App are:

#### Email Listener
- This service provides an API to receive emails and a Web Socket service to push the emails to the correspondant email account.
- The REST API implemented with NestJS.
- The Web Socket service implemented with socket-io.
- The Project's folder structure is implemented with the CLEAN architecture, the layout is below:

    ```
    📦src
    ┣ 📂configuration => Parameters used along the project.
    ┣ 📂controllers => Intermediate layers that can be controllers, presenters or gateways.
    ┣ 📂core => The center of the application.
    ┃ ┣ 📂abstracts
    ┃ ┣ 📂data-transfer-objects
    ┃ ┣ 📂entities => Business entities that construct our application.
    ┣ 📂frameworks => External services consumed by the application.
    ┃ ┣ 📂data-service => Database 
    ┃ ┃ ┣ 📂models
    ┃ ┗ 📂incoming-email-service => Web socket
    ┣ 📂services => Implementation of the abstract classes
    ┣ 📂use-cases => Business logic of the application.
    ┃ ┗ 📂email
    ┣ 📂util => Functions or logic that is used in several parts of the project.
    ┣ 📂__tests__ => Test files.
    ┣ 📜app.module.ts
    ┗ 📜main.ts
    ```

#### List Emails
- This service provides an API to retrieve emails from an specific email account.
- The REST API implemented with NestJS.
- The Project's folder structure is implemented with the CLEAN architecture, the layout is below:

    ```
    📦src
    ┣ 📂configuration
    ┣ 📂controllers
    ┣ 📂core
    ┃ ┣ 📂abstracts
    ┃ ┣ 📂data-transfer-objects
    ┃ ┣ 📂entities
    ┣ 📂frameworks
    ┃ ┗ 📂data-service
    ┃ ┃ ┣ 📂models
    ┣ 📂services
    ┣ 📂use-cases
    ┃ ┗ 📂email
    ┣ 📂util
    ┣ 📂__tests__
    ┣ 📜app.module.ts
    ┗ 📜main.ts
    ```

### Testing:
- In the Frontend, Manual Unit testing and Automated Unit and Integration testing were performed. 
- The total lines of code in the Front end are 1,165, so code coverage is about 80% of Automated testing.
- While testing the Frontend, the project was run using the Chrome's Development Tools "Fast 3G" and "No Caching" options. So the app is ready for slow internet connections.
- In the Backend, Manual Unit testing and Automated Unit testing was perform partially. 
- The total lines of code is 445 from the Email Listener service and 344 from the List Emails service. So about 30% of Automated code coverage was performed.

## Features
- List Emails ✔
- Receive Emails via an external API ✔
- Automatically load new Emails when arrive ✔
- Read emails 🔜
- Send emails 🔜
- Sign-up with User and Password 🔜

## Setup

### Prerequisites
- [NodeJS 18+](https://nodejs.org/en)
- Docker should be installed on your computer. A recomendation is [Docker Desktop](https://www.docker.com/products/docker-desktop/) since it makes easier the configuration.
- An API tester application like Postman or Insomnia for example.

### Clone the overal project:
In the folder you want to store the project, execute:
```
$ git clone https://github.com/pieroguerrero/correo.git
```

### Setting up the Backend
We have to set up the two services we have available: Email Listener and List Emails services.
To simplify the process the ***.env*** files for configuration are also included in the git repository so you don't have to create anything there. You can change the ports where the services are going to be served in those files, located at the root of evey Service folder.

First you have to open or start the Docker service on your computer.

Then go to the Email Listener service folder, execute:
```
$ cd app/email-listener
```
Then execute:
```
$ npm install
```

Then go to the List Emails service folder, execute:
```
$ cd ../list-emails
```
Then execute:
```
$ npm install
```

To start the Correo app services go to the Docker folder, execute:
```
$ cd ../docker
```

Then execute:
```
$ docker compose up
```

Now the services should running on your local machine.

### Setting up the Frontend

To go to the Web folder, execute:
(We asume you are located not at <your directory>/correo/app/docker)
```
$ cd ../../web
```

Then execute:
```
$ npm install
```
To run in dev mode execute:
```
$ npm run dev
```
By default Vite uses the port 5173.


## Usage
1. Access to the client: [http://localhost:5174/](http://localhost:5174/)
2. At the Login page, enter any email you want to test (e.g: myemail@email.com) and then click on Next.
3. Open Postman or any other API tester application you profer.
4. Send a new email via the Email Listener service with a Post request: [http://localhost:9001/correo/receive](http://localhost:9001/correo/receive). You can add multiple emails separated by commas and the Web socket service is going to notify all the accounts are connected at that time via the Client. You can use this JSON format in the Body: 
```
{ 
    "from": "nigerianprince@email.com",
    "senderName": "John Doe",
    "to": "myemail@email.com",
    "cc":"myemail2@email.com",
    "bcc":"",
    "subject": "An importan donation for you",
    "subjectDetails":"Confidential message only for you",
    "body": "I am Dr. Bakare Tunde, the cousin of Nigerian Astronaut, Air Force Major Abacha Tunde...",
    "priority": "1",
    "type": "text"
}
```

## Project Status
Project is: _in progress_

## Room for Improvement
There are always room for improvement, in this project so far the thinkgs that can be improved are:
- More Unit testing coverage in the Backend.
- Handle the NestJS projects as it is defined from the beginning.
- Add an api catalog.
- Convert the whole project to a monorepo using Lerna for example.

## Challenges I faced
- NestJS is a new framework for me. It has a new way in which things are called or organized, this caused me to decide to apply the clean architecture as I always do in an Express.js project. However, this was a little bit complicated since I didn't have much time generating issues on the testing part of the services.
