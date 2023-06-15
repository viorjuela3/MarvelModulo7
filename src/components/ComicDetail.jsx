import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../styles/ComicDetail.css";
import FavoriteComics from "./FavoriteComics";
import comicAlien from "../assets/comicAlien.jpg";
import comicAvengers from "../assets/comicAvengers.jpg";
import comicCaptainAmerica from "../assets/comicCaptainAmerica.jpg";
import comicCaptainBritain from "../assets/comicCaptainBritain.jpg";
import comicCarnage from "../assets/comicCarnage.jpg";
import comicDeadlyRegenesis from "../assets/comicDeadlyRegenesis.jpg";
import comicDoctorAphra from "../assets/comicDoctorAphra.jpg";
import comicDoctorStrange from "../assets/comicDoctorStrange.jpg";
import comicSpiderMan from "../assets/comicSpiderMan.jpg";
import comicSpinstress from "../assets/comicSpinstress.jpg";
import comicTheAmazingSpiderMan from "../assets/comicTheAmazingSpiderMan.jpg";
import comicVenom from "../assets/comicVenom.jpg";

export const ComicDetail = ({ addToFavorites }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const comics = [
    
    {
      id: 1,
      title: "Alien",
      imageUrl: comicAlien,
      description:
        "WHAT WOULD YOU DO IF THE EMPIRE TOOK OVER? As operations begin to take shape on the moon of ENDOR, a technician must figure out how to live under the control of THE EMPIRE. But if he can't stay out of trouble, what will the Empire do with him? Continuing the 40TH ANNIVERSARY celebration of RETURN OF THE JEDI, JODY HOUSER & JETHRO MORALES pull back the curtain of the Empire like never before!",
    },

    {
      id: 2,
      title: "Avengers",
      imageUrl: comicAvengers,
      description:
        "AVENGERS ASSEMBLE CHAPTER SIX: THE SECRET OF AVENGER PRIME! He is the most important Avenger in the Multiverse. He's spent years manning a watchtower at the heart of all creation all by himself. Now his story can be told, as he suddenly finds himself no longer alone, but instead surrounded by an unbelievable gathering of heroes.",
    },
    {
      id: 3,
      title: "Capitan America",
      imageUrl: comicCaptainAmerica,
      description:
        "'COLD WAR' PART FOUR! Just when White Wolf thinks he's gained the upper hand, Sam Wilson and Steve Rogers rally under the banner of Captain America. Meanwhile, Black Widow and Peggy Carter clash over what it means to be a hero - and whether Bucky Barnes is still someone worth saving.",
    },
    {
      id: 4,
      title: "Capitan en Britain",
      imageUrl: comicCaptainBritain,
      description:
        "Part Four! Cletus Kasady is back in New York and more powerful and bloodthirsty than ever! Normie Osborn, meanwhile, is eager to prove himself as the new RED GOBLIN! But when that eagerness puts him on a collision course with Carnage, Normie and his symbiote will emerge from this issue forever changed!",
    },
    {
      id: 5,
      title: "Carnage",
      imageUrl: comicCarnage,
      description:
        "TIME IS AN UNCONQUERABLE BEAST! Tempo traps herself and Bishop in a time loop of her past trauma. Will she be able to allow festering wounds heal so she and Bishop can figure out a way back home? Meanwhile, the War College students are fighting for their lives, and the lives of Krakoa's mutants, against the Struckers and Orchis. Help may be on the way, but timing these days has a funny way of putting our favorite mutants in the worst positions possible. Read the last issue of the BISHOP: WAR COLLEGE miniseries to find out how this time-warped, action-packed plot ends!",
    },
    {
      id: 6,
      title: "Deadly Regenesis",
      imageUrl: comicDeadlyRegenesis,
      description:
        "LUKE SKYWALKER...IN THE CLUTHES OF DR. CUATA! The would-be JEDI'S LIGHTSABER is all but destroyed! Enter KYBER CRYSTAL expert DR. CUATA! Only he can repair it...but at what price? Luke's life will hang in the balance...and only ANOTHER JEDI can save him!",
    },
    {
      id: 7,
      title: "Doctora Aphra",
      imageUrl: comicDoctorAphra,
      description:
        "1990: The debut of Danny Ketch as the Spirit of Vengeance - with menace, misfortune and mystery waiting for him! After an origin whose full implications remain unrevealed to this day, the Ghost Rider goes flaming head-first into a gang war between the Kingpin and his conjuring competitor, Deathwatch! Plus: the bite of Blackout, the menace of Masque's Morlocks and more! The Scarecrow makes his move into horror comics, while Flag-Smasher joins a war effort...to start one! Guest-starring the X-Men and the Punisher! Collecting GHOST RIDER #1-10. Rated T ...$29.99 ISBN: 978-0-7851-3735-1",
    },
    {
      id: 8,
      title: "Doctor Strange",
      imageUrl: comicDoctorStrange,
      description:
        "* The astonishing return of Big Hero Six, Japan's top heroes! * Featuring Hiro (smartest boy in Japan), Baymax (his trusty robot companion), Honey Lemon (and her magic handbag) and Gogo Tomago (the unstoppable energy ball)! * Who are the Six's two new members - and what secrets do they hold? * Collecting BIG HERO 6 #1-5.",
    },
    {
      id: 9,
      title: "SpiderMan",
      imageUrl: comicSpiderMan,
      description:
        "Spider-Man's Spider-Sense is on overdrive. It's driving him insane. And Electro has always been one to listen when opportunity knocks…",
    },
    {
      id: 10,
      title: "Spinstress",
      imageUrl: comicSpinstress,
      description:
        "The Evil Queen has, quite literally, captured the Huntsman's heart -- and now he's her slave. Based on the world of ABC's hit primetime series ONCE UPON A TIME, this is the never-before-told tale behind their twisted relationship -- and what happens when a good man is forced to do bad. When Regina cooks up yet another devious plan to capture Snow White -- this time by allying with a pack of power-hungry werewolves -- the Huntsman comes face-to-face with his past...and an independent spirit in Red Riding Hood that just may match his own. Can these two break free of the forces that bind them and save Snow White? When put to the test, where will the Huntsman's loyalties lie? Has the Evil Queen stolen his heart in more ways than one?",
    },
    {
      id: 11,
      title: "The Amazing SpiderMan",
      imageUrl: comicTheAmazingSpiderMan,
      description:
        "Marvel UK's greatest heroes come together for the first time in 20 years to face a threat that could destroy the world! A troubling vision in Darkmoor Castle portends the horrible truth: The sinister MYS-Tech organization has returned! When MYS-Tech's magical cloning experiments are discovered, Dark Angel and the Knights of Pendragon have no choice but to return to action! Death's Head comes face to face with Death's Head II as they rally against MYS-Tech across time! The Supersoldiers take on MYS-Tech's army of Psycho Wraiths! And from beyond space and time, Motormouth, Killpower and the Warheads join the fight! Featuring Captain Britain, Pete Wisdom, Union Jack, Dai Thomas and a host of British heroes from Marvel UK's past, present and future! Collecting REVOLUTIONARY WAR: ALPHA #1, DARK ANGEL #1, KNIGHTS OF PENDRAGON #1, DEATH'S HEAD II #1, SUPERSOLDIERS #1, MOTORMOUTH#1, WARHEADS #1 and OMEGA #1.",
    },
    {
      id: 12,
      title: "Venom",
      imageUrl: comicVenom,
      description:
        "THERE AND BROCK AGAIN! Eddie Brock has fought and fought and fought some more to get back to the Marvel Universe and fight by his son's side. IN THIS ISSUE - HE SUCCEEDS! And the charred skeletal remains of Eddie's physical body are REANIMATED by the King in Black incarnate! Wielding the very marrow in his broken bones, Eddie makes his presence in the present known in explosive fashion! Not that you'd expect anything less!",
    },
  ];

  const comic = comics.find((c) => c.id === parseInt(id));

  if (!comic) {
    return <div>Comic no fue encontrado en la memoria del array comics</div>;
  }

  const { title, imageUrl, description } = comic;

  const handleAddToFavorites = () => {
    addToFavorites(comic);
    navigate("/favorites"); 
  };

  //Visualiza la imagen, el titulo y la descripción

  return (
    <div className="containerComicDetail"> 
      <img src={imageUrl} alt={title} />
      <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
      </div>
      
      <FavoriteComics favorites={favorites} setFavorites={setFavorites} addToFavorites={addToFavorites} />

    </div>
  );
};

export default ComicDetail;