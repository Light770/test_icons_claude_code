import React from 'react';
import './App.css';

// Lucide React Icons
import {
  Home, Search, Heart, Star, ShoppingCart,
  User, Settings, Mail, Bell, Download,
  Upload, Trash2, Edit, Eye, Lock,
  Check, X, AlertCircle, Info, HelpCircle
} from 'lucide-react';

// React Icons (Font Awesome)
import {
  FaHome, FaSearch, FaHeart, FaStar, FaShoppingCart,
  FaUser, FaCog, FaEnvelope, FaBell, FaDownload,
  FaUpload, FaTrash, FaEdit, FaEye, FaLock,
  FaCheck, FaTimes, FaExclamationCircle, FaInfoCircle, FaQuestionCircle
} from 'react-icons/fa';

// React Icons (Material Design)
import {
  MdHome, MdSearch, MdFavorite, MdStar, MdShoppingCart,
  MdPerson, MdSettings, MdEmail, MdNotifications, MdDownload,
  MdUpload, MdDelete, MdEdit, MdVisibility, MdLock,
  MdCheck, MdClose, MdError, MdInfo, MdHelp
} from 'react-icons/md';

// Heroicons
import {
  HomeIcon, MagnifyingGlassIcon, HeartIcon, StarIcon, ShoppingCartIcon,
  UserIcon, Cog6ToothIcon, EnvelopeIcon, BellIcon, ArrowDownTrayIcon,
  ArrowUpTrayIcon, TrashIcon, PencilIcon, EyeIcon, LockClosedIcon,
  CheckIcon, XMarkIcon, ExclamationCircleIcon, InformationCircleIcon, QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const App = () => {
  const iconData = [
    { name: 'Home', lucide: <Home />, fa: <FaHome />, md: <MdHome />, hero: <HomeIcon /> },
    { name: 'Search', lucide: <Search />, fa: <FaSearch />, md: <MdSearch />, hero: <MagnifyingGlassIcon /> },
    { name: 'Heart', lucide: <Heart />, fa: <FaHeart />, md: <MdFavorite />, hero: <HeartIcon /> },
    { name: 'Star', lucide: <Star />, fa: <FaStar />, md: <MdStar />, hero: <StarIcon /> },
    { name: 'Cart', lucide: <ShoppingCart />, fa: <FaShoppingCart />, md: <MdShoppingCart />, hero: <ShoppingCartIcon /> },
    { name: 'User', lucide: <User />, fa: <FaUser />, md: <MdPerson />, hero: <UserIcon /> },
    { name: 'Settings', lucide: <Settings />, fa: <FaCog />, md: <MdSettings />, hero: <Cog6ToothIcon /> },
    { name: 'Mail', lucide: <Mail />, fa: <FaEnvelope />, md: <MdEmail />, hero: <EnvelopeIcon /> },
    { name: 'Bell', lucide: <Bell />, fa: <FaBell />, md: <MdNotifications />, hero: <BellIcon /> },
    { name: 'Download', lucide: <Download />, fa: <FaDownload />, md: <MdDownload />, hero: <ArrowDownTrayIcon /> },
    { name: 'Upload', lucide: <Upload />, fa: <FaUpload />, md: <MdUpload />, hero: <ArrowUpTrayIcon /> },
    { name: 'Trash', lucide: <Trash2 />, fa: <FaTrash />, md: <MdDelete />, hero: <TrashIcon /> },
    { name: 'Edit', lucide: <Edit />, fa: <FaEdit />, md: <MdEdit />, hero: <PencilIcon /> },
    { name: 'Eye', lucide: <Eye />, fa: <FaEye />, md: <MdVisibility />, hero: <EyeIcon /> },
    { name: 'Lock', lucide: <Lock />, fa: <FaLock />, md: <MdLock />, hero: <LockClosedIcon /> },
    { name: 'Check', lucide: <Check />, fa: <FaCheck />, md: <MdCheck />, hero: <CheckIcon /> },
    { name: 'X', lucide: <X />, fa: <FaTimes />, md: <MdClose />, hero: <XMarkIcon /> },
    { name: 'Alert', lucide: <AlertCircle />, fa: <FaExclamationCircle />, md: <MdError />, hero: <ExclamationCircleIcon /> },
    { name: 'Info', lucide: <Info />, fa: <FaInfoCircle />, md: <MdInfo />, hero: <InformationCircleIcon /> },
    { name: 'Help', lucide: <HelpCircle />, fa: <FaQuestionCircle />, md: <MdHelp />, hero: <QuestionMarkCircleIcon /> },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>React Icon Libraries Comparison</h1>
        <p>Compare popular icon libraries side by side</p>
      </header>

      <div className="library-info">
        <div className="library-card">
          <h3>Lucide React</h3>
          <p>~1,300 icons</p>
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">lucide.dev</a>
        </div>
        <div className="library-card">
          <h3>Font Awesome</h3>
          <p>~2,000 free icons</p>
          <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">fontawesome.com</a>
        </div>
        <div className="library-card">
          <h3>Material Design</h3>
          <p>~2,100 icons</p>
          <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">Material Icons</a>
        </div>
        <div className="library-card">
          <h3>Heroicons</h3>
          <p>~300 icons</p>
          <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer">heroicons.com</a>
        </div>
      </div>

      <div className="table-container">
        <table className="icon-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Lucide React</th>
              <th>Font Awesome (react-icons)</th>
              <th>Material Design (react-icons)</th>
              <th>Heroicons</th>
            </tr>
          </thead>
          <tbody>
            {iconData.map((icon, index) => (
              <tr key={index}>
                <td className="icon-name">{icon.name}</td>
                <td className="icon-cell">{icon.lucide}</td>
                <td className="icon-cell">{icon.fa}</td>
                <td className="icon-cell">{icon.md}</td>
                <td className="icon-cell">{icon.hero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison-grid">
        <div className="comparison-card">
          <h3>Lucide React</h3>
          <div className="pros-cons">
            <div className="pros">
              <h4>Pros:</h4>
              <ul>
                <li>Clean, consistent design</li>
                <li>Tree-shakeable</li>
                <li>TypeScript support</li>
                <li>Customizable stroke width</li>
              </ul>
            </div>
            <div className="cons">
              <h4>Cons:</h4>
              <ul>
                <li>Smaller library (~1,300)</li>
                <li>Outline style only</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="comparison-card">
          <h3>Font Awesome</h3>
          <div className="pros-cons">
            <div className="pros">
              <h4>Pros:</h4>
              <ul>
                <li>Large library</li>
                <li>Widely recognized</li>
                <li>Multiple styles (solid, regular)</li>
                <li>Brand icons included</li>
              </ul>
            </div>
            <div className="cons">
              <h4>Cons:</h4>
              <ul>
                <li>Larger bundle size</li>
                <li>Pro version is paid</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="comparison-card">
          <h3>Material Design</h3>
          <div className="pros-cons">
            <div className="pros">
              <h4>Pros:</h4>
              <ul>
                <li>Google's design system</li>
                <li>Comprehensive coverage</li>
                <li>Filled & outlined variants</li>
                <li>Well documented</li>
              </ul>
            </div>
            <div className="cons">
              <h4>Cons:</h4>
              <ul>
                <li>Specific design style</li>
                <li>May not fit all designs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="comparison-card">
          <h3>Heroicons</h3>
          <div className="pros-cons">
            <div className="pros">
              <h4>Pros:</h4>
              <ul>
                <li>Tailwind CSS compatible</li>
                <li>Beautiful, modern design</li>
                <li>Solid & outline variants</li>
                <li>MIT license</li>
              </ul>
            </div>
            <div className="cons">
              <h4>Cons:</h4>
              <ul>
                <li>Smaller selection (~300)</li>
                <li>May lack specific icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
