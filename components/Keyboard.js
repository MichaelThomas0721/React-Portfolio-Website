import { keys } from './../contrants/keyboardCharacters';

export default function Keyboard(){
    return (
        <div>
            {keys.map((item,index)=> (
                <div key={index} className="m-auto w-fit">
                    {
                        item.map((key,keyIndex)=>(
                            <button className="bg-grey rounded-lg w-12 h-16 m-1" key={keyIndex} onClick="element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));">
                                {key}
                            </button>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}