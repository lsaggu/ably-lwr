# LWR Ably Demo

This is a demo and proof-of-concept Lightning Web Runtime (LWR) on Node.js project using Lightning Web Components (LWC) in a LWR Node.js project. This application integrates with [Ably](https://ably.com/) allowing a user to _publish_ events to a channel as well as _subscribe_ to a channel to receive events.

## Project Setup

The directory structure looks like this:

```
scripts/
  └── start-server.mjs  // create and start server
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  ├── layouts/           // layouts
  │   └── main.html     // this defines the LWR layout (head, stylesheets, etc.)
  └── modules/          // lwc modules
      └── main/                         // main module that references other modules - think of this as the home page
          └── app/
              ├── app.css
              ├── app.html
              └── app.js
      └── ably/
          └── publisher/                // publisher LWC to publish to a specified Ably event channel
              ├── publisher.css
              ├── publisher.html
              └── publisher.js
          └── subscriber/               // subscriber LWC to subcribe to Ably event channels
              ├── subscriber.css
              ├── subscriber.html
              └── subscriber.js              
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. The **LWC Boilerplate** example has one LWC module and one server-side route.

```json
// lwr.config.json
{
    "lwc": { "modules": [{ "dir": "$rootDir/src/modules" }] },
    "routes": [
        {
            "id": "example", // changed to main in this project
            "path": "/",
            "rootComponent": "example/app", // changed to main/app in this project
            "layoutTemplate": "$layoutsDir/main.html", // added a layout template to this project
            "bootstrap": {
                "syntheticShadow": true // defined bootstrap and syntheticShadow attributes for Lightning Design System functionality
            }
        }
    ]
}
```

## Running the Project

```bash
yarn install
yarn build
yarn start # prod mode and ESM format
```

Open the site at [http://localhost:3000](http://localhost:3000)

To start the project in a different mode:

-   dev: `yarn dev`
-   compat: `yarn start:compat`
-   prod-compat: `yarn start:prod-compat`

## Project Status

 - 2022-09-22 - Having trouble with Lightning Design System icons loading, and having trouble including `lightning-input` lightning base component

## More Information

- *Ably* - [Ably](https://www.ably.com) is a pub/sub platform as a service that easily integrates with a range of tools, allowing developers to build interconnected sytems quickly
- *LWR* - [Lightning Web Runtime](https://developer.salesforce.com/docs/platform/lwr/guide/lwr-intro.html) is a "non-opinionated way to configure and load the modules, services, and dependency providers you need to build a JavaScript app." LWR allows you to include Lightning elements and packages alongside Node packages in a flexible deployment format.
