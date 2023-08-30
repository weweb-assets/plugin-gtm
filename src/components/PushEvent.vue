<template>
    <wwEditorInputRow
        label="Event"
        type="query"
        :model-value="event"
        placeholder="Enter the event"
        bindable
        @update:modelValue="setEvent"
    />
</template>

<script>
export default {
    props: {
        plugin: { type: Object, required: true },
        args: { type: Object, required: true },
    },
    emits: ['update:args'],
    computed: {
        event() {
            return this.args.event;
        },
    },
    methods: {
        setEvent(event) {
            this.$emit('update:args', { ...this.args, event });
        },
    },
};
</script>
