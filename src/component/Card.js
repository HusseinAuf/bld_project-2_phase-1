import "./CSS/Card.css";
const Card = ({data}) =>{
    return (
        <div className="courses-list">
        {
            data.map((course) => (
                <div key={course.id} className="course" >
                    <img
                        src={course.img}
                        alt = {course.title}
                        className="image"
                    />
                    <p className="title">
                        <strong>{course.title}</strong>
                    </p>
                    <p className="author">{course.auth}</p>
                    <div className="rating">
                        <span>{course.rate}</span>
                        <img
                            src={course.star}
                            alt="stars-rating"
                            className="image"
                        />
                    </div>
                    <p className="price">{course.price}</p>
                </div>
            ))};
        </div>
    );
};
export default Card;