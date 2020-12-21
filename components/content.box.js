import { useState, useEffect } from 'react';

const Box = (props) => {
    const icon = props.icon ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
        {props.icon}
    </svg> : <img width="45px" height="45px" src={props.url} />

    const media = props.img ? <img src={props.img} alt='placeholder' /> : props.media

    return <div className='flex flex-col'>
        <div className='flex justify-center mb-4'>
            <div className='p-2 mr-2'>
                {icon}
            </div>
            {props.title}
        </div>
        {media}
    </div>
}

export default Box