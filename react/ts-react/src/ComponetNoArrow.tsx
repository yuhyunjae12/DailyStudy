import React from 'react'

type ComponetNoArrowProps ={
    id: string;
    name: string;
}

function ComponetNoArrow({ id, name }: ComponetNoArrowProps){
    return (
        <div>
            id: {id}, name: {name}
        </div>
    )
}

ComponetNoArrow.defaultProps = {
    name: '현재3'
}

export default ComponetNoArrow