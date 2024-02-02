import { useState } from "react"

export default function FormTable({onFormSubmit}){
    const[inptValue,setInptValue] = useState('');



    const handleSubmit = (e)=>{
        e.preventDefault();
        onFormSubmit(inptValue);
    }

    // onSubmit={handleSubmit}
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text"  
                    value={inptValue}
                    onChange={(e)=>setInptValue(e.target.value)}
                />
                <button  type="submit">Search</button>
            </form>
            {/* onClick={handleSubmit} */}
        </>
    )
}