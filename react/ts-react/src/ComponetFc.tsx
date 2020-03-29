import React from 'react';

type ComponetFcProps = {
    id: string;
    name?: string;
}

const ComponetFc: React.FC<ComponetFcProps> =({ id, name })=> (
    <div>
        id: {id}, name: {name}
    </div>
);

// React.FC 의 이점 defaultProps, contextTypes, propTypes 자동 완성 가능....????
 
ComponetFc.defaultProps = {
    name: '현재1'
}

ComponetFc.contextTypes = {

}

ComponetFc.propTypes = {

}

export default ComponetFc;