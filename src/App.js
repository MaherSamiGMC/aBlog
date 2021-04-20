import AddArticle from './Components/AddArticle';
import Home from './Components/Home';
import NavBarPage from './Components/NavBar';
import MyArticles from './Components/MyArticles';
import ArticlesDB from './Components/ArticlesDB'
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import { Navigation, Route,drop,Link,Screen } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import './App.css';

drop({
  name: 'drop-left',
});


function App() {
  const [db, setDb] = useState(ArticlesDB)
  const Adding=(article)=>setDb([...db,article])
  useEffect(() => {
    document.title=`${db.length} articles disponibles`
    
  }, [db])
  return (
    <div className="App">
      <Router>

      

        <Navigation>
       

        
        <NavBarPage />
     
          
          <Route exact path="/">
            <Home length={db} />
          </Route>
            
          <Route path="/addArticle">
          
            <AddArticle Adding={Adding} />
            
          </Route>

          <Route path="/ListOfArticles">
            <MyArticles Articlelist={db} />
          </Route>
          
          </Navigation>


        
      </Router>
    </div>
  );
}

export default App;
