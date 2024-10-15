import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
      ? 'Pham Nguyen Hoang Quan | ' + title
      : 'Pham Nguyen Hoang Quan';
  }, [title]);
}
