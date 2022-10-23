import students from '../../public/images/sideBar/students.png'
import mentors from '../../public/images/sideBar/mentors.png'
import groups from '../../public/images/sideBar/group.png'
import student_book from '../../public/images/sideBar/student_book.png'
import study_plan from '../../public/images/sideBar/study_plan.png'
import home_work from '../../public/images/sideBar/home_work.png'

export const admin = [
    {
        title: 'Mentors',
        img: mentors,
        puth: '/mentors',
        id: 0,
    },
    {
        title: 'Groups',
        img: groups,
        puth: '/groups',
        id: 1,
    },
    {
        title: 'Students',
        img: students,
        puth: '/students',
        id: 2,
    },
]

export const mentor = [
    {
        title: 'Student Book',
        img: student_book,
        puth: '/student-book'
    },
    {
        title: 'Study Plan',
        img: study_plan,
        puth: '/study-plan'
    },
    {
        title: 'Home Works',
        img: home_work,
        puth: '/home-works'
    }
]

export const student = [
    {
        title: 'Groups',
        img: groups,
        puth: '/groups'
    },
    {
        title: 'Study Plan',
        img: study_plan,
        puth: '/study-plan'
    },
    {
        title: 'Home Works',
        img: home_work,
        puth: '/home-works'
    }
]