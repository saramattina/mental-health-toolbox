# Mental Health Toolbox Project Proposal

### Da Fare
+ review project requirements
+ user stories
+ identify MVP and stretch goals
+ create wireframes and ERDs
+ identify routes


## Mental Health Toolbox

A mental health toolbox is a collection of coping strategies to help someone manage their mental health. The goal of this app is to allow users to have their toolbox in one central location, rather than trying to remember what tools (coping strategies) are helpful for the user. 

## Wire Frames

**Toolbox View**
![toolbox view](https://i.imgur.com/gcHBz1Y.png)

## ERDs

**MVP ERD**
![MVP ERD](https://i.imgur.com/8mNuycc.png)

**Stretch Goal ERD**
![stretch goal ERD](https://i.imgur.com/4lYVOF7.png)

## User Stories

### MVP Goals
+ AAU, I want to be able to see all my tools on one page
+ AAU, I want to be able to add tools to my toolbox
+ AAU, I want to add personal notes to specific tools
+ AAU, I want to be able to edit and/or update tools in my toolbox
+ AAU, I want to be able to label tools as "helpful" or "unhelpful"
+ AAU, I want to be able to tag emotions to tools, so I can better remember which tools help with what emotions

### Stretch Goals
+ AAU, I want to be able to sort or filter my tools by emotion
+ AAU, I want to be able to favorite tools that are very helpful
+ AAU, if I don't know what I'm feeling, I'd like a guide or some questions to help me identify what I am feeling

## Endpoints
|  Action | Route  |  HTTP Verb |
|---|---|---|
|  Index | "/toolbox"  |  GET |
|  New | "/toolbox/new" |  GET |
|  Create |  "/toolbox" |  POST |
| Show  |  "/toolbox/:toolId" |  GET |
|  Edit |  "/toolbox/:toolId/edit" |  PUT |
| Delete  |  "/toolbox/:toolId" |  DELETE | 
| Index  |  "/resources" |  GET |


## Timeline

| Day  |  Task |
|---|---|
| Tues  |  Create and present proposal |
|  Wed |  Build basic functioning |
| Thu  |  Continue building functioning |
|  Fri | Style project, finalize MVP, and begin stretch goals  |
| Sat/Sun  | Finish cleaning up code and any stretch goals  |
