const daftarMenu = document.querySelector(".daftar-menu");
const stock = document.querySelector(".stock");
const jmlMenu = document.querySelector(".jumlah-menu");

const menu = [
  {
    nama: "Burger dan Kentang Goreng",
    harga: 22000,
    stock: 50,
    gambar:
    "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Burger Original",
    harga: 15000,
    stock: 100,
    gambar:
      "https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Burger Mie",
    harga: 18000,
    stock: 50,
    gambar: "https://cdn.idntimes.com/content-images/post/20170418/ramen-burger-n-989b907176f6f98b4499dded2717e3f9.jpg",
  },
  {
    nama: "Burger Keripik Kentang",
    harga: 23000,
    stock: 25,
    gambar:
      "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Burger Jumbo Extra Keju",
    harga: 35000,
    stock: 10,
    gambar: "https://images.pexels.com/photos/3052364/pexels-photo-3052364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Burger Lada Hitam",
    harga: 25000,
    stock: 50,
    gambar:
      "https://images.pexels.com/photos/1998927/pexels-photo-1998927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Burger Daging Ayam",
    harga: 20000,
    stock: 100,
    gambar:
      "https://images.pexels.com/photos/236488/pexels-photo-236488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Kentang Goreng",
    harga: 10000,
    stock: 150,
    gambar:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    nama: "Minuman",
    harga: 8000,
    stock: 200,
    gambar:
      "https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const priceFormat = (price) => {
  price = price.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(price)) price = price.replace(pattern, "$1,$2");
  return price;
};

const showFood = () => {
  menu.map((food) => {
    daftarMenu.innerHTML += `
    <div class="menu-item">
      <div class="menu-image">
        <img
          src="${food.gambar}"
          alt="food"
        />
      </div>
      <div class="menu-info">
        <h3>${food.nama}</h3>
        <h1 class="title">Rp ${priceFormat(food.harga)}</h1>
        <p>Stock : ${food.stock} Porsi</p>
      </div>
    </div>
  `;
  });
};

const searchFood = () => {
  const keyword = document.querySelector("#keyword").value;
  const filteredFood = menu.filter((food) =>
    food.nama.toUpperCase().includes(keyword.toUpperCase())
  );
  if (filteredFood == "") {
    return (daftarMenu.innerHTML =
      "<h1> Makanan yang anda cari tidak ada </h1>");
  }
  daftarMenu.innerHTML = "";
  filteredFood.map((food) => {
    daftarMenu.innerHTML += `
    <div class="menu-item">
      <div class="menu-image">
        <img
          src="${food.gambar}"
          alt="food"
        />
      </div>
      <div class="menu-info">
        <h3>${food.nama}</h3>
        <h1 class="title">Rp ${priceFormat(food.harga)}</h1>
        <p>Stock : ${food.stock} Porsi</p>
      </div>
    </div>
  `;
  });
};

const totalStock = menu.reduce((val, food) => {
  return val + food.stock;
}, 0);

stock.innerHTML = totalStock;
jmlMenu.innerHTML = menu.length;

// Event
document.addEventListener("DOMContentLoaded", showFood);
keyword.addEventListener("keyup", searchFood);
