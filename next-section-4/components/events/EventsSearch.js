
import { useRef } from 'react';

import Button from '../ui/Button';
import classes from './EventsSearch.module.css';

function EventsSearch(props){
    const year = useRef();
    const month = useRef();
    function onSubmitHandler(event){
        event.preventDefault();
        const tmpobject = {year: year.current.value,month: month.current.value};
        console.log(tmpobject);
        
        props.onSearch(tmpobject.year,tmpobject.month);
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={year}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                <label htmlFor="month">Month</label>
                    <select id="month" ref={month}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Filter</Button>
        </form>

    );
}

export default EventsSearch;