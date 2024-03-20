import { useRef, useState } from 'react';
import './App.css';
import { clickNewNav, clickTopFilter, clickTopic, clickTopNav, clickUnreadNav, findTopicAll } from './utils';
import { delay } from './utils/delay';
import { readTopic } from './utils/readTopic';

// 记录热门话题当前读取的索引
let count = 0;

function App() {
  const startRef = useRef(false);
  const [start, setStart] = useState(false);

  const onNewTask = async () => {
    if (startRef.current) {
      await delay(3e3);
      const topicAll = findTopicAll();
      if (topicAll && topicAll.length > 0) {
        const [firstTopic] = topicAll;
        clickTopic(firstTopic);
        await delay(3e3);
        await readTopic();
        await onNewTask();
      } else {
        console.log('[linux.do auto tools] no new topic ...');
      }
    }
  };

  const onUnreadTask = async () => {
    if (startRef.current) {
      await delay(3e3);
      const topicAll = findTopicAll();
      if (topicAll && topicAll.length > 0) {
        const [firstTopic] = topicAll;
        clickTopic(firstTopic);
        await delay(3e3);
        await readTopic();
        await onUnreadTask();
      } else {
        console.log('[linux.do auto tools] no unread topic ...');
      }
    }
  };

  const onTopTask = async () => {
    if (startRef.current) {
      await delay(1e3);
      const topicAll = findTopicAll();
      const len = topicAll.length;
      if (len > 0 && count < len) {
        const topic = topicAll[count];
        window.scrollTo(0, topic.offsetTop - 100);
        clickTopic(topic);
        count++;
        await delay(3e3);
        await readTopic();
        await onTopTask();
      } else {
        count = 0;
        console.log('[linux.do auto tools] no top topic ...');
      }
    }
  };

  const onStartTask = async () => {
    if (startRef.current) {
      console.log('[linux.do auto tools] start new task ...');
      await delay(2e3);
      clickNewNav();
      await onNewTask();
    }

    if (startRef.current) {
      console.log('[linux.do auto tools] start unread task ...');
      await delay(2e3);
      clickUnreadNav();
      await onUnreadTask();
    }

    if (startRef.current) {
      console.log('[linux.do auto tools] start top task ...');
      await delay(2e3);
      clickTopNav();
      await delay(3e3);
      await clickTopFilter();
      await onTopTask();
    }

    console.log('[linux.do auto tools] finished task ...');
  };

  const onToggle = () => {
    setStart((prevState) => {
      startRef.current = !prevState;
      return !prevState;
    });
    setTimeout(onStartTask, 0);
  };

  return (
    <div className='w-12 h-12 fixed bottom-1/2 right-4 rounded-full z-999 cursor-pointer bg-black/60'>
      <div className='w-full h-full flex justify-center items-center'>
        <span onClick={onToggle}>{start ? '停止' : '启动'}</span>
      </div>
    </div>
  );
}

export default App;
