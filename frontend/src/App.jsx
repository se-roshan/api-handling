import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
const [search, setSearch] =  useState('');
  useEffect(() => {
    const controller =  new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search="+search,
          {signal:controller.signal}
        );
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request Cancled', error.message)
        }
        console.log(error);
        setError(true); 
        setLoading(false);
      }
    })();
    
    //--
    return ()=>{
      controller.abort()
    } 
  }, [search ]);

  //2nd way -  Using the custom hook
//const [products, error, loading] = customReactQuery("/api/products")

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>loading...</h1>;
  // }
  return (
    <>
      <h1>Chai aur api</h1>
      {/* 3rd way */}
      <input type="text" placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)} />
      {loading && <h1> Loading ....</h1>}
      {error && (<h1>Something went Wrong</h1>)}
      <h2>No of Product are : {products.length}</h2>
    </>
  );
}

export default App
//-- 2nd way 
// const customReactQuery = (urlPath)=>{
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);
 
//   return [products, error, loading]
// }

//debouncing