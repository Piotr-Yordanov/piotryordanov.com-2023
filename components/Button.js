const Button = ({ text = "More" }) => {
    return <button class="text-sm inline-block px-3 font-bold mt-4 py-2 leading-3 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none waves-effect">
        {text}
    </button>

}

export default Button