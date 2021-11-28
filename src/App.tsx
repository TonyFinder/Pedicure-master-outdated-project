import React, {useState} from 'react';
import {Categories} from './Components/CategoriesDisplay/Categories';
import {store} from './Store/Store';
import {WelcomePage} from './Components/WelcomePage/WelcomePage';

function App() {
    const [welcome, showWelcome] = useState(true)
    const callbackButton = () => showWelcome(!welcome)

    return (
    <div>
        {welcome
            ? <WelcomePage callbackButton={callbackButton}/>
            : <Categories store={store} callbackWelcome={callbackButton}/>
        }
    </div>
  );
}

export default App;
