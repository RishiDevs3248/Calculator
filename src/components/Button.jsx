export default function Button({ Color, value, text, onClick, width = "s" }) {
    return (
        <button 
            className={`bg-transparent h-[50px] ${width == "b" ? "w-[140px]" : "w-[50px]"} text-3xl ${Color}`} 
            value={value} 
            onClick={onClick}
        >
            {text}
        </button>
    );
}
