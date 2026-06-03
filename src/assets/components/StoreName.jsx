import './store.css';

const StoreName = ({children}) => {
    return (
        <div className="store">
            <div className="store-name">
                <h1>The Generics</h1>
            </div>
            {children}
        </div>
    )
}

export default StoreName;