import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h1 className="hero-title">
              Лучшие веники
              <span style={{ display: 'block', background: 'linear-gradient(to right, #059669, #d97706)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                для бани
              </span>
            </h1>
            <p className="hero-subtitle">
              Натуральные веники высшего качества для незабываемых банных процедур. 
              Собраны в экологически чистых районах с соблюдением традиций.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              <button 
                className="hero-button"
                onClick={() => navigate('/catalog')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <Icon name="Leaf" size={24} />
                Смотреть каталог
              </button>
              <button 
                className="hero-button-outline"
                onClick={() => navigate('/promotions')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <Icon name="Percent" size={24} />
                Акции и скидки
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ color: '#1f2937' }}>
            Почему выбирают нас
          </h2>
          
          <div className="cards-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Icon name="Leaf" size={36} />
              </div>
              <h3 className="feature-title">100% Натуральные</h3>
              <p className="feature-description">
                Только экологически чистые материалы из лучших районов России. 
                Никаких химикатов и искусственных добавок.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(to right, #d97706, #059669)' }}>
                <Icon name="Award" size={36} />
              </div>
              <h3 className="feature-title">Премиум качество</h3>
              <p className="feature-description">
                15+ лет опыта в заготовке веников. Строгий контроль качества 
                и соблюдение традиционных технологий.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(to right, #059669, #d97706)' }}>
                <Icon name="Truck" size={36} />
              </div>
              <h3 className="feature-title">Быстрая доставка</h3>
              <p className="feature-description">
                Доставляем по всей России. Бережная упаковка и гарантия 
                сохранности товара при транспортировке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="section-dark">
        <div className="container">
          <h2 className="section-title">
            Популярные категории
          </h2>
          
          <div className="category-grid">
            <div className="category-card-alt green" onClick={() => navigate('/catalog')}>
              <div className="category-content-alt">
                <Icon name="Leaf" size={48} className="category-icon" />
                <h3 className="category-title-alt">Классические</h3>
                <p className="category-description-alt">Березовые и липовые веники</p>
              </div>
            </div>
            
            <div className="category-card-alt amber" onClick={() => navigate('/catalog')}>
              <div className="category-content-alt">
                <Icon name="Crown" size={48} className="category-icon" />
                <h3 className="category-title-alt">Премиум</h3>
                <p className="category-description-alt">Дубовые веники высшего сорта</p>
              </div>
            </div>
            
            <div className="category-card-alt emerald" onClick={() => navigate('/catalog')}>
              <div className="category-content-alt">
                <Icon name="Heart" size={48} className="category-icon" />
                <h3 className="category-title-alt">Лечебные</h3>
                <p className="category-description-alt">Хвойные и целебные веники</p>
              </div>
            </div>
            
            <div className="category-card-alt purple" onClick={() => navigate('/catalog')}>
              <div className="category-content-alt">
                <Icon name="Sparkles" size={48} className="category-icon" />
                <h3 className="category-title-alt">Релакс</h3>
                <p className="category-description-alt">Для расслабления и отдыха</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-card">
            <Icon name="TreePine" size={80} style={{ margin: '0 auto 2rem', color: '#059669' }} />
            <h2 className="cta-title" style={{ color: '#1f2937' }}>
              Готовы к незабываемым
              <span style={{ display: 'block', color: '#059669' }}>банным процедурам?</span>
            </h2>
            <p className="cta-description" style={{ color: '#6b7280' }}>
              Присоединяйтесь к 5000+ довольных клиентов, которые уже оценили качество наших веников. 
              Начните своё банное путешествие уже сегодня!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
              <button 
                className="hero-button"
                onClick={() => navigate('/catalog')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <Icon name="ShoppingBag" size={24} />
                Выбрать веник
              </button>
              <button 
                className="hero-button-outline"
                onClick={() => navigate('/contact')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <Icon name="MessageCircle" size={24} />
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;