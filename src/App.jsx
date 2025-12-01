import React, { useState } from 'react';
import './App.css';

// Lucide React Icons
import {
  Home, Search, Heart, Star, ShoppingCart, User, Settings, Mail, Bell, Download,
  Upload, Trash2, Edit, Eye, Lock, Check, X, AlertCircle, Info, HelpCircle,
  Menu, ChevronRight, ArrowLeft, ArrowRight, LogIn, LogOut, Users, UserPlus,
  Phone, MessageCircle, Send, Inbox, Play, Pause, Volume2, Camera,
  File, Folder, FileText, Image, Music, Video, Disc, Save,
  CheckCircle, XCircle, AlertTriangle, Loader, Calendar, Clock, Bookmark,
  CreditCard, DollarSign, ShoppingBag, Package, Share2, ThumbsUp, Award,
  Tool, Zap, Database, Code, Terminal, Github, Cpu, Filter, Map, Globe
} from 'lucide-react';

// React Icons (Font Awesome)
import {
  FaHome, FaSearch, FaHeart, FaStar, FaShoppingCart, FaUser, FaCog, FaEnvelope, FaBell, FaDownload,
  FaUpload, FaTrash, FaEdit, FaEye, FaLock, FaCheck, FaTimes, FaExclamationCircle, FaInfoCircle, FaQuestionCircle,
  FaBars, FaChevronRight, FaArrowLeft, FaArrowRight, FaSignInAlt, FaSignOutAlt, FaUsers, FaUserPlus,
  FaPhone, FaComment, FaPaperPlane, FaInbox, FaPlay, FaPause, FaVolumeUp, FaCamera,
  FaFile, FaFolder, FaFileAlt, FaImage, FaMusic as FaMusicFA, FaVideo as FaVideoFA, FaCompactDisc, FaSave,
  FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSpinner, FaCalendar, FaClock, FaBookmark,
  FaCreditCard, FaDollarSign, FaShoppingBag, FaBox, FaShareAlt, FaThumbsUp, FaAward,
  FaTools, FaBolt, FaDatabase, FaCode, FaTerminal, FaGithub, FaMicrochip, FaFilter, FaMap, FaGlobe
} from 'react-icons/fa';

// React Icons (Material Design)
import {
  MdHome, MdSearch, MdFavorite, MdStar, MdShoppingCart, MdPerson, MdSettings, MdEmail, MdNotifications, MdDownload,
  MdUpload, MdDelete, MdEdit, MdVisibility, MdLock, MdCheck, MdClose, MdError, MdInfo, MdHelp,
  MdMenu, MdChevronRight, MdArrowBack, MdArrowForward, MdLogin, MdLogout, MdPeople, MdPersonAdd,
  MdPhone, MdMessage, MdSend, MdInbox, MdPlayArrow, MdPause, MdVolumeUp, MdCamera,
  MdInsertDriveFile, MdFolder, MdDescription, MdImage, MdMusicNote, MdVideoLibrary, MdAlbum, MdSave,
  MdCheckCircle, MdCancel, MdWarning, MdRefresh, MdCalendarToday, MdAccessTime, MdBookmark,
  MdCreditCard, MdAttachMoney, MdShoppingBag, MdLocalShipping, MdShare, MdThumbUp, MdEmojiEvents,
  MdBuild, MdFlashOn, MdStorage, MdCode, MdTerminal as MdTerminalIcon, MdGitHub, MdMemory, MdFilterList, MdMap, MdPublic
} from 'react-icons/md';

// Heroicons
import {
  HomeIcon, MagnifyingGlassIcon, HeartIcon, StarIcon, ShoppingCartIcon, UserIcon, Cog6ToothIcon, EnvelopeIcon, BellIcon, ArrowDownTrayIcon,
  ArrowUpTrayIcon, TrashIcon, PencilIcon, EyeIcon, LockClosedIcon, CheckIcon, XMarkIcon, ExclamationCircleIcon, InformationCircleIcon, QuestionMarkCircleIcon,
  Bars3Icon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon, ArrowRightOnRectangleIcon as LoginIcon, ArrowLeftOnRectangleIcon as LogoutIcon, UsersIcon, UserPlusIcon,
  PhoneIcon, ChatBubbleLeftIcon, PaperAirplaneIcon, InboxIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, CameraIcon,
  DocumentIcon, FolderIcon, DocumentTextIcon, PhotoIcon, MusicalNoteIcon, VideoCameraIcon, CircleStackIcon, BookmarkIcon as SaveIcon,
  CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, ArrowPathIcon, CalendarIcon, ClockIcon, BookmarkIcon,
  CreditCardIcon, CurrencyDollarIcon, ShoppingBagIcon, ArchiveBoxIcon, ShareIcon, HandThumbUpIcon, TrophyIcon,
  WrenchIcon, BoltIcon, CircleStackIcon as DatabaseIcon, CodeBracketIcon, CommandLineIcon, GlobeAltIcon as GithubIconHero, CpuChipIcon, FunnelIcon, MapIcon, GlobeAltIcon
} from '@heroicons/react/24/outline';

// Feather Icons
import * as FeatherIcons from 'react-feather';

// React Icons (Ionicons)
import {
  IoHome, IoSearch, IoHeart, IoStar, IoCart, IoPerson, IoSettings, IoMail, IoNotifications, IoDownload,
  IoCloudUpload, IoTrash, IoCreate, IoEye, IoLockClosed, IoCheckmark, IoClose, IoAlertCircle, IoInformationCircle, IoHelpCircle,
  IoMenu, IoChevronForward, IoArrowBack, IoArrowForward, IoLogIn, IoLogOut, IoPeople, IoPersonAdd,
  IoCall, IoChatbubble, IoSend, IoMailOpen, IoPlay, IoPause, IoVolumeHigh, IoCamera,
  IoDocument, IoFolder, IoDocumentText, IoImage as IoImageIcon, IoMusicalNotes, IoVideocam, IoDisc, IoSave,
  IoCheckmarkCircle, IoCloseCircle, IoWarning, IoReload, IoCalendar, IoTime, IoBookmark,
  IoCreditCard as IoCard, IoCash, IoBag, IoPackage as IoPackageIcon, IoShareSocial, IoThumbsUp, IoTrophy,
  IoConstruct, IoFlash, IoServer, IoCodeSlash, IoTerminal, IoLogoGithub, IoHardwareChip, IoFunnel, IoMap as IoMapIcon, IoEarth
} from 'react-icons/io5';

// React Icons (Bootstrap Icons)
import {
  BsHouseDoor, BsSearch, BsHeart, BsStar, BsCart, BsPerson, BsGear, BsEnvelope, BsBell, BsDownload,
  BsUpload, BsTrash, BsPencil, BsEye, BsLock, BsCheck, BsX, BsExclamationCircle, BsInfoCircle, BsQuestionCircle,
  BsList, BsChevronRight, BsArrowLeft, BsArrowRight, BsBoxArrowInRight, BsBoxArrowRight, BsPeople, BsPersonPlus,
  BsTelephone, BsChat, BsSend, BsInbox, BsPlayFill, BsPauseFill, BsVolumeUp, BsCamera,
  BsFileEarmark, BsFolder as BsFolderIcon, BsFileText, BsImage as BsImageIcon, BsMusicNote, BsCameraVideo, BsDisc, BsSave,
  BsCheckCircle, BsXCircle, BsExclamationTriangle, BsArrowRepeat, BsCalendar, BsClock, BsBookmark,
  BsCreditCard as BsCreditCardIcon, BsCurrencyDollar, BsBag, BsBox, BsShare, BsHandThumbsUp, BsTrophy,
  BsTools, BsLightning, BsDatabase as BsDatabaseIcon, BsCode, BsTerminal as BsTerminalIcon, BsGithub, BsCpu, BsFilter, BsMap as BsMapIcon, BsGlobe as BsGlobeIcon
} from 'react-icons/bs';

// Tabler Icons
import {
  IconHome, IconSearch, IconHeart, IconStar, IconShoppingCart, IconUser, IconSettings, IconMail, IconBell, IconDownload,
  IconUpload, IconTrash, IconEdit, IconEye, IconLock, IconCheck, IconX, IconAlertCircle, IconInfoCircle, IconHelp,
  IconMenu2, IconChevronRight as IconChevronRightTabler, IconArrowLeft as IconArrowLeftTabler, IconArrowRight as IconArrowRightTabler, IconLogin, IconLogout, IconUsers, IconUserPlus,
  IconPhone, IconMessage, IconSend, IconInbox, IconPlayerPlay, IconPlayerPause, IconVolume, IconCamera as IconCameraTabler,
  IconFile, IconFolder as IconFolderTabler, IconFileText, IconPhoto, IconMusic as IconMusicTabler, IconVideo, IconDisc as IconDiscTabler, IconDeviceFloppy,
  IconCircleCheck, IconCircleX, IconAlertTriangle, IconRefresh, IconCalendar, IconClock, IconBookmark as IconBookmarkTabler,
  IconCreditCard as IconCreditCardTabler, IconCurrencyDollar as IconCurrencyTabler, IconShoppingBag, IconPackage, IconShare, IconThumbUp, IconAward,
  IconTool, IconBolt as IconBoltTabler, IconDatabase as IconDatabaseTabler, IconCode as IconCodeTabler, IconTerminal2, IconBrandGithub, IconCpu as IconCpuTabler, IconFilter, IconMap as IconMapTabler, IconWorld
} from '@tabler/icons-react';

// Phosphor Icons
import {
  House, MagnifyingGlass, Heart as PhosphorHeart, Star as PhosphorStar, ShoppingCart as PhosphorCart, User as PhosphorUser, Gear, Envelope, Bell as PhosphorBell, DownloadSimple,
  UploadSimple, Trash as PhosphorTrash, PencilSimple, Eye as PhosphorEye, Lock as PhosphorLock, Check as PhosphorCheck, X as PhosphorX, WarningCircle, Info as PhosphorInfo, Question,
  List, CaretRight, ArrowLeft as ArrowLeftPhosphor, ArrowRight as ArrowRightPhosphor, SignIn, SignOut, UsersThree, UserPlus as UserPlusPhosphor,
  PhoneCall, ChatCircle, PaperPlaneTilt, Tray, Play as PlayPhosphor, Pause as PausePhosphor, SpeakerHigh, Camera as CameraPhosphor,
  File as FilePhosphor, Folder as FolderPhosphor, FileText as FileTextPhosphor, Image as ImagePhosphor, MusicNote, VideoCamera, Disc as DiscPhosphor, FloppyDisk,
  CheckCircle as CheckCirclePhosphor, XCircle as XCirclePhosphor, Warning, ArrowsClockwise, Calendar as CalendarPhosphor, Clock as ClockPhosphor, BookmarkSimple,
  CreditCard as CreditCardPhosphor, CurrencyDollar as CurrencyPhosphor, ShoppingBagOpen, Package as PackagePhosphor, ShareNetwork, ThumbsUp as ThumbsUpPhosphor, Trophy as TrophyPhosphor,
  Wrench, Lightning, Database as DatabasePhosphor, Code as CodePhosphor, Terminal as TerminalPhosphor, GithubLogo, Cpu as CpuPhosphor, Funnel, MapPin, Globe as GlobePhosphor
} from '@phosphor-icons/react';

// Ant Design Icons
import {
  HomeOutlined, SearchOutlined, HeartOutlined, StarOutlined, ShoppingCartOutlined, UserOutlined, SettingOutlined, MailOutlined, BellOutlined, DownloadOutlined,
  UploadOutlined, DeleteOutlined, EditOutlined, EyeOutlined, LockOutlined, CheckOutlined, CloseOutlined, ExclamationCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined,
  MenuOutlined, RightOutlined, LeftOutlined, RightCircleOutlined, LoginOutlined, LogoutOutlined, TeamOutlined, UserAddOutlined,
  PhoneOutlined, MessageOutlined, SendOutlined, InboxOutlined, PlayCircleOutlined, PauseCircleOutlined, SoundOutlined, CameraOutlined,
  FileOutlined, FolderOutlined, FileTextOutlined, PictureOutlined, CustomerServiceOutlined, PlaySquareOutlined, SaveOutlined, SaveOutlined as SaveAntd,
  CheckCircleOutlined, CloseCircleOutlined, WarningOutlined, ReloadOutlined, CalendarOutlined, ClockCircleOutlined, BookOutlined,
  CreditCardOutlined, DollarOutlined, ShoppingOutlined, GiftOutlined, ShareAltOutlined, LikeOutlined, TrophyOutlined,
  ToolOutlined, ThunderboltOutlined, DatabaseOutlined, CodeOutlined, ConsoleSqlOutlined, GithubOutlined, CloudServerOutlined, FilterOutlined, EnvironmentOutlined, GlobalOutlined
} from '@ant-design/icons';

// React Icons (Remix Icon)
import {
  RiHome2Line, RiSearchLine, RiHeartLine, RiStarLine, RiShoppingCartLine, RiUserLine, RiSettings3Line, RiMailLine, RiNotification2Line, RiDownloadLine,
  RiUploadLine, RiDeleteBinLine, RiEditLine, RiEyeLine, RiLockLine, RiCheckLine, RiCloseLine, RiAlertLine, RiInformationLine, RiQuestionLine,
  RiMenuLine, RiArrowRightSLine, RiArrowLeftLine, RiArrowRightLine, RiLoginBoxLine, RiLogoutBoxLine, RiTeamLine, RiUserAddLine,
  RiPhoneLine, RiMessage2Line, RiSendPlaneLine, RiInboxLine, RiPlayLine, RiPauseLine, RiVolumeMuteLine, RiCameraLine,
  RiFileLine, RiFolderLine, RiFileTextLine, RiImageLine, RiMusic2Line, RiVideoLine, RiDiscLine, RiSaveLine,
  RiCheckboxCircleLine, RiCloseCircleLine, RiErrorWarningLine, RiRefreshLine, RiCalendarLine, RiTimeLine, RiBookmarkLine,
  RiBankCardLine, RiMoneyDollarCircleLine, RiShoppingBagLine, RiPackageLine, RiShareLine, RiThumbUpLine, RiAwardLine,
  RiToolsLine, RiFlashlightLine, RiDatabase2Line, RiCodeLine, RiTerminalBoxLine, RiGithubLine, RiCpuLine, RiFilter3Line, RiMapPinLine, RiGlobalLine
} from 'react-icons/ri';

// React Icons (Octicons - GitHub)
import {
  GoHome, GoSearch, GoHeart, GoStar, GoPackage, GoPerson, GoGear, GoMail, GoBell, GoDownload,
  GoUpload, GoTrash, GoPencil, GoEye, GoLock, GoCheck, GoX, GoAlert, GoInfo, GoQuestion,
  GoThreeBars, GoChevronRight as GoChevronRightOct, GoArrowLeft as GoArrowLeftOct, GoArrowRight as GoArrowRightOct, GoSignIn, GoSignOut, GoPeople, GoPersonAdd,
  GoDeviceMobile, GoComment, GoMailRead, GoInbox, GoPlay, GoMute, GoUnmute, GoDeviceCamera,
  GoFile, GoFileDirectory, GoFileCode, GoFileMedia, GoFileZip, GoFileBinary, GoDatabase as GoDatabaseOct, GoBookmark,
  GoCheckCircle, GoXCircle, GoStop, GoSync, GoCalendar, GoClock, GoBookmark as GoBookmarkOct,
  GoCreditCard, GoDollarSign as GoDollarOct, GoPackageDependencies, GoPackage as GoPackageOct, GoShareAndroid, GoThumbsup, GoTrophy,
  GoTools, GoZap, GoDatabase as GoDbOct, GoCode as GoCodeOct, GoTerminal as GoTerminalOct, GoMarkGithub, GoCpu as GoCpuOct, GoFilter, GoLocation, GoGlobe as GoGlobeOct
} from 'react-icons/go';

// Iconoir
import {
  Home as HomeIconoir, Search as SearchIconoir, Heart as HeartIconoir, Star as StarIconoir, Cart as CartIconoir, User as UserIconoir, Settings as SettingsIconoir, Mail as MailIconoir, Bell as BellIconoir, Download as DownloadIconoir,
  Upload as UploadIconoir, Trash as TrashIconoir, Edit as EditIconoir, Eye as EyeIconoir, Lock as LockIconoir, Check as CheckIconoir, Xmark as XIconoir, WarningCircle as AlertIconoir, InfoCircle as InfoIconoir, HelpCircle as HelpIconoir,
  Menu as MenuIconoir, NavArrowRight, NavArrowLeft, NavArrowRight as NavRightIconoir, LogIn as LogInIconoir, LogOut as LogOutIconoir, Group as GroupIconoir, UserPlus as AddUserIconoir,
  Phone as PhoneIconoir, ChatBubble, SendDiagonal, Inbox as InboxIconoir, Play as PlayIconoir, Pause as PauseIconoir, SoundHigh, Camera as CameraIconoir,
  Page as PageIconoir, Folder as FolderIconoir, PageEdit, MediaImage, MusicNote as MusicIconoir, VideoCamera as VideoIconoir, CompactDisc as DiscIconoir, FloppyDisk as SaveIconoir,
  CheckCircle as CheckCircleIconoir, XmarkCircle, WarningTriangle, Refresh, Calendar as CalendarIconoir, Clock as ClockIconoir, BookmarkBook,
  CreditCard as CreditCardIconoir, DollarCircle, Bag, Packages, ShareIos, ThumbsUp as ThumbsUpIconoir, Trophy as TrophyIconoir,
  Tools as ToolsIconoir, Flash, DatabaseBackup, Code as CodeIconoir, Terminal as TerminalIconoir, Github as GithubIconoir, Cpu as CpuIconoir, Filter as FilterIconoir, Pin, Globe as GlobeIconoir
} from 'iconoir-react';

// Carbon Icons
import {
  Home as HomeCarbon, Search as SearchCarbon, Favorite, StarFilled, ShoppingCart as CartCarbon, User as UserCarbon, Settings as SettingsCarbon, Email, Notification, Download as DownloadCarbon,
  Upload as UploadCarbon, TrashCan, Edit as EditCarbon, View, Locked, Checkmark, Close as CloseCarbon, WarningAlt, Information, Help as HelpCarbon,
  Menu as MenuCarbon, ChevronRight as ChevronRightCarbon, ArrowLeft as ArrowLeftCarbon, ArrowRight as ArrowRightCarbon, Login as LoginCarbon, Logout as LogoutCarbon, UserMultiple, UserFollow,
  Phone as PhoneCarbon, Chat, SendAlt, MailAll, Play as PlayCarbon, Pause as PauseCarbon, VolumeUp as VolumeCarbon, Camera as CameraCarbon,
  Document, Folder as FolderCarbon, DocumentBlank, Image as ImageCarbon, MusicNote as MusicCarbon, Video as VideoCarbon, CircleFilled, Save as SaveCarbon,
  CheckmarkFilled, CloseFilled, WarningFilled, Renew, Calendar as CalendarCarbon, Time as TimeCarbon, Bookmark as BookmarkCarbon,
  Purchase, Currency, ShoppingBag as BagCarbon, Box as BoxCarbon, Share as ShareCarbon, ThumbsUp as ThumbsUpCarbon, Trophy as TrophyCarbon,
  Tool as ToolCarbon, Flash as FlashCarbon, Db2Database, Code as CodeCarbon, Terminal as TerminalCarbon, LogoGithub, Chip, Filter as FilterCarbon, Location, EarthFilled
} from '@carbon/icons-react';

// Radix Icons
import {
  HomeIcon as HomeRadix, MagnifyingGlassIcon as SearchRadix, HeartIcon as HeartRadix, StarIcon as StarRadix, BarChartIcon as CartRadix, PersonIcon, GearIcon, EnvelopeClosedIcon, BellIcon as BellRadix, DownloadIcon,
  UploadIcon, TrashIcon as TrashRadix, Pencil1Icon, EyeOpenIcon, LockClosedIcon as LockRadix, CheckIcon as CheckRadix, Cross2Icon, ExclamationTriangleIcon as AlertRadix, InfoCircledIcon, QuestionMarkCircledIcon,
  HamburgerMenuIcon, ChevronRightIcon as ChevronRightRadix, ArrowLeftIcon as ArrowLeftRadix, ArrowRightIcon as ArrowRightRadix, EnterIcon, ExitIcon, AvatarIcon, PlusIcon,
  MobileIcon, ChatBubbleIcon, PaperPlaneIcon, ArchiveIcon, PlayIcon as PlayRadix, PauseIcon as PauseRadix, SpeakerLoudIcon, CameraIcon as CameraRadix,
  FileIcon, FileTextIcon as FileTextRadix, TextIcon, ImageIcon as ImageRadix, FrameIcon, VideoIcon, DiscIcon, BookmarkIcon as BookmarkRadix,
  CheckCircledIcon, CrossCircledIcon, TriangleUpIcon, ReloadIcon, CalendarIcon as CalendarRadix, ClockIcon as ClockRadix, BookmarkFilledIcon,
  CardStackIcon, CircleIcon as DollarRadix, BackpackIcon, CubeIcon, Share1Icon, ThickArrowUpIcon, TargetIcon,
  MixIcon, LightningBoltIcon, StackIcon as DatabaseRadix, CodeIcon, DashboardIcon, GitHubLogoIcon, ComponentInstanceIcon, MixerHorizontalIcon, DrawingPinIcon, GlobeIcon as GlobeRadix
} from '@radix-ui/react-icons';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const iconCategories = {
    navigation: [
      { name: 'Home', lucide: <Home />, fa: <FaHome />, md: <MdHome />, hero: <HomeIcon />, feather: <FeatherIcons.Home />, ion: <IoHome />, bs: <BsHouseDoor />, tabler: <IconHome />, phosphor: <House />, antd: <HomeOutlined />, remix: <RiHome2Line />, octicon: <GoHome />, iconoir: <HomeIconoir />, carbon: <HomeCarbon />, radix: <HomeRadix /> },
      { name: 'Search', lucide: <Search />, fa: <FaSearch />, md: <MdSearch />, hero: <MagnifyingGlassIcon />, feather: <FeatherIcons.Search />, ion: <IoSearch />, bs: <BsSearch />, tabler: <IconSearch />, phosphor: <MagnifyingGlass />, antd: <SearchOutlined />, remix: <RiSearchLine />, octicon: <GoSearch />, iconoir: <SearchIconoir />, carbon: <SearchCarbon />, radix: <SearchRadix /> },
      { name: 'Menu', lucide: <Menu />, fa: <FaBars />, md: <MdMenu />, hero: <Bars3Icon />, feather: <FeatherIcons.Menu />, ion: <IoMenu />, bs: <BsList />, tabler: <IconMenu2 />, phosphor: <List />, antd: <MenuOutlined />, remix: <RiMenuLine />, octicon: <GoThreeBars />, iconoir: <MenuIconoir />, carbon: <MenuCarbon />, radix: <HamburgerMenuIcon /> },
      { name: 'Arrow Right', lucide: <ChevronRight />, fa: <FaChevronRight />, md: <MdChevronRight />, hero: <ChevronRightIcon />, feather: <FeatherIcons.ChevronRight />, ion: <IoChevronForward />, bs: <BsChevronRight />, tabler: <IconChevronRightTabler />, phosphor: <CaretRight />, antd: <RightOutlined />, remix: <RiArrowRightSLine />, octicon: <GoChevronRightOct />, iconoir: <NavArrowRight />, carbon: <ChevronRightCarbon />, radix: <ChevronRightRadix /> },
      { name: 'Arrow Left', lucide: <ArrowLeft />, fa: <FaArrowLeft />, md: <MdArrowBack />, hero: <ArrowLeftIcon />, feather: <FeatherIcons.ArrowLeft />, ion: <IoArrowBack />, bs: <BsArrowLeft />, tabler: <IconArrowLeftTabler />, phosphor: <ArrowLeftPhosphor />, antd: <LeftOutlined />, remix: <RiArrowLeftLine />, octicon: <GoArrowLeftOct />, iconoir: <NavArrowLeft />, carbon: <ArrowLeftCarbon />, radix: <ArrowLeftRadix /> },
      { name: 'Map', lucide: <Map />, fa: <FaMap />, md: <MdMap />, hero: <MapIcon />, feather: <FeatherIcons.Map />, ion: <IoMapIcon />, bs: <BsMapIcon />, tabler: <IconMapTabler />, phosphor: <MapPin />, antd: <EnvironmentOutlined />, remix: <RiMapPinLine />, octicon: <GoLocation />, iconoir: <Pin />, carbon: <Location />, radix: <DrawingPinIcon /> },
      { name: 'Globe', lucide: <Globe />, fa: <FaGlobe />, md: <MdPublic />, hero: <GlobeAltIcon />, feather: <FeatherIcons.Globe />, ion: <IoEarth />, bs: <BsGlobeIcon />, tabler: <IconWorld />, phosphor: <GlobePhosphor />, antd: <GlobalOutlined />, remix: <RiGlobalLine />, octicon: <GoGlobeOct />, iconoir: <GlobeIconoir />, carbon: <EarthFilled />, radix: <GlobeRadix /> },
    ],
    actions: [
      { name: 'Edit', lucide: <Edit />, fa: <FaEdit />, md: <MdEdit />, hero: <PencilIcon />, feather: <FeatherIcons.Edit />, ion: <IoCreate />, bs: <BsPencil />, tabler: <IconEdit />, phosphor: <PencilSimple />, antd: <EditOutlined />, remix: <RiEditLine />, octicon: <GoPencil />, iconoir: <EditIconoir />, carbon: <EditCarbon />, radix: <Pencil1Icon /> },
      { name: 'Delete', lucide: <Trash2 />, fa: <FaTrash />, md: <MdDelete />, hero: <TrashIcon />, feather: <FeatherIcons.Trash2 />, ion: <IoTrash />, bs: <BsTrash />, tabler: <IconTrash />, phosphor: <PhosphorTrash />, antd: <DeleteOutlined />, remix: <RiDeleteBinLine />, octicon: <GoTrash />, iconoir: <TrashIconoir />, carbon: <TrashCan />, radix: <TrashRadix /> },
      { name: 'Download', lucide: <Download />, fa: <FaDownload />, md: <MdDownload />, hero: <ArrowDownTrayIcon />, feather: <FeatherIcons.Download />, ion: <IoDownload />, bs: <BsDownload />, tabler: <IconDownload />, phosphor: <DownloadSimple />, antd: <DownloadOutlined />, remix: <RiDownloadLine />, octicon: <GoDownload />, iconoir: <DownloadIconoir />, carbon: <DownloadCarbon />, radix: <DownloadIcon /> },
      { name: 'Upload', lucide: <Upload />, fa: <FaUpload />, md: <MdUpload />, hero: <ArrowUpTrayIcon />, feather: <FeatherIcons.Upload />, ion: <IoCloudUpload />, bs: <BsUpload />, tabler: <IconUpload />, phosphor: <UploadSimple />, antd: <UploadOutlined />, remix: <RiUploadLine />, octicon: <GoUpload />, iconoir: <UploadIconoir />, carbon: <UploadCarbon />, radix: <UploadIcon /> },
      { name: 'Save', lucide: <Save />, fa: <FaSave />, md: <MdSave />, hero: <SaveIcon />, feather: <FeatherIcons.Save />, ion: <IoSave />, bs: <BsSave />, tabler: <IconDeviceFloppy />, phosphor: <FloppyDisk />, antd: <SaveAntd />, remix: <RiSaveLine />, octicon: <GoBookmark />, iconoir: <SaveIconoir />, carbon: <SaveCarbon />, radix: <BookmarkRadix /> },
      { name: 'Share', lucide: <Share2 />, fa: <FaShareAlt />, md: <MdShare />, hero: <ShareIcon />, feather: <FeatherIcons.Share2 />, ion: <IoShareSocial />, bs: <BsShare />, tabler: <IconShare />, phosphor: <ShareNetwork />, antd: <ShareAltOutlined />, remix: <RiShareLine />, octicon: <GoShareAndroid />, iconoir: <ShareIos />, carbon: <ShareCarbon />, radix: <Share1Icon /> },
      { name: 'Filter', lucide: <Filter />, fa: <FaFilter />, md: <MdFilterList />, hero: <FunnelIcon />, feather: <FeatherIcons.Filter />, ion: <IoFunnel />, bs: <BsFilter />, tabler: <IconFilter />, phosphor: <Funnel />, antd: <FilterOutlined />, remix: <RiFilter3Line />, octicon: <GoFilter />, iconoir: <FilterIconoir />, carbon: <FilterCarbon />, radix: <MixerHorizontalIcon /> },
    ],
    communication: [
      { name: 'Mail', lucide: <Mail />, fa: <FaEnvelope />, md: <MdEmail />, hero: <EnvelopeIcon />, feather: <FeatherIcons.Mail />, ion: <IoMail />, bs: <BsEnvelope />, tabler: <IconMail />, phosphor: <Envelope />, antd: <MailOutlined />, remix: <RiMailLine />, octicon: <GoMail />, iconoir: <MailIconoir />, carbon: <Email />, radix: <EnvelopeClosedIcon /> },
      { name: 'Bell', lucide: <Bell />, fa: <FaBell />, md: <MdNotifications />, hero: <BellIcon />, feather: <FeatherIcons.Bell />, ion: <IoNotifications />, bs: <BsBell />, tabler: <IconBell />, phosphor: <PhosphorBell />, antd: <BellOutlined />, remix: <RiNotification2Line />, octicon: <GoBell />, iconoir: <BellIconoir />, carbon: <Notification />, radix: <BellRadix /> },
      { name: 'Phone', lucide: <Phone />, fa: <FaPhone />, md: <MdPhone />, hero: <PhoneIcon />, feather: <FeatherIcons.Phone />, ion: <IoCall />, bs: <BsTelephone />, tabler: <IconPhone />, phosphor: <PhoneCall />, antd: <PhoneOutlined />, remix: <RiPhoneLine />, octicon: <GoDeviceMobile />, iconoir: <PhoneIconoir />, carbon: <PhoneCarbon />, radix: <MobileIcon /> },
      { name: 'Message', lucide: <MessageCircle />, fa: <FaComment />, md: <MdMessage />, hero: <ChatBubbleLeftIcon />, feather: <FeatherIcons.MessageCircle />, ion: <IoChatbubble />, bs: <BsChat />, tabler: <IconMessage />, phosphor: <ChatCircle />, antd: <MessageOutlined />, remix: <RiMessage2Line />, octicon: <GoComment />, iconoir: <ChatBubble />, carbon: <Chat />, radix: <ChatBubbleIcon /> },
      { name: 'Send', lucide: <Send />, fa: <FaPaperPlane />, md: <MdSend />, hero: <PaperAirplaneIcon />, feather: <FeatherIcons.Send />, ion: <IoSend />, bs: <BsSend />, tabler: <IconSend />, phosphor: <PaperPlaneTilt />, antd: <SendOutlined />, remix: <RiSendPlaneLine />, octicon: <GoMailRead />, iconoir: <SendDiagonal />, carbon: <SendAlt />, radix: <PaperPlaneIcon /> },
      { name: 'Inbox', lucide: <Inbox />, fa: <FaInbox />, md: <MdInbox />, hero: <InboxIcon />, feather: <FeatherIcons.Inbox />, ion: <IoMailOpen />, bs: <BsInbox />, tabler: <IconInbox />, phosphor: <Tray />, antd: <InboxOutlined />, remix: <RiInboxLine />, octicon: <GoInbox />, iconoir: <InboxIconoir />, carbon: <MailAll />, radix: <ArchiveIcon /> },
    ],
    user: [
      { name: 'User', lucide: <User />, fa: <FaUser />, md: <MdPerson />, hero: <UserIcon />, feather: <FeatherIcons.User />, ion: <IoPerson />, bs: <BsPerson />, tabler: <IconUser />, phosphor: <PhosphorUser />, antd: <UserOutlined />, remix: <RiUserLine />, octicon: <GoPerson />, iconoir: <UserIconoir />, carbon: <UserCarbon />, radix: <PersonIcon /> },
      { name: 'Users', lucide: <Users />, fa: <FaUsers />, md: <MdPeople />, hero: <UsersIcon />, feather: <FeatherIcons.Users />, ion: <IoPeople />, bs: <BsPeople />, tabler: <IconUsers />, phosphor: <UsersThree />, antd: <TeamOutlined />, remix: <RiTeamLine />, octicon: <GoPeople />, iconoir: <GroupIconoir />, carbon: <UserMultiple />, radix: <AvatarIcon /> },
      { name: 'User Plus', lucide: <UserPlus />, fa: <FaUserPlus />, md: <MdPersonAdd />, hero: <UserPlusIcon />, feather: <FeatherIcons.UserPlus />, ion: <IoPersonAdd />, bs: <BsPersonPlus />, tabler: <IconUserPlus />, phosphor: <UserPlusPhosphor />, antd: <UserAddOutlined />, remix: <RiUserAddLine />, octicon: <GoPersonAdd />, iconoir: <AddUserIconoir />, carbon: <UserFollow />, radix: <PlusIcon /> },
      { name: 'Log In', lucide: <LogIn />, fa: <FaSignInAlt />, md: <MdLogin />, hero: <LoginIcon />, feather: <FeatherIcons.LogIn />, ion: <IoLogIn />, bs: <BsBoxArrowInRight />, tabler: <IconLogin />, phosphor: <SignIn />, antd: <LoginOutlined />, remix: <RiLoginBoxLine />, octicon: <GoSignIn />, iconoir: <LogInIconoir />, carbon: <LoginCarbon />, radix: <EnterIcon /> },
      { name: 'Log Out', lucide: <LogOut />, fa: <FaSignOutAlt />, md: <MdLogout />, hero: <LogoutIcon />, feather: <FeatherIcons.LogOut />, ion: <IoLogOut />, bs: <BsBoxArrowRight />, tabler: <IconLogout />, phosphor: <SignOut />, antd: <LogoutOutlined />, remix: <RiLogoutBoxLine />, octicon: <GoSignOut />, iconoir: <LogOutIconoir />, carbon: <LogoutCarbon />, radix: <ExitIcon /> },
      { name: 'Eye', lucide: <Eye />, fa: <FaEye />, md: <MdVisibility />, hero: <EyeIcon />, feather: <FeatherIcons.Eye />, ion: <IoEye />, bs: <BsEye />, tabler: <IconEye />, phosphor: <PhosphorEye />, antd: <EyeOutlined />, remix: <RiEyeLine />, octicon: <GoEye />, iconoir: <EyeIconoir />, carbon: <View />, radix: <EyeOpenIcon /> },
      { name: 'Lock', lucide: <Lock />, fa: <FaLock />, md: <MdLock />, hero: <LockClosedIcon />, feather: <FeatherIcons.Lock />, ion: <IoLockClosed />, bs: <BsLock />, tabler: <IconLock />, phosphor: <PhosphorLock />, antd: <LockOutlined />, remix: <RiLockLine />, octicon: <GoLock />, iconoir: <LockIconoir />, carbon: <Locked />, radix: <LockRadix /> },
    ],
    media: [
      { name: 'Play', lucide: <Play />, fa: <FaPlay />, md: <MdPlayArrow />, hero: <PlayIcon />, feather: <FeatherIcons.Play />, ion: <IoPlay />, bs: <BsPlayFill />, tabler: <IconPlayerPlay />, phosphor: <PlayPhosphor />, antd: <PlayCircleOutlined />, remix: <RiPlayLine />, octicon: <GoPlay />, iconoir: <PlayIconoir />, carbon: <PlayCarbon />, radix: <PlayRadix /> },
      { name: 'Pause', lucide: <Pause />, fa: <FaPause />, md: <MdPause />, hero: <PauseIcon />, feather: <FeatherIcons.Pause />, ion: <IoPause />, bs: <BsPauseFill />, tabler: <IconPlayerPause />, phosphor: <PausePhosphor />, antd: <PauseCircleOutlined />, remix: <RiPauseLine />, octicon: <GoMute />, iconoir: <PauseIconoir />, carbon: <PauseCarbon />, radix: <PauseRadix /> },
      { name: 'Volume', lucide: <Volume2 />, fa: <FaVolumeUp />, md: <MdVolumeUp />, hero: <SpeakerWaveIcon />, feather: <FeatherIcons.Volume2 />, ion: <IoVolumeHigh />, bs: <BsVolumeUp />, tabler: <IconVolume />, phosphor: <SpeakerHigh />, antd: <SoundOutlined />, remix: <RiVolumeMuteLine />, octicon: <GoUnmute />, iconoir: <SoundHigh />, carbon: <VolumeCarbon />, radix: <SpeakerLoudIcon /> },
      { name: 'Camera', lucide: <Camera />, fa: <FaCamera />, md: <MdCamera />, hero: <CameraIcon />, feather: <FeatherIcons.Camera />, ion: <IoCamera />, bs: <BsCamera />, tabler: <IconCameraTabler />, phosphor: <CameraPhosphor />, antd: <CameraOutlined />, remix: <RiCameraLine />, octicon: <GoDeviceCamera />, iconoir: <CameraIconoir />, carbon: <CameraCarbon />, radix: <CameraRadix /> },
      { name: 'Music', lucide: <Music />, fa: <FaMusicFA />, md: <MdMusicNote />, hero: <MusicalNoteIcon />, feather: <FeatherIcons.Music />, ion: <IoMusicalNotes />, bs: <BsMusicNote />, tabler: <IconMusicTabler />, phosphor: <MusicNote />, antd: <CustomerServiceOutlined />, remix: <RiMusic2Line />, octicon: <GoFileMedia />, iconoir: <MusicIconoir />, carbon: <MusicCarbon />, radix: <FrameIcon /> },
      { name: 'Video', lucide: <Video />, fa: <FaVideoFA />, md: <MdVideoLibrary />, hero: <VideoCameraIcon />, feather: <FeatherIcons.Video />, ion: <IoVideocam />, bs: <BsCameraVideo />, tabler: <IconVideo />, phosphor: <VideoCamera />, antd: <PlaySquareOutlined />, remix: <RiVideoLine />, octicon: <GoFileMedia />, iconoir: <VideoIconoir />, carbon: <VideoCarbon />, radix: <VideoIcon /> },
      { name: 'Image', lucide: <Image />, fa: <FaImage />, md: <MdImage />, hero: <PhotoIcon />, feather: <FeatherIcons.Image />, ion: <IoImageIcon />, bs: <BsImageIcon />, tabler: <IconPhoto />, phosphor: <ImagePhosphor />, antd: <PictureOutlined />, remix: <RiImageLine />, octicon: <GoFileMedia />, iconoir: <MediaImage />, carbon: <ImageCarbon />, radix: <ImageRadix /> },
    ],
    files: [
      { name: 'File', lucide: <File />, fa: <FaFile />, md: <MdInsertDriveFile />, hero: <DocumentIcon />, feather: <FeatherIcons.File />, ion: <IoDocument />, bs: <BsFileEarmark />, tabler: <IconFile />, phosphor: <FilePhosphor />, antd: <FileOutlined />, remix: <RiFileLine />, octicon: <GoFile />, iconoir: <PageIconoir />, carbon: <Document />, radix: <FileIcon /> },
      { name: 'Folder', lucide: <Folder />, fa: <FaFolder />, md: <MdFolder />, hero: <FolderIcon />, feather: <FeatherIcons.Folder />, ion: <IoFolder />, bs: <BsFolderIcon />, tabler: <IconFolderTabler />, phosphor: <FolderPhosphor />, antd: <FolderOutlined />, remix: <RiFolderLine />, octicon: <GoFileDirectory />, iconoir: <FolderIconoir />, carbon: <FolderCarbon />, radix: <FileTextRadix /> },
      { name: 'File Text', lucide: <FileText />, fa: <FaFileAlt />, md: <MdDescription />, hero: <DocumentTextIcon />, feather: <FeatherIcons.FileText />, ion: <IoDocumentText />, bs: <BsFileText />, tabler: <IconFileText />, phosphor: <FileTextPhosphor />, antd: <FileTextOutlined />, remix: <RiFileTextLine />, octicon: <GoFileCode />, iconoir: <PageEdit />, carbon: <DocumentBlank />, radix: <TextIcon /> },
      { name: 'Disc', lucide: <Disc />, fa: <FaCompactDisc />, md: <MdAlbum />, hero: <CircleStackIcon />, feather: <FeatherIcons.Disc />, ion: <IoDisc />, bs: <BsDisc />, tabler: <IconDiscTabler />, phosphor: <DiscPhosphor />, antd: <SaveOutlined />, remix: <RiDiscLine />, octicon: <GoFileBinary />, iconoir: <DiscIconoir />, carbon: <CircleFilled />, radix: <DiscIcon /> },
    ],
    status: [
      { name: 'Check', lucide: <Check />, fa: <FaCheck />, md: <MdCheck />, hero: <CheckIcon />, feather: <FeatherIcons.Check />, ion: <IoCheckmark />, bs: <BsCheck />, tabler: <IconCheck />, phosphor: <PhosphorCheck />, antd: <CheckOutlined />, remix: <RiCheckLine />, octicon: <GoCheck />, iconoir: <CheckIconoir />, carbon: <Checkmark />, radix: <CheckRadix /> },
      { name: 'X', lucide: <X />, fa: <FaTimes />, md: <MdClose />, hero: <XMarkIcon />, feather: <FeatherIcons.X />, ion: <IoClose />, bs: <BsX />, tabler: <IconX />, phosphor: <PhosphorX />, antd: <CloseOutlined />, remix: <RiCloseLine />, octicon: <GoX />, iconoir: <XIconoir />, carbon: <CloseCarbon />, radix: <Cross2Icon /> },
      { name: 'Check Circle', lucide: <CheckCircle />, fa: <FaCheckCircle />, md: <MdCheckCircle />, hero: <CheckCircleIcon />, feather: <FeatherIcons.CheckCircle />, ion: <IoCheckmarkCircle />, bs: <BsCheckCircle />, tabler: <IconCircleCheck />, phosphor: <CheckCirclePhosphor />, antd: <CheckCircleOutlined />, remix: <RiCheckboxCircleLine />, octicon: <GoCheckCircle />, iconoir: <CheckCircleIconoir />, carbon: <CheckmarkFilled />, radix: <CheckCircledIcon /> },
      { name: 'X Circle', lucide: <XCircle />, fa: <FaTimesCircle />, md: <MdCancel />, hero: <XCircleIcon />, feather: <FeatherIcons.XCircle />, ion: <IoCloseCircle />, bs: <BsXCircle />, tabler: <IconCircleX />, phosphor: <XCirclePhosphor />, antd: <CloseCircleOutlined />, remix: <RiCloseCircleLine />, octicon: <GoXCircle />, iconoir: <XmarkCircle />, carbon: <CloseFilled />, radix: <CrossCircledIcon /> },
      { name: 'Alert', lucide: <AlertCircle />, fa: <FaExclamationCircle />, md: <MdError />, hero: <ExclamationCircleIcon />, feather: <FeatherIcons.AlertCircle />, ion: <IoAlertCircle />, bs: <BsExclamationCircle />, tabler: <IconAlertCircle />, phosphor: <WarningCircle />, antd: <ExclamationCircleOutlined />, remix: <RiAlertLine />, octicon: <GoAlert />, iconoir: <AlertIconoir />, carbon: <WarningAlt />, radix: <AlertRadix /> },
      { name: 'Warning', lucide: <AlertTriangle />, fa: <FaExclamationTriangle />, md: <MdWarning />, hero: <ExclamationTriangleIcon />, feather: <FeatherIcons.AlertTriangle />, ion: <IoWarning />, bs: <BsExclamationTriangle />, tabler: <IconAlertTriangle />, phosphor: <Warning />, antd: <WarningOutlined />, remix: <RiErrorWarningLine />, octicon: <GoStop />, iconoir: <WarningTriangle />, carbon: <WarningFilled />, radix: <TriangleUpIcon /> },
      { name: 'Info', lucide: <Info />, fa: <FaInfoCircle />, md: <MdInfo />, hero: <InformationCircleIcon />, feather: <FeatherIcons.Info />, ion: <IoInformationCircle />, bs: <BsInfoCircle />, tabler: <IconInfoCircle />, phosphor: <PhosphorInfo />, antd: <InfoCircleOutlined />, remix: <RiInformationLine />, octicon: <GoInfo />, iconoir: <InfoIconoir />, carbon: <Information />, radix: <InfoCircledIcon /> },
      { name: 'Help', lucide: <HelpCircle />, fa: <FaQuestionCircle />, md: <MdHelp />, hero: <QuestionMarkCircleIcon />, feather: <FeatherIcons.HelpCircle />, ion: <IoHelpCircle />, bs: <BsQuestionCircle />, tabler: <IconHelp />, phosphor: <Question />, antd: <QuestionCircleOutlined />, remix: <RiQuestionLine />, octicon: <GoQuestion />, iconoir: <HelpIconoir />, carbon: <HelpCarbon />, radix: <QuestionMarkCircledIcon /> },
      { name: 'Loader', lucide: <Loader />, fa: <FaSpinner />, md: <MdRefresh />, hero: <ArrowPathIcon />, feather: <FeatherIcons.Loader />, ion: <IoReload />, bs: <BsArrowRepeat />, tabler: <IconRefresh />, phosphor: <ArrowsClockwise />, antd: <ReloadOutlined />, remix: <RiRefreshLine />, octicon: <GoSync />, iconoir: <Refresh />, carbon: <Renew />, radix: <ReloadIcon /> },
    ],
    time: [
      { name: 'Calendar', lucide: <Calendar />, fa: <FaCalendar />, md: <MdCalendarToday />, hero: <CalendarIcon />, feather: <FeatherIcons.Calendar />, ion: <IoCalendar />, bs: <BsCalendar />, tabler: <IconCalendar />, phosphor: <CalendarPhosphor />, antd: <CalendarOutlined />, remix: <RiCalendarLine />, octicon: <GoCalendar />, iconoir: <CalendarIconoir />, carbon: <CalendarCarbon />, radix: <CalendarRadix /> },
      { name: 'Clock', lucide: <Clock />, fa: <FaClock />, md: <MdAccessTime />, hero: <ClockIcon />, feather: <FeatherIcons.Clock />, ion: <IoTime />, bs: <BsClock />, tabler: <IconClock />, phosphor: <ClockPhosphor />, antd: <ClockCircleOutlined />, remix: <RiTimeLine />, octicon: <GoClock />, iconoir: <ClockIconoir />, carbon: <TimeCarbon />, radix: <ClockRadix /> },
      { name: 'Bookmark', lucide: <Bookmark />, fa: <FaBookmark />, md: <MdBookmark />, hero: <BookmarkIcon />, feather: <FeatherIcons.Bookmark />, ion: <IoBookmark />, bs: <BsBookmark />, tabler: <IconBookmarkTabler />, phosphor: <BookmarkSimple />, antd: <BookOutlined />, remix: <RiBookmarkLine />, octicon: <GoBookmarkOct />, iconoir: <BookmarkBook />, carbon: <BookmarkCarbon />, radix: <BookmarkFilledIcon /> },
    ],
    commerce: [
      { name: 'Cart', lucide: <ShoppingCart />, fa: <FaShoppingCart />, md: <MdShoppingCart />, hero: <ShoppingCartIcon />, feather: <FeatherIcons.ShoppingCart />, ion: <IoCart />, bs: <BsCart />, tabler: <IconShoppingCart />, phosphor: <PhosphorCart />, antd: <ShoppingCartOutlined />, remix: <RiShoppingCartLine />, octicon: <GoPackage />, iconoir: <CartIconoir />, carbon: <CartCarbon />, radix: <CartRadix /> },
      { name: 'Credit Card', lucide: <CreditCard />, fa: <FaCreditCard />, md: <MdCreditCard />, hero: <CreditCardIcon />, feather: <FeatherIcons.CreditCard />, ion: <IoCard />, bs: <BsCreditCardIcon />, tabler: <IconCreditCardTabler />, phosphor: <CreditCardPhosphor />, antd: <CreditCardOutlined />, remix: <RiBankCardLine />, octicon: <GoCreditCard />, iconoir: <CreditCardIconoir />, carbon: <Purchase />, radix: <CardStackIcon /> },
      { name: 'Dollar', lucide: <DollarSign />, fa: <FaDollarSign />, md: <MdAttachMoney />, hero: <CurrencyDollarIcon />, feather: <FeatherIcons.DollarSign />, ion: <IoCash />, bs: <BsCurrencyDollar />, tabler: <IconCurrencyTabler />, phosphor: <CurrencyPhosphor />, antd: <DollarOutlined />, remix: <RiMoneyDollarCircleLine />, octicon: <GoDollarOct />, iconoir: <DollarCircle />, carbon: <Currency />, radix: <DollarRadix /> },
      { name: 'Shopping Bag', lucide: <ShoppingBag />, fa: <FaShoppingBag />, md: <MdShoppingBag />, hero: <ShoppingBagIcon />, feather: <FeatherIcons.ShoppingBag />, ion: <IoBag />, bs: <BsBag />, tabler: <IconShoppingBag />, phosphor: <ShoppingBagOpen />, antd: <ShoppingOutlined />, remix: <RiShoppingBagLine />, octicon: <GoPackageDependencies />, iconoir: <Bag />, carbon: <BagCarbon />, radix: <BackpackIcon /> },
      { name: 'Package', lucide: <Package />, fa: <FaBox />, md: <MdLocalShipping />, hero: <ArchiveBoxIcon />, feather: <FeatherIcons.Package />, ion: <IoPackageIcon />, bs: <BsBox />, tabler: <IconPackage />, phosphor: <PackagePhosphor />, antd: <GiftOutlined />, remix: <RiPackageLine />, octicon: <GoPackageOct />, iconoir: <Packages />, carbon: <BoxCarbon />, radix: <CubeIcon /> },
    ],
    social: [
      { name: 'Heart', lucide: <Heart />, fa: <FaHeart />, md: <MdFavorite />, hero: <HeartIcon />, feather: <FeatherIcons.Heart />, ion: <IoHeart />, bs: <BsHeart />, tabler: <IconHeart />, phosphor: <PhosphorHeart />, antd: <HeartOutlined />, remix: <RiHeartLine />, octicon: <GoHeart />, iconoir: <HeartIconoir />, carbon: <Favorite />, radix: <HeartRadix /> },
      { name: 'Star', lucide: <Star />, fa: <FaStar />, md: <MdStar />, hero: <StarIcon />, feather: <FeatherIcons.Star />, ion: <IoStar />, bs: <BsStar />, tabler: <IconStar />, phosphor: <PhosphorStar />, antd: <StarOutlined />, remix: <RiStarLine />, octicon: <GoStar />, iconoir: <StarIconoir />, carbon: <StarFilled />, radix: <StarRadix /> },
      { name: 'Thumbs Up', lucide: <ThumbsUp />, fa: <FaThumbsUp />, md: <MdThumbUp />, hero: <HandThumbUpIcon />, feather: <FeatherIcons.ThumbsUp />, ion: <IoThumbsUp />, bs: <BsHandThumbsUp />, tabler: <IconThumbUp />, phosphor: <ThumbsUpPhosphor />, antd: <LikeOutlined />, remix: <RiThumbUpLine />, octicon: <GoThumbsup />, iconoir: <ThumbsUpIconoir />, carbon: <ThumbsUpCarbon />, radix: <ThickArrowUpIcon /> },
      { name: 'Award', lucide: <Award />, fa: <FaAward />, md: <MdEmojiEvents />, hero: <TrophyIcon />, feather: <FeatherIcons.Award />, ion: <IoTrophy />, bs: <BsTrophy />, tabler: <IconAward />, phosphor: <TrophyPhosphor />, antd: <TrophyOutlined />, remix: <RiAwardLine />, octicon: <GoTrophy />, iconoir: <TrophyIconoir />, carbon: <TrophyCarbon />, radix: <TargetIcon /> },
    ],
    tools: [
      { name: 'Settings', lucide: <Settings />, fa: <FaCog />, md: <MdSettings />, hero: <Cog6ToothIcon />, feather: <FeatherIcons.Settings />, ion: <IoSettings />, bs: <BsGear />, tabler: <IconSettings />, phosphor: <Gear />, antd: <SettingOutlined />, remix: <RiSettings3Line />, octicon: <GoGear />, iconoir: <SettingsIconoir />, carbon: <SettingsCarbon />, radix: <GearIcon /> },
      { name: 'Tool', lucide: <Tool />, fa: <FaTools />, md: <MdBuild />, hero: <WrenchIcon />, feather: <FeatherIcons.Tool />, ion: <IoConstruct />, bs: <BsTools />, tabler: <IconTool />, phosphor: <Wrench />, antd: <ToolOutlined />, remix: <RiToolsLine />, octicon: <GoTools />, iconoir: <ToolsIconoir />, carbon: <ToolCarbon />, radix: <MixIcon /> },
      { name: 'Zap', lucide: <Zap />, fa: <FaBolt />, md: <MdFlashOn />, hero: <BoltIcon />, feather: <FeatherIcons.Zap />, ion: <IoFlash />, bs: <BsLightning />, tabler: <IconBoltTabler />, phosphor: <Lightning />, antd: <ThunderboltOutlined />, remix: <RiFlashlightLine />, octicon: <GoZap />, iconoir: <Flash />, carbon: <FlashCarbon />, radix: <LightningBoltIcon /> },
    ],
    development: [
      { name: 'Code', lucide: <Code />, fa: <FaCode />, md: <MdCode />, hero: <CodeBracketIcon />, feather: <FeatherIcons.Code />, ion: <IoCodeSlash />, bs: <BsCode />, tabler: <IconCodeTabler />, phosphor: <CodePhosphor />, antd: <CodeOutlined />, remix: <RiCodeLine />, octicon: <GoCodeOct />, iconoir: <CodeIconoir />, carbon: <CodeCarbon />, radix: <CodeIcon /> },
      { name: 'Terminal', lucide: <Terminal />, fa: <FaTerminal />, md: <MdTerminalIcon />, hero: <CommandLineIcon />, feather: <FeatherIcons.Terminal />, ion: <IoTerminal />, bs: <BsTerminalIcon />, tabler: <IconTerminal2 />, phosphor: <TerminalPhosphor />, antd: <ConsoleSqlOutlined />, remix: <RiTerminalBoxLine />, octicon: <GoTerminalOct />, iconoir: <TerminalIconoir />, carbon: <TerminalCarbon />, radix: <DashboardIcon /> },
      { name: 'Database', lucide: <Database />, fa: <FaDatabase />, md: <MdStorage />, hero: <DatabaseIcon />, feather: <FeatherIcons.Database />, ion: <IoServer />, bs: <BsDatabaseIcon />, tabler: <IconDatabaseTabler />, phosphor: <DatabasePhosphor />, antd: <DatabaseOutlined />, remix: <RiDatabase2Line />, octicon: <GoDbOct />, iconoir: <DatabaseBackup />, carbon: <Db2Database />, radix: <DatabaseRadix /> },
      { name: 'GitHub', lucide: <Github />, fa: <FaGithub />, md: <MdGitHub />, hero: <GithubIconHero />, feather: <FeatherIcons.Github />, ion: <IoLogoGithub />, bs: <BsGithub />, tabler: <IconBrandGithub />, phosphor: <GithubLogo />, antd: <GithubOutlined />, remix: <RiGithubLine />, octicon: <GoMarkGithub />, iconoir: <GithubIconoir />, carbon: <LogoGithub />, radix: <GitHubLogoIcon /> },
      { name: 'CPU', lucide: <Cpu />, fa: <FaMicrochip />, md: <MdMemory />, hero: <CpuChipIcon />, feather: <FeatherIcons.Cpu />, ion: <IoHardwareChip />, bs: <BsCpu />, tabler: <IconCpuTabler />, phosphor: <CpuPhosphor />, antd: <CloudServerOutlined />, remix: <RiCpuLine />, octicon: <GoCpuOct />, iconoir: <CpuIconoir />, carbon: <Chip />, radix: <ComponentInstanceIcon /> },
    ],
  };

  const allIcons = Object.values(iconCategories).flat();
  const displayIcons = selectedCategory === 'all' ? allIcons : iconCategories[selectedCategory];

  const libraries = [
    { key: 'lucide', name: 'Lucide', count: '~1,300', url: 'https://lucide.dev' },
    { key: 'fa', name: 'Font Awesome', count: '~2,000', url: 'https://fontawesome.com' },
    { key: 'md', name: 'Material Design', count: '~2,100', url: 'https://fonts.google.com/icons' },
    { key: 'hero', name: 'Heroicons', count: '~300', url: 'https://heroicons.com' },
    { key: 'feather', name: 'Feather', count: '~280', url: 'https://feathericons.com' },
    { key: 'ion', name: 'Ionicons', count: '~1,300', url: 'https://ionic.io/ionicons' },
    { key: 'bs', name: 'Bootstrap', count: '~2,000', url: 'https://icons.getbootstrap.com' },
    { key: 'tabler', name: 'Tabler', count: '~4,800', url: 'https://tabler.io/icons' },
    { key: 'phosphor', name: 'Phosphor', count: '~7,500', url: 'https://phosphoricons.com' },
    { key: 'antd', name: 'Ant Design', count: '~800', url: 'https://ant.design/components/icon' },
    { key: 'remix', name: 'Remix', count: '~2,800', url: 'https://remixicon.com' },
    { key: 'octicon', name: 'Octicons', count: '~300', url: 'https://primer.style/foundations/icons' },
    { key: 'iconoir', name: 'Iconoir', count: '~1,500', url: 'https://iconoir.com' },
    { key: 'carbon', name: 'Carbon', count: '~2,100', url: 'https://carbondesignsystem.com/guidelines/icons' },
    { key: 'radix', name: 'Radix', count: '~300', url: 'https://www.radix-ui.com/icons' }
  ];

  const categories = [
    { key: 'all', name: 'All Icons', count: allIcons.length },
    { key: 'navigation', name: 'Navigation', count: iconCategories.navigation.length },
    { key: 'actions', name: 'Actions', count: iconCategories.actions.length },
    { key: 'communication', name: 'Communication', count: iconCategories.communication.length },
    { key: 'user', name: 'User & Account', count: iconCategories.user.length },
    { key: 'media', name: 'Media', count: iconCategories.media.length },
    { key: 'files', name: 'Files & Folders', count: iconCategories.files.length },
    { key: 'status', name: 'Status & Alerts', count: iconCategories.status.length },
    { key: 'time', name: 'Time & Calendar', count: iconCategories.time.length },
    { key: 'commerce', name: 'Commerce', count: iconCategories.commerce.length },
    { key: 'social', name: 'Social', count: iconCategories.social.length },
    { key: 'tools', name: 'Tools', count: iconCategories.tools.length },
    { key: 'development', name: 'Development', count: iconCategories.development.length },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>React Icon Libraries Comparison</h1>
        <p>Compare 15 popular icon libraries side by side • {allIcons.length} icons across {categories.length - 1} categories</p>
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

      <div className="category-filter">
        <h2>Filter by Category</h2>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`category-btn ${selectedCategory === cat.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.name} <span className="count">({cat.count})</span>
            </button>
          ))}
        </div>
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
              {displayIcons.map((icon, index) => (
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

      <footer className="footer">
        <p>💡 Tip: Hover over icons in the table to see them enlarge!</p>
        <p>All libraries are tree-shakeable when properly imported. Bundle size will depend on how many icons you use.</p>
        <p>Showing {displayIcons.length} icons from {selectedCategory === 'all' ? 'all categories' : categories.find(c => c.key === selectedCategory)?.name}</p>
      </footer>
    </div>
  );
};

export default App;
