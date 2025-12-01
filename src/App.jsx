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

// Feather Icons
import * as FeatherIcons from 'react-feather';

// React Icons (Ionicons)
import {
  IoHome, IoSearch, IoHeart, IoStar, IoCart,
  IoPerson, IoSettings, IoMail, IoNotifications, IoDownload,
  IoCloudUpload, IoTrash, IoCreate, IoEye, IoLockClosed,
  IoCheckmark, IoClose, IoAlertCircle, IoInformationCircle, IoHelpCircle
} from 'react-icons/io5';

// React Icons (Bootstrap Icons)
import {
  BsHouseDoor, BsSearch, BsHeart, BsStar, BsCart,
  BsPerson, BsGear, BsEnvelope, BsBell, BsDownload,
  BsUpload, BsTrash, BsPencil, BsEye, BsLock,
  BsCheck, BsX, BsExclamationCircle, BsInfoCircle, BsQuestionCircle
} from 'react-icons/bs';

// Tabler Icons
import {
  IconHome, IconSearch, IconHeart, IconStar, IconShoppingCart,
  IconUser, IconSettings, IconMail, IconBell, IconDownload,
  IconUpload, IconTrash, IconEdit, IconEye, IconLock,
  IconCheck, IconX, IconAlertCircle, IconInfoCircle, IconHelp
} from '@tabler/icons-react';

// Phosphor Icons
import {
  House, MagnifyingGlass, Heart as PhosphorHeart, Star as PhosphorStar, ShoppingCart as PhosphorCart,
  User as PhosphorUser, Gear, Envelope, Bell as PhosphorBell, DownloadSimple,
  UploadSimple, Trash as PhosphorTrash, PencilSimple, Eye as PhosphorEye, Lock as PhosphorLock,
  Check as PhosphorCheck, X as PhosphorX, WarningCircle, Info as PhosphorInfo, Question
} from '@phosphor-icons/react';

// Ant Design Icons
import {
  HomeOutlined, SearchOutlined, HeartOutlined, StarOutlined, ShoppingCartOutlined,
  UserOutlined, SettingOutlined, MailOutlined, BellOutlined, DownloadOutlined,
  UploadOutlined, DeleteOutlined, EditOutlined, EyeOutlined, LockOutlined,
  CheckOutlined, CloseOutlined, ExclamationCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined
} from '@ant-design/icons';

// React Icons (Remix Icon)
import {
  RiHome2Line, RiSearchLine, RiHeartLine, RiStarLine, RiShoppingCartLine,
  RiUserLine, RiSettings3Line, RiMailLine, RiNotification2Line, RiDownloadLine,
  RiUploadLine, RiDeleteBinLine, RiEditLine, RiEyeLine, RiLockLine,
  RiCheckLine, RiCloseLine, RiAlertLine, RiInformationLine, RiQuestionLine
} from 'react-icons/ri';

// React Icons (Octicons - GitHub)
import {
  GoHome, GoSearch, GoHeart, GoStar, GoPackage,
  GoPerson, GoGear, GoMail, GoBell, GoDownload,
  GoUpload, GoTrash, GoPencil, GoEye, GoLock,
  GoCheck, GoX, GoAlert, GoInfo, GoQuestion
} from 'react-icons/go';

const App = () => {
  const iconData = [
    {
      name: 'Home',
      lucide: <Home />,
      fa: <FaHome />,
      md: <MdHome />,
      hero: <HomeIcon />,
      feather: <FeatherIcons.Home />,
      ion: <IoHome />,
      bs: <BsHouseDoor />,
      tabler: <IconHome />,
      phosphor: <House />,
      antd: <HomeOutlined />,
      remix: <RiHome2Line />,
      octicon: <GoHome />
    },
    {
      name: 'Search',
      lucide: <Search />,
      fa: <FaSearch />,
      md: <MdSearch />,
      hero: <MagnifyingGlassIcon />,
      feather: <FeatherIcons.Search />,
      ion: <IoSearch />,
      bs: <BsSearch />,
      tabler: <IconSearch />,
      phosphor: <MagnifyingGlass />,
      antd: <SearchOutlined />,
      remix: <RiSearchLine />,
      octicon: <GoSearch />
    },
    {
      name: 'Heart',
      lucide: <Heart />,
      fa: <FaHeart />,
      md: <MdFavorite />,
      hero: <HeartIcon />,
      feather: <FeatherIcons.Heart />,
      ion: <IoHeart />,
      bs: <BsHeart />,
      tabler: <IconHeart />,
      phosphor: <PhosphorHeart />,
      antd: <HeartOutlined />,
      remix: <RiHeartLine />,
      octicon: <GoHeart />
    },
    {
      name: 'Star',
      lucide: <Star />,
      fa: <FaStar />,
      md: <MdStar />,
      hero: <StarIcon />,
      feather: <FeatherIcons.Star />,
      ion: <IoStar />,
      bs: <BsStar />,
      tabler: <IconStar />,
      phosphor: <PhosphorStar />,
      antd: <StarOutlined />,
      remix: <RiStarLine />,
      octicon: <GoStar />
    },
    {
      name: 'Cart',
      lucide: <ShoppingCart />,
      fa: <FaShoppingCart />,
      md: <MdShoppingCart />,
      hero: <ShoppingCartIcon />,
      feather: <FeatherIcons.ShoppingCart />,
      ion: <IoCart />,
      bs: <BsCart />,
      tabler: <IconShoppingCart />,
      phosphor: <PhosphorCart />,
      antd: <ShoppingCartOutlined />,
      remix: <RiShoppingCartLine />,
      octicon: <GoPackage />
    },
    {
      name: 'User',
      lucide: <User />,
      fa: <FaUser />,
      md: <MdPerson />,
      hero: <UserIcon />,
      feather: <FeatherIcons.User />,
      ion: <IoPerson />,
      bs: <BsPerson />,
      tabler: <IconUser />,
      phosphor: <PhosphorUser />,
      antd: <UserOutlined />,
      remix: <RiUserLine />,
      octicon: <GoPerson />
    },
    {
      name: 'Settings',
      lucide: <Settings />,
      fa: <FaCog />,
      md: <MdSettings />,
      hero: <Cog6ToothIcon />,
      feather: <FeatherIcons.Settings />,
      ion: <IoSettings />,
      bs: <BsGear />,
      tabler: <IconSettings />,
      phosphor: <Gear />,
      antd: <SettingOutlined />,
      remix: <RiSettings3Line />,
      octicon: <GoGear />
    },
    {
      name: 'Mail',
      lucide: <Mail />,
      fa: <FaEnvelope />,
      md: <MdEmail />,
      hero: <EnvelopeIcon />,
      feather: <FeatherIcons.Mail />,
      ion: <IoMail />,
      bs: <BsEnvelope />,
      tabler: <IconMail />,
      phosphor: <Envelope />,
      antd: <MailOutlined />,
      remix: <RiMailLine />,
      octicon: <GoMail />
    },
    {
      name: 'Bell',
      lucide: <Bell />,
      fa: <FaBell />,
      md: <MdNotifications />,
      hero: <BellIcon />,
      feather: <FeatherIcons.Bell />,
      ion: <IoNotifications />,
      bs: <BsBell />,
      tabler: <IconBell />,
      phosphor: <PhosphorBell />,
      antd: <BellOutlined />,
      remix: <RiNotification2Line />,
      octicon: <GoBell />
    },
    {
      name: 'Download',
      lucide: <Download />,
      fa: <FaDownload />,
      md: <MdDownload />,
      hero: <ArrowDownTrayIcon />,
      feather: <FeatherIcons.Download />,
      ion: <IoDownload />,
      bs: <BsDownload />,
      tabler: <IconDownload />,
      phosphor: <DownloadSimple />,
      antd: <DownloadOutlined />,
      remix: <RiDownloadLine />,
      octicon: <GoDownload />
    },
    {
      name: 'Upload',
      lucide: <Upload />,
      fa: <FaUpload />,
      md: <MdUpload />,
      hero: <ArrowUpTrayIcon />,
      feather: <FeatherIcons.Upload />,
      ion: <IoCloudUpload />,
      bs: <BsUpload />,
      tabler: <IconUpload />,
      phosphor: <UploadSimple />,
      antd: <UploadOutlined />,
      remix: <RiUploadLine />,
      octicon: <GoUpload />
    },
    {
      name: 'Trash',
      lucide: <Trash2 />,
      fa: <FaTrash />,
      md: <MdDelete />,
      hero: <TrashIcon />,
      feather: <FeatherIcons.Trash2 />,
      ion: <IoTrash />,
      bs: <BsTrash />,
      tabler: <IconTrash />,
      phosphor: <PhosphorTrash />,
      antd: <DeleteOutlined />,
      remix: <RiDeleteBinLine />,
      octicon: <GoTrash />
    },
    {
      name: 'Edit',
      lucide: <Edit />,
      fa: <FaEdit />,
      md: <MdEdit />,
      hero: <PencilIcon />,
      feather: <FeatherIcons.Edit />,
      ion: <IoCreate />,
      bs: <BsPencil />,
      tabler: <IconEdit />,
      phosphor: <PencilSimple />,
      antd: <EditOutlined />,
      remix: <RiEditLine />,
      octicon: <GoPencil />
    },
    {
      name: 'Eye',
      lucide: <Eye />,
      fa: <FaEye />,
      md: <MdVisibility />,
      hero: <EyeIcon />,
      feather: <FeatherIcons.Eye />,
      ion: <IoEye />,
      bs: <BsEye />,
      tabler: <IconEye />,
      phosphor: <PhosphorEye />,
      antd: <EyeOutlined />,
      remix: <RiEyeLine />,
      octicon: <GoEye />
    },
    {
      name: 'Lock',
      lucide: <Lock />,
      fa: <FaLock />,
      md: <MdLock />,
      hero: <LockClosedIcon />,
      feather: <FeatherIcons.Lock />,
      ion: <IoLockClosed />,
      bs: <BsLock />,
      tabler: <IconLock />,
      phosphor: <PhosphorLock />,
      antd: <LockOutlined />,
      remix: <RiLockLine />,
      octicon: <GoLock />
    },
    {
      name: 'Check',
      lucide: <Check />,
      fa: <FaCheck />,
      md: <MdCheck />,
      hero: <CheckIcon />,
      feather: <FeatherIcons.Check />,
      ion: <IoCheckmark />,
      bs: <BsCheck />,
      tabler: <IconCheck />,
      phosphor: <PhosphorCheck />,
      antd: <CheckOutlined />,
      remix: <RiCheckLine />,
      octicon: <GoCheck />
    },
    {
      name: 'X',
      lucide: <X />,
      fa: <FaTimes />,
      md: <MdClose />,
      hero: <XMarkIcon />,
      feather: <FeatherIcons.X />,
      ion: <IoClose />,
      bs: <BsX />,
      tabler: <IconX />,
      phosphor: <PhosphorX />,
      antd: <CloseOutlined />,
      remix: <RiCloseLine />,
      octicon: <GoX />
    },
    {
      name: 'Alert',
      lucide: <AlertCircle />,
      fa: <FaExclamationCircle />,
      md: <MdError />,
      hero: <ExclamationCircleIcon />,
      feather: <FeatherIcons.AlertCircle />,
      ion: <IoAlertCircle />,
      bs: <BsExclamationCircle />,
      tabler: <IconAlertCircle />,
      phosphor: <WarningCircle />,
      antd: <ExclamationCircleOutlined />,
      remix: <RiAlertLine />,
      octicon: <GoAlert />
    },
    {
      name: 'Info',
      lucide: <Info />,
      fa: <FaInfoCircle />,
      md: <MdInfo />,
      hero: <InformationCircleIcon />,
      feather: <FeatherIcons.Info />,
      ion: <IoInformationCircle />,
      bs: <BsInfoCircle />,
      tabler: <IconInfoCircle />,
      phosphor: <PhosphorInfo />,
      antd: <InfoCircleOutlined />,
      remix: <RiInformationLine />,
      octicon: <GoInfo />
    },
    {
      name: 'Help',
      lucide: <HelpCircle />,
      fa: <FaQuestionCircle />,
      md: <MdHelp />,
      hero: <QuestionMarkCircleIcon />,
      feather: <FeatherIcons.HelpCircle />,
      ion: <IoHelpCircle />,
      bs: <BsQuestionCircle />,
      tabler: <IconHelp />,
      phosphor: <Question />,
      antd: <QuestionCircleOutlined />,
      remix: <RiQuestionLine />,
      octicon: <GoQuestion />
    },
  ];

  const libraries = [
    { key: 'lucide', name: 'Lucide', count: '~1,300', url: 'https://lucide.dev' },
    { key: 'fa', name: 'Font Awesome', count: '~2,000', url: 'https://fontawesome.com' },
    { key: 'md', name: 'Material Design', count: '~2,100', url: 'https://fonts.google.com/icons' },
    { key: 'hero', name: 'Heroicons', count: '~300', url: 'https://heroicons.com' },
    { key: 'feather', name: 'Feather', count: '~280', url: 'https://feathericons.com' },
    { key: 'ion', name: 'Ionicons', count: '~1,300', url: 'https://ionic.io/ionicons' },
    { key: 'bs', name: 'Bootstrap Icons', count: '~2,000', url: 'https://icons.getbootstrap.com' },
    { key: 'tabler', name: 'Tabler Icons', count: '~4,800', url: 'https://tabler.io/icons' },
    { key: 'phosphor', name: 'Phosphor', count: '~7,500', url: 'https://phosphoricons.com' },
    { key: 'antd', name: 'Ant Design', count: '~800', url: 'https://ant.design/components/icon' },
    { key: 'remix', name: 'Remix Icon', count: '~2,800', url: 'https://remixicon.com' },
    { key: 'octicon', name: 'Octicons', count: '~300', url: 'https://primer.style/foundations/icons' }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>React Icon Libraries Comparison</h1>
        <p>Compare 12 popular icon libraries side by side</p>
      </header>

      <div className="library-info">
        {libraries.map((lib) => (
          <div key={lib.key} className="library-card">
            <h3>{lib.name}</h3>
            <p>{lib.count} icons</p>
            <a href={lib.url} target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        ))}
      </div>

      <div className="table-container">
        <div className="table-scroll">
          <table className="icon-table">
            <thead>
              <tr>
                <th className="sticky-col">Icon</th>
                {libraries.map((lib) => (
                  <th key={lib.key}>{lib.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {iconData.map((icon, index) => (
                <tr key={index}>
                  <td className="icon-name sticky-col">{icon.name}</td>
                  {libraries.map((lib) => (
                    <td key={lib.key} className="icon-cell">{icon[lib.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="comparison-section">
        <h2>Library Comparison</h2>
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

          <div className="comparison-card">
            <h3>Feather Icons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Simple, elegant design</li>
                  <li>Lightweight</li>
                  <li>Consistent 24x24 grid</li>
                  <li>Open source</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Limited selection (~280)</li>
                  <li>Outline only</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Ionicons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Premium quality icons</li>
                  <li>Outline & filled variants</li>
                  <li>Mobile-friendly</li>
                  <li>Ionic framework integration</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Opinionated design</li>
                  <li>Medium library size</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Bootstrap Icons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Extensive library (~2,000)</li>
                  <li>Bootstrap ecosystem</li>
                  <li>SVG & font formats</li>
                  <li>Actively maintained</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Bootstrap-centric design</li>
                  <li>Outline style focus</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Tabler Icons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Huge library (~4,800)</li>
                  <li>Consistent stroke design</li>
                  <li>Outline & filled variants</li>
                  <li>Regular updates</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>May feel generic</li>
                  <li>Larger bundle impact</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Phosphor Icons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Massive library (~7,500)</li>
                  <li>6 style variants</li>
                  <li>Flexible customization</li>
                  <li>Beautiful design</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Can be overwhelming</li>
                  <li>Larger package size</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Ant Design Icons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Ant Design ecosystem</li>
                  <li>Outline & filled styles</li>
                  <li>Enterprise-ready</li>
                  <li>Two-tone color support</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Smaller selection (~800)</li>
                  <li>Design system specific</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Remix Icon</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>Large library (~2,800)</li>
                  <li>Line & fill styles</li>
                  <li>Neutral design system</li>
                  <li>Open source</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Less well-known</li>
                  <li>Fewer community resources</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-card">
            <h3>Octicons</h3>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros:</h4>
                <ul>
                  <li>GitHub's official icons</li>
                  <li>Clean, minimal design</li>
                  <li>Developer-focused</li>
                  <li>Well maintained</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons:</h4>
                <ul>
                  <li>Small library (~300)</li>
                  <li>Limited use cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>💡 Tip: Hover over icons in the table to see them enlarge!</p>
        <p>All libraries are tree-shakeable when properly imported. Bundle size will depend on how many icons you use.</p>
      </footer>
    </div>
  );
};

export default App;
