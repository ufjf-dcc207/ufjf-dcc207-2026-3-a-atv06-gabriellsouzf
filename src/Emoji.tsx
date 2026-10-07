import "./Emoji.css"
type EMOJI_KEYS = "happy" | "love" | "kiss";

const EMOJI_MAP = new Map<EMOJI_KEYS,string> ([
  ["kiss", "😘​"],
  ["happy", "😉​"],
  ["love", "🥰​"],
]);

export default function Emoji() {
    return (
        <div className = "emoji">
           {EMOJI_MAP.get("kiss") || "🫣​"}
        </div>
    );
}