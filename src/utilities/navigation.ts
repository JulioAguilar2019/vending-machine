import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { PublicRoutes } from '../models/routes.model';

export const navigation = [
  { name: 'Home', href: PublicRoutes.HOME, icon: HomeIcon, current: true },
  {
    name: 'Orders delivered',
    href: PublicRoutes.DELIVERED,
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: 'Pending orders',
    href: '/pending',
    icon: ClipboardDocumentCheckIcon,
    current: false,
  },
];
