import Icon from '@/components/ui/icon';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Заголовок страницы контактов */}
      <section className="contact-header">
        <div className="container">
          <h1 className="contact-title">Контакты</h1>
          <p className="contact-subtitle">
            Свяжитесь с нами удобным способом. Мы всегда готовы помочь с выбором веников!
          </p>
        </div>
      </section>

      {/* Основной контент */}
      <div className="contact-content">
        <div className="container">
          {/* Карточки контактов */}
          <div className="contact-grid">
            {/* Телефон */}
            <div className="contact-card">
              <div className="contact-icon phone">
                <Icon name="Phone" size={32} />
              </div>
              <h3 className="contact-title-item">Телефон</h3>
              <div className="contact-info">
                <div className="contact-value">+7 (900) 123-45-67</div>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  Ежедневно 9:00-21:00
                </p>
              </div>
              <a 
                href="tel:+79001234567" 
                className="contact-link"
              >
                Позвонить
              </a>
            </div>
            
            {/* Почта */}
            <div className="contact-card">
              <div className="contact-icon email">
                <Icon name="Mail" size={32} />
              </div>
              <h3 className="contact-title-item">Email</h3>
              <div className="contact-info">
                <div className="contact-value">info@banhouse.ru</div>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem' }}>
                  Ответим в течение часа
                </p>
              </div>
              <a 
                href="mailto:info@banhouse.ru" 
                className="contact-link"
              >
                Написать письмо
              </a>
            </div>
            
            {/* Соцсети */}
            <div className="contact-card">
              <div className="contact-icon social">
                <Icon name="MessageCircle" size={32} />
              </div>
              <h3 className="contact-title-item">Соцсети</h3>
              <div className="contact-info">
                Быстрая связь через мессенджеры
              </div>
              <div className="social-links">
                <a 
                  href="https://t.me/banhouse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link telegram"
                  title="Telegram"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a 
                  href="https://wa.me/79001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link whatsapp"
                  title="WhatsApp"
                >
                  <Icon name="MessageSquare" size={20} />
                </a>
                <a 
                  href="https://vk.com/banhouse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link vk"
                  title="ВКонтакте"
                >
                  <Icon name="Users" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="additional-info">
            <h3>Режим работы</h3>
            <p>
              Наш интернет-магазин работает <span className="highlight">круглосуточно</span>, 
              принимаем заказы 24/7. Консультации по телефону и в мессенджерах 
              доступны <span className="highlight">ежедневно с 9:00 до 21:00</span>.
            </p>
            
            <div className="working-hours">
              <h4>График консультаций</h4>
              <div className="hours-list">
                <span className="day">Понедельник - Воскресенье</span>
                <span className="time">9:00 - 21:00</span>
              </div>
            </div>
            
            <p>
              <span className="highlight">Бесплатная доставка</span> по всей России 
              при заказе от 3000 рублей. Работаем с транспортными компаниями 
              СДЭК, Почта России, BoxBerry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;