/* eslint-disable linebreak-style */
import Navigo from "navigo";
import AdminDashboard from "./components/admin/dashboard";
import Footer from "./components/footer";
import Header from "./components/header";
import AddProduct from "./pages/admin/add";

import AdminEditProduct from "./pages/admin/product-edit";
import ProductPage from "./pages/admin/product-page";
// import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";

import HomePage from "./pages/homepage";
// import ProductPage from "./pages/product";

import SingIn from "./pages/signin";
import SignUp from "./pages/signup";

// console.log(HomePage);
const router = new Navigo("/", { linksSelector: "a" });

const runder = (content) => {
    // console.log(content);
    document.querySelector("#header").innerHTML = Header.runder();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.runder();
};
router.on({
    "/": () => {
        runder(HomePage.runder());
        // console.log("home page");
    },
    "/signup": () => {
        runder(SignUp.runder());
    },
    "/signin": () => {
        runder(SingIn.runder());
    },
    "/admin/add": () => {
        runder(AddProduct.runder());
    },
    "/admin/edit/:id": ({ data }) => {
        const { id } = data;
        runder(AdminEditProduct.runder(+id));
    },

    // chi tiet bai viet
    "/detail/:id": ({ data }) => {
        const { id } = data;
        runder(DetailPage.runder(+id));
    },
    "/product/admin": () => {
        runder(ProductPage.runder());
    },
    "/admin/dashboard": () => {
        runder(AdminDashboard.runder());
    },

});

router.resolve();