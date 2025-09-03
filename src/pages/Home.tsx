import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Лучшие веники
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                для бани
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Натуральные веники высшего качества для незабываемых банных процедур. 
              Собраны в экологически чистых районах с соблюдением традиций.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:scale-105"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Leaf" size={24} className="mr-3" />
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all duration-300 border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105"
                onClick={() => navigate('/promotions')}
              >
                <Icon name="Percent" size={24} className="mr-3" />
                Акции и скидки
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Почему выбирают нас
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 group">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Leaf" size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">100% Натуральные</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Только экологически чистые материалы из лучших районов России. 
                  Никаких химикатов и искусственных добавок.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 group">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Award" size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Премиум качество</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  15+ лет опыта в заготовке веников. Строгий контроль качества 
                  и соблюдение традиционных технологий.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-4 group">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Truck" size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Быстрая доставка</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Доставляем по всей России. Бережная упаковка и гарантия 
                  сохранности товара при транспортировке.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Популярные категории
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-green-100 to-green-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={() => navigate('/catalog')}>
              <CardContent className="p-8 text-center">
                <Icon name="Leaf" size={48} className="mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-green-800">Классические</h3>
                <p className="text-green-700">Березовые и липовые веники</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-amber-100 to-amber-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={() => navigate('/catalog')}>
              <CardContent className="p-8 text-center">
                <Icon name="Crown" size={48} className="mx-auto mb-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-amber-800">Премиум</h3>
                <p className="text-amber-700">Дубовые веники высшего сорта</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-100 to-emerald-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={() => navigate('/catalog')}>
              <CardContent className="p-8 text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-emerald-800">Лечебные</h3>
                <p className="text-emerald-700">Хвойные и целебные веники</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-purple-100 to-purple-50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  onClick={() => navigate('/catalog')}>
              <CardContent className="p-8 text-center">
                <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-3 text-purple-800">Релакс</h3>
                <p className="text-purple-700">Для расслабления и отдыха</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-primary/20">
              <Icon name="TreePine" size={80} className="mx-auto mb-8 text-primary" />
              <h2 className="text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Готовы к незабываемым
                <span className="block text-primary">банным процедурам?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Присоединяйтесь к 5000+ довольных клиентов, которые уже оценили качество наших веников. 
                Начните своё банное путешествие уже сегодня!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:scale-105"
                  onClick={() => navigate('/catalog')}
                >
                  <Icon name="ShoppingBag" size={24} className="mr-3" />
                  Выбрать веник
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-105"
                  onClick={() => navigate('/contact')}
                >
                  <Icon name="MessageCircle" size={24} className="mr-3" />
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;