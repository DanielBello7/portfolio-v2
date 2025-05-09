'use client';
import { usePortfolio } from '@/context/portfolio.context';
import classnames from 'classnames';

type Props = {
  selected: string;
  set: (val: string) => void;
};

export function Picker(props: Props) {
  const { portfolio } = usePortfolio();
  const options = portfolio.projects.flatMap((item) => item.tags);

  return (
    <div className="w-full flex space-x-2 mt-3">
      {options.map((item, idx) => (
        <div
          onClick={() => props.set(item)}
          key={idx}
          className={classnames(
            'capitalize rounded-full px-3 py-1 cursor-pointer hover:scale-[105%] text-sm',
            {
              'bg-indigo-600 text-white': props.selected === item,
              'bg-muted hover:bg-gray-200': props.selected !== item,
            }
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
