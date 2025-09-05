import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import './Promotions.css';

const Promotions = () => {
  const navigate = useNavigate();

  return (
    <div className="promotions-page">
      {/* Заголовок страницы акций */}
      <section className="promotions-header">
        <div className="container">
          <h1 className="promotions-title">Акции и спецпредложения</h1>
          <p className="promotions-subtitle">
            Экономьте на покупке лучших банных веников! Выгодные предложения для новых и постоянных клиентов.
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <div className="promotions-content">
        <div className="container">
          {/* Основные акции */}
          <div className="promotions-grid">
            {/* Промокод для новых пользователей */}
            <div className="promotion-card featured">
              <div className="discount-badge premium">-15%</div>
              <img 
                src="https://cdn.poehali.dev/files/b974aaa1-f7e8-4561-acc6-f336ca252c74.jpg" 
                alt="Промокод для новых пользователей" 
                className="promotion-image"
              />
              <div className="promotion-content">
                <h3 className="promotion-title">Скидка для новых клиентов</h3>
                <p className="promotion-description">
                  Получите 15% скидку на первый заказ! Введите промокод при оформлении заказа.
                </p>
                
                <div className="promo-code">
                  <div className="promo-code-label">Промокод</div>
                  <div className="promo-code-value">FIRST15</div>
                </div>
                
                <div className="promotion-conditions">
                  <h4>Условия акции:</h4>
                  <ul>
                    <li>Действует только для новых клиентов</li>
                    <li>Минимальный заказ от 1000 ₽</li>
                    <li>Нельзя совмещать с другими скидками</li>
                  </ul>
                </div>
                
                <button 
                  className="promotion-button"
                  onClick={() => navigate('/catalog')}
                >
                  Использовать промокод
                </button>
                
                <div className="promotion-validity">
                  Действует до 31 декабря 2024 года
                </div>
              </div>
            </div>

            {/* Скидка 10% от 10 веников */}
            <div className="promotion-card">
              <div className="discount-badge">-10%</div>
              <img 
                src="https://cdn.poehali.dev/files/66b141f6-9060-430a-9111-2a488c3a7739.jpg" 
                alt="Скидка 10% от 10 веников" 
                className="promotion-image"
              />
              <div className="promotion-content">
                <h3 className="promotion-title">Оптовая скидка</h3>
                <p className="promotion-description">
                  При покупке от 10 веников любого вида автоматически применяется скидка 10% на весь заказ.
                </p>
                
                <div className="promotion-conditions">
                  <h4>Условия акции:</h4>
                  <ul>
                    <li>Минимум 10 веников в заказе</li>
                    <li>Скидка применяется автоматически</li>
                    <li>Действует на все виды веников</li>
                  </ul>
                </div>
                
                <button 
                  className="promotion-button"
                  onClick={() => navigate('/catalog')}
                >
                  В каталог
                </button>
                
                <div className="promotion-validity">
                  Постоянная акция
                </div>
              </div>
            </div>
          </div>
          
          {/* Дополнительные бонусы */}
          <div style={{ maxWidth: '48rem', margin: '4rem auto 0' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              color: '#1f2937', 
              marginBottom: '2rem' 
            }}>
              Дополнительные бонусы
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem' 
            }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                background: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <Icon name="Truck" size={32} style={{ color: '#3b82f6', margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Бесплатная доставка</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>от 3000 ₽</p>
              </div>
              
              <div style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                background: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <Icon name="Gift" size={32} style={{ color: '#10b981', margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Подарок за отзыв</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>5% скидка</p>
              </div>
              
              <div style={{ 
                textAlign: 'center', 
                padding: '1rem', 
                background: 'white', 
                borderRadius: '0.5rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
              }}>
                <Icon name="Users" size={32} style={{ color: '#8b5cf6', margin: '0 auto 0.5rem' }} />
                <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Приведи друга</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>10% каждому</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(45deg, #059669, #d97706)',
              padding: '3rem',
              borderRadius: '1.5rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              color: 'white',
              maxWidth: '64rem',
              margin: '0 auto'
            }}>
              <Icon name="Star" size={48} style={{ color: '#fcd34d', margin: '0 auto 1.5rem' }} />
              <h2 style={{ 
                fontSize: 'clamp(2rem, 6vw, 2.5rem)', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontFamily: 'Montserrat, sans-serif'
              }}>
                Не упустите выгодные предложения!
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                marginBottom: '2rem', 
                opacity: '0.9' 
              }}>
                Присоединяйтесь к 5000+ довольных клиентов уже сегодня
              </p>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem', 
                justifyContent: 'center',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                <button 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'white',
                    color: '#059669',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  onClick={() => navigate('/catalog')}
                >
                  <Icon name="ShoppingCart" size={20} />
                  Перейти в каталог
                </button>
                <button 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    padding: '1rem 2rem',
                    borderRadius: '2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => navigate('/contact')}
                >
                  <Icon name="MessageCircle" size={20} />
                  Задать вопрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;