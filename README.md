# ts-starter-kit

This is a very minimalistic project for getting started with typescript written by [@vincentchu](https://twitter.com/vincentchu).

## Getting Started

 1. Make sure you have `node`, `npm`, and `yarn` installed
 2. Install dependencies with `yarn install`
 3. Run build with `npm run build` (see `package.json`'s `scripts` for definition)
 4. Artifacts should be built and saved to `public/`

## Project Structure

Basiclly all Typescript code is in `src/` with `.ts` extensions. In that directory, there are two separate applications:

 - `app.ts`
 - `other-app.ts`

These two apps depend on a shared module, defined in `src/SomeSharedLib`. I've illustrated how you can pull in exported functions from these modules.

I've also added a dependency on `pluralize` from NPM. Since many packages on NPM are written in JS and don't have types natively, there's a community project that seeks to add TS type definitions to NPM for popular packages. By convention, these type definitions are prefixed by `@types/` (so the [`pluralize`](https://www.npmjs.com/package/pluralize) dependency has its types defined in [`@types/pluralize`](https://www.npmjs.com/package/@types/pluralize)). However more and more projects are exporting their own type definitions, so you don't have to pull them in as a separate dependency.

Since I'm using `yarn`, I installed both of these dependencies with:

 - `yarn add pluralize`
 - `yarn add @types/pluralize --dev` (`--dev` indicates that this dependency is needed only for development)

For people familiar with ruby, `package.json` is essentially your `Gemfile` and `yarn.lock` is equivalent to your `Gemfile.lock`. `node_modules/` is where all of your "vendored" dependencies live.


## Build via Webpack

Webpack is what we're using to build. I'm not really an expert, but basically what it does is traverses your project source files and dependencies and packages everything up in a single file(s). The configuration can get really complicated but I've included what I think is a fairly minimalistic webpack file in `webpack.config.js`. Hopefull it's a good start for you!


