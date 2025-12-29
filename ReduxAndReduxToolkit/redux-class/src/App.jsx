import Todo from './components/Todo'
import './App.css'
import store from './app/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
      <Provider store={store}>
        
        {/* all the component can share store here central library of variables   */}
        <Todo/>
      </Provider>
    </>
  )
}

export default App
