import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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

interface CatalogProps {
  onAddToCart: (product: Product) => void;
  quantities: {[key: number]: number};
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const Catalog = ({ onAddToCart, quantities, onUpdateQuantity }: CatalogProps) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const getFilteredProducts = () => {
    if (categoryFilter === 'all') return products;
    return products.filter(product => product.category === categoryFilter);
  };

  const getUniqueCategories = () => {
    const categories = products.map(product => product.category);
    return [...new Set(categories)];
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Каталог веников
        </h1>
        
        {/* Button Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button 
            variant={categoryFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setCategoryFilter('all')}
            className="px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
          >
            <Icon name="Grid3X3" size={18} className="mr-2" />
            Все категории
          </Button>
          {getUniqueCategories().map((category) => (
            <Button
              key={category}
              variant={categoryFilter === category ? 'default' : 'outline'}
              onClick={() => setCategoryFilter(category)}
              className="px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              {category === 'Классические' && <Icon name="Leaf" size={18} className="mr-2" />}
              {category === 'Премиум' && <Icon name="Crown" size={18} className="mr-2" />}
              {category === 'Лечебные' && <Icon name="Heart" size={18} className="mr-2" />}
              {category === 'Релакс' && <Icon name="Sparkles" size={18} className="mr-2" />}
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProducts().map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="relative overflow-hidden p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-secondary to-accent text-white border-0 shadow-md">
                  {product.category}
                </Badge>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="icon"
                      className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 shadow-lg rounded-full"
                    >
                      <Icon name="Eye" size={18} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {product.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {product.fullDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-xl" />
                      <div>
                        <h4 className="font-semibold text-xl mb-4">Полезные свойства:</h4>
                        <ul className="space-y-3">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl">
                          <p className="text-3xl font-bold text-primary">{product.price} ₽</p>
                          <p className="text-sm text-gray-600">За 1 веник</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                  <Badge variant="secondary" className="px-3 py-1">
                    В наличии
                  </Badge>
                </div>
                
                <div className="flex items-center justify-center space-x-3 py-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => onUpdateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                    disabled={(quantities[product.id] || 1) <= 1}
                    className="rounded-full"
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <div className="w-16 text-center">
                    <span className="text-xl font-semibold">
                      {quantities[product.id] || 1}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => onUpdateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                    className="rounded-full"
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                </div>
                
                <Button 
                  className="w-full py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" 
                  onClick={() => onAddToCart(product)}
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {getFilteredProducts().length === 0 && (
          <div className="text-center py-16">
            <Icon name="Search" size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-500 mb-2">Товары не найдены</h3>
            <p className="text-gray-400">Попробуйте выбрать другую категорию</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;