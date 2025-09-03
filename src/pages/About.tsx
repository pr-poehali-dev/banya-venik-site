import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            О компании Banhouse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы делаем банные традиции доступными каждому. Уже более 15 лет 
            заготавливаем лучшие веники в экологически чистых районах России.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-gray-600">лет опыта</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-bold text-secondary mb-2">5000+</h3>
            <p className="text-gray-600">довольных клиентов</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TreePine" size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
            <p className="text-gray-600">натуральные веники</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">6</h3>
            <p className="text-gray-600">видов веников</p>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наша история
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Всё началось с семейной традиции. Наш основатель Иван Банников 
              унаследовал секреты заготовки веников от своего деда, который 
              снабжал банями всю округу ещё в советское время.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Сегодня Banhouse — это современная компания, которая сочетает 
              древние традиции с новыми технологиями хранения и доставки. 
              Мы тщательно отбираем сырьё и следим за качеством каждого веника.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Leaf" size={20} className="mr-2" />
                Посмотреть веники
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/contact')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center">
            <Icon name="TreePine" size={200} className="text-primary/30" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши принципы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Leaf" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Экологичность</h3>
                <p className="text-gray-600 leading-relaxed">
                  Заготавливаем веники только в экологически чистых районах, 
                  вдали от промышленности и дорог. Природа даёт нам лучшее.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Традиции</h3>
                <p className="text-gray-600 leading-relaxed">
                  Соблюдаем все традиции заготовки: время сбора, способы сушки, 
                  правила хранения. Каждый веник делаем с душой.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Качество</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждый веник проходит строгий контроль качества. Мы отвечаем 
                  за каждый товар и гарантируем отличный результат.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Как мы делаем веники
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Icon name="MapPin" size={32} className="text-white" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-primary">1. Выбор места</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Тщательно выбираем экологически чистые районы для заготовки. 
                    Проверяем почву, воздух и удалённость от промышленных объектов.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Icon name="Calendar" size={32} className="text-white" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-secondary">2. Время сбора</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Собираем ветки в оптимальное время — начало лета, когда листья 
                    молодые и полны полезных веществ. Работаем только в сухую погоду.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <Icon name="Wind" size={32} className="text-white" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3 text-accent">3. Сушка и хранение</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Сушим веники в специальных помещениях с естественной вентиляцией. 
                    Храним в идеальных условиях до момента отправки покупателю.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl shadow-2xl text-white max-w-4xl mx-auto">
            <Icon name="TreePine" size={64} className="mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Попробуйте наши веники
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Почувствуйте разницу качественных веников, сделанных с любовью к банным традициям
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-12 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => navigate('/catalog')}
            >
              <Icon name="ShoppingBag" size={24} className="mr-2" />
              Выбрать веник
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;