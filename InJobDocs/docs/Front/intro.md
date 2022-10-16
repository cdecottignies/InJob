---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- [Nuxt.js](https://nuxtjs.org/docs/get-started/installation) version 2.15 or above:
  - Make sure you have installed yarn, npx (included by default with npm v5.2+) or npm (v6.1+).

## Generate a new site

if you want to create a new site with Nuxt you need to use :

```bash
npm init nuxt-app <project-name>
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Nuxt.js.

## Start the App

Run the development server in production mode:

```bash
cd my-website
npm run build
npm run start
```

Or for run the serv in developpement mode:

```bash
cd my-website
npm run dev
```
The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run build` command builds your website locally and serves it through a development server.

The `npm run start` command start your server, ready for you to view at http://localhost:3000/.

The `npm run dev` command build and start your server and every time you change your code the server are rebuild and  ready for you to view at http://localhost:3000/.


Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
