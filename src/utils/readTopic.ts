import { delay } from './delay';
import { checkTopicPage } from './index';
import { scrollToBottom } from './scrollToBottom';

export async function readTopic() {
  if (checkTopicPage()) {
    await scrollToBottom();
  } else {
    const random = Math.random() * 2 + 1;
    await delay(random);
    await readTopic();
  }
}
