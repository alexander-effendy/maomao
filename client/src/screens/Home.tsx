import Dashboard from '@/screens/Dashboard';
import Auth from '@/screens/Auth';

import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper';

const Home = () => {

  const { getToken, isAuthenticated, user } = useKindeAuth();

  return (
    <MaxWidthWrapper>
      {isAuthenticated && user ? <Dashboard /> : <Auth />}
    </MaxWidthWrapper>
  )
}

export default Home;