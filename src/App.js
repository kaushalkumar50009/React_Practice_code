import "./App.css";
import SelectOptions from "./component/SelectOptions";
import Home from "./component/contextApi/Home";
import Debouncing from "./component/debouncing/Debouncing";
import UseHelperFunPosts from "./component/helperFunctions/UseHelperFunPosts";
import UseHelperHome from "./component/helperFunctions/UseHelperHome";
import HigherOrderHome from "./component/higherOrderComponent/HigherOrderHome";
import LazyMain from "./component/lazyLoadingLoder/LazyMain";
import MapAndFilter from "./component/map_filter/MapAndFilter";
import Rec from "./component/recursion/Rec";
import Styles from "./component/styles_type/Styles";
import { familyTree } from "./component/recursion/data";
import ArrayFunctions from "./component/arrOfFunctions/ArrayFunctions";
import HomeHooks from "./component/customHooks/HomeHooks";
import SearchFilter from "./component/searchFilter/SearchFilter";

function App() {
  return (
    <div className="App">
      {/* //! select options  */}
      {/* <SelectOptions /> */}
      {/* //! map and filter  */}
      {/* <MapAndFilter /> */}
      {/* //! styles  */}
      {/* <Styles /> */}
      {/*// !debouncing  */}
      {/* <Debouncing /> */}
      {/* //! context Api  */}
      <Home />
      {/* //! higher order component  */}
      {/* <HigherOrderHome /> */}
      {/* //! lazy loading with loader  */}
      {/* <LazyMain /> */}
      {/* //! helper function  to solve*/}
      {/* <UseHelperFunPosts />
      <UseHelperHome /> */}
      {/* //! recursion function  */}
      {/* <Rec familyTree={familyTree} /> */}
      {/* //! array of functions  */}
      {/* <ArrayFunctions /> */}
      {/* //! creating custom hooks  */}
      {/* <HomeHooks /> */}
      {/* //! search and filter data  */}
      {/* <SearchFilter /> */}
    </div>
  );
}

export default App;
