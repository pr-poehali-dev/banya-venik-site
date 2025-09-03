import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <div className="py-16 px-4 min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Контакты
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Свяжитесь с нами удобным способом. Мы всегда готовы помочь с выбором веников!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <CardTitle className="text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Как нас найти
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (900) 123-45-67</p>
                  <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@banhouse.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение часа</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Банная, 123</p>
                  <p className="text-sm text-gray-500">Пункт самовывоза</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 20:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Social Media */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <CardTitle className="text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Социальные сети
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full h-16 flex items-center justify-start space-x-4 text-left hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 rounded-xl"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Telegram</p>
                  <p className="text-sm text-gray-500">Быстрые ответы и консультации</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full h-16 flex items-center justify-start space-x-4 text-left hover:bg-pink-50 hover:border-pink-200 transition-all duration-200 rounded-xl"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={24} className="text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <p className="text-sm text-gray-500">Фото наших веников и отзывы</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full h-16 flex items-center justify-start space-x-4 text-left hover:bg-green-50 hover:border-green-200 transition-all duration-200 rounded-xl"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <p className="text-sm text-gray-500">Голосовые сообщения и чат</p>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full h-16 flex items-center justify-start space-x-4 text-left hover:bg-orange-50 hover:border-orange-200 transition-all duration-200 rounded-xl"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Обратный звонок</p>
                  <p className="text-sm text-gray-500">Перезвоним в течение 10 минут</p>
                </div>
              </Button>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl text-center">
                <Icon name="Users" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Присоединяйтесь к нашему сообществу</h3>
                <p className="text-gray-600 text-sm">
                  Более 5000 довольных клиентов уже выбрали наши веники. 
                  Станьте частью большой банной семьи!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Часто задаваемые вопросы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Как долго хранятся веники?</h3>
                <p className="text-gray-600">
                  Свежие веники хранятся 1-2 месяца, замороженные веники сохраняют свойства до 12 месяцев.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Доставляете ли вы по России?</h3>
                <p className="text-gray-600">
                  Да, доставляем по всей России. Стоимость доставки рассчитывается индивидуально.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Можно ли вернуть товар?</h3>
                <p className="text-gray-600">
                  Возврат возможен в течение 14 дней при сохранении товарного вида и упаковки.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Есть ли скидки оптовикам?</h3>
                <p className="text-gray-600">
                  При заказе от 50 веников предоставляем скидку 15%. Звоните для уточнения условий.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;