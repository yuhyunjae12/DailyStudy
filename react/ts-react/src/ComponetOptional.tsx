import React from 'react'

type ComponetOptionalProps ={
    id: string;
    name: string;
    optional?: string;
}

function ComponetOptional({ id, name, optional }: ComponetOptionalProps){
    return (
        <div>
            id: {id}, name: {name}
            {optional && <div>{optional}</div>}
        </div>
    )
}

ComponetOptional.defaultProps ={
    name: '현재4'
}

export default ComponetOptional