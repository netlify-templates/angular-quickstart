# Angular on Netlify Quick Start Template    
![netlify + angular logo](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1646339469/angular_wzrs5o.png)

This is a bare-bones Angular project that has everything you need to quickly deploy it to [Netlify](https://netlify.com). 

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/angular-quickstart)

## Table of Contents:

- [Setup](#setup)
- [Deploying](#deploying)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Renovate](#removing-renovate)
  - [Removing Cypress](#removing-cypress)
- [Angular + Netlify Resources](#angular--netlify-resources)

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

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we’d expect. By default, we have Cypress not generate deploy links if our tests don’t pass. If you’d like to keep Cypress and still generate the deploy links, go into your `netlify.toml` and delete the plugin configuration lines:

```diff
[[plugins]]
  package = "netlify-plugin-cypress"
-  [plugins.inputs.postBuild]
-    enable = true
-
-  [plugins.inputs]
-    enable = false 
```

If you’d like to remove the `netlify-plugin-cypress` build plugin entirely, you’d need to delete the entire block above instead. And then make sure sure to remove the package from the dependencies using:

```bash
npm uninstall -D netlify-plugin-cypress
```

And lastly if you’d like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall cypress
```

## Angular + Netlify Resources

Here are some resources to help you on your Angular + Netlify coding fun!

- [A video walkthrough of the Angular Quick Start Template](https://youtu.be/rNAiN94bBUs)
- [A blog post on the Angular Quick Start Template](https://www.netlify.com/blog/get-started-with-angular-on-netlify-quickly)

- [Angular on Netlify Configuration Docs](https://docs.netlify.com/configure-builds/common-configurations/angular/)
- [Angular posts via the Netlify Blog](https://www.netlify.com/tags/angular/)
- [Angular in the Jamstack Tutorials](https://explorers.netlify.com/learn/angular-in-the-jamstack)

Hope this template helps :) Happy coding 👩🏻‍💻!

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.
