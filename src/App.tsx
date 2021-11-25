import React from 'react';
import {Categories} from './Components/CategoriesDisplay/Categories';
import {store} from './Store/Store';

function App() {
  return (
    <div>
      <Categories store={store}/>
    </div>
  );
}

export default App;
