import Stage from "./Stage"
import matches from "./TestData"
export default function Bracket(){
    const params = {
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        playerHeight: 25,
        playerSeperation: 5,
        gameSeperation: 20
    }


    for (let j=0; j<4; j++){
        stages.push(
            <Stage
                spacing={spacing}
                nGames={nGamess[j]}
                gamesStage={gameStages[j]}/>
        )
    }
    
    return (
        <svg height={spacing.gameTop*8+spacing.gameSpace} width={1100}>
            <g transform={`translate(0,${spacing.gameSpace})`}>
                {stages}
            </g> 
        </svg>
    )
}