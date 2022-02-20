# Save my URL

Small React app implementing useContext and useReducer hooks. User can save important URL links to local storage - something useful that i wanted to build whilst i continue to leanr and find new information and find useful links that i know i will need in the future.

## [Deployed Site](https://save-my-url.netlify.app/)

### `installation`


```sh
Clone [repo](https://github.com/stu1612/Web_Bookmarks.git)
yarn install
yarn start
```

### `Development`

User can filter features and add additional categories as they wish:

Step One:

```sh
GO TO : src/components/Form.jsx
GO TO : Line 117 - find select tab
Find option values - here you an add or remove a value
```
```
<option value="">Category</option>
<option value="react">React</option>
<option value="css">CSS</option>
<option value="design">Design</option>
<option value="js">JS</option>
<option value="frontend">Frontend</option>
```

Step Two:

```sh
GO TO : src/utils/bookmarkFilter.js
Update the bookamrkFilter util function by adding or removing the corresponsding value
```
```
export default function bookmarkFilter(status, state, stateSetter) {
  switch (status) {
    case "react":
      stateSetter(state.filter((item) => item.category === "react"));
      break;
    case "css":
      stateSetter(state.filter((item) => item.category === "css"));
      break;
    case "design":
      stateSetter(state.filter((item) => item.category === "design"));
      break;
    case "js":
      stateSetter(state.filter((item) => item.category === "js"));
      break;
    case "frontend":
      stateSetter(state.filter((item) => item.category === "frontend"));
      break;
    default:
      stateSetter(state);
      break;
  }
}
```

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Cool_WebDevelopment_Sites
