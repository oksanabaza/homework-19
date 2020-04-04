const food = [
  {
    discount: 10,
    img: "https://img.chewy.com/is/image/catalog/114153_MAIN._AC_SL1500_V1562961133_.jpg",
    inStore: true,
    description: "Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 999,
    newPrice: 222,
  },
  {
    discount: 100,
    img: "https://images-na.ssl-images-amazon.com/images/I/81L-2wvXX4L._AC_SX425_.jpg",
    inStore: false,
    description: "Мокрый корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 102,
    newPrice: 50,
  },
  {
    discount: 50,
    img: "https://images-na.ssl-images-amazon.com/images/I/81L-2wvXX4L._AC_SX425_.jpg",
    inStore: true,
    description: "Мокрый корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 102,
    newPrice: 50,
  },
  {
    discount: 50,
    img: "https://images-na.ssl-images-amazon.com/images/I/81L-2wvXX4L._AC_SX425_.jpg",
    inStore: false,
    description: "Мокрый корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 102,
    newPrice: 50,
  },
  {
    discount: 50,
    img: "https://images-na.ssl-images-amazon.com/images/I/81L-2wvXX4L._AC_SX425_.jpg",
    inStore: true,
    description: "Мокрый корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 102,
    newPrice: 50,
  },
  {
    discount: 50,
    img: "https://images-na.ssl-images-amazon.com/images/I/81L-2wvXX4L._AC_SX425_.jpg",
    inStore: true,
    description: "Мокрый корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    oldPrice: 102,
    newPrice: 50,
  },
];

const card = (item) => {
  const { discount, img, inStore, description, oldPrice, newPrice } = item;
  return `
    <div class="card">
      <div class="card_header">
        <div class="card_discount">
          <button>-${discount}%</button>
        </div>
        <div class="card_picture">
          <img src="${img}" />
        </div>
      </div>

      <div class="card_checkboxes">
        <div class="card_stars">
          <div class="rating_block">
            <input name="rating" value="1" id="rating_1" type="radio" />
            <label for="rating_1" class="label_rating"></label>

            <input name="rating" value="2" id="rating_2" type="radio" />
            <label for="rating_2" class="label_rating"></label>

            <input name="rating" value="1" id="rating_3" type="radio" />
            <label for="rating_3" class="label_rating"></label>

            <input name="rating" value="4" id="rating_4" type="radio" />
            <label for="rating_4" class="label_rating"></label>

            <input name="rating" value="5" id="rating_5" type="radio" />
            <label for="rating_5" class="label_rating"></label>
          </div>
        </div>

        <div class="card_checkbox">
          <label class="checkbox-label">
            <input disabled type="checkbox" ${inStore ? "checked" : ""} class="checkbox" id="in-store" />
            <span class="checkbox-custom rectangular"></span>
          </label>
          <label for="in-store">${inStore ? "В наличии" : "Нет в наличии"}</label>
        </div>
      </div>

      <div class="card_text">
        <p>
          ${description}
        </p>
      </div>

      <div class="card_weight">
        <div class="radio_info">
          <input name="weight" value="option" id="weight_4" type="radio" />
          <label for="weight_4" class="weight_label"></label>
          <span class="radio_title">300 гр</span>
        </div>

        <div class="radio_info">
          <input name="weight" value="option" id="weight_3" type="radio" checked />
          <label for="weight_3" class="weight_label"></label>
          <span class="radio_title">1 кг</span>
        </div>

        <div class="radio_info">
          <input name="weight" value="option" id="weight_2" type="radio" />
          <label for="weight_2" class="weight_label"></label>
          <span class="radio_title">2 кг</span>
        </div>

        <div class="radio_info">
          <input name="weight" value="option" id="weight_1" type="radio" />
          <label for="weight_1" class="weight_label"></label>
          <span class="radio_title">5 кг</span>
        </div>
      </div>

      <div class="order_menu">
        <div class="price">
          <span class="strikethrough">${oldPrice}$</span>
          <span class="real_price">${newPrice}</span>
        </div>
        <div class="cart">
          <button class="cart_button">В корзину</button>
        </div>
      </div>
    </div>
`;
};

const wrapper = document.querySelector(".card-wrapper");
let cards = "";

food.forEach((item) => {
  cards += card(item);
});

wrapper.innerHTML = cards;
