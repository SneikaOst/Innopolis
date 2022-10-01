import './App.css';
// import Card from './components/elements/card';
import CardCart from './components/elements/cardCart';
import { products } from './menuList';
import './Cart.css'
import ButtonDelete from './components/ui/buttonDelete';

function App() {

  return (
    // <div className="App">
    //   <div className="products">
    //     <div className="container">
          
    //       <header className="products__header">
    //         <p className="products__header-text">наша продукция</p>
    //         <div className="products__cart">
    //           <div className="products__cart-text">3 товара <br></br>на сумму 3 500 ₽</div>
    //           <a  href="#" className="products__cart-icon"></a>
    //         </div>
    //       </header>

    //       <main className="products__cards">

    //         {products.map(item => {
    //           return (
    //             <Card 
    //               key={item.id}
    //               img={item.img}
    //               name={item.name}
    //               description={item.description}
    //               price={item.price}
    //               weight={item.weight}
    //           />
    //           )
    //         })}

    //       </main>
          
    //     </div>

    //   </div>  

    // </div>


    <div className="App">
      <div className="cart">
        <div className="container">
          
          <header className="cart__header">
            <div className="cart__button"><ButtonDelete /></div>
            <p className="cart__header-text">Корзина с выбранными товарами</p>           
          </header>

          <main className="cart__cards">

            {products.map(item => {
              return (
                <CardCart 
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
              />
              )
            })}

          </main>
          
        </div>
        <footer className="cart__footer">
            <div className="container footer">
              <p className="footer__text">Заказ на сумму: <span className='card__price'>6 220 ₽</span></p>
              <button className='footer__button'>Оформить заказ</button>
            </div>
        </footer>
      </div>  

    </div>
    
  );
}

export default App;
