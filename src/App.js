import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import TodoItem from './components/TodoItem';
import Form from './components/Form';
import {
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import TodoForm from './components/TodoForm';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];
function App() {
  return (
    <div className="mx-auto bg-gray-100">
      {/* <Header />
      <Body />
      {solutions.map((item) => (
        <TodoItem key={item.name} dataItem={item} />
      ))}
      <Form /> */}
      <TodoForm />
    </div>
  );
}

export default App;
