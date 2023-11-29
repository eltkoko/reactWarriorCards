import React from "react";
import './App.css';
import Card from "./Card";
import Cat from "./photo/cat.png";
import Dracula from "./photo/dracula.png";
import Kirpi from "./photo/kirpi.png";
import Monkey from "./photo/monkey.png";
import Player from "./photo/player.png";
import Teen from "./photo/teen.png";
import Virus from "./photo/virus.png";
import Vr from "./photo/vr.png";
import Wizard from "./photo/wizard.png";

function App({title,imageUrl,body}) {
    return (
        <div className="App">
            <Card 
            title='Magnificent Cat'
            imageUrl={Cat}
            body='“Magnificent Cat has a talent to win any End-of-Episode Monster. If you can arrive at the final episode, you win is for sure.'
            
            />   
            <Card 
            title='The Count'
            imageUrl={Dracula}
            body='“The Count may be seen to be relaxed. It’s his most powerful weapon. He can beat any opponent with 6 different weapons while sitting comfortably”'
            
            />   
                
            <Card 
            title='The Blue Hedgehog'
            imageUrl={Kirpi}
            body='This lovely hedgehog can be a real monster if gets really angry'
            
            />  
             <Card 
            title='MonkeyBall'
            imageUrl={Monkey}
            body='The Money ,playing basketball, is hidding the eternal weapons inside the balls'
            
            />  
             <Card 
            title='Player One'
            imageUrl={Player}
            body='Player always keeps fit in order to gain more power as every episode succeeded'
            
            />  
             <Card 
            title='MacTeen'
            imageUrl={Teen}
            body='He writes codes to destroy all of your life. Do not insult him'
            
            />  
             <Card 
            title='The Purple Virus'
            imageUrl={Virus}
            body='One of the most dangerous artificial inttelegence you can come across with. It give errors to mind of opponents'
            
            />  
             <Card 
            title='Virtual Kids'
            imageUrl={Vr}
            body='The siblings can turn into any monster using VR. Keep your eyes on VR '
            
            />  
             <Card 
            title='The Wizard'
            imageUrl={Wizard}
            body='This naive old man can cast a spell on opponent on any given change'
            
            />  
        </div>
    );
}

export default App