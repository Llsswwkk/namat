export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="w-full max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium text-gray-500">
          NAMAT
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          اكتشف نمط شخصيتك
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          اختبار بسيط وممتع يساعدك على اكتشاف شخصيتك بطريقة مختلفة.
        </p>

        <a
          href="/quiz"
          className="mt-10 inline-flex rounded-2xl bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
        >
          ابدأ الاختبار
        </a>
      </section>
    </main>
  );
}
