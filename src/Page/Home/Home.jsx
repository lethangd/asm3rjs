import Chat from "../../components/Chat";
import Banner from "./Banner";
import BrowseCategory from "./BrowseCategory";
import MoreInfo from "./MoreInfo";
import TrendProducts from "./TrendProduct";

function Home() {
  return (
    <main>
      <Banner />
      <BrowseCategory />
      <TrendProducts />
      <MoreInfo />
      <Chat />
    </main>
  );
}

export default Home;
