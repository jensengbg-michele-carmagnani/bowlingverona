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
          <strong>045581724</strong> oppure scrivendoci alla mail{" "}
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
          Possiamo preparare una torta personalizzata di qualsiasi dimensione.
          Contattaci per discutere i dettagli.
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
      question: "Qual è il prezzo per le feste di compleanno?",
      answer: (
        <div className="space-y-3">
          <div>
            <strong className="text-orange-600 text-lg">Prezzo:</strong> 25 € a
            persona, minimo 8 bambini.
          </div>

          <div>
            <strong className="text-orange-600 text-lg">
              Incluso nel prezzo:
            </strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Rinfresco con patatine, pizzette e panzerotti</li>
              <li>1 soft drink a bambino</li>
              <li>1 partita bowling</li>
              <li>
                Torta inclusa – puoi sceglierla direttamente{" "}
                <Link
                  href="https://cassandrini.it/le-nostre-torte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-orange-400 underline transition-colors"
                >
                  qui
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-orange-600 text-lg">
              Cosa puoi portare:
            </strong>
            <ul className="list-disc list-inside mt-1">
              <li>Candeline per la torta</li>
            </ul>
          </div>

          <div>
            <strong className="text-orange-600 text-lg">
              Cosa non è previsto/consentito:
            </strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>
                Non si può portare cibo o bevande dall&apos;esterno (la torta è già
                inclusa)
              </li>
              <li>
                No fontane pirotecniche, coriandoli/glitter o decorazioni che
                sporcano
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-orange-600 text-lg">
              Extra su richiesta:
            </strong>
            <p className="mt-1">
              Bibite per i genitori, bibite extra e cibo extra sono a consumo e
              a vostro carico secondo listino.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Domande Frequenti</h1>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b pb-2 w-full">
            {/* Button to toggle the question */}
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left flex justify-between items-center py-2"
            >
              <span className="text-lg font-medium">{item.question}</span>
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
              <div className="mt-2 text-gray-600">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
