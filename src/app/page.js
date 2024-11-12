'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();

  const [textIndex, setTextIndex] = useState(1)

  const handleClickButton = () => {
    if (textIndex != 3) {
      setTextIndex(textIndex + 1)
    } else {
      router.push('/dificulty/easy');
    }
  }

  return (
    <div className=' min-w-[80vw] flex flex-col items-center'>
      <img src="/logo/triviaNetflix.png" width={350} />

      {textIndex === 1 && (
        <div className='w-3/4 text-center'>
          <h1>Bienvenidos a la trivia de Netflix</h1>
          <p>El juego consta de una trivia de 15 preguntas, divididas en tres dificultades.</p>
          <p>En caso de ganar, tendrás un año de suscripción gratis.</p>
        </div>
      )}

      {textIndex === 2 && (
        <div className='w-3/4 text-center'>
          <h1>Para pasar de nivel</h1>
          <p>Tienes que contestar todas las respuestas correctas de dicho nivel.</p>
          <p>En caso de no contestar bien una pregunta, perderás una vida.</p>
          <p>Si pierdes tus tres vidas, pierdes el juego.</p>
        </div>
      )}

      {textIndex === 3 && (
        <div className='w-3/4 text-center'>
          <h1>Reglas:</h1>
          <ul>
            <li>Una vez seleccionada tu pregunta, no podrás cambiarla.</li>
            <li>Tienes un total de 10 segundos para responder.</li>
            <li>Si excedes ese tiempo, se marcará como incorrecta.</li>
          </ul>
        </div>
      )}


      <button onClick={handleClickButton} className="mt-8 p-4 border rounded border-white ">{textIndex === 3 ? "Jugar" : "Siguiente"}</button>
    </div>
  );
}
