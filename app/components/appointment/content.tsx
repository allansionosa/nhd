import React from 'react';
import ChooseBranch from './choose-branch';
import ChoosePackage from './choose-package';
import DateTime from './date-time';

interface ContentTypes {
  id: number;
  content: React.ReactNode;
}

const contents = [
  {
    id: 1,
    content: <ChooseBranch />,
  },
  {
    id: 2,
    content: <ChoosePackage />,
  },
  {
    id: 3,
    content: <DateTime />,
  },
];

export default function Content({ current }: { current: number }) {
  const currentContent = contents.filter((content) => content.id === current);
  return currentContent.map((i) => <div key={i.id}>{i.content}</div>);
}
