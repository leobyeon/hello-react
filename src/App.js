import React from 'react';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { useLDClient, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  // const ldClient = useLDClient();
  const checkoutNewPuffsImage = useFlags();
  console.log("checkoutNewPuffsImage", checkoutNewPuffsImage);
  return (
    <div className="App">
      <header className="App-header">
        <code>{JSON.stringify(useFlags())}</code>
      </header>
    </div>
  );
} 

let clientID = '*CLIENT-ID-GOES-HERE*'
export default withLDProvider({
  clientSideID: `${clientID}`,
  user: {
    "key": "ld-support-test",
    "name": "ld support",
    "email": "support@launchdarkly.com"
  }
})(App);