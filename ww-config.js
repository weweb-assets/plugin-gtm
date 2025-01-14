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
            copilot: {
                description: 'Pushes a custom event to Google Tag Manager dataLayer with specified variables',
                returns: 'void',
                schema: {
                    event: {
                        type: 'array',
                        description: 'Array of key-value pairs representing GTM variables',
                        items: {
                            key: {
                                type: 'string',
                                description: 'Name of the GTM variable',
                                bindable: true
                            },
                            value: {
                                type: 'string',
                                description: 'Value of the GTM variable',
                                bindable: true
                            }
                        }
                    }
                }
            },
            /* wwEditor:end */
            getIsValid({ event }) {
                return !!event;
            },
        },
    ],
};