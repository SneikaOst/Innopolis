import './App.css';
import Card from './components/elements/card';

function App() {
  return (
    <div className="App">
      <div className="products">
        <div className="container">
          
          <header className="products__header">
            <p className="products__header-text">наша продукция</p>
            <div className="products__cart">
              <div className="products__cart-text">3 товара <br></br>на сумму 3 500 ₽</div>
              <a  href="#" className="products__cart-icon"></a>
            </div>
          </header>

          <main className="products__cards">
            <Card 
              url={'/images/mussels.png'}
              title={'Мидии по рокфеллеровски'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
              price={2700}
              weight={500}
            />
            <Card 
              url={'/images/pork.png'}
              title={'Свиные ребрышки на гриле с зеленью'}
              description={'Не следует, однако забывать, что реализация намеченных плановых'}
              price={1600}
              weight={750}
            />
            <Card 
              url={'/images/shrimp.png'}
              title={'Креветки по-королевски в лимонном соке'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
              price={1820}
              weight={7}
            />
            <Card 
              url={'/images/mussels.png'}
              title={'Мидии по рокфеллеровски'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
              price={2700}
              weight={500}
            />
            <Card 
              url={'/images/mussels.png'}
              title={'Мидии по рокфеллеровски'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
              price={2700}
              weight={500}
            />
            <Card 
              url={'/images/pork.png'}
              title={'Свиные ребрышки на гриле с зеленью'}
              description={'Не следует, однако забывать, что реализация намеченных плановых'}
              price={1600}
              weight={750}
            />
            <Card 
              url={'/images/shrimp.png'}
              title={'Креветки по-королевски в лимонном соке'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'}
              price={1820}
              weight={7}
            />
            <Card 
              url={'/images/mussels.png'}
              title={'Мидии по рокфеллеровски'}
              description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'}
              price={2700}
              weight={500}
            />
          </main>
          
        </div>

      </div>  

    </div>
  );
}

export default App;
