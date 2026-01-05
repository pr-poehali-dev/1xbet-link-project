import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  const downloadUrl = "https://new-1xbet.com/mobile?bf=f6daf55002fd4_11055021235";
  const [downloads, setDownloads] = useState(12483);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloads(prev => prev + Math.floor(Math.random() * 2) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "Trophy",
      title: "Ставки на спорт",
      description: "Футбол, баскетбол, теннис и 40+ видов спорта"
    },
    {
      icon: "Zap",
      title: "Live-ставки",
      description: "Делайте ставки в режиме реального времени"
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description: "Удобный интерфейс и быстрый доступ 24/7"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защита данных и мгновенные выплаты"
    }
  ];

  const bonusSteps = [
    {
      step: "1",
      title: "Скачайте приложение",
      description: "Нажмите на кнопку и установите 1xBet на ваше устройство"
    },
    {
      step: "2",
      title: "Зарегистрируйтесь",
      description: "Создайте аккаунт и подтвердите личные данные"
    },
    {
      step: "3",
      title: "Получите бонус",
      description: "До 500€ на первый депозит для новых игроков"
    }
  ];

  const stats = [
    { value: "15M+", label: "Активных пользователей", icon: "Users" },
    { value: "€2.5B+", label: "Выплачено выигрышей", icon: "TrendingUp" },
    { value: "40+", label: "Видов спорта", icon: "Trophy" },
    { value: "24/7", label: "Поддержка клиентов", icon: "Headphones" }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Отличное приложение! Высокие коэффициенты и быстрые выплаты. Пользуюсь уже 2 года.",
      date: "2 дня назад"
    },
    {
      name: "Марина К.",
      rating: 5,
      text: "Бонус получила сразу после регистрации. Интерфейс понятный, всё работает отлично!",
      date: "5 дней назад"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Лучшая букмекерская контора! Live-ставки просто огонь, рекомендую всем.",
      date: "1 неделю назад"
    }
  ];

  const faqItems = [
    {
      question: "Безопасно ли скачивать приложение?",
      answer: "Да! Мы предоставляем прямую официальную ссылку на загрузку. Приложение проверено антивирусами и не содержит вредоносного ПО. Все данные защищены SSL-шифрованием."
    },
    {
      question: "Как получить бонус 500€?",
      answer: "Скачайте приложение, зарегистрируйтесь и пополните счёт. Бонус начисляется автоматически на первый депозит новым игрокам."
    },
    {
      question: "Какие устройства поддерживаются?",
      answer: "Приложение работает на Android (версия 5.0+) и iOS (версия 11.0+). Также доступна веб-версия для всех браузеров."
    },
    {
      question: "Как быстро выводятся деньги?",
      answer: "Вывод средств обрабатывается в течение 15 минут. Доступны все популярные способы: карты, электронные кошельки, криптовалюта."
    },
    {
      question: "Это официальная ссылка?",
      answer: "Да! Это прямая официальная ссылка на 1xBet. Никаких посредников и перенаправлений. Гарантируем безопасность загрузки."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "1xBet",
            "operatingSystem": "Android, iOS",
            "applicationCategory": "GameApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "15000000"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="Sparkles" size={32} className="text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              1xBet
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Получите бонус до 500€
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Скачайте мобильное приложение и начните выигрывать уже сегодня
          </p>

          <div className="mb-8 max-w-3xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/e02ef662-b580-4a1f-ad18-1be6ee49a722/files/8df0a678-488f-4e48-bc08-391e9b409a71.jpg" 
              alt="1xBet приложение на смартфоне" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl hover-scale group"
              onClick={() => window.open(downloadUrl, '_blank')}
            >
              <Icon name="Download" size={24} className="mr-2 group-hover:animate-bounce" />
              Скачать приложение
            </Button>
            
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/20 rounded-lg border-2 border-secondary">
              <Icon name="Gift" size={24} className="text-secondary" />
              <span className="font-bold text-secondary text-lg">Бонус 500€</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <span className="text-lg">
              Скачиваний сегодня: <span className="font-bold text-primary">{downloads.toLocaleString()}</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 text-center hover-scale"
            >
              <Icon name={stat.icon} size={32} className="text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/e02ef662-b580-4a1f-ad18-1be6ee49a722/files/0d54c0e1-e1c4-431e-86d4-64e729242e8c.jpg" 
                alt="Ставки на спорт" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-card/80 transition-all hover-scale border-border/50 hover:border-primary/50"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 mb-16 border border-primary/30">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Как получить бонус 500€
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bonusSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {index < bonusSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary">
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="absolute -right-2 -top-2.5 text-secondary" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 shadow-xl hover-scale"
              onClick={() => window.open(downloadUrl, '_blank')}
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать сейчас
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Отзывы наших пользователей
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-card border-border/50 hover-scale">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{review.text}</p>
                <div className="text-xs text-muted-foreground">{review.date}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <Card className="p-8 bg-card border-border/50 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">Высокие коэффициенты</h4>
                  <p className="text-muted-foreground">
                    Одни из самых выгодных коэффициентов на рынке. Увеличьте свои выигрыши!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="CreditCard" size={24} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-foreground">Быстрые выплаты</h4>
                  <p className="text-muted-foreground">
                    Вывод средств в течение 15 минут. Все популярные способы оплаты.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <img 
              src="https://cdn.poehali.dev/projects/e02ef662-b580-4a1f-ad18-1be6ee49a722/files/a639269a-fc13-48d9-891a-e84cee0f8581.jpg" 
              alt="Выигрыш в 1xBet" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground mb-1">100% Безопасно</h4>
                  <p className="text-muted-foreground">Проверено антивирусами</p>
                </div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Link" size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground mb-1">Прямая ссылка</h4>
                  <p className="text-muted-foreground">Официальный источник 1xBet</p>
                </div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block"></div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="Lock" size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-foreground mb-1">SSL Шифрование</h4>
                  <p className="text-muted-foreground">Защита данных</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Частые вопросы
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h4 className="font-bold text-lg text-foreground pr-4">{item.question}</h4>
                  <Icon 
                    name={openFaq === index ? "ChevronUp" : "ChevronDown"} 
                    size={24} 
                    className="text-primary flex-shrink-0"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Готовы начать?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам игроков по всему миру
          </p>
          <Button 
            size="lg"
            className="text-lg px-12 py-7 bg-white text-primary hover:bg-white/90 shadow-xl hover-scale font-bold"
            onClick={() => window.open(downloadUrl, '_blank')}
          >
            <Icon name="Download" size={28} className="mr-3" />
            Скачать 1xBet и получить 500€
          </Button>
        </div>

        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>18+ | Играйте ответственно | Применяются правила и условия</p>
        </footer>
        </div>
      </div>
    </>
  );
};

export default Index;