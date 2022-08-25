import React , {Component} from "react";
import "./CSS/Card.css";
function Card(props) {
    const python_courses = props.data;
    const creat_cards = python_courses.map((course) => {
        return (
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
        )
   }
   )
    return (
    <div className="courses-list">
        {creat_cards}
    </div>
    );
}
export default Card;