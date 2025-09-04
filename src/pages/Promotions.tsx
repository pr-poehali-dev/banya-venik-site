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
        
        {/* Main Promotions - Минималистичные карточки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Промокод для новых пользователей */}
          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-200 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
              <img 
                src="/img/b974aaa1-f7e8-4561-acc6-f336ca252c74.jpg" 
                alt="Промокод для новых пользователей" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Badge className="bg-blue-500 text-white text-sm">Для новых клиентов</Badge>
                <h3 className="text-2xl font-bold text-gray-800">Промокод FIRST15</h3>
                <p className="text-gray-600">15% скидка на первый заказ</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono text-lg font-bold text-blue-600">FIRST15</p>
                </div>
                <Button 
                  className="w-full rounded-lg"
                  onClick={() => navigate('/catalog')}
                >
                  Использовать промокод
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Скидка 10% от 10 веников */}
          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-200 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-50 to-yellow-50 flex items-center justify-center">
              <img 
                src="/img/66b141f6-9060-430a-9111-2a488c3a7739.jpg" 
                alt="Скидка 10% от 10 веников" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Badge className="bg-green-500 text-white text-sm">Оптовая скидка</Badge>
                <h3 className="text-2xl font-bold text-gray-800">10% скидка</h3>
                <p className="text-gray-600">При покупке от 10 веников</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Автоматически применяется</p>
                  <p className="font-bold text-green-600">При добавлении 10+ товаров</p>
                </div>
                <Button 
                  variant="outline"
                  className="w-full rounded-lg border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                  onClick={() => navigate('/catalog')}
                >
                  В каталог
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Дополнительные предложения - минималистично */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Дополнительные бонусы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon name="Truck" size={32} className="text-blue-500 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Бесплатная доставка</h4>
              <p className="text-sm text-gray-500">от 3000 ₽</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon name="Gift" size={32} className="text-green-500 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Подарок за отзыв</h4>
              <p className="text-sm text-gray-500">5% скидка</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <Icon name="Users" size={32} className="text-purple-500 mx-auto mb-2" />
              <h4 className="font-medium mb-1">Приведи друга</h4>
              <p className="text-sm text-gray-500">10% каждому</p>
            </div>
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