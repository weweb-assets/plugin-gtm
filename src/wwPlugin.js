/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
import './components/PushEvent.vue';
/* wwEditor:end */

export default {
    containerId: null,
    async onLoad(settings) {
        this.containerId = this.getCurrentContainer();
        if (!this.containerId) return;
        wwLib.getFrontWindow().dataLayer = wwLib.getFrontWindow().dataLayer || [];
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(wwLib.getFrontWindow(),wwLib.getFrontDocument(),'script','dataLayer',this.containerId);
    },
    /*=============================================m_ÔÔ_m=============================================\
        GTM API
    \================================================================================================*/
    pushEvent({ event }) {
        /* wwEditor:start */
        if (!this.containerId) throw new Error('Container ID is missing.');
        /* wwEditor:end */
        if (!this.containerId || !Array.isArray(event)) return;
        wwLib.getFrontWindow().dataLayer.push(
            event.reduce((result, variable) => ({...result, [variable.key]: variable.value}), {})
        );
    },

    getCurrentContainer() {
        switch (wwLib.globalContext.browser.environment) {
            case 'editor':
                return this.settings.publicData.containerIdEditor;
            case 'preview':
                return this.settings.publicData.containerIdProd;
            case 'staging':
                return this.settings.publicData.containerIdStaging;
            case 'production':
                return this.settings.publicData.containerIdProd;
            default:
                return null;
        }
    }
};
