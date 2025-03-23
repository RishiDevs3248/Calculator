export default function Button({Color, value , text}){
    return (
        <button className={`bg-transparent h-[50px] w-[50px] ${Color}`} value={value}>
            {text}
        </button>
    )
}