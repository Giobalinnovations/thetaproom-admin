import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  CheckCircle,
  Clock1,
  Loader,
} from 'lucide-react';

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export const statuses = [
  {
    value: 'incomplete',
    label: 'Incomplete',
    icon: Clock1,
  },
  {
    value: 'pending payment',
    label: 'Pending payment',
    icon: Clock1,
  },

  {
    value: 'pending',
    label: 'Pending',
    icon: Clock1,
  },
  {
    value: 'under process',
    label: 'Under process',
    icon: Loader,
  },
  {
    value: 'verify',
    label: 'Verify',
    icon: BadgeCheck,
  },
  {
    value: 'visa sent',
    label: 'Visa sent',
    icon: CheckCircle,
  },
];

export const priorities = [
  {
    label: 'Normal',
    value: 'Normal',
    icon: ArrowDown,
  },
  {
    label: 'Urgent',
    value: 'Urgent',
    icon: ArrowRight,
  },
  {
    label: 'Rush',
    value: 'Rush',
    icon: ArrowUp,
  },
];

export const lastExitStepUrls = [
  {
    label: '/visa/step-two',
    value: '/visa/step-two',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-three',
    value: '/visa/step-three',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-four',
    value: '/visa/step-four',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-five',
    value: '/visa/step-five',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-six',
    value: '/visa/step-six',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-seven',
    value: '/visa/step-seven',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-eight',
    value: '/visa/step-eight',
    icon: ArrowDown,
  },
  {
    label: 'notFound',
    value: 'notFound',
    icon: ArrowDown,
  },
];
