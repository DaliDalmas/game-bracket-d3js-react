import Game from "./Game"
export default function Stage({params, nGames, gamesStage, matchGames}){
    
    const leftSpacing = (
        params.playerHeight
            + params.playerWidth
            + params.playerSeperation
            + 100)
        * gamesStage
    
    const games = []
    if (gamesStage===0){
        matchGames.forEach((match, i) => {
            games.push(
                <Game 
                    params={{...params, gameTop: (params.gameHeight+params.gameSeperation)*i}}
                    match= {match}/>
            )
        })
    } else{
        const TG = params.innerHeight - nGames*params.gameHeight
        const gameSeperation = (TG)/(nGames+1)
        params = {...params, gameSeperation:gameSeperation}
        matchGames.forEach((match, i) => {
            const gameTop = (params.gameSeperation+params.gameHeight)*(i+1)-params.gameHeight
            games.push(
                <Game
                    params={{...params, gameTop: gameTop}}
                    match= {match}/>
            )
        })
    }
    
    return (
        <g transform={`translate(${leftSpacing},0)`}>
            {games}
        </g>
    )
}