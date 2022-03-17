# Angular on Netlify Quick Start Template    
![netlify + angular logo](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1646339469/angular_wzrs5o.png)

This is a bare-bones Angular project that has everything you need to quickly deploy it to [Netlify](https://netlify.com). 

Click this button and it will help you create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/angular-quickstart)

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

## Angular 💙 Netlify Resources

Here are some resources to help you on your Angular + Netlify coding fun!

- [A video walkthrough of the Angular Quick Start Template](https://youtu.be/rNAiN94bBUs)
- [A blog post on the Angular Quick Start Template](https://www.netlify.com/blog/get-started-with-angular-on-netlify-quickly)

- [Angular on Netlify Configuration Docs](https://docs.netlify.com/configure-builds/common-configurations/angular/)
- [Angular posts via the Netlify Blog](https://www.netlify.com/tags/angular/)
- [Angular in the Jamstack Tutorials](https://explorers.netlify.com/learn/angular-in-the-jamstack)

Hope this template helps :) Happy coding 👩🏻‍💻!

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.
