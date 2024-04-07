import {
  clothes,
  electronics,
  furniture,
  gas,
  home,
  shoes,
  utensils,
  supplies
} from "../../public/icons";

interface iAppProps {
  name: string;
  title: string;
  imageUrl: any;
  description: string;
  id: number;
  category:Category[]
}
interface Category{
  id:number,
  name:string,
  title:string;
}
export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "furniture",
    description: "Includes Bed,Sofa,Table",
    title: "Furniture",
    category:[
      {
        id:1,
        name: "bed",
        title: "Bed"
      },
      {
        id:2,
        name:"chair",
        title:"Chair/Sofaset"
      },
      {
        id:3,
        name:"table",
        title:"Table"
      },
      {
        id:4,
        name:"wardrobe",
        title:"Wardrobe/Rack"
      }
    ],
    imageUrl:furniture
  },
  {
    id: 1,
    name: "kitchenWare",
    description: "These are Kitchen Wares",
    title: "KitchenWare",
    category:[
      {
        id:1,
        name: "utensilsrack",
        title: "Utensils Rack"
      },
      {
        id:3,
        name:"fridge",
        title:"Fridge"
      },
      {
        id:4,
        name:"oven",
        title:"Oven"
      },
      {
        id:5,
        name:"blender",
        title:"Blender"
      }
    ],
    imageUrl:utensils
  },
  {
    id: 2,
    name: "Gas",
    description: "This is gas cylinders",
    title: "Gas",
    category:[
      {
        id:1,
        name: "refillShops",
        title: "Refill Shops"
      },
      {
        id:2,
        name:"cylinders",
        title:"Gas cylinders"
      },
    ],
    imageUrl: gas
  },
  {
    id: 3,
    name: "shoes",
    description: "All types of shoes are available",
    title: "Shoes",
    category:[
      {
        id:1,
        name: "ladies",
        title: "Ladies"
      },
      {
        id:2,
        name:"men",
        title:"Men"
      },
      {
        id:3,
        name:"unisex",
        title:"Unisex"
      }
    ],
    imageUrl:shoes
  },
  {
    id: 4,
    name: "clothes",
    description: "These are clothes",
    title: "Clothes",
    category:[
      {
        id:1,
        name: "ladies",
        title: "Ladies"
      },
      {
        id:2,
        name:"men",
        title:"Men"
      },
      {
        id:3,
        name:"unisex",
        title:"Unisex"
      }
    ],
    imageUrl:clothes
  },
  {
    id: 5,
    name: "electronics",
    description: "This includes phones,usb sticks, laptops",
    title: "Electronics",
    category:[
      {
        id:1,
        name: "tv",
        title: "TV"
      },
      {
        id:2,
        name:"phone",
        title:"Phone"
      },
      {
        id:3,
        name:"laptop",
        title:"Laptop"
      },
      {
        id:4,
        name:"ps",
        title:"PS"
      },
      {
        id:5,
        name:"speaker",
        title:"Speaker/Woofer"
      }
    ],
    imageUrl: electronics
  },
  {
    id: 6,
    name: "supplies",
    description: "Tsquare",
    title: "SchoolItems",
    category:[
      {
        id:1,
        name: "engineering",
        title: "Engineering",
      },
      {
        id:2,
        name:"medical",
        title:"Health Sciences"
      }
    ],
    imageUrl: supplies
  },
  {
    id: 7,
    name: "comradeBNB",
    description: "Rent out your Room as a BNB for graduations and Admissions",
    title: "comradeBNB",
    category:[
      {
        id:1,
        name: "single",
        title: "Single"
      },
      {
        id:2,
        name:"bedsitter",
        title:"BedSitter"
      },
      {
        id:3,
        name:"1bedroom",
        title:"1 Bedroom"
      },
      {
        id:4,
        name:"2bedroom",
        title:"2 Bedroom"
      }
    ],
    imageUrl: home
  },

];
