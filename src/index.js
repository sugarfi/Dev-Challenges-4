import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './buttons.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Button>Default</Button>
      <Button variant="outline">Default</Button>
      <Button variant="text">Default</Button>
    </div>
    <div>
      <Button color="primary">Default</Button>
      <Button color="primary" variant="outline">Default</Button>
      <Button color="primary" variant="text">Default</Button>
    </div>
    <div>
      <Button color="secondary">Default</Button>
      <Button color="secondary" variant="outline">Default</Button>
      <Button color="secondary" variant="text">Default</Button>
    </div>
    <div>
      <Button color="danger">Default</Button>
      <Button color="danger" variant="outline">Default</Button>
      <Button color="danger" variant="text">Default</Button>
    </div>
    <div>
      <Button color="primary">Default</Button>
      <Button color="primary" size="md">Default</Button>
      <Button color="primary" size="lg">Default</Button>
    </div>
    <div>
      <Button startIcon="house">Default</Button>
      <Button startIcon="face">Default</Button>
      <Button startIcon="delete">Default</Button>
    </div>
    <div>
      <Button endIcon="house">Default</Button>
      <Button endIcon="face">Default</Button>
      <Button endIcon="delete">Default</Button>
    </div>
    <div>
      <Button disabled>Default</Button>
      <Button variant="text" disabled>Default</Button>
      <Button disableShadow>Default</Button>
      <Button onClick={() => alert('hi')} color="primary">Default</Button>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
