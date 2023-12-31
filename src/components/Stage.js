import Game from "./Game"
export default function Stage({spacing, nGames, gamesStage}){
    
    const leftSpacing = (
        spacing.playerHeight
            + spacing.playerWidth
            + spacing.scoreSpace
            + 100)
        * gamesStage

    const games = []

    
    for (let i=0; i<nGames; i++){
        var gameTopOffset = 0

        
        if (gamesStage===0){
            gameTopOffset=0
        }
        else if (gamesStage===1){
            gameTopOffset = (
                spacing.playerHeight*(4*(i+1))
                + spacing.gameSpace*(2*i+1)
                + spacing.scoreSpace*(2*i+2))
            * gamesStage
            gameTopOffset = gameTopOffset/2-spacing.gameSpace
        }
        else if (gamesStage===2){
            if (i==0){
                 gameTopOffset = (
                    spacing.playerHeight*(8)
                    + spacing.gameSpace*(3)
                    + spacing.scoreSpace*(4))/2-spacing.gameSpace
            }
           else{
                gameTopOffset = (
                    spacing.playerHeight*(16)
                    + spacing.gameSpace*(7)
                    + spacing.scoreSpace*(8))/2+2*spacing.gameSpace
           }
            
        }
        else if (gamesStage===3){
            gameTopOffset = (
                spacing.playerHeight*(16)
                + spacing.gameSpace*(7)
                + spacing.scoreSpace*(8))/2-spacing.gameSpace
        }

        games.push(
            <Game spacing={{...spacing, gameTop: i*spacing.gameTop+gameTopOffset}}/>
        )
    }
    return (
        <g transform={`translate(${leftSpacing},0)`}>
            {games}
        </g>
    )
}