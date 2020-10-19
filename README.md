# Evaluate a News Article w/ Meaningcloud Natural Language Processing API

## Introduction

This project introduces students of the Udacity's Front End Web Developmer Nanodegree program to Webpack module bundler used for asset management and webpage optimization. Using webpack loaders and plugins along with Node Express, the student will use Meaningcloud's natural language processing (NLP) capabilities to rate a website's content after making a call to Meaningcloud's API.

From Udacity's project description, NLPs leverage machine learning and deep learning to create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. From Wikipedia (Oct 2020):

> [NLP] is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data. [Link Here](https://en.wikipedia.org/wiki/Natural_language_processing)


## How To Use

### Clone Project

Open your terminal, or command prompt for windows users, clone the project from this git repository:

> git clone *This Repo's Github URL*

### Install Dependencies

Within the active directory, use the *Node Package Manager* or *"npm"* install command to install all dependencies to the cloned folder.

> *npm install* or *npm i*

### Obtain User-Specific API Key from Meaningcloud

Go to Meaningcloud's website and follow the instructions to set up an account and obtain and API key.

### Install *dotenv* dependency and create a *.env* folder

Personal API keys like passwords and other information are both sensitive and confidential and ***should not*** be visible to the public. To maintain anonymity and accessibility of your personal API key, go to the *root* directory of your project and create a *.env* folder.

>mkdir *.env*

Within your Integrated Development Environment (IDE), go into the *package.json* file and look for *dotenv* in your list of dependencies. If it not present, go back to your terminal and install the *dotenv* dependency as follows:

>npm install dotenv

Within the .env file, create a variable **"API_KEY="** and add the API key from MeaningCloud below.

>API_KEY=123456789ABCDEFGHI

### Running the Program

This program comes with <em>Test</em>, <em>Development</em>, and <em>Production</em> modes. These <em>run</em> scripts are shown in the package.json document

To run testing modules of the application, within terminal go to the working directory for this project and type:

>npm run test

To run the project in <em>Development</em> mode, type:

>npm run build-dev (The page will launch automatically)

To run the project in <em>Production</em> mode, type:

>npm run build-prod (To create the distribution file)

Then type:

>npm start (To start the Express server)

