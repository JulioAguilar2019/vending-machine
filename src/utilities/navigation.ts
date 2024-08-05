import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Orders delivered',
    href: '#',
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: 'Pending orders',
    href: '#',
    icon: ClipboardDocumentCheckIcon,
    current: false,
  },
];
