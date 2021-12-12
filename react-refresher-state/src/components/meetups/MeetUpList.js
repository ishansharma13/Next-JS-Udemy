import MeetUpItem from "./MeetUpItem";
import classes from './MeetUpList.module.css';
function MeetUpList(props){
    let list = props.data;
    return (<ul className={classes.list}>
        {list.map((data)=>{
            return <MeetUpItem image={data.image} description={data.description} address={data.address} title={data.title} key={data.id} id={data.id}/>;
        })}
    </ul>);

}

export default MeetUpList;