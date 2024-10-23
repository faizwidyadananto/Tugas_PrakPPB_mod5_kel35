import { Fragment } from "react";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const topGames = [
        {
            title: "World of Tanks", 
            id: 1,
            rate: 5,
            genre: "Panzersimulation, Action, MMO",
            img: "https://i.pinimg.com/736x/65/5e/d4/655ed468a423f0ddaaec01c03c729bf9.jpg",
            description:"World of Tanks is a massively multiplayer online game focused on tank warfare.",
        },
        {
            title: "World of Tanks Blitz", 
            id: 2,
            rate: 5,
            genre: "Tank, Action, MMO",
            img: "https://w0.peakpx.com/wallpaper/290/304/HD-wallpaper-world-of-tanks-blitz-2018-game-posters.jpg",
            description:"A lighter version of World of Tanks, adapted for mobile play with fast-paced battles",
        },
        {
            title: "Elden Ring", 
            id: 3,
            rate: 5,
            genre: "action, RPG",
            img: "https://m.media-amazon.com/images/I/6110RSDn3PL.jpg",
            description:"n action RPG set in a vast, fantasy world where players explore and battle.",
        },
    ];

    const allGames = [
        {
            title: "Granblue Fantasy: Relink", 
            id: 1,
            rate: 4,
            genre: "action, RPG", 
            img: "https://www.rpgfan.com/wp-content/uploads/2020/07/Granblue-Fantasy-Relink-Artwork-020.jpg",
            description:"A dynamic action RPG with beautiful art, set in the Granblue Fantasy universe.",
        },
        {
            title: "Final Fantasy XVI", 
            id: 2,
            rate: 4,
            genre: "RPG", 
            img: "https://cache-na.finalfantasy.com/uploads/content/file/2023/06/22/16655/230622_ff16books_1.jpg",
            description:"The latest entry in the legendary Final Fantasy series, featuring epic battles.",
        },
        {
            title: "Spider-Man: Miles Morales", 
            id: 3,
            rate: 4,
            genre: "action, adventure", 
            img: "https://i.etsystatic.com/13367669/r/il/c13f5e/3270875104/il_1588xN.3270875104_b03r.jpg",
            description:"Join Miles Morales as he masters his powers to become a new Spider-Man.",
        },
        {
            title: "Resident Evil Village", 
            id: 4,
            rate: 4,
            genre: "survival horror", 
            img: "https://i.pinimg.com/736x/dc/21/97/dc2197f75b5d3434191a2c1f98d9cbc2.jpg",
            description:"Survive the horrors of a cursed village in the latest Resident Evil installment.",
        },
        {
            title: "Wild Assault", 
            id: 5,
            rate: 4,
            genre: "action, Third-Person Shooter, PvP", 
            img: "https://m.media-amazon.com/images/M/MV5BYTg4NzU5ZTEtYzI2Mi00NGRmLTkxYWItMjY2OTA0MzRhNTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            description: "Engage in fast-paced PvP combat with a variety of weapons in this action shooter.",
        },
    ];

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {topGames.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} description={item.description}/>
                        {topGames.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="games">All Games</p>
                    {allGames.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} description={item.description}
                                onClick={() => alert("item id = " + item.id)} 
                            />
                            {allGames.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
                <div className="column">
                    <p id="games">All Games</p>
                    {allGames.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} description={item.description}
                                onClick={() => alert("item id = " + item.id)} 
                            />
                            {allGames.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
