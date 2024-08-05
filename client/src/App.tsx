import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import Pages from '@/Pages';

const App = () => (
	<KindeProvider
		clientId="9b79d192c0e243aeabca28cffcd6adff"
		domain="https://maomao.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
		<Pages />
	</KindeProvider>
);

export default App
