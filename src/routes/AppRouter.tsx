import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/Home";
import GeneralLayout from "../app/layouts/GeneralLayout";
import AdminLayout from "../app/layouts/AdminLayout";
import AppRoutes from "./AppRoutes";
import AdminPage from "../app/pages/dashboard/admin/AdminPage";
import { ClientPage } from "../app/pages/dashboard/client/ClientPage";
import SupervisorPage from "../app/pages/dashboard/supervisor/SupervisorPage";
import ParentPage from "../app/pages/dashboard/parent/ParentPage";
import Dashboard from "../app/pages/dashboard/Dashboard";
import StudentPage from "../app/pages/dashboard/client/StudentPage";
import TeacherPage from "../app/pages/dashboard/supervisor/TeacherPage";
import TeacherList from "../app/pages/dashboard/supervisor/Teacherlist";
// import AppRoutes from "./AppRoutes";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <GeneralLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]        
    },
    {
        path: '/dashboard',
        element: <AdminLayout/>,
        children :[
            {
                path: AppRoutes().dashboard.home.parentRoute,
                element: <Dashboard/>
            },
            {
                path: AppRoutes().dashboard.admin.parentRoute,
                element: <AdminPage/>
            },
            {
                path: AppRoutes().dashboard.client.parentRoute,
                element: <ClientPage/>
            },
            {
                path: AppRoutes().dashboard.student.parentRoute,
                element: <StudentPage/>
            },
            {
                path: AppRoutes().dashboard.teacher.teacherPage.parentRoute,
                element: <TeacherPage/>
            },
            {
                path: AppRoutes().dashboard.teacher.list.parentRoute,
                element: <TeacherList/>
            },
            {
                path: AppRoutes().dashboard.supervisor.parentRoute,
                element: <SupervisorPage/>
            },
            {
                path: AppRoutes().dashboard.parent.parentRoute,
                element: <ParentPage/>
            },
        ]
    },
    {
        path: '*',
        element: <>Not FOund</>
    },

]);

export default AppRouter;