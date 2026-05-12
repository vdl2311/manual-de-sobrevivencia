/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Wallet, 
  FileText, 
  HelpCircle,
  Clock,
  Briefcase,
  Target,
  Mail,
  Lock,
  Star,
  Check
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

import { useState } from "react";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const onBack = () => setCurrentPage('home');

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && <LandingPage setPage={setCurrentPage} />}
      {currentPage === 'privacy' && <PrivacyPolicy onBack={onBack} />}
      {currentPage === 'terms' && <TermsOfUse onBack={onBack} />}
      {currentPage === 'contact' && <Contact onBack={onBack} />}
    </div>
  );
}