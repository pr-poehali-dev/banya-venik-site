import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

interface LayoutProps {
  cart: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onUpdateCartItemQuantity: (productId: number, newQuantity: number) => void;
  notification: {message: string, type: 'success' | 'info'} | null;
}

const Layout = ({ cart, onRemoveFromCart, onUpdateCartItemQuantity, notification }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateDiscount = () => {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();
    let discount = 0;
    let discountText = '';
    
    if (totalItems > 10) {
      discount = totalPrice * 0.1;
      discountText = '10% скидка за количество';
    }
    
    return { discount, discountText };
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className={`p-4 rounded-xl shadow-2xl backdrop-blur-sm ${
            notification.type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
          }`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name={notification.type === 'success' ? 'Check' : 'Info'} size={16} />
              </div>
              <span className="font-medium">{notification.message}</span>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-xl sticky top-0 z-40 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <Icon name="TreePine" size={28} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Banhouse
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              <Link to="/">
                <Button 
                  variant={isActiveLink('/') ? 'default' : 'ghost'}
                  className={`rounded-full font-medium transition-all duration-200 px-6 ${
                    isActiveLink('/') ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
              </Link>
              <Link to="/catalog">
                <Button 
                  variant={isActiveLink('/catalog') ? 'default' : 'ghost'}
                  className={`rounded-full font-medium transition-all duration-200 px-6 ${
                    isActiveLink('/catalog') ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Icon name="Grid3X3" size={18} className="mr-2" />
                  Каталог
                </Button>
              </Link>
              <Link to="/promotions">
                <Button 
                  variant={isActiveLink('/promotions') ? 'default' : 'ghost'}
                  className={`rounded-full font-medium transition-all duration-200 px-6 ${
                    isActiveLink('/promotions') ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Icon name="Percent" size={18} className="mr-2" />
                  Акции
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant={isActiveLink('/about') ? 'default' : 'ghost'}
                  className={`rounded-full font-medium transition-all duration-200 px-6 ${
                    isActiveLink('/about') ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Icon name="Info" size={18} className="mr-2" />
                  О нас
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant={isActiveLink('/contact') ? 'default' : 'ghost'}
                  className={`rounded-full font-medium transition-all duration-200 px-6 ${
                    isActiveLink('/contact') ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Icon name="Phone" size={18} className="mr-2" />
                  Контакты
                </Button>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="relative rounded-full shadow-lg hover:shadow-xl transition-all duration-200 bg-white/90 backdrop-blur-sm border-primary/20"
                  >
                    <Icon name="ShoppingCart" size={20} />
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-gradient-to-r from-accent to-accent/80 shadow-lg">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] bg-white/95 backdrop-blur-sm">
                  <SheetHeader>
                    <SheetTitle className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Корзина
                    </SheetTitle>
                    <SheetDescription className="text-lg">
                      {cart.length === 0 ? "Корзина пуста" : `${getTotalItems()} товаров в корзине`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.price} ₽ каждый</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => onUpdateCartItemQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 rounded-full"
                              disabled={item.quantity <= 1}
                            >
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="font-medium px-3 py-1 bg-gray-50 rounded-full min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => onUpdateCartItemQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-full"
                            >
                              <Icon name="Plus" size={14} />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="text-lg font-semibold text-primary">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => onRemoveFromCart(item.id)}
                            className="h-8 w-8 rounded-full hover:bg-red-50 hover:text-red-600"
                          >
                            <Icon name="Trash2" size={14} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {cart.length > 0 && (
                      <div className="pt-6 border-t border-gray-200">
                        {(() => {
                          const { discount, discountText } = calculateDiscount();
                          const totalPrice = getTotalPrice();
                          const finalPrice = totalPrice - discount;
                          
                          return (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-green-50 to-orange-50 p-4 rounded-xl space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">Сумма товаров:</span>
                                  <span className="font-medium">{totalPrice.toLocaleString()} ₽</span>
                                </div>
                                {discount > 0 && (
                                  <div className="flex justify-between text-sm text-green-600">
                                    <span>{discountText}:</span>
                                    <span>-{discount.toFixed(0)} ₽</span>
                                  </div>
                                )}
                                <div className="flex justify-between items-center font-bold text-xl border-t border-gray-200 pt-2">
                                  <span>Итого:</span>
                                  <span className="text-primary">{finalPrice.toLocaleString()} ₽</span>
                                </div>
                              </div>
                              <Button className="w-full py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-secondary">
                                <Icon name="CreditCard" size={20} className="mr-2" />
                                Оформить заказ
                              </Button>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                    {cart.length === 0 && (
                      <div className="text-center py-12">
                        <Icon name="ShoppingCart" size={64} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500 text-lg mb-6">Корзина пуста</p>
                        <Button 
                          onClick={() => {
                            navigate('/catalog');
                            window.location.reload();
                          }}
                          className="rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          Перейти в каталог
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
                className="md:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant={isActiveLink('/') ? 'default' : 'ghost'}
                    className="w-full rounded-xl font-medium transition-all duration-200"
                  >
                    <Icon name="Home" size={18} className="mr-2" />
                    Главная
                  </Button>
                </Link>
                <Link to="/catalog" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant={isActiveLink('/catalog') ? 'default' : 'ghost'}
                    className="w-full rounded-xl font-medium transition-all duration-200"
                  >
                    <Icon name="Grid3X3" size={18} className="mr-2" />
                    Каталог
                  </Button>
                </Link>
                <Link to="/promotions" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant={isActiveLink('/promotions') ? 'default' : 'ghost'}
                    className="w-full rounded-xl font-medium transition-all duration-200"
                  >
                    <Icon name="Percent" size={18} className="mr-2" />
                    Акции
                  </Button>
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant={isActiveLink('/about') ? 'default' : 'ghost'}
                    className="w-full rounded-xl font-medium transition-all duration-200"
                  >
                    <Icon name="Info" size={18} className="mr-2" />
                    О нас
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="col-span-2">
                  <Button 
                    variant={isActiveLink('/contact') ? 'default' : 'ghost'}
                    className="w-full rounded-xl font-medium transition-all duration-200"
                  >
                    <Icon name="Phone" size={18} className="mr-2" />
                    Контакты
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-2xl bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-all duration-200 md:hidden"
          size="icon"
        >
          <Icon name="ArrowUp" size={20} className="text-white" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-12 px-4 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Логотип слева */}
            <div className="mb-8 md:mb-0">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="TreePine" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Banhouse
                </h3>
              </Link>
              <p className="text-gray-300 max-w-sm text-left">
                Лучшие банные веники для вашего здоровья и удовольствия.
              </p>
            </div>
            
            {/* Соцсети справа */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full hover:bg-blue-600 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full hover:bg-green-600 transition-colors">
                <Icon name="MessageSquare" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white rounded-full hover:bg-blue-500 transition-colors">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Banhouse. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;