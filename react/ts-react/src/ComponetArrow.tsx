import React from 'react'

type ComponetArrowProps = {
    id: string;
    name: string;   
}

const ComponetArrow =({ id, name }: ComponetArrowProps) =>(
    <div>
        id: {id}, name: {name}
    </div>
)

ComponetArrow.defaultProps ={
    name: '현재2'
}

export default ComponetArrow