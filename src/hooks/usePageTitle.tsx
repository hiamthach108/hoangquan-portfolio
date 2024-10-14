import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title =  title ?  'Nguyen Cao Thien An | ' + title : 'Nguyen Cao Thien An';
  }, [title]);
}
