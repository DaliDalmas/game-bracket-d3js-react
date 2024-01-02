import './Player.css'
export default function Player({params}){
    const colors = {
        primary: '#c4c4c4',
        secondary: '#ef06a1',
       
    }

    return (
        <g transform={`translate(${0},${params.playerSpace})`}>
            <g>
                <rect
                    x={0}
                    y={0}
                    height={params.playerHeight}
                    width={params.playerWidth}
                    fill={colors.primary}>
                </rect>
                <text
                    x={params.playerHeight+8}
                    y="19"
                    fontFamily="Verdana"
                    fontSize={params.playerFontSize}
                    fill="black"
                    >
                        Kimanje Patrick
                </text>
                <image
                    href="https://picsum.photos/200"
                    height={params.playerHeight-4}
                    width={params.playerHeight-4}
                    clipPath="inset(0% round 15px)"
                    transform='translate(4,2)'
                    />
            </g>
            <g>
                <rect
                    x={params.playerWidth+params.scoreSpace}
                    y={0}
                    height={params.playerHeight}
                    width={params.playerHeight}
                    fill={colors.secondary}
                    stroke={colors.primary}>
                </rect>
                <text
                    x={params.playerWidth+params.scoreSpace+2}
                    y="19"
                    fontFamily="Verdana"
                    fontSize={params.scoreFontSize}
                    fill="white">
                        10
                </text>
            </g>

        </g>
    )
}