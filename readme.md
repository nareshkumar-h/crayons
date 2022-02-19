# Build web components for internal products

## Step 1: Create NPM Project & publish.

#### Prerequisite
* Create NPM Account
* Command Prompt: npm login

#### Step 1.1: Create NPM Project 

* Create Stencil Project

```
npm init stencil
```
* Pick a starter:  component
* Project name: theme-components
```

```
cd theme-components
npm install
npm start
```

* Reference Screensho:

![image](https://user-images.githubusercontent.com/2763774/154787020-484712f6-a21b-48bd-a613-8c674e8bf2a1.png)


#### Step 1.2: Update Package.json

```json
{
  "name": "@nareshkumarh/theme-components",
  "version": "1.0.0",
  "description": "WebComponents for Developer Platform",
  "main": "index.js",
  "scripts": {
    "publish":"npm publish --access public"    
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

#### Create index.js

* index.js file  [ No Content ]


#### Publish NPM Package

```cmd
npm publish --access public
```
(or)

```cmd
npm run publish
```

![image](https://user-images.githubusercontent.com/2763774/154785865-93ad4135-eee6-4c18-96db-30da24afb399.png)
