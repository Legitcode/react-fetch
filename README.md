# React Fetch

## Install

    npm install react-fetch

## Props

- `url`: where to fetch json data from
- `onSuccess`: function on successfully fetching the data
- `onError`: function to be called on error
- `options`: object containing parameters for the request (see the [fetch](https://fetch.spec.whatwg.org/) spec)

## Example

pass an api endpoint and the resulting object will be passed as a prop.

```js
import React from "react";
import Fetch from "react-fetch";

function App() {
  const handleError = (error) => console.log(error);
  const handleSuccess = (data) => console.log(data);

  return (
    <Fetch
      url="http://httpbin.org/headers"
      onSuccess={handleSuccess}
      onError={handleError}
    >
      <UserAgent />
    </Fetch>
  );
}

function UserAgent(props) {
  return (
    <div>
      {props.headers ? (
        <div>Your User-Agent: {props.headers["User-Agent"]}</div>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
```

### Rebuilding

Run this to view the example in `example/dist`

    npm install
    npm run build
