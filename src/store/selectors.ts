import { useAppSelector } from '../hooks/hook';

export const useSelectorGroups = () =>
  useAppSelector((state) => state.group.groups);

export const useSelectorMentors = () => useAppSelector((state) => state.mentor);

export const useSelectorAllStudents = () =>
  useAppSelector((state) => state.student.students);

export const useSelectorGroup = () =>
  useAppSelector((state) => state.group.detailGroup);
