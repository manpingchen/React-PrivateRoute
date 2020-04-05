import FEC from '../containers/FEC';
import AccountCenter from '../containers/AccountCenter';

const routes = [
    {
        component: FEC,
        path: '/fec',
        breadcrumbName: 'Home',
        routes: [
            {
                path: '/account_center',
                component: AccountCenter,
                breadcrumbName: 'Account Center'
            },
        ]
    }
]
export default routes;