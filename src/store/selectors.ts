import { useAppSelector } from '../hooks/hook';

export const useSelectorGroups = () => useAppSelector((state) => state.group);

export const useSelectorAllStudents = () =>
  useAppSelector((state) => state.allStudents);
