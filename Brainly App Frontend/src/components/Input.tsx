interface InputProps {
    placeholder: string;
    reference?: any; 
}

export function Input({placeholder, reference}: InputProps){
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2 rounded-md border-2 m-2 border-slate-200 outline-none"/>
    </div>
}