interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

function Input({ name, type, placeholder, value }: inputProps) {
    return (
        <input
            className='h-[100%] w-full border-none bg-transparent text-[18px] text-[--darkMode-active-font-color] outline-none focus:outline-none focus:ring-0 pt-[5px]'
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
        />
    );
}

export default Input;
