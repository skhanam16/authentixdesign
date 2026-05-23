import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox'


const Filters = () => {
  const {meta, params} = useLoaderData();
  const {search, category, company, shipping, price, order} = params;
  // const list = meta.category;
  return <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-y-4 gap-x-8 
  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
    {/* SEARCH */}
    <FormInput 
    label="search product" 
    name="search" 
    type="search"  
    size="input-sm"
    defaultValue={search}
    />
    {/* CATEGORIES */}
    <FormSelect 
    label="select category" 
    name="category" 
    list={meta.categories} 
    defaultValue={category}
    size="select-sm"/>
     {/* COMPANIES */}
    <FormSelect 
    label="select companies" 
    name="company" 
    list={meta.companies} 
    defaultValue={company}
    size="select-sm" />

      {/* ORDER */}
      <FormSelect 
      label="sort by"
      name="order"
      list={['a-z', 'z-a', 
        'price high to low', 'price low to high', 'date old to new', 'date new to old']}
        defaultValue={order}
      size='select-sm' />
      {/* PRICE */}
      <FormRange label="select price" name="price" size="range-sm" price={price} />
      {/* SHIPPING */}

      <FormCheckbox name="shipping" label="Free shipping" size="checkbox-sm" defaultValue={shipping} />

      {/* BUTTONS */}
      <button type="submit" className='btn btn-sm btn-primary'>search</button>
      <Link to='/products' className='btn btn-accent btn-sm'>reset</Link>
  </Form>
}
export default Filters