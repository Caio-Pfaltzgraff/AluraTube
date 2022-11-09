import React from "react"
import { ColorModeContext } from "../src/components/Menu/components/ColorMode"

export default function() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <div>
            video!
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>
                trocar Modo
            </button>
        </div>
    )
}