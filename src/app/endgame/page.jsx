export default function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-gradient-to-b from-black to-red-900 text-white">
            <h1 className="text-5xl font-bold mb-4">GANASTEEEE</h1>
            <p className="text-2xl font-semibold mb-2 text-center">
                Felicidades, te ganaste un año gratis de
            </p>
            <img src="/logo/netflixLogo.png" alt="Netflix Logo" className="h-20 my-4" />
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg">
                Canjear código de descuento
            </button>
        </div>
    );
}
