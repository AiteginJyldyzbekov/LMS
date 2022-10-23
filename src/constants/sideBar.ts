import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export const admin = [
    {
        title: 'Mentors',
        Icon: SupervisorAccountIcon,
        puth: '/mentors',

    },
    {
        title: 'Groups',
        Icon: GroupsIcon,
        puth: '/groups',
    },
    {
        title: 'Students',
        Icon: GroupIcon,
        puth: '/students',
    },
]

export const mentor = [
    {
        title: 'Student Book',
        Icon: BookIcon,
        puth: '/student-book'
    },
    {
        title: 'Study Plan',
        Icon: LibraryBooksIcon,
        puth: '/study-plan'
    },
    {
        title: 'Home Works',
        Icon: HomeWorkIcon,
        puth: '/home-works'
    }
]

export const student = [
    {
        title: 'Groups',
        Icon: GroupsIcon,
        puth: '/groups'
    },
    {
        title: 'Study Plan',
        Icon: LibraryBooksIcon,
        puth: '/study-plan'
    },
    {
        title: 'Home Works',
        Icon: HomeWorkIcon,
        puth: '/home-works'
    }
]