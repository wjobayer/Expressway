import './App.css';
import Home from './components/Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Hedaer from './components/Sections/Header/Hedaer';
import Footer from './components/Sections/Footer/Footer';
import NotFound from './components/Sections/NotFound/NotFound';
import Services from './components/Sections/Services/Services';
import ContactUs from './components/Pages/Contact Us/ContactUs';
import SignIn from './components/Sections/Sign In/SignIn';
import SignUp from './components/Sections/Sign Up/SignUp';
import AddBlogs from './components/Sections/Add Blogs/AddBlogs';
import AboutUs from './components/Sections/About Us/AboutUs';
import AuthProvider from './components/Firebase/AuthProvider';
import PrivateRoute from './components/Firebase/PrivateRoute';
import AddService from './components/Sections/Add Service/AddService';
import Details from './components/Pages/Details/Details';
import ManageOrder from './components/Sections/ManageOrder/ManageOrder';
import MyOrder from './components/Sections/MyOrder/MyOrder'

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Hedaer></Hedaer>
      <Switch>
      <Route exact path="/">
          <Home></Home>
      </Route>
      <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <PrivateRoute path="/managedelivery">
          <ManageOrder></ManageOrder>
        </PrivateRoute>
        <PrivateRoute path="/addservice">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/myorder">
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path="/managedelivery">
          <ManageOrder></ManageOrder>
        </PrivateRoute>
        <Route path="/addblog">
          <AddBlogs></AddBlogs>
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path="/details/:id">
        <Details></Details>
        </PrivateRoute>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
