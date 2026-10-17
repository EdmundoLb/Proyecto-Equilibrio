import {
  BookOpen,
  Brain,
  Building2,
  CalendarCheck,
  ClipboardList,
  Compass,
  HandHeart,
  Heart,
  Hospital,
  House,
  LifeBuoy,
  MessagesSquare,
  Phone,
  RefreshCcw,
  Route,
  Search,
  ShieldCheck,
  Smartphone,
  Sprout,
  Star,
  Stethoscope,
  Sun,
  Users,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'
import React from 'react'

import type { IconName } from '@/fields/icon'

const icons: Record<IconName, LucideIcon> = {
  book: BookOpen,
  brain: Brain,
  building: Building2,
  calendar: CalendarCheck,
  chat: MessagesSquare,
  clipboard: ClipboardList,
  compass: Compass,
  family: UsersRound,
  handHeart: HandHeart,
  heart: Heart,
  home: House,
  hospital: Hospital,
  lifebuoy: LifeBuoy,
  phone: Phone,
  refresh: RefreshCcw,
  route: Route,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sprout: Sprout,
  star: Star,
  stethoscope: Stethoscope,
  sun: Sun,
  users: Users,
}

export const Icon: React.FC<{ name?: string | null; className?: string }> = ({
  name,
  className,
}) => {
  const Component = name ? icons[name as IconName] : undefined
  if (!Component) return null
  return <Component aria-hidden className={className} strokeWidth={1.75} />
}
