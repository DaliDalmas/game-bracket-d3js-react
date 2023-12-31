import Stage from "./Stage"
export default function Bracket(){
    var spacing = {
        playerHeight: 25,
        playerWidth: 160,
        scoreSpace: 5,
        gameSpace: 20 
    }

    spacing = {
        ...spacing,
        playerSpace: spacing.playerHeight+spacing.scoreSpace,
    }

    spacing = {
        ...spacing,
        gameTop: (spacing.playerHeight*2)+spacing.scoreSpace+spacing.gameSpace
    }

    const gameStages = [0,1,2,3]
    const nGamess = [8,4,2,1]
    const stages = []
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