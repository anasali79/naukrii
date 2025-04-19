import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthCallback from "./pages/AuthCallback";
import JobSearch from "./pages/JobSearch";
import JobSearchResults from "./pages/JobSearchResults";
import JobsByCategory from "./pages/JobsByCategory";
import JobsByCategoryPage from "./pages/JobsByCategoryPage";
import AllCompanies from "./pages/AllCompanies";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PopularCategories from "./pages/Jobs/PopularCategories";
import InDemand from "./pages/Jobs/InDemand";
import ByLocation from "./pages/Jobs/ByLocation";
import ExploreCategories from "./pages/Companies/ExploreCategories";
import ExploreCollections from "./pages/Companies/ExploreCollections";
import ResearchCompanies from "./pages/Companies/ResearchCompanies";
import PaidServices from "./pages/PaidServices";
import PowerProfile from "./pages/Services/PowerProfile";
import ResumeMaker from "./pages/Services/ResumeMaker";
import MockInterviewQuestions from "./pages/Services/MockInterviewQuestions";
import ResumeWritingServices from "./pages/Services/ResumeWritingServices";
import Code360 from "./pages/Services/Code360";
import CartCheckout from "./pages/Services/CartCheckout";
import ChatHelp from "./pages/ChatHelp";
import Blog from "./pages/Blog";
import Feedback from "./pages/Feedback";
import ForEmployers from "./pages/ForEmployers";
import Layout from "./components/Layout";
import JobDetails from './components/JobDetails';
import ApplyJob from './components/ApplyJob';
import ApplicationSuccess from './components/ApplicationSuccess';
import Footer from './components/Footer';
import LoggedInHome from './pages/LoggedInHome';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import ProfileEdit from './pages/ProfileEdit';

const queryClient = new QueryClient();

const App = () => {
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/home" replace /> : <Index />} />
            <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/home" replace /> : <Register />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            
            {/* Protected Routes */}
            <Route path="/home" element={
              <ProtectedRoute>
                <LoggedInHome />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/apply-job/:jobId" element={
              <ProtectedRoute>
                <ApplyJob />
              </ProtectedRoute>
            } />
            <Route path="/profile/edit" element={<ProfileEdit />} />

            {/* Public Routes */}
            <Route path="/job-search" element={<JobSearch />} />
            <Route path="/job-search/results" element={<JobSearchResults />} />
            <Route path="/jobs/:category" element={<JobsByCategory />} />
            <Route path="/jobs/category/:category" element={<JobsByCategoryPage />} />
            <Route path="/jobs/demand/:category" element={<JobsByCategoryPage />} />
            <Route path="/jobs/location/:location" element={<JobsByCategoryPage />} />
            <Route path="/companies" element={<AllCompanies />} />
            <Route path="/companies/:category" element={<JobsByCategory />} />
            <Route path="/companies/category/:category" element={<AllCompanies />} />
            <Route path="/companies/collection/:collection" element={<AllCompanies />} />
            <Route path="/about" element={<About />} />
            
            {/* Jobs Routes */}
            <Route path="/jobs/popular-categories" element={<PopularCategories />} />
            <Route path="/jobs/in-demand" element={<InDemand />} />
            <Route path="/jobs/by-location" element={<ByLocation />} />
            
            {/* Companies Routes */}
            <Route path="/companies/explore-categories" element={<ExploreCategories />} />
            <Route path="/companies/explore-collections" element={<ExploreCollections />} />
            <Route path="/companies/research" element={<ResearchCompanies />} />
            <Route path="/companies/research/:section" element={<ResearchCompanies />} />
            
            {/* Services Routes */}
            <Route path="/paid-services" element={<PaidServices />} />
            <Route path="/services/power-profile" element={<PowerProfile />} />
            <Route path="/services/resume-maker" element={<ResumeMaker />} />
            <Route path="/services/cart-checkout" element={<CartCheckout />} />
            <Route path="/services/mock-interview" element={<MockInterviewQuestions />} />
            <Route path="/services/resume-writing" element={<ResumeWritingServices />} />
            <Route path="/services/code360" element={<Code360 />} />
            
            {/* Support Routes */}
            <Route path="/chat-help" element={<ChatHelp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/for-employers" element={<ForEmployers />} />
            <Route path="/download-app" element={
              <Layout>
                <div className="container mx-auto px-4 py-12 text-center">
                  <h1 className="text-3xl font-bold mb-6">Download the Naukri App</h1>
                  <p className="mb-8">Get the best job search experience on mobile with our app</p>
                  <div className="flex justify-center gap-4">
                    <img src="/placeholder.svg" alt="App Store" className="h-12" />
                    <img src="/placeholder.svg" alt="Google Play" className="h-12" />
                  </div>
                </div>
              </Layout>
            } />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route path="/application-success" element={<ApplicationSuccess />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
