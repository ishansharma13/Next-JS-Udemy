import { Route,Routes } from 'react-router-dom';
import AllMeetUpsPage from './components/pages/AllMeetups';
import NewMeetUpPage from './components/pages/NewMeetup';
import FavouritesPage from './components/pages/Favourites';
import Layout from './components/layouts/Layout';
function App() {
    return (
    <Layout>

 <Routes >

 <Route path="/" element={<AllMeetUpsPage />} />
 <Route path="/new" element={<NewMeetUpPage />} />
 <Route path="/favorites" element={<FavouritesPage />} />

</Routes>

</Layout>);
  }
  
  export default App;