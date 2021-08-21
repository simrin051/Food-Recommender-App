import { useState } from "react";
import "./styles.css";

var itemType = [];
var itemnames = [];
var itemDetails = [];
var choices = ["North Indian", "South Indian", "Italian", "Chineese"];
var northindian = [
  {
    Url:
      "https://healthyliving.natureloc.com/wp-content/uploads/2015/12/Aloo-Paratha.jpg",
    Name: "Aloo Paratha",
    Rating: "4.5/5"
  },
  {
    Url:
      "https://i1.wp.com/thefoodxp.com/wp-content/uploads/2020/05/Khaman-Dhokla.jpg",
    Name: "Dhokla",
    Rating: "4/5"
  },
  {
    Url:
      "http://media.indiatimes.in/media/content/2015/Mar/pani-puri-big-image-3-vatica_1425986649_725x725.jpg",
    Name: "Pani Puri",
    Rating: "5/5"
  },
  {
    Url: "https://s3-media2.fl.yelpcdn.com/bphoto/21l2mU7oVgGmmB_lQBuWhw/o.jpg",
    Name: "Chola Batura",
    Rating: "4.5/5"
  },
  {
    Url:
      "https://www.whiskaffair.com/wp-content/uploads/2016/02/Achari-Paneer-Tikka-1.jpg",
    Name: "Paneer Tika",
    Rating: "4.5/5"
  }
];
var southindian = [
  {
    Url: "http://bramptonist.com/wp-content/uploads/2018/01/dosa-brampton.png",
    Name: "Masala Dosa",
    Rating: "4/5"
  },
  {
    Url: "https://www.thestatesman.com/wp-content/uploads/2019/04/idli.jpg",
    Name: "Idli",
    Rating: "4/5"
  },
  {
    Url: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Appam.JPG",
    Name: "Appam",
    Rating: "4/5"
  },
  {
    Url:
      "https://i.pinimg.com/originals/f1/57/1e/f1571e02484023d27ca19f261ec92fa4.png",
    Name: "Tomato Bath",
    Rating: "4/5"
  },
  {
    Url:
      "https://www.kohinoor-joy.com/wp-content/uploads/2016/11/hyderabi-biryani.jpg",
    Name: "Hyderbadi biriyani",
    Rating: "4/5"
  }
];
const italian = [
  {
    Url:
      "https://i.pinimg.com/originals/95/c0/63/95c063955e58e230c8eb45796eb75b4b.jpg",
    Name: " Italian Ladyfinger Biscuits ",
    Rating: "4/5"
  },
  {
    Url:
      "https://tornadoughalli.com/wp-content/uploads/2017/12/Italian-Ricotta-Cake4.jpg",
    Name: " Italian Ricotta cakes ",
    Rating: "4/5"
  },
  {
    Url:
      "https://www.thelittleepicurean.com/wp-content/uploads/2015/01/cheesy-baked-pasta.jpg",
    Name: "Chessy baked pasta",
    Rating: "4/5"
  },
  {
    Url:
      "https://winedharma.com/sites/winedharma.com/files/imagecache/auto-768/story/524-spaghetti-alla-puttanesca-sauce-recipe.jpg",
    Name: "Saphagetti",
    Rating: "4/5"
  },
  {
    Url: "https://ourbestbites.com/wp-content/uploads/2008/03/UB5A6399-4.jpg",
    Name: "Italian Burger",
    Rating: "4/5"
  }
];
const chineese = [
  {
    Url:
      "http://2.bp.blogspot.com/-8TdDg2jt7Hw/Vfj9JPRUYoI/AAAAAAAAAAs/bLyqbvJ0s1o/s1600/fried-rice-013.jpg",
    Name: "Chineese fried rice",
    Rating: "4/5"
  },
  {
    Url: "https://lilluna.com/wp-content/uploads/2016/01/chinese-food-19.jpg",
    Name: "Pancit rice",
    Rating: "4/5"
  },
  {
    Url:
      "https://hoohla.cooking/wp-content/uploads/2020/05/Chinese-Dumplings.jpg",
    Name: "Momo",
    Rating: "5/5"
  },
  {
    Url:
      "https://gimmedelicious.com/wp-content/uploads/2017/08/shrimp-zoodles-4.jpg",
    Name: "Shimp fry",
    Rating: "5/5"
  },
  {
    Url:
      "https://i.pinimg.com/474x/ec/9d/fd/ec9dfd1d015725265c694d4293a571a6--recipes-for-yummy-recipes.jpg",
    Name: "Garlic bread",
    Rating: "5/5"
  },
  {
    Url:
      "https://www.thebeijinger.com/sites/default/files/styles/large/public/la_ji_tong_16-9.jpg",
    Name: "Pizza",
    Rating: "5/5"
  }
];
var returnedItems = [];
var collectionOfItems = [northindian, southindian, italian, chineese];
export default function App() {
  var backGroundImage = {
    width: "100%",
    height: "70%"
  };
  var [returnedItems, setReturnedItems] = useState([]);

  var [itemUrls, setItemUrls] = useState("");
  var [itemDetails, setItemsDetails] = useState("");
  return (
    <div className="App">
      <div className="backGroundImage" />
      <h2 class="heading">Food Recommender</h2>
      <ul>
        {choices.map((name) => (
          <li
            className="choices"
            key={name}
            onClick={() => (returnedItems = typeClick(name))}
          >
            {name}{" "}
          </li>
        ))}
        {console.log("re" + returnedItems)}
      </ul>

      {returnedItems.map((item) => (
        <div className="Item">
          <img className="itemImage" src={item.Url}></img>
          <div className="itemDetail">
            <i class="itemName">{item.Name}</i>
            <br />
            <i class="rating"> Rating: {item.Rating} </i>
          </div>
        </div>
      ))}
    </div>
  );

  function typeClick(name) {
    name = name.toLowerCase();
    name = name.replace(/ /g, "");
    switch (name) {
      case "northindian":
        {
          setReturnedItems(northindian);
        }
        return northindian;
        break;
      case "southindian":
        {
          setReturnedItems(southindian);
        }
        return southindian;
        break;
      case "italian":
        {
          setReturnedItems(italian);
        }
        return italian;
        break;
      case "chineese":
        {
          setReturnedItems(chineese);
        }
        return chineese;
        break;
    }
    setItemUrls(itemUrls);
    setItemsDetails(itemDetails);
    //console.log(itemDetails);
  }
}
