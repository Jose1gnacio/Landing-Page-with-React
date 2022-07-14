import React from "react";

function Jumbotron (){
    return (
    <div className="jumbotron pb-2" style={{ "background-color": "#161a1d" }}>
    <h1 className="display-4" style={{ "color":"#d3d3d3"}}>Top 4 Best Anime Series!</h1>
    <p className="lead" style={{ "color":"#d3d3d3"}}>Listamos algunos de los animes que han sido más populares durante los últimos años dentro de cada género, ya sea por su calidad o cantidad de fans.</p>
    <hr className="my-4"style={{ "color":"#d3d3d3"}}/>
    <p style={{ "color":"#d3d3d3"}}>Puede que haya llegado el momento de darle una oportunidad a aquel anime del que tanto oíste hablar pero que nunca comenzaste a ver.</p>
    
  </div>
    );   
     

}
export default Jumbotron;