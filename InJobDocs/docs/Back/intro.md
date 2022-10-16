---
sidebar_position: 1
---

# InJob BackEnd Stack

InJob Backend technologies is as follow :
- NodeJS as the main language
- ExpressJS as a flexible framework to build API
- Sequelize as an ORM (Object Relational Mapping) to manage the database, create models, and manage the relations between them. And abstract the database from the code, which mean replace SQL command by function.
- Morgan to retrieve logs, and debug the code. The logs are shown in the console, and stored in a log file.

## Getting Started

Clone the repo [InJob repo](https://github.com/EpitechMscProPromo2025/T-WEB-501-LIL-5-1-jobboard-raphael.thibaut).

Once cloned, cd into Back directory, and run the following command to install the dependencies:

```bash
npm i 
```

Then, you need to create a .env file, and add the following variables:

```bash
oui
```

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
