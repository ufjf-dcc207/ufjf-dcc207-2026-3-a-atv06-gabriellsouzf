import { useState } from "react";
import "./Emoji.css"
type EMOJI_KEYS = "happy" | "love" | "kiss";

const EMOJI_MAP = new Map<EMOJI_KEYS,string> ([
  ["kiss", "😘​"],
  ["happy", "😉​"],
  ["love", "🥰​"],
]);

export default function Emoji() {
    const [status, setStatus] = useState<EMOJI_KEYS>("love")

    function happyClick () {
        console.log("Status: ", status);
        console.log("HAPPYYYYYYY!!");
        setStatus ("happy");
        console.log("Status: ", status);
    }

    return (
        <>
            <div className = "emoji">
           {EMOJI_MAP.get(status) || "🫣​"}
            </div>
            <div className = "acoes">
                 <button onClick={happyClick}>Happy</button>
            </div>
        </>
    );
}