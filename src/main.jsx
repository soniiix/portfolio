import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { PrivacyPolicy } from './sections/footer/PrivacyPolicy'
import { ProjectDetails } from './sections/projects/ProjectDetails'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/project/:projectName" element={<ProjectDetails />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
