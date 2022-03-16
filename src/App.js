import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componenet/Home';
import AuthProvider from './Componenet/LoginPage/AuthProvider';
import Register from './Componenet/LoginPage/Register';
import Login from './Componenet/LoginPage/Login';
import Navigation from './Componenet/UnknownFile/Navigation';
import UserProfile from './Componenet/UserProfile/UserProfile';
import EditProfile from './Componenet/UserProfile/EditProfile';
import UserEdit from './Componenet/CrudOparetor/UserEdit';
import CrudSetUp from './Componenet/CrudOparetor/CrudSetUp';
import Menubuy from './Componenet/Menu/Menubuy';
import Menuorder from './Componenet/Menu/Menuorder';
import TourSetUp from './Componenet/TourComponent/TourSetUp';
import MenuSetup from './Componenet/Menu/MenuSetup';
import PrivateRoute from './Componenet/LoginPage/PrivateRoute';

function App() {
  const menu = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: 'https://i.ibb.co/CPqyr0M/item-1.jpg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: 'https://i.ibb.co/PgFtRcH/item-9.jpg      ',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://i.ibb.co/TYMdgyL/item-8.jpg      ',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: 'https://i.ibb.co/YBr8MCk/item-7.jpg      ',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: 'https://i.ibb.co/N2CMd12/item-6.jpg      ',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: 'https://i.ibb.co/9NxsnHL/item-5.jpg      ',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://i.ibb.co/svkHHfy/item-4.jpg      ',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://i.ibb.co/7kZ2fHT/item-3.jpg      ',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 9,
      title: 'quarantine budd',
      category: 'shakes',
      price: 16.99,
      img: '  https://i.ibb.co/sC5rPpv/item-2.jpg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
      id: 10,
      title: 'Khrtef eieht',
      category: 'Elifht',
      price: 16.99,
      img: '  https://i.ibb.co/x2GZBjH/item-10.jpg      ',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
  ];
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <div>
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/tour">
                <TourSetUp />
              </Route>
              <Route path="/menu">
                <MenuSetup />
              </Route>
              <Route path="/crud">
                <CrudSetUp />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/useredit/:id">
                <UserEdit />
              </Route>
              <Route path="/editprofile/:id">
                <EditProfile />
              </Route>
              <Route path="/menuorder">
                <Menuorder />
              </Route>
              <PrivateRoute path="/menubuy/:ids">
                <Menubuy menu={menu} />
              </PrivateRoute>
              <Route path="/profile">
                <UserProfile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
