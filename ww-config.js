export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.containerId;
            },
        },
    },
    actions: [
        {
            name: 'Push Event',
            code: 'pushEvent',
            /* wwEditor:start */
            edit: () => import('./src/components/PushEvent.vue'),
            /* wwEditor:end */
            getIsValid({ event }) {
                return !!event;
            },
        },
        // {
        //     name: 'Set Options',
        //     code: 'setOptions',
        //     /* wwEditor:start */
        //     edit: () => import('./src/components/SetOptions.vue'),
        //     getIsValid({ event }) {
        //         return !!event;
        //     },
        //     /* wwEditor:end */
        // },
        // {
        //     name: 'Get Value',
        //     code: 'getValue',
        //     /* wwEditor:start */
        //     edit: () => import('./src/components/GetValue.vue'),
        //     /* wwEditor:end */
        // },
        // {
        //     name: 'Consent',
        //     code: 'consent',
        //     /* wwEditor:start */
        //     edit: () => import('./src/components/Consent.vue'),
        //     /* wwEditor:end */
        // },
    ],
};
