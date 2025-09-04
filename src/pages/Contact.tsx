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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Телефон */}
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Телефон</h3>
              <p className="text-lg text-blue-600 font-medium mb-2">+7 (900) 123-45-67</p>
              <p className="text-sm text-gray-500">Ежедневно 9:00-21:00</p>
            </CardContent>
          </Card>
          
          {/* Почта */}
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Email</h3>
              <p className="text-lg text-green-600 font-medium mb-2">info@banhouse.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </CardContent>
          </Card>
          
          {/* Соцсети */}
          <Card className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Соцсети</h3>
              <div className="flex justify-center space-x-4">
                <Button size="sm" variant="outline" className="rounded-full">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  <Icon name="MessageSquare" size={16} />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Telegram и WhatsApp</p>
            </CardContent>
          </Card>
        </div>
        

      </div>
    </div>
  );
};

export default Contact;