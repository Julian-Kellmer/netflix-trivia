'use client';
import { useEffect, useState } from "react";
import questionsData from '../../../questions.json';
import { useRouter } from "next/navigation";

const Index = () => {
    const router = useRouter();
    const [level, setLevel] = useState("easy");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [lives, setLives] = useState(3);

    const [showModal, setShowModal] = useState(false);

    const [modalMessage, setModalMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);

    const currentQuestion = questionsData[level][currentQuestionIndex];

    const handleAnswer = (selectedOption) => {
        if (selectedOption === currentQuestion.answer) {
            setModalMessage("¡Respuesta correcta! Puedes continuar.");
            setShowModal(true);
            // Progress to the next question if correct
            setTimeout(() => {
                setShowModal(false);
                setTimeLeft(10);
                if (currentQuestionIndex < questionsData[level].length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    router.push('/endgame') // Move to the next level if applicable
                }
            }, 2000); // Hide modal after 2 seconds
        } else {
            // If incorrect, deduct a life and show incorrect answer modal
            setLives(lives - 1);
            if (lives - 1 === 0) {
                setGameOver(true);
                setModalMessage("¡Juego terminado! Te has quedado sin vidas.");
                setShowModal(true);
                // Redirect to start after showing game over message
                setTimeout(() => {
                    setShowModal(false);
                    router.push("/"); // Change this path to your start screen
                }, 3000);
            } else {
                setModalMessage("Respuesta incorrecta. Pierdes una vida.");
                setShowModal(true);
                setTimeout(() => setShowModal(false), 2000);
            }
        }
    };

    return (
        <div className="min-h-screen  text-white flex flex-col items-center">
            {/* Header */}
            <div className="w-full  flex justify-between items-center p-4">
                <img src={currentQuestion.logo} alt="Friends Logo" className="h-8" />
                <img src="/logo/triviaNetflix.png" alt="Netflix Logo" className="h-48" />
                <div className="text-right">
                    <p>Tiempo: {timeLeft}s</p>
                    <p>Vidas:
                        <span className="ml-2 text-red-500">
                            {"❤️".repeat(lives)}
                        </span>
                    </p>
                </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold mb-4 text-center">
                {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="flex gap-6  w-full justify-around">
                {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex flex-col items-center  p-4 rounded-lg ">
                        <img src={option.image} alt="" className="w-[25vw] h-[300px]  rounded-md mb-4 object-contain" />
                        <button
                            onClick={() => handleAnswer(option.option)}
                            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md mt-2 cursor-pointer"
                        >
                            {option.option}
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for feedback */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white  p-6 rounded-md text-center shadow-lg">
                        <p className="text-black">{modalMessage}</p>
                    </div>
                </div>
            )}

            {/* Game Over Modal */}
            {gameOver && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-6 rounded-md text-center shadow-lg">
                        <p className="text-black">¡Juego terminado! Has perdido todas tus vidas.</p>
                        <button
                            onClick={() => router.push("/")} // Redirect to start screen
                            className="mt-4 p-2 bg-red-500 text-white rounded"
                        >
                            Regresar al inicio
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
