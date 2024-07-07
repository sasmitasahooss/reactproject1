import "./hero.css";
const Hero = () => {
  return (
    <div className="main">
      <div className="lefts">
        <h1>Good Food Choice Are <br /><span>Good Investment</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad
          quia fuga reprehenderit dolorum accusantium eligendi laboriosam amet
          obcaecati atque delectus nam dicta maiores dolor, eius quod corrupti,
          accusamus a!
        </p>
        <button className="btn1">Order Now</button>
        <button className="btn2">Learn More</button>
        <div className="num">
            <h2>10+ <br /><span>Years</span></h2>
            <h2>500+ <br /><span>Food item</span></h2>
            <h2>500k+<br /><span>Happy Customers</span></h2>
        </div>
       
      </div>
      <div className="rights">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
