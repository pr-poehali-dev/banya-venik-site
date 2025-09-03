import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Promotions = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Акции и спецпредложения
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Экономьте на покупке лучших банных веников! Выгодные предложения для новых и постоянных клиентов.
        </p>
        
        {/* Main Promotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-accent/20 via-white to-accent/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Percent" size={36} className="text-white" />
                  </div>
                  <div>
                    <Badge className="bg-accent text-white mb-2 text-sm">Для новичков</Badge>
                    <CardTitle className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      15% скидка
                    </CardTitle>
                    <p className="text-accent font-semibold text-lg">на первый заказ</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Добро пожаловать в мир качественных банных веников! Для новых клиентов 
                действует специальная скидка 15% на общую сумму первого заказа.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-gray-600">Скидка применяется автоматически</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-gray-600">Действует на все виды веников</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-accent" />
                  <span className="text-gray-600">Без минимальной суммы заказа</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-accent/20 shadow-lg">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Промокод</p>
                  <div className="bg-accent/10 px-6 py-3 rounded-full inline-block">
                    <p className="font-bold text-accent text-2xl tracking-wider">FIRST15</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full py-4 text-lg rounded-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Начать покупки
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-secondary/20 via-white to-secondary/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Package" size={36} className="text-white" />
                  </div>
                  <div>
                    <Badge className="bg-secondary text-white mb-2 text-sm">Оптом выгоднее</Badge>
                    <CardTitle className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      10% скидка
                    </CardTitle>
                    <p className="text-secondary font-semibold text-lg">от 10 веников</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Покупайте веники оптом и экономьте! При заказе 10 и более веников 
                автоматически получаете скидку 10% на всю сумму заказа.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span className="text-gray-600">Скидка начисляется автоматически</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span className="text-gray-600">Можно комбинировать разные виды</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span className="text-gray-600">Бесплатная доставка от 15 шт.</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-secondary/20 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-secondary">10+</p>
                    <p className="text-sm text-gray-500">веников</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">10%</p>
                    <p className="text-sm text-gray-500">скидка</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline"
                className="w-full py-4 text-lg rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать выгоду
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Offers */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Дополнительные предложения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Бесплатная доставка</h3>
                <p className="text-gray-600 mb-4">
                  При заказе от 3000 рублей доставляем бесплатно по Москве и области
                </p>
                <Badge variant="secondary">От 3000 ₽</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Подарок за отзыв</h3>
                <p className="text-gray-600 mb-4">
                  Оставьте честный отзыв с фото и получите скидку 5% на следующий заказ
                </p>
                <Badge variant="secondary">5% скидка</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Приведи друга</h3>
                <p className="text-gray-600 mb-4">
                  Пригласи друга и получите оба скидку 10% на следующую покупку
                </p>
                <Badge variant="secondary">10% каждому</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl shadow-2xl text-white max-w-4xl mx-auto">
            <Icon name="Star" size={48} className="mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Не упустите выгодные предложения!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к 5000+ довольных клиентов уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/catalog')}
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 rounded-full font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => navigate('/contact')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;