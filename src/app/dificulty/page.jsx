import Link from "next/link"
export default function page() {
    return (
        <div className="flex flex-col">
            <p>Here is where you start the game , be aware that you only have one chan, so dont use it wrong</p>
            <Link href='/dificulty/easy'>
                <button>Start game</button>
            </Link>
            
        </div>
    )
}



// export default function Page() {
//     return (
//       <h1>
//         Hello, next.js!
//       </h1>
//     );
//   }
