import { ReactComponent as Home } from "../assets/images/Navbar/home.svg";
import { ReactComponent as Orders } from "../assets/images/Navbar/orders.svg";
import { ReactComponent as Products } from "../assets/images/Navbar/products.svg";
import { ReactComponent as Delivery } from "../assets/images/Navbar/delivery.svg";
import { ReactComponent as Marketing } from "../assets/images/Navbar/marketing.svg";
import { ReactComponent as Analytics } from "../assets/images/Navbar/Analytics.svg";
import { ReactComponent as Payments } from "../assets/images/Navbar/payments.svg";
import { ReactComponent as Tools } from "../assets/images/Navbar/Tools.svg";
import { ReactComponent as Discounts } from "../assets/images/Navbar/discounts.svg";
import { ReactComponent as Audience } from "../assets/images/Navbar/audience.svg";
import { ReactComponent as Appearance } from "../assets/images/Navbar/appearances.svg";
import { ReactComponent as Plugins } from "../assets/images/Navbar/plugins.svg";

export const menuList = [
  {
    id: 1,
    name: "Home",
    image: <Home />,
    link: ["/home"],
  },
  {
    id: 2,
    name: "Orders",
    image: <Orders />,
    link: ["/orders"],
  },
  {
    id: 3,
    name: "Products",
    image: <Products />,
    link: ["/products"],
  },
  {
    id: 4,
    name: "Delivery",
    image: <Delivery />,
    link: ["/delivery"],
  },
  {
    id: 5,
    name: "Marketing",
    image: <Marketing />,
    link: ["/marketing"],
  },
  {
    id: 6,
    name: "Analytics",
    image: <Analytics />,
    link: ["/analytics"],
  },
  {
    id: 7,
    name: "Payments",
    image: <Payments />,
    link: ["/", "/payments"],
  },
  {
    id: 8,
    name: "Tools",
    image: <Tools />,
    link: ["/tools"],
  },
  {
    id: 9,
    name: "Discounts",
    image: <Discounts />,
    link: ["/discounts"],
  },
  {
    id: 10,
    name: "Audience",
    image: <Audience />,
    link: ["/audience"],
  },
  {
    id: 11,
    name: "Appearance",
    image: <Appearance />,
    link: ["/appreance"],
  },
  {
    id: 12,
    name: "Plugins",
    image: <Plugins />,
    link: ["/plugins"],
  },
];
