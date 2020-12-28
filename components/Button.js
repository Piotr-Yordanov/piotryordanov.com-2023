const Button = ({ text = "More" }) => {
    return <button className="inline-block px-3 py-2 mt-4 text-sm font-bold leading-3 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none waves-effect">
        {text}
    </button>

}

export default Button