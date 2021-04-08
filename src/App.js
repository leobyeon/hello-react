import React from 'react';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './helloWorld';
import { useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
  const ldClient = useLDClient();
  return (
    <div className="App">
      <header className="App-header">
        <code>{JSON.stringify(ldClient?.allFlags())}</code>
      </header>
    </div>
  );
} 

let clientID = '*INSERT-CLIENT-ID*'
export default withLDProvider({
  clientSideID: `${clientID}`,
  user: {
    "key": "ld-support-test",
    "name": "ld support",
    "email": "support@launchdarkly.com"
  }
})(App);
