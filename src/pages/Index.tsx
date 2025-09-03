import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info'} | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

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
    showNotification(`${product.name} добавлен в корзину (${quantity} шт.)`, 'success');
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setQuantities({ ...quantities, [productId]: Math.max(1, newQuantity) });
  };

  const removeFromCart = (productId: number) => {
    const item = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
    if (item) {
      showNotification(`${item.name} удален из корзины`, 'info');
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const showNotification = (message: string, type: 'success' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };

  const getFilteredProducts = () => {
    if (categoryFilter === 'all') return products;
    return products.filter(product => product.category === categoryFilter);
  };

  const getUniqueCategories = () => {
    const categories = products.map(product => product.category);
    return [...new Set(categories)];
  };

  const calculateDiscount = () => {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    let discount = 0;
    let discountText = '';
    
    // Скидка 10% при покупке более 10 штук
    if (totalItems > 10) {
      discount = totalPrice * 0.1;
      discountText = '10% скидка за количество';
    }
    
    return { discount, discountText };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className={`p-4 rounded-lg shadow-lg ${
            notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}>
            <div className="flex items-center space-x-2">
              <Icon name={notification.type === 'success' ? 'Check' : 'Info'} size={20} />
              <span>{notification.message}</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="TreePine" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Banhouse
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
              <a href="#promotions" className="text-gray-700 hover:text-primary transition-colors font-medium">Акции</a>
            </nav>

            <div className="flex items-center space-x-4">
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
                      {cart.length === 0 ? "Корзина пуста" : `${getTotalItems()} товаров`}
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
                        {(() => {
                          const { discount, discountText } = calculateDiscount();
                          const totalPrice = getTotalPrice();
                          const finalPrice = totalPrice - discount;
                          
                          return (
                            <>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Сумма товаров:</span>
                                  <span>{totalPrice} ₽</span>
                                </div>
                                {discount > 0 && (
                                  <div className="flex justify-between text-sm text-green-600">
                                    <span>{discountText}:</span>
                                    <span>-{discount.toFixed(0)} ₽</span>
                                  </div>
                                )}
                                <div className="flex justify-between items-center font-semibold text-lg">
                                  <span>Итого:</span>
                                  <span>{finalPrice} ₽</span>
                                </div>
                              </div>
                              <Button className="w-full mt-4" size="lg">
                                Оформить заказ
                              </Button>
                            </>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

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

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t">
              <div className="flex flex-col space-y-2">
                <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Каталог</a>
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
            Натуральные веники высшего качества для незабываемых банных процедур
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('catalog')?.scrollIntoView({behavior: 'smooth'})}>
            Смотреть каталог
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Каталог веников
          </h2>
          
          {/* Filters */}
          <div className="flex justify-center mb-8">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {getUniqueCategories().map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredProducts().map((product) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Контакты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (900) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@banhouse.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Банная, 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Социальные сети</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex items-center space-x-3">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                  <span>Telegram</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center space-x-3">
                  <Icon name="Instagram" size={24} className="text-primary" />
                  <span>Instagram</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center space-x-3">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                  <span>WhatsApp</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span>Звонок</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Акции и спецпредложения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Percent" size={32} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Скидка новичкам
                    </CardTitle>
                    <p className="text-accent font-semibold">15% на первый заказ</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Для новых клиентов действует скидка 15% на общую сумму первого заказа. 
                  Промокод применяется автоматически при оформлении.
                </p>
                <div className="bg-white p-3 rounded-lg border border-accent/20">
                  <p className="text-sm text-gray-500">Промокод:</p>
                  <p className="font-bold text-accent">FIRST15</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Package" size={32} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Оптовая скидка
                    </CardTitle>
                    <p className="text-secondary font-semibold">10% от 10 веников</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  При покупке 10 и более веников предоставляется скидка 10% на общую сумму заказа. 
                  Скидка применяется автоматически в корзине.
                </p>
                <div className="bg-white p-3 rounded-lg border border-secondary/20">
                  <p className="text-sm text-gray-500">Условие:</p>
                  <p className="font-bold text-secondary">От 10 штук веников</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="TreePine" size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Banhouse</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Лучшие банные веники для вашего здоровья и удовольствия
          </p>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Banhouse. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;