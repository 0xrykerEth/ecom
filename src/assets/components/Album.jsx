import './Album.css';
import Footer from './Footer';


const Album = () => {
    const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

const merchArr = [
    {title : "T-Shirt",
    price : 19.99,
    imageUrl : "https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
    },
    {title : "Coffee Cup",
    price : 6.99,
    imageUrl : "https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
    }
]



    return (
        <div className="album">
                <div className="music">
                    <h1>𝓐𝓛𝓑𝓤𝓜</h1>
                </div>
                <div className="products">
                    {productsArr.map((product) => (
                        <div className="product" key={product.title}>
                            <h2>{product.title}</h2>
                            <img
                            src={product.imageUrl}
                            alt={product.title}
                            />
                        <div className="product-footer">
                            <span>${product.price.toFixed(2)}</span>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="music">
                    <h1>𝓜𝓔𝓡𝓒𝓗</h1>
                </div>
                <div className="products">
                    {merchArr.map((product) => (
                        <div className="product" key={product.title}>
                            <h2>{product.title}</h2>
                            <img
                            src={product.imageUrl}
                            alt={product.title}
                            />
                        <div className="product-footer">
                            <span>${product.price.toFixed(2)}</span>
                            <button>ADD TO CART</button>
                        </div>
                        </div>
                    ))}
                </div>
                <Footer />
        </div>
    )
}

export default Album;