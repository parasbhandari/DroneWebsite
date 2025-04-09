import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
import TrainingPage from "../pages/TrainingPage";
import SignupPage from "../pages/SignupPage";
import ContactUs from "../pages/ContactUs";
import ShopingCart from "../pages/ShopingCart";
import Aboutus from "../pages/Aboutus";
import InqueryForm from "../pages/InqueryFormPages";
import ProductDetail from "../pages/ProductDetail";
import LoginPage from "../pages/LoginPage";
import ShopPage from "../pages/ShopPage";
import Checkout from "../pages/Checkout";
import PaymentMethod from "../pages/PaymentMethod";
import OrderDetails from "../pages/OrderDetails";
import Training_Description from "../pages/Training_Description";
import AdminLayout from "../pages/AdminLayout";
import Dashboard from "../components/AdminDashboard/Dashboard/Dashboard";
import Products from "../components/AdminDashboard/Products/Products";
import Users from "../components/AdminDashboard/Users/Users";
import Classes from "../components/AdminDashboard/Classes/Classes";
import AddClasses from "../components/AdminDashboard/Classes/AddClasses";
import Settings from "../components/AdminDashboard/Settings/Settings";
import AddProducts from "../components/AdminDashboard/Products/AddProducts";



const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/description" element={<Training_Description />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/shops" element={<ShopPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/cart" element={<ShopingCart />} />
        <Route path="/inquiryform" element={<InqueryForm />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/addclasses" element={<AddClasses />} />
        <Route path="/admin/setting" element={<Settings />} />
        <Route path="/admin/products/add" element={<AddProducts />} />

      </Route>
    </Routes>
  );
};
export default Router;
