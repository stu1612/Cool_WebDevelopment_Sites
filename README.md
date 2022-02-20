# Save my URL

Small React app implementing useContext and useReducer hooks. User can save important URL links to local storage - something useful that i wanted to build whilst i continue to learn and find new information and find useful links that i know i will need in the future.

User can add and delete url links which are saved to localStorage.  User can also filter the list of urls byt category.  In the development documentation, instructions are given to direct user to remove or add categories to the application.

## [Deployed Site](https://save-my-url.netlify.app/)

### `installation`


```sh
Clone (https://github.com/stu1612/Web_Bookmarks.git)
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

And thats it !  App has been updated with your desired category and is ready to be used.

Future updates will connect the applicaiton to Firebase.

