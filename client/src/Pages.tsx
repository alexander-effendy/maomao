import { BrowserRouter } from 'react-router-dom';

import Auth from './screens/Auth';

const Pages = () => {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

export default Pages;