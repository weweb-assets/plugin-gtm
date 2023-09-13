<template>
    <wwEditorFormRow required label="Container ID">
        <template #append-label>
            <a class="ww-editor-link ml-2" href="https://support.google.com/tagmanager/answer/6103696?hl=en#:~:text=In%20Tag%20Manager%2C%20click%20Workspace,as%20%22GTM%2DXXXXXX%22" target="_blank">
                Find it here
            </a>
        </template>
        <wwEditorInputText
            type="text"
            name="container-id"
            placeholder="GTM-XXXXXXXX"
            :model-value="settings.publicData.containerId || ''"
            large
            @update:modelValue="changeContainerId"
        />
    </wwEditorFormRow>
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    methods: {
        changeContainerId(containerId) {
            this.$emit('update:settings', { ...this.settings, publicData: { containerId } });
        },
    },
};
</script>
