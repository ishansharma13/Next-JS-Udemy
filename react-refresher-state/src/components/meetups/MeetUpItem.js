import { useContext } from 'react';
import classes from './MeetUpItem.module.css';
import Card from '../ui/Card';
import FavoriteContext from '../store/favorites-context';
function MeetUpItem(props){
    const FavoriteCtx = useContext(FavoriteContext);
    const isItemFavoriteHandler = FavoriteCtx.isItemFavoriteHandler(props.id);
    const addItemFavoriteHandler = FavoriteCtx.addFavoriteHandler;
    const removeFavoriteHandler = FavoriteCtx.removeFavoriteHandler;


    function toggleButtonHandler(){
        if (isItemFavoriteHandler){
            removeFavoriteHandler(props.id);
        }else{
            addItemFavoriteHandler({
                id: props.id,
                address: props.address,
                description: props.description,
                image: props.image,
                title: props.title
            });
        }
    }
    return (
        <Card>
        <li className={classes.item} key={props.id}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <h5>{props.address} </h5>
                <p>{props.description}</p>
            </div>
        <div className={classes.actions}>
            <button onClick={toggleButtonHandler}>{isItemFavoriteHandler?'Remove From Favorites':'To Favorites'}</button>
        </div>
        </li>
        </Card>
    );
}

export default MeetUpItem;