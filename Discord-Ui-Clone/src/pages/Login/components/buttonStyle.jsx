import React from 'react'


function ButtonStyle(props){
return(
    <React.Fragment>
    <button type={props.type} onClick={props.onClick} className='w-80 h-10 bg-[#5865F2] rounded-sm text-white font-semibold'>{props.text}</button>
    </React.Fragment>
)


}

export default ButtonStyle