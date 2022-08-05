import React from 'react';
import './App.css';
import Form from './components/Form';
import AccountConfirmation from './components/Account-confirmation';
import mainImg from './images/main.webp';

const App = () => {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  return (
    <div className='main-wrapper'>
      <div className="images">
        <img src={mainImg} alt="img" />
      </div>
      {isFormSubmitted ? <AccountConfirmation /> : <Form setIsFormSubmitted={setIsFormSubmitted} />}
    </div>
  )
}

export default App;
