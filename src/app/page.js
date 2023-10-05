"use client";
import { useState } from 'react';
import style from './style.module.css'
export default function Home() {
   const [color,setColor]=useState('red')
   const {red,green}=style
  return (
    <main>
      <h1 className={color=='red'?style.green:style.red}>Conditional style</h1>
      <h2 style={{backgroundColor:color=='red'?'green':'red'}}>heading 2</h2>
      <h3 id={style.yellow}>heading 3</h3>
      <h4 className={red}>heading 4</h4>
      <h4>heading 4</h4>
      <h4 className={green}>heading 4</h4>
      <button onClick={()=>setColor("green")}>Update color</button>
    </main>
  );
}