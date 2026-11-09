import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      
      
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="text-xl font-bold tracking-wider text-[#1a2a52]">BOXPACK</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a className="hover:text-black">Услуги</a>
          <a  className="hover:text-black">Как это работает</a>
          <a  className="hover:text-black">Видеофиксация</a>
          <a  className="hover:text-black">Калькулятор</a>
          <a  className="hover:text-black">Кейсы</a>
          <a  className="hover:text-black">Контакты</a>
        </nav>
      </header>

   
      <section className="bg-[#142347] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="">Автоматизированный фулфилмент</p>
            <h1 className="">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="">
              Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления. Мы берем на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a  className="">
                Рассчитать стоимость
              </a>
              <a href="#consultation" className="border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-lg transition">
                Получить консультацию
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="">5000+</p>
                <p className="text-xs text-gray-400 mt-1">заказов в день</p>
              </div>
              <div>
                <p className="">99.9%</p>
                <p className="text-xs text-gray-400 mt-1">точность сборки</p>
              </div>
              <div>
                <p className="">FBO/FBS</p>
                <p className="text-xs text-gray-400 mt-1">все маркетплейсы</p>
              </div>
            </div>
          </div>

         
          <div className="">
            Видео автоматизированной упаковочной линии
          </div>
        </div>
      </section>
      <section className="">
        <h2 className="t">Как начать работать с нами</h2>
        <p className="">Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.</p>
        
      </section>


    </main>
  );
}
