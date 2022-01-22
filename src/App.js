import './App.css';
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

function App(props) {
  const { signOut, currentUserInfo }=props
  return (
    <main>
      <h1>Hello{currentUserInfo.username}</h1>
      <button onClick={signOut}>sign out</button>
    </main>
  );
}

export default App;
