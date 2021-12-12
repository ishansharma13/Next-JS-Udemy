import { useRouter } from "next/router";

function main(){
    const router = useRouter();
    console.log(router.query);
    const message = "All Blogs Page";
    return (<div>
        {message}
    <div>
    <button onClick={()=>router.push({
            pathname: '/'
        })}>Go Back</button>
    </div>
    </div>);

}


export default main;