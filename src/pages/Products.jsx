
   import {
    Filters,
    PaginationContainer,
    ProductsContainer
  }  from '../components'

  import { customFetch } from '../utils';

  const url = 'https://strapi-store-server.onrender.com/api/products';

  export const loader = async({request}) => {
  // console.log(request);
  // const params = new URL(request.url).searchParams;
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

  // const search = params.get('search');
  // console.log(params);

    const response = await customFetch(url, {
      params:params,
    });
    const products = response.data.data;
      const meta = response.data.meta;
    return {products, meta, params}; 
  }

const Products = () => {
  return <> 
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
</>
}
export default Products