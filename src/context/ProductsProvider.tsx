import { createContext, useState } from 'react';
import { PriceFiltersType, Product, ProductContextType, ReactChildren } from '../helpers/types';

const INITIAL_VALUE = {
  products: [{
    id: '0',
    name: '',
    entryDate: new Date(),
    img: '',
    price: 0,
  }],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  query: '',
  setQuery: () => {},
  filters: { from: '0', until: '0' },
  setFilters: () => {},
};

export const ProductsContext = createContext<ProductContextType>(INITIAL_VALUE);

const ProductsProvider = ({ children }: ReactChildren) => {
  const [products, setProducts] = useState<Product[]>(INITIAL_VALUE.products);
  const [query, setQuery] = useState<string>(INITIAL_VALUE.query);
  const [loading, setLoading] = useState<Boolean>(INITIAL_VALUE.loading);
  const [filters, setFilters] = useState<PriceFiltersType>(INITIAL_VALUE.filters);
  
  const contextValue = {
    products,
    setProducts,
    query,
    setQuery,
    loading,
    setLoading,
    filters,
    setFilters,
  };

  return (
    <ProductsContext.Provider value={ contextValue }>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;