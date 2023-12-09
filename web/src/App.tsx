import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import './App.css';
import Layout from './components/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/test" element={<TestPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
