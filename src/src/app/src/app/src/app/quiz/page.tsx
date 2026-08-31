"use client";

import { useState } from "react";

const questions = [
  {
    question: "كيف تفضل تقضي وقت فراغك؟",
    options: [
      "أجرب شيء جديد",
      "أجلس لحالي وأرتاح",
      "أقضي الوقت مع أصحابي",
      "أشتغل على شيء يفيدني"
    ]
  },
  {
    question: "إذا واجهت مشكلة، وش أول شيء تسويه؟",
    options: [
      "أجرب حل جديد",
      "أفكر فيها بهدوء",
      "أسأل شخص أثق فيه",
      "أحلل المشكلة خطوة بخطوة"
    ]
  },
  {
    question: "وش أكثر شيء يحمسك؟",
    options: [
      "المغامرة والتجارب الجديدة",
      "الهدوء والراحة",
      "الناس والعلاقات",
      "الإنجاز وتحقيق الأهداف"
    ]
  }
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = questions[current];

  function chooseAnswer(index: number) {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem("namat-answers", JSON.stringify(newAnswers));
      window.location.href = "/result";
    }
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-2xl">
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500">
            NAMAT
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gray-900 transition-all"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`
              }}
            />
          </div>

          <p className="mt-3 text-sm text-gray-500">
            السؤال {current + 1} من {questions.length}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
            {question.question}
          </h1>

          <div className="mt-8 space-y-4">
            {question.options.map((option, index) => (
              <button
                key={option}
                onClick={() => chooseAnswer(index)}
                className="w-full rounded-2xl border border-gray-200 p-5 text-right transition hover:border-gray-900 hover:bg-gray-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
