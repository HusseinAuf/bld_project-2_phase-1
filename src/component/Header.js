import "./CSS/Header.css"
const Header = ({data}) =>{
    const {category , header , description} = data;
    return (
        <div className="header">
            <h1>{header}</h1>
            <p className="description">{description}</p>
            <button>Explore {category}</button>
        </div>
    );
};
export default Header;
