import { useContext } from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetUpList from '../meetups/MeetUpList';

function FavouritesPage(){
    const FavoritesCtx = useContext(FavoriteContext);
    let content 
    if (FavoritesCtx.totalFavorites === 0){
        content = <h3> You got no favourites </h3>;
    }else{
        content = <MeetUpList data={FavoritesCtx.favorites} />;
    }
    return (<div>
        <h1>Favourites Meetups</h1>
        {content}
    </div>);
}

export default FavouritesPage;