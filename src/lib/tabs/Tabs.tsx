import { TabsProps } from '../types.ts';
import { useEffect, useRef, useState } from 'react';
import TabContext from '../context/TabContext.ts';

const Tabs = ({
  children,
  className,
  defaultFocus = false,
  defaultIdx = 0,
}: TabsProps) => {
  const [activeIdx, setActiveIdx] = useState<number | string>(defaultIdx);
  const initialTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (defaultFocus && initialTabRef.current) {
      initialTabRef.current.focus();
    }
  }, []);

  return (
    <TabContext.Provider value={{ activeIdx, setActiveIdx, initialTabRef, defaultIdx }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tabs;