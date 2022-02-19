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
=* Project name: theme-components


```
cd theme-components
npm install
npm start
```

* Reference Screensho:

![image](https://user-images.githubusercontent.com/2763774/154787020-484712f6-a21b-48bd-a613-8c674e8bf2a1.png)


#### Step 1.2: Update Package.json

* Update name ==> Npm Account Username ==> nareshkumarh

```json
{
  "name": "@nareshkumarh/theme-components",  
  "version": "1.0.1",
  "description": "Web Components for Developers",
}
```



#### 1.3 Publish NPM Package

```cmd
npm publish --access public
```
![image](https://user-images.githubusercontent.com/2763774/154787083-6bc8a61c-05e1-49d1-9b96-bb517aa11ab5.png)

#### 1.4 Verify Published Package

![image](https://user-images.githubusercontent.com/2763774/154787151-4ce485a4-dea6-407d-ad8e-7de983827632.png)

