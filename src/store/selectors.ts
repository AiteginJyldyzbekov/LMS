import { useAppSelector } from '../hooks/hook';

export const useSelectorGroups = () => useAppSelector((state) => state.group);

export const useSelectorMentors = () =>
  useAppSelector((state) => state.mentors);
