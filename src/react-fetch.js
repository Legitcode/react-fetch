import React from 'react'

//this is to hack around a bug, see:
//https://github.com/matthew-andrews/isomorphic-fetch/pull/20
//import fetch from 'isomorphic-fetch'
import fetch_ from 'isomorphic-fetch';
var fetch = fetch_.bind(undefined);

function Fetch(props) {
  const [state, setState] = React.useState({});

  const fetchData = React.useCallback((props) => {
    fetch(props.url, props.options || {})
      .then(res => res.json())
      .then(json => {
        setState(json)
        if (props.onSuccess) props.onSuccess(json)
      })
      .catch(error => {
        if (props.onError) props.onError(error)
      });
  }, []);

  React.useLayoutEffect(() => {
    fetchData();
  }, [props]);

  return (
    <div>
      {React.Children.map(props.children, child => React.cloneElement(child, state))}
    </div>
  )
}

export default Fetch;