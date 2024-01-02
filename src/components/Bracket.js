import Stage from "./Stage"
import matches from "./TestData"
export default function Bracket(){
    var params = {
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        playerHeight: 25,
        playerWidth: 160,
        playerSeperation: 5,
        gameSeperation: 20,
        playerFontSize:15,
        scoreFontSize:15
    }
    const stages = Object.keys(matches)
    const gameHeight = 2*params.playerHeight+params.playerSeperation
    var n = 0
    stages.forEach(stageName=>{
        if (matches[stageName].length>n){
            n=matches[stageName].length
        }
    })
    const innerHeight = n*gameHeight+(n-1)*gameHeight
    const height = innerHeight+params.margin.top+params.margin.bottom

    
    params = {...params, n: n, gameHeight: gameHeight, innerHeight: innerHeight}
    const stageElements = []
    stages.forEach((stageName, index) => {
        stageElements.push(
            <Stage
                params={params}
                nGames={matches[stageName].length}
                gamesStage={index}
                matchGames={matches[stageName]}/>
        )
    });

    return (
        <svg height={height} width={1100}>
            <g transform={`translate(${params.margin.left},${params.margin.top})`}>
                {stageElements}
            </g> 
        </svg>
    )
}