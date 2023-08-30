/* wwEditor:start */
import './components/SettingsEdit.vue';
import './components/SettingsSummary.vue';
import './components/PushEvent.vue';
// import './components/SetOptions.vue';
// import './components/GetValue.vue';
// import './components/Consent.vue';
/* wwEditor:end */

export default {
    containerId: null,
    async onLoad(settings) {
        this.containerId = settings.publicData.containerId;
        if (!this.containerId) return;
        wwLib.getFrontWindow().dataLayer = wwLib.getFrontWindow().dataLayer || [];
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(wwLib.getFrontWindow(),wwLib.getFrontDocument(),'script','dataLayer',this.containerId);
    },
    /*=============================================m_ÔÔ_m=============================================\
        Gtag API
    \================================================================================================*/
    pushEvent({ event, eventOptions = {} }) {
        /* wwEditor:start */
        if (!this.containerId) throw new Error('Container ID is missing.');
        /* wwEditor:end */
        if (!this.containerId) return;
        wwLib.getFrontWindow().dataLayer.push({...event});
    },
};
