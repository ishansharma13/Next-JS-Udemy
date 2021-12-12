import { useRouter } from "next/router";

function main(){
    const router = useRouter();
    console.log(router.query);
    const message = "Blogs Slug Page";
    return (<div>
        {message}
    </div>);
}


export default main;