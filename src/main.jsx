import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@ant-design/v5-patch-for-react-19';
import { RouterProvider } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import { router } from './routes';
import { LikeContextProvider } from './context/heart-context';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <LikeContextProvider>
        <RouterProvider router={router} />
      </LikeContextProvider>
    </ShopContextProvider>
  </StrictMode>,
)
