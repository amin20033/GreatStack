import React from "react";
import "./campus.css";
function Campus() {
  return (
    <div className="campus">
      <div className="gallery">
        <img src="https://greatstack.in/assets/gallery-1-HP2uKW94.png" />
        <img src="https://greatstack.in/assets/gallery-2-DYatBGZh.png" />
        <img src="https://greatstack.in/assets/gallery-3-C4KpO1U2.png" />
        <img src="https://greatstack.in/assets/gallery-4-LJEJ329C.png" />
      </div>
      <button className="btn btn-dark">
        See more here
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII="
          width="30"
        />
      </button>
    </div>
  );
}
export default Campus;
