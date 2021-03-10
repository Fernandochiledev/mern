import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/notfound";
import TasksCrudMongo from "./pages/TasksCrudMongo";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./pages/NavBar";
import CategoriesPage from "./pages/CategoriesPages";

export default function App() {
  return (
    <Router> 
        <NavBar />
        <Switch>
          <Route exact path="/about" component={AboutPage}/>  
          <Route exact path="/contact" component={ContactPage}/>  
          <Route exact path="/taskcrudmongo" component={TasksCrudMongo}/>  
          <Route path="/profile/:username" component={ProfilePage}/>  
          <Route exact path="/categories" component={CategoriesPage}/>  
          <Route exact path="/" component= {HomePage} /> 
          <Route path="*" component= {NotFound} /> 
        </Switch> 
    </Router>
  );
}
 
 