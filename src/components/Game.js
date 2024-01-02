import Player from "./Player"
export default function Game({params, match}){
    const playerSpace = params.playerHeight+params.playerSeperation
    return (
        <g transform={`translate(0, ${params.gameTop})`}>
            <Player params={{...params, playerSpace:0}} match={match}/>
            <Player params={{...params, playerSpace:playerSpace}} match={match}/>
        </g>
    )
}