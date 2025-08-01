import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore More{" "}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB3ZnRcYJAEIYXyEMe04FnBaEEsIH4mLfEDizBdBAriFYQU4BKKogdSAk0wJD/n2CGuRHkeNrjm2G8W8WZb/a4W9dAFJIkyUMURZ8c4tqVZbnIsqxw+Y5QdPIkf1JkDskjZcUBlWIQsSXiOoO9USmGpbfFy8kKJ7PZ7EN6EohS6ufsiGHcjFdVtTkcDotb96sVI5AztZxpxvvIRaKYPM+LyWTyFYbhHNP/5y4Igng6ncr5fP5uu1e1GOmQS7rk1IuRIXJeiBFXOW/EiIucV2KEcsaYDDLPmN5f4rac6u2+izRNH5G5TBqZIzjcX1FXbgOcFS84K97tD/gM5SAdrmREUoSJCrE2RyVVU7AIXuLKZURgKa5Gt3mA5X6/X9+Jh7RJoTheoThec6z1F3QrrPixL+zkutTbZe7VUqQUMnWEmGnGbSnijZiLFPFCzFWKqBcbIkXUtwauSYENtvTO1oDqZg6kfoZIEZXnWKNDZay3ekkRzZ3g2Iqd+koRXzrBJ9R/qTiguRO8q6cZpVz/lPgF4obEWs0mGtMAAAAASUVORK5CYII="
            height="15"
          />
        </button>
      </div>
    </div>
  );
}
export default Hero;
