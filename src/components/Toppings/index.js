import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1967/toppings")
      .then((res) => setToppingData(res.data));
  }, []);

  // checbox tiklenmişse sepete ekler
  // tik kaldırılırsa sepetten çıkarır
  const handleChange = (e, topping) => {
    e.target.checked
      ? setBasket([...basket, topping])
      : setBasket(basket.filter((i) => i.name !== topping.name));
  };

  return (
    <div className="container my-5">
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi 3&#8378;</p>
      <h2>Soslar Ücreti: {basket.length * 3}&#8378;</h2>

      <div className="row gap-3 mt-4">
        {toppingData.map((topping, i) => (
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "150px" }}
            key={i}
          >
            <img className="img-fluid" src={topping.imagePath} />

            <label htmlFor={topping.name} className="text-nowrap">
              {topping.name}
            </label>

            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => handleChange(e, topping)}
              id={topping.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
