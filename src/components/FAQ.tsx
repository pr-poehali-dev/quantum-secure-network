import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как часто нужно чистить подушки?",
    answer:
      "Рекомендуем проводить профессиональную чистку не реже одного раза в год. Если вы используете подушку более трёх лет, первую чистку лучше сделать как можно скорее — за это время накапливается значительное количество загрязнений и пылевых клещей.",
  },
  {
    question: "Можно ли почистить очень старую или сильно загрязнённую подушку?",
    answer:
      "В большинстве случаев — да. Мы оцениваем состояние подушки перед чисткой и подбираем оптимальный метод. Сильно повреждённые или изношенные подушки мы честно порекомендуем заменить, если чистка не даст результата.",
  },
  {
    question: "Какие наполнители вы чистите?",
    answer:
      "Мы работаем со всеми распространёнными типами наполнителей: натуральный пух и перо, синтепон, холлофайбер, микрофибра, а также ортопедические и анатомические наполнители. Каждый тип требует своего режима обработки.",
  },
  {
    question: "Безопасна ли чистка для детских подушек?",
    answer:
      "Для детских подушек мы используем только гипоаллергенные средства без резкого запаха. После чистки подушка тщательно просушивается — никаких остатков химии. Результат абсолютно безопасен для детей и аллергиков.",
  },
  {
    question: "Сколько времени занимает чистка?",
    answer:
      "Стандартная чистка занимает от 1 до 3 рабочих дней в зависимости от типа наполнителя и степени загрязнения. Большую часть времени занимает сушка — мы не отдаём влажные подушки, только полностью готовые.",
  },
  {
    question: "Как сдать подушки на чистку?",
    answer:
      "Оставьте заявку на сайте или позвоните нам. Мы организуем удобное время для самовывоза или вы можете привезти подушки самостоятельно. После чистки доставим обратно.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}