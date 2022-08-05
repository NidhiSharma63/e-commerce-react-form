import React from 'react';
import './App.css';
import Form from './components/Form';
import AccountConfirmation from './components/Account-confirmation';

const App = () => {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  return (
    <div className='main-wrapper'>
      {isFormSubmitted ? <AccountConfirmation /> : <Form setIsFormSubmitted={setIsFormSubmitted} />}
    </div>
  )
}

export default App;
