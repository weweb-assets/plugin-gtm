export default {
    editor: {
        settings: {
            edit: () => import('./src/components/SettingsEdit.vue'),
            summary: () => import('./src/components/SettingsSummary.vue'),
            getIsValid(settings) {
                return !!settings.publicData.containerIdProd;
            },
            onSave: 'onLoad'
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
    ],
};
