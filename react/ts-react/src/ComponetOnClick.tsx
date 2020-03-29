import React from 'react'

type ComponetOnClickProps ={
    id: string;
    name: string;
    onClick: (id: string) => void // void 리턴
}

function ComponetOnClick({ id, name, onClick}: ComponetOnClickProps){
    return (
        <div>
            id: {id}, name: {name}
            <button onClick={() => onClick(id)}>click</button>
        </div>
    )
}

ComponetOnClick.defaultProps = {
    name: '현재6'
}

export default ComponetOnClick