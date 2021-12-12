import {useRouter} from 'next/router';
function main(){
    const router = useRouter();
    const message = `About ID ${router.query.id} Page`;
    return (<div>
        {message}
    </div>);
}


export default main;