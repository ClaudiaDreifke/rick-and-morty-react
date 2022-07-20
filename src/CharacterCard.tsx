import {Character} from "./Character";
import "./CharacterCard.css";

type CharacterCardProps = {
    char:Character
}

export default function CharacterCard(props:CharacterCardProps){

    return(
        <div className={"character-card"}>
            <p className = {"character-name"}>{props.char.name}</p>
            <img className = {"character-card-picture"} src={props.char.image} alt = "Picture of Character"/>
            <p>{props.char.species}</p>
            <p>{props.char.status}</p>
        </div>
    )

}