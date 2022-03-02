import { keys } from './../contrants/keyboardCharacters';

export default function Keyboard(){
    return (
        <div>
            {keys.map((item,index)=> (
                <div>
                    {
                        item.map((key,keyIndex)=>(
                            <button>
                                <h1>{key}</h1>
                            </button>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}