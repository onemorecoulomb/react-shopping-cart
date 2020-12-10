# React Shopping Cart
# step 1: Create React App

1. Tools and Technologies
    JavaScript (arrow functions, array functions, spread Operators, ...)
    React (react-touter-dom, react-reveal, react-modal)
    Redux (react-redux, redux-thunk)
    Node (express, body-parser, Environment Variables, nodemon)
    MongoDB ( mongoose, shortid)
    VS Code (ES6 Snippets, ES7 React Extension, ESLint Extension,CSS Peek)
    Chrome ( React Developer Tools, Redux Developer Tools)
    Git (create repo, commit, remote, create and push branch)
    Github (create repo, connect to local repo, pull request and merge)
    Postman ( send get, post, put and delete requests to apis)
    Deployment ( Heroku, MongoDB Atlas Cloud)
2. Create React App
    Open VS Code and open terminal
    cd Desktop
    npx create-react-app react-shopping-cart
    Remove unused files
    Convert App.js Class Component
    Add header, main and footer
    Update index.css to add grid
3. Project Development Workflow
    Create Google Spreadsheet
    Add columns Feature, Description, State, and Duration
    Enter Products Component, Show list of products, Open, 2
    Add Time ? Hours, Rate 30 USD/Hours, Cost ? USD
    Add All Features
    Create Github account
    Create new repository
    Add it as remote repository in VS Code
    Commit changes
    Push changes on github
    Start => create new feature Feature 1 in google spreadsheet
    Create a new branch feature-1 for test the workflow
    Add "// branch feature 1" in App.js Line 1
    Commit with message "feature 1"
    Click publish changes
    Open repository page on github
    Create pull request
    Merge pull request
    In VS Code switch to master and Sync changes
    End => Loop from step 11 for next feature 

# Redux note
reduct work by create action that send form view with action type to store
store send stat to reducer to modify it and return
store send to view to render

so
- we need to create type action and reducer then create store to work with it
- provide store to app.js
- component need to connect it and send state to get modify via store to render
- component also need to trick require action to store via componentDidMount() too