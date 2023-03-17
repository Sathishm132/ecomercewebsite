import Fotter from "../layouts/footer";
import Header from "../layouts/Navbar";
import Headerf from "../layouts/header";
import Item from "../products/itemlist";

const Store = () => {
  return (
    <>
      <div>
        <Header />
        <Headerf />
        <Item />
      </div>

      <Fotter />
    </>
  );
};
export default Store;
