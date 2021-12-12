import Link from 'next/Link';
const links = [
    {   displayName: 'Products',
        pathName: '/products'
    },
    {   displayName: 'About',
        pathName: '/products'
    },
    {   displayName: 'Blogs',
        pathName: '/blogs'
    },
];

function main(){
    const message = "Main Page";
    return (<div>
        {message}
        <ul>
        {links.map(itm=>{
            return (<li key={itm.displayName}>
                <Link href={{
                    pathname: itm.pathName
                }}>{itm.displayName}</Link>
            </li>);
        })} 
        </ul>
    </div>);
}


export default main;