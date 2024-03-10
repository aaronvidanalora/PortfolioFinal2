import { Avatar } from "./componentesHeader/avatar";
import { Menu } from "./componentesHeader/menu";

export function Header(){
    return(
        <div>
            <div className="flex p-4">
            <Avatar />
            <Menu />
            </div>
        </div>
    )
}