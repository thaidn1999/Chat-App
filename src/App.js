import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      // userName='fe'
      // userSecret='234234'
      projectID='ab3ff939-076f-42ae-afc5-3ea785b1f5f4'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App