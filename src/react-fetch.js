import { Children, cloneElement, useState, useCallback, useLayoutEffect } from 'react'

//this is to hack around a bug, see:
//https://github.com/matthew-andrews/isomorphic-fetch/pull/20
//import fetch from 'isomorphic-fetch'
import fetch_ from 'isomorphic-fetch';
const fetch = fetch_.bind(undefined);

function Fetch({ url, options, onSuccess, onError, children }) {
  const [state, setState] = useState({});

  const fetchData = useCallback(() => {
    fetch(url, options || {})
      .then(res => res.json())
      .then(json => {
        setState(json);
        if (onSuccess) onSuccess(json);
      })
      .catch(error => {
        if (onError) onError(error);
      });
  }, [url, options]);

  useLayoutEffect(() => {
    fetchData();
  }, [url, options]);

  return Children.map(children, child => cloneElement(child, state));
}

export default Fetch;