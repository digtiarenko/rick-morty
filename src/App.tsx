import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/errorFallback/ErrorFallback';

const HomePage = lazy(() => import('./pages/home/HomePage' /* webpackChunkName: "HomePage" */));
const Loading = lazy(() => import('./components/Loading/Loading' /* webpackChunkName: "HomePage" */));
const CharacterPage = lazy(() => import('./pages/character/CharacterPage' /* webpackChunkName: "CharacterPage" */));
const Page404 = lazy(() => import('./pages/404/Page404' /* webpackChunkName: "CharacterPage" */));

function App() {
  return (
    <Suspense fallback={<Loading message="loading..." />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
