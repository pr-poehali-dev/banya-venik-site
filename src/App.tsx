
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Promotions from './pages/Promotions';
import About from './pages/About';
import NotFound from './pages/NotFound';

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
    image: "https://cdn.poehali.dev/files/a6c475ae-d25d-455d-abd1-a28478a35985.png",
    shortDescription: "Классический березовый веник для бани",
    fullDescription: "Традиционный березовый веник, собранный из молодых березовых веток с листьями. Идеален для глубокой очистки кожи и улучшения кровообращения.",
    benefits: ["Очищает поры", "Улучшает кровообращение", "Натуральный антисептик", "Ароматерапия"],
    category: "Классические"
  },
  {
    id: 2,
    name: "Дубовый веник",
    price: 420,
    image: "https://cdn.poehali.dev/files/640d50e3-3001-4600-ac82-b9e652375ab6.png",
    shortDescription: "Прочный дубовый веник для интенсивного массажа",
    fullDescription: "Дубовый веник отличается особой прочностью и долговечностью. Дубовые листья богаты дубильными веществами, которые благотворно влияют на кожу.",
    benefits: ["Укрепляет кожу", "Длительное использование", "Противовоспалительный эффект", "Тонизирует"],
    category: "Премиум"
  },
  {
    id: 3,
    name: "Пихтовый веник",
    price: 480,
    image: "https://cdn.poehali.dev/files/32fef7b4-c1fb-4ade-b0dc-4d45c9374931.png",
    shortDescription: "Хвойный веник для оздоровления дыхательной системы",
    fullDescription: "Пихтовый веник обладает мощным целебным эффектом благодаря эфирным маслам хвои. Особенно полезен для дыхательной системы.",
    benefits: ["Очищает дыхательные пути", "Богат витамином С", "Антибактериальный эффект", "Укрепляет иммунитет"],
    category: "Лечебные"
  },
  {
    id: 4,
    name: "Липовый веник",
    price: 380,
    image: "https://cdn.poehali.dev/files/56694897-7a19-448d-b5a3-4a9a51d15e6f.png",
    shortDescription: "Мягкий липовый веник с успокаивающим эффектом",
    fullDescription: "Липовый веник известен своими успокаивающими свойствами. Листья липы содержат множество полезных веществ для релаксации.",
    benefits: ["Успокаивает нервную систему", "Мягкое воздействие", "Натуральная ароматерапия", "Подходит для чувствительной кожи"],
    category: "Релакс"
  },
  {
    id: 5,
    name: "Замороженный дубовый веник",
    price: 520,
    image: "/placeholder.svg",
    shortDescription: "Специально заготовленный замороженный дубовый веник",
    fullDescription: "Замороженный дубовый веник сохраняет все полезные свойства свежих листьев круглый год. Заготавливается в лучшее время года.",
    benefits: ["Круглогодичное использование", "Сохранены все витамины", "Интенсивный аромат", "Премиум качество"],
    category: "Премиум"
  },
  {
    id: 6,
    name: "Замороженный березовый веник",
    price: 450,
    image: "/placeholder.svg",
    shortDescription: "Замороженный березовый веник высшего качества",
    fullDescription: "Замороженный березовый веник позволяет наслаждаться банными процедурами с классическим березовым веником в любое время года.",
    benefits: ["Доступен круглый год", "Максимум полезных веществ", "Классический аромат березы", "Высшее качество"],
    category: "Классические"
  }
];

const queryClient = new QueryClient();

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'info'} | null>(null);

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

  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const showNotification = (message: string, type: 'success' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout cart={cart} onRemoveFromCart={removeFromCart} onUpdateCartItemQuantity={updateCartItemQuantity} notification={notification} />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog onAddToCart={addToCart} quantities={quantities} onUpdateQuantity={updateQuantity} />} />
              <Route path="contact" element={<Contact />} />
              <Route path="promotions" element={<Promotions />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;