import {Character} from "./Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"


type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div className={"character-gallery"}>
            {props.characters.map((char) =>
                <CharacterCard char={char} key={char.id}/>)
            };

        </div>

    )

}