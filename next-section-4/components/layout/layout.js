import Link from 'next/link';
import { Fragment } from "react";
import HeaderNav from "./headerNav";

function Layout(props){
    return (<Fragment>
        <HeaderNav />
        <main>
            {props.children}
        </main>
    </Fragment>);
}

export default Layout;