
//import { name } from 'tar/types';



import ItemSrc from './ItemSrc';
import './item.css'
import GithubRequest from "./GithubRequest";
//https://api.github.com/users/pinelpedro/repos


function ItemMain(){
    
        return (
            <div className="item-main">
            <div className="item-main-img">
                <ItemSrc></ItemSrc>
                <div>aaa</div>
            </div>
            <GithubRequest></GithubRequest>
        </div>
    )
}

export default ItemMain;