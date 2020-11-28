//import Temp from './components/Temp'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer // is this enhancement applied in server-rendering or client
}) => {
    router.addRoutes([
        // shim old firmware endpoint to {somewhere}
        {
            path: '/compiled/:filename',
            beforeEnter(to) {
                location.href = 'https://qmk.fm/compiled/' + to.params.filename
            }
        }
    ])
}