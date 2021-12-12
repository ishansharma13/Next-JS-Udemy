import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoriteContext from '../store/favorites-context';
import { useContext } from 'react';

function MainNavigation(){
    const favoritesCtx = useContext(FavoriteContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}> Meetup App</div>
            <nav>
                <ul>
                    <li><Link to="/"> All Meetups</Link></li>
                    <li><Link to="/new"> New Meetup</Link></li>
                    <li><Link to="/favorites"> Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;