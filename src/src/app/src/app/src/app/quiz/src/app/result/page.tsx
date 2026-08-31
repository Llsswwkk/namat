"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const savedAnswers = localStorage.getItem("namat-answers");

    if (!savedAnswers) {
      window.location.href = "/";
      return;
    }

    const answers: number[] = JSON.parse(savedAnswers);

    const explorer = answers.filter((answer) => answer === 0).length;
    const strategist = answers.filter((answer) => answer === 3).length;

    if (explorer >= strategist) {
      setResult("EXPLORER");
    } else {
      setResult("STRATEGIST");
    }
  }, []);

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">جاري تحليل شخصيتك...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-8 text-center shadow-sm md:p-14">
          <p className="text-sm font-medium tracking-widest text-gray-500">
            NAMAT
          </p>

          <p className="mt-10 text-gray-500">
            نمط شخصيتك هو
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            {result}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            هذه النتيجة تعطيك لمحة عن الطريقة التي تميل فيها إلى التفكير
            والتصرف واتخاذ القرارات.
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("namat-answers");
              window.location.href = "/quiz";
            }}
            className="mt-10 rounded-2xl bg-gray-900 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            إعادة الاختبار
          </button>
        </div>
      </section>
    </main>
  );
}
