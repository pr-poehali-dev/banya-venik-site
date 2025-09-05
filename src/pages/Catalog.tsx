import { useState } from 'react';
import Icon from '@/components/ui/icon';
import './Catalog.css';

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
    image: "https://cdn.poehali.dev/files/ed468bef-52b4-4ded-96b0-3a67c6fb94ce.jpg",
    shortDescription: "Классический березовый веник для бани",
    fullDescription: "Традиционный березовый веник, собранный из молодых березовых веток с листьями. Идеален для глубокой очистки кожи и улучшения кровообращения.",
    benefits: ["Очищает поры", "Улучшает кровообращение", "Натуральный антисептик", "Ароматерапия"],
    category: "Классические"
  },
  {
    id: 2,
    name: "Дубовый веник",
    price: 420,
    image: "https://cdn.poehali.dev/files/2b18e5a2-9e05-489f-81c0-6e7c2f06a55b.jpg",
    shortDescription: "Прочный дубовый веник для интенсивного массажа",
    fullDescription: "Дубовый веник отличается особой прочностью и долговечностью. Дубовые листья богаты дубильными веществами, которые благотворно влияют на кожу.",
    benefits: ["Укрепляет кожу", "Длительное использование", "Противовоспалительный эффект", "Тонизирует"],
    category: "Премиум"
  },
  {
    id: 3,
    name: "Пихтовый веник",
    price: 480,
    image: "https://cdn.poehali.dev/files/a8d43b8b-eb9b-4789-87de-8bb00dbb7cae.jpg",
    shortDescription: "Хвойный веник для оздоровления дыхательной системы",
    fullDescription: "Пихтовый веник обладает мощным целебным эффектом благодаря эфирным маслам хвои. Особенно полезен для дыхательной системы.",
    benefits: ["Очищает дыхательные пути", "Богат витамином С", "Антибактериальный эффект", "Укрепляет иммунитет"],
    category: "Лечебные"
  },
  {
    id: 4,
    name: "Липовый веник",
    price: 380,
    image: "https://cdn.poehali.dev/files/533db12f-62f6-4fee-b1d3-2f4005063ccf.jpg",
    shortDescription: "Мягкий липовый веник с успокаивающим эффектом",
    fullDescription: "Липовый веник известен своими успокаивающими свойствами. Листья липы содержат множество полезных веществ для релаксации.",
    benefits: ["Успокаивает нервную систему", "Мягкое воздействие", "Натуральная ароматерапия", "Подходит для чувствительной кожи"],
    category: "Релакс"
  },
  {
    id: 5,
    name: "Замороженный дубовый веник",
    price: 520,
    image: "https://cdn.poehali.dev/files/2b18e5a2-9e05-489f-81c0-6e7c2f06a55b.jpg",
    shortDescription: "Специально заготовленный замороженный дубовый веник",
    fullDescription: "Замороженный дубовый веник сохраняет все полезные свойства свежих листьев круглый год. Заготавливается в лучшее время года.",
    benefits: ["Круглогодичное использование", "Сохранены все витамины", "Интенсивный аромат", "Премиум качество"],
    category: "Премиум"
  },
  {
    id: 6,
    name: "Замороженный березовый веник",
    price: 450,
    image: "https://cdn.poehali.dev/files/ed468bef-52b4-4ded-96b0-3a67c6fb94ce.jpg",
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
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredProducts = () => {
    let filtered = products;
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getUniqueCategories = () => {
    const categories = products.map(product => product.category);
    return [...new Set(categories)];
  };

  return (
    <div className="catalog-page">
      {/* Заголовок каталога */}
      <section className="catalog-header">
        <div className="container">
          <h1 className="catalog-title">Каталог веников</h1>
          <p className="catalog-subtitle">
            Выберите лучший веник для вашей бани из нашего широкого ассортимента
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <div className="catalog-content">
        <div className="container">
          {/* Фильтры */}
          <div className="filters-section">
            <input
              type="text"
              placeholder="Поиск веников..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">Все категории</option>
              {getUniqueCategories().map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Сетка товаров */}
          <div className="products-grid">
            {getFilteredProducts().map((product) => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.shortDescription}</p>
                  <div className="product-price">{product.price} ₽</div>
                  
                  {/* Счетчик количества */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
                    <button 
                      onClick={() => onUpdateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                      disabled={(quantities[product.id] || 1) <= 1}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        border: '2px solid #059669',
                        background: 'white',
                        color: '#059669',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon name="Minus" size={16} />
                    </button>
                    <span style={{ fontSize: '1.125rem', fontWeight: 'bold', minWidth: '2.5rem', textAlign: 'center' }}>
                      {quantities[product.id] || 1}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        border: '2px solid #059669',
                        background: 'white',
                        color: '#059669',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon name="Plus" size={16} />
                    </button>
                  </div>
                  
                  <button 
                    className="product-button" 
                    onClick={() => onAddToCart(product)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Icon name="ShoppingCart" size={18} />
                    Добавить в корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Пустое состояние */}
          {getFilteredProducts().length === 0 && (
            <div className="empty-state">
              <Icon name="Search" size={64} style={{ margin: '0 auto 1rem', color: '#d1d5db' }} />
              <h3>Товары не найдены</h3>
              <p>Попробуйте изменить условия поиска или выбрать другую категорию</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;