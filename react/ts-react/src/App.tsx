import React from 'react';
import './App.css';
import ComponetFc from './ComponetFc';
import ComponetArrow from './ComponetArrow';
import ComponetNoArrow from './ComponetNoArrow';
import ComponetOptional from './ComponetOptional';
import ComponetOnClick from './ComponetOnClick';

const App: React.FC = () => {
  return (
    <>
      <div>React.FC</div>
      <ComponetFc id="1" />
      <br/><br/><br/>
      <div>Remove React.FC (Arrow function)</div>
      <ComponetArrow id="2" />
      <br/><br/><br/>
      <div>Remove React.FC (function)</div>
      <ComponetNoArrow  id="3" />
      <br/><br/><br/>
      <div>Optional ? false</div>
      <ComponetOptional id="4"/>
      <br/><br/><br/>
      <div>Optional ? true</div>
      <ComponetOptional id="5" optional="true"/>
      <br/><br/><br/>
      <div>onClick</div>
      <ComponetOnClick id="6" onClick={(id: string) => {console.log(`${id}`)}} />
    </>
  );
}

export default App;