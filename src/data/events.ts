export type EventItem = {
  id: string;
  name: string;
  tagline: string;
};

export type Department = {
  id: string;
  label: string;
  events: EventItem[];
};

export const departments: Department[] = [
  {
    id: 'cse',
    label: 'CSE',
    events: [
      { id: 'csi-dev', name: 'CSI Development', tagline: 'Build under moonlight.' },
      { id: 'csi-bitwise', name: 'CSI Bitwise', tagline: 'Logic in the dark.' },
      { id: 'csi-botnet', name: 'CSI Botnet', tagline: 'Robotics haunt the lab.' },
      { id: 'vr-armr', name: 'VR / AR / MR', tagline: 'Step into another realm.' },
      { id: 'mozilla', name: 'Mozilla Club', tagline: 'Open web, open night.' },
      { id: 'rospinot', name: 'ROSPINOT', tagline: 'Pins, bots, and brews.' },
      { id: 'multimedia', name: 'CSI Multimedia', tagline: 'Frames that whisper.' },
      { id: 'gfg', name: 'GFG', tagline: 'Code till the witching hour.' },
    ],
  },
  {
    id: 'civil',
    label: 'Civil',
    events: [{ id: 'ce', name: 'CE Events', tagline: 'Structures that stand through storm.' }],
  },
  {
    id: 'chemical',
    label: 'Chemical',
    events: [{ id: 'che', name: 'Chemical Events', tagline: 'Reactions after dusk.' }],
  },
  {
    id: 'mechanical',
    label: 'Mechanical',
    events: [{ id: 'mes', name: 'MES Events', tagline: 'Gears turn in the fog.' }],
  },
  {
    id: 'electronics',
    label: 'Electronics',
    events: [{ id: 'isf', name: 'ISF Events', tagline: 'Signals in the static.' }],
  },
];

export type NavRoute = {
  path: string;
  label: string;
};

export const navRoutes: NavRoute[] = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/speakers', label: 'Speakers' },
  { path: '/merchandise', label: 'Merchandise' },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/contact', label: 'Contact' },
];
