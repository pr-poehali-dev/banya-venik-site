import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Березовый веник",
    price: 350,
    image: "/img/ae41103d-ed54-47aa-aaeb-d98e71ea3827.jpg",
    shortDescription: "Классический березовый веник для бани",
    fullDescription: "Традиционный березовый веник, собранный из молодых березовых веток с листьями. Идеален для глубокой очистки кожи и улучшения кровообращения.",
    benefits: ["Очищает поры", "Улучшает кровообращение", "Натуральный антисептик", "Ароматерапия"],
    category: "Классические"
  },
  {
    id: 2,
    name: "Дубовый веник",
    price: 420,
    image: "/img/f84a6125-5580-4047-a7d8-729bd164b1d3.jpg",
    shortDescription: "Прочный дубовый веник для интенсивного массажа",
    fullDescription: "Дубовый веник отличается особой прочностью и долговечностью. Дубовые листья богаты дубильными веществами, которые благотворно влияют на кожу.",
    benefits: ["Укрепляет кожу", "Длительное использование", "Противовоспалительный эффект", "Тонизирует"],
    category: "Премиум"
  },
  {
    id: 3,
    name: "Пихтовый веник",
    price: 480,
    image: "/public/placeholder.svg",
    shortDescription: "Хвойный веник для оздоровления дыхательной системы",
    fullDescription: "Пихтовый веник обладает мощным целебным эффектом благодаря эфирным маслам хвои. Особенно полезен для дыхательной системы.",
    benefits: ["Очищает дыхательные пути", "Богат витамином С", "Антибактериальный эффект", "Укрепляет иммунитет"],
    category: "Лечебные"
  },
  {
    id: 4,
    name: "Липовый веник",
    price: 380,
    image: "/img/533db12f-62f6-4fee-b1d3-2f4005063ccf.jpg",
    shortDescription: "Мягкий липовый веник с успокаивающим эффектом",
    fullDescription: "Липовый веник известен своими успокаивающими свойствами. Листья липы содержат множество полезных веществ для релаксации.",
    benefits: ["Успокаивает нервную систему", "Мягкое воздействие", "Натуральная ароматерапия", "Подходит для чувствительной кожи"],
    category: "Релакс"
  },
  {
    id: 5,
    name: "Замороженный дубовый веник",
    price: 520,
    image: "/public/placeholder.svg",
    shortDescription: "Специально заготовленный замороженный дубовый веник",
    fullDescription: "Замороженный дубовый веник сохраняет все полезные свойства свежих листьев круглый год. Заготавливается в лучшее время года.",
    benefits: ["Круглогодичное использование", "Сохранены все витамины", "Интенсивный аромат", "Премиум качество"],
    category: "Премиум"
  },
  {
    id: 6,
    name: "Замороженный березовый веник",
    price: 450,
    image: "/public/placeholder.svg",
    shortDescription: "Замороженный березовый веник высшего качества",
    fullDescription: "Замороженный березовый веник позволяет наслаждаться банными процедурами с классическим березовым веником в любое время года.",
    benefits: ["Доступен круглый год", "Максимум полезных веществ", "Классический аромат березы", "Высшее качество"],
    category: "Классические"
  }
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    
    setQuantities({ ...quantities, [product.id]: 1 });
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setQuantities({ ...quantities, [productId]: Math.max(1, newQuantity) });
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="TreePine" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Banhouse
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
              <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors font-medium">Акции</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-accent">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                    <SheetDescription>
                      {cart.length === 0 ? "Корзина пуста" : `${getTotalItems()} товаров на сумму ${getTotalPrice()} ₽`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">x{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {cart.length > 0 && (
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Итого: {getTotalPrice()} ₽</span>
                        </div>
                        <Button className="w-full" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Главная</a>
                <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Каталог</a>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>О нас</a>
                <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
                <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Акции</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Лучшие веники для бани
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Натуральные веники высшего качества для незабываемых банных процедур. 
            Собраны в экологически чистых районах с соблюдением всех традиций.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Смотреть каталог
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Каталог веников
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-secondary">
                    {product.category}
                  </Badge>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Icon name="Eye" size={16} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {product.name}
                        </DialogTitle>
                        <DialogDescription>
                          {product.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                        <div>
                          <h4 className="font-semibold mb-2">Полезные свойства:</h4>
                          <ul className="space-y-1">
                            {product.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Icon name="Check" size={16} className="text-primary" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                            <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price} ₽</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                      disabled={(quantities[product.id] || 1) <= 1}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {quantities[product.id] || 1}
                    </span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product)}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                О нашей компании
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Мы занимаемся заготовкой и продажей банных веников уже более 15 лет. 
                Наши веники собираются исключительно в экологически чистых районах, 
                с соблюдением всех традиций и в оптимальное время года.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-gray-600">лет опыта</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">5000+</h3>
                  <p className="text-gray-600">довольных клиентов</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Icon name="TreePine" size={120} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="TreePine" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Banhouse</h3>
              </div>
              <p className="text-gray-400">
                Лучшие банные веники для вашего здоровья и удовольствия.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (900) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@banhouse.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Банная, 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Подписка на новости</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 px-3 py-2 bg-gray-700 rounded text-white placeholder-gray-400"
                />
                <Button size="sm">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Banhouse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;