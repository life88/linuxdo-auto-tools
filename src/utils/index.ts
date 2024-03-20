import { delay } from './delay';

export function checkNewPage() {
  return window.location.pathname === '/new';
}

export function checkUnreadPage() {
  return window.location.pathname === '/unread';
}

export function checkTopicPage() {
  return /^\/t\/topic\/(\d)+/.test(window.location.pathname);
}

export function clickNewNav() {
  const newNav = document.querySelectorAll<HTMLAnchorElement>('#navigation-bar li.new.ember-view >a');
  if (newNav && newNav.length > 0) {
    const [firstNav] = newNav;
    firstNav.click();
  }
}

export function clickUnreadNav() {
  const unreadNav = document.querySelectorAll<HTMLAnchorElement>('#navigation-bar li.unread.ember-view >a');
  if (unreadNav && unreadNav.length > 0) {
    const [firstNav] = unreadNav;
    firstNav.click();
  }
}

export function clickAllDateFilter() {
  const dateFilter = document.querySelectorAll<HTMLAnchorElement>(
    '#list-area .top-lists .select-kit-collection >li.select-kit-row[data-value="all"]'
  );
  if (dateFilter && dateFilter.length > 0) {
    const [firstFilter] = dateFilter;
    firstFilter.click();
  }
}

export function clickSortPosts() {
  const sortable = document.querySelectorAll<HTMLAnchorElement>('#list-area .topic-list.ember-view th.posts.sortable');
  if (sortable && sortable.length > 0) {
    const [firstSortable] = sortable;
    firstSortable.click();
  }
}

export async function clickTopFilter() {
  const dropdown = document.querySelectorAll<HTMLDetailsElement>(
    '#list-area .top-lists >.select-kit.dropdown-select-box >.select-kit-header.dropdown-select-box-header'
  );
  if (dropdown && dropdown.length > 0) {
    const [firstDropdown] = dropdown;
    firstDropdown.click();
    await delay(3e3);
    clickAllDateFilter();
    await delay(3e3);
    clickSortPosts();
  }
}

export function clickTopNav() {
  const topNav = document.querySelectorAll<HTMLAnchorElement>('#navigation-bar li.top.ember-view >a');
  if (topNav && topNav.length > 0) {
    const [firstNav] = topNav;
    firstNav.click();
  }
}

export function findTopicAll() {
  const topicAll = document.querySelectorAll<HTMLAnchorElement>(
    '#list-area .topic-list-body >.topic-list-item .raw-link.raw-topic-link'
  );
  return topicAll;
}

export function clickTopic(topic: HTMLElement) {
  topic.click();
}
