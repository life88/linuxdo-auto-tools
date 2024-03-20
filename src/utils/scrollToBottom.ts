import { delay } from './delay';

export async function scrollToBottom() {
  const isBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight;

  if (!isBottom) {
    const random = (Math.random() * 4 + 6) * 0.1;
    window.scrollBy(0, Math.ceil(window.innerHeight * random));
    await delay(2e3);
    await scrollToBottom();
  } else {
    await delay(2e3);
    console.log('[linux.do auto tools] scroll to bottom ...');
    window.history.back();
  }
}
