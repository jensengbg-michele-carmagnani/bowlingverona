"use client";
import Link from "next/link";
import { JSX, useState } from "react";

interface Question {
  question: string;
  answer: JSX.Element;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions: Question[] = [
    {
      question: "Come faccio a prenotare?",
      answer: (
        <span>
          Puoi prenotare contattandoci dopo le 20:30 al numero{" "}
          <Link
            href="tel:+39045581724"
            className="text-blue-500 hover:text-orange-400 underline transition-colors"
          >
            045581724
          </Link>{" "}
          oppure scrivendoci alla mail{" "}
          <Link
            href="mailto:bowlingvr@gmail.com"
            className="text-blue-500 hover:text-orange-400 underline transition-colors"
          >
            bowlingvr@gmail.com
          </Link>
          .
        </span>
      ),
    },
    {
      question: "Dove scegliere la torta?",
      answer: (
        <span>
          Puoi scegliere la torta sul sito{" "}
          <Link
            href="https://www.cassandrini.it/le-nostre-torte/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-orange-400 underline transition-colors"
          >
            https://www.cassandrini.it/le-nostre-torte
          </Link>{" "}
          e poi comunicarcela.
        </span>
      ),
    },
    {
      question: "Se voglio una torta più grande del numero dei invitati?",
      answer: (
        <span>
          E´ possibile ordinare una torta più grande del numero degli invitati
          la differenza verrá calcolata a parte.
        </span>
      ),
    },
    {
      question: "Quando è possibile fare il compleanno?",
      answer: (
        <span>
          I compleanni possono essere organizzati durante i nostri orari di
          apertura. Per i compleanni dei ragazzi consigliamo il weekend.
        </span>
      ),
    },
    {
      question: "Posso portare dolci, torte o bevande?",
      answer: (
        <span>
          Non è possibile portare dolci e torte, ma puoi scegliere la torta sul
          sito di{" "}
          <Link
            href="https://www.cassandrini.it/le-nostre-torte/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-orange-400 underline transition-colors"
          >
            https://www.cassandrini.it/le-nostre-torte
          </Link>{" "}
          .
          <br /> Non é possibile portare alcolici quali vini, superalcolici o
          birre ma se avete delle richieste specifice vi possiamo accontentare.
        </span>
      ),
    },
    {
      question: "Posso portare decorazioni per il compleanno?",
      answer: <span>E´possibile portare palloncini e decorazioni.</span>,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-[Rajdhani]">
      <h1 className="text-2xl font-bold text-center mb-4">Domande Frequenti</h1>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-2 w-full">
            {/* Button to toggle the question */}
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left flex justify-between items-center py-2"
            >
              <span className="text-xl uppercase text-orange-400/90 hover:text-orange-300 transition-colors">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Animated answer section */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-slate-300 text-left text-lg">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
