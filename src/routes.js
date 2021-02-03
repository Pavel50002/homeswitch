import VueRouter from 'vue-router';
import BodySwitch from "@/components/BodySwitch";
import Authorized from "@/components/Authorized";
import Info from "@/components/Info";
import App from "@/App";


let routes = [
    {
        path: '/',
        component: Authorized
    },
    {
        path: '/device',
        component: BodySwitch, App
    },
    {
        path: '/info',
        component: Info,
    },
    // {
    //     path: '/email',
    //     component: Email, props: true,
    //     // children: [
    //     //     {
    //     //         path: '/emailbox',props: true,
    //     //         component: EmailBox
    //     //     }
    //     //     ]
    //
    // }

];

export default new VueRouter({routes});