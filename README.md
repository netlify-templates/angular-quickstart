# Angular on Netlify Quick Start Template    
![netlify + angular logo](https://user-images.githubusercontent.com/43764894/223549637-2715c89d-a44e-42e0-8f6c-fa6246279658.png)

This is a bare-bones Angular project that has everything you need to quickly deploy it to [Netlify](https://netlify.com). 

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/angular-quickstart)

## Table of Contents:

- [Setup](#setup)
- [Deploying](#deploying)
- [Styling](#styling)
  - [Notes on Styling](#notes-on-styling)
  - [Remove Styling](#remove-styling)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Renovate](#removing-renovate)
  - [Removing Cypress](#removing-cypress)
- [Angular + Netlify Resources](#angular--netlify-resources)
- [Deployment Options](#deployment-options)
- [Customization](#customization)
  - [Styling](#styling-1)
  - [Updating Dependencies](#updating-dependencies)

## Setup

Clone this repo with one of these options:
- Click the 'Deploy to Netlify' button above
- Click the 'Use this template' button at the top of the page
- Or via the command line `git clone https://github.com/netlify-templates/angular-quickstart`

Then install the necessary packages and run the project locally to make sure everything works.

```bash
npm install
ng serve
```

Alternatively, you can run this locally with [the Netlify CLI](https://docs.netlify.com/cli/get-started/)'s `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/). 

> 🚨 If you decide to change the project name be sure to change it everywhere in the project including the [Netlify configuration file, `netlify.toml`](./netlify.toml), as there are many places in Angular projects where the project name is used. A quick fix is to find/replace all instances of `angular-quickstart` with your project name.

## Deploying

There are a few ways to deploy this template:
- Click the 'Deploy to Netlify' button above 
- Use the `netlify deploy` command
- Head to the [Netlify UI](https://app.netlify.com/) to deploy via GitHub or [drag and drop](https://app.netlify.com/drop) the project folder
- Use the Netlify CLI's create from template command `netlify sites:create-template angular-quickstart` which will create a repo, Netlify project, and deploy it

## Styling

We've added some modern styling to this template using css within an external stylesheet, this will allow you to easily remove our styling and add in your own. 

If you decide that you want to keep our styling you can review our style notes below. 

### Notes on Styling

The variables below give you the ability to change the gradient colors of the blobs and are interpolated into the URL string of the background-img within the body. 

```css
// Controls the blob blur gradient colors within the main tag's svg
--top-right-blur-1: #20C6B7;
--top-right-blur-2: #4D9ABF;
--bttm-left-blur-1: #de3641;
--bttm-left-blur-2: #e46b73;
```

## Remove Styling

If you decide that our styling is not for you, all you'll need to do is remove the [demo-styling.css](https://github.com/netlify-templates/angular-quickstart/blob/tn/designUpdates/src/demo-styling.css) file. 

## Testing

### Included Default Testing

We've included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you're not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we'd expect. By default, we have Cypress not generate deploy links if our tests don't pass. If you'd like to keep Cypress and still generate the deploy links, go into your `netlify.toml` and delete the plugin configuration lines:

```diff
[[plugins]]
  package = "netlify-plugin-cypress"
-  [plugins.inputs.postBuild]
-    enable = true
-
-  [plugins.inputs]
-    enable = false 
```

If you'd like to remove the `netlify-plugin-cypress` build plugin entirely, you'd need to delete the entire block above instead. And then make sure sure to remove the package from the dependencies using:

```bash
npm uninstall -D netlify-plugin-cypress
```

And lastly if you'd like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall cypress
```

## Angular + Netlify Resources

Here are some resources to help you on your Angular + Netlify coding fun!

- [Angular Docs](https://angular.dev/overview)
- [Angular CLI Commands](https://angular.dev/cli)
- [Angular on Netlify Configuration](https://docs.netlify.com/frameworks/angular/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)


## Deployment Options

- **One-Click**: Click the "Deploy to Netlify" button above
- **CLI**: Use `netlify deploy` command
- **Git Integration**: Connect your repository in the [Netlify UI](https://app.netlify.com/)
- **Manual**: Drag and drop the `dist/` folder to the [Netlify UI](https://app.netlify.com/drop)

## Customization

### Styling

The project includes a demo stylesheet in `src/demo-styling.css` with customizable variables:

```css
--top-right-blur-1: #20C6B7;
--top-right-blur-2: #4D9ABF;
--bttm-left-blur-1: #de3641;
--bttm-left-blur-2: #e46b73;
```

To remove the demo styling, delete the import from `angular.json` and `app.component.ts`.

### Updating Dependencies

To update Angular packages to compatible versions:

```bash
ng update @angular/core @angular/cli
```

For TypeScript compatibility issues, install a compatible version:

```bash
npm install typescript@4.6.4 --save-dev
```

## Testing

This project includes:
- Unit tests with Jasmine/Karma
- E2E tests with Cypress
- Cypress Netlify Build Plugin

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15 and uses Angular 15.