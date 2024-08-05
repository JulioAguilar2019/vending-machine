import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { PublicRoutes } from '../models/routes.model';

export const navigation = [
  { name: 'Home', href: PublicRoutes.HOME, icon: HomeIcon },
  {
    name: 'Orders delivered',
    href: PublicRoutes.DELIVERED,
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Pending orders',
    href: PublicRoutes.PENDING,
    icon: ClipboardDocumentListIcon,
  },
];
