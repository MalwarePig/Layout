<script setup>
import { Box, Layers, Clock, FileText, ArrowDownToLine, Save, ArrowRightToLine, ArrowDownToDot } from 'lucide-vue-next'

const props = defineProps({
    skin: {
        type: String,
        default: 'violet'
    },
    label: String,
    val: String,
    sub: String,
    icon: String,
})
</script>

<template>
    <div class="kpi" :class="`kpi-${props.skin}`">
        <div class="kpi-label">{{ props.label }}</div>
        <div class="kpi-val">{{ props.val }}</div>
        <div class="kpi-sub">{{ props.sub }}</div>
        <div class="kpi-deco">
            <component :is="props.icon" :size="56" />
        </div>
    </div>

</template>

<style scoped>
.kpi {
    border-radius: 12px;
    padding: 20px 24px;
    border: 1px solid;
    position: relative;
    overflow: hidden;
    box-shadow: var(--color-shadow-default);
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform 0.2s ease;
}

.kpi:hover {
    transform: translateY(-2px);
}

.kpi-violet {
    background: var(--kpi-v-bg);
    border-color: var(--kpi-v-bd);
}

.kpi-teal {
    background: var(--kpi-t-bg);
    border-color: var(--kpi-t-bd);
}

.kpi-amber {
    background: var(--kpi-a-bg);
    border-color: var(--kpi-a-bd);
}

.kpi-blue {
    background: var(--kpi-b-bg);
    border-color: var(--kpi-b-bd);
}

.kpi-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
}

.kpi-violet .kpi-label {
    color: var(--kpi-v-lbl);
}

.kpi-teal .kpi-label {
    color: var(--kpi-t-lbl);
}

.kpi-amber .kpi-label {
    color: var(--kpi-a-lbl);
}

.kpi-blue .kpi-label {
    color: var(--kpi-b-lbl);
}

.kpi-val {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
}

.kpi-violet .kpi-val {
    color: var(--kpi-v-val);
}

.kpi-teal .kpi-val {
    color: var(--kpi-t-val);
}

.kpi-amber .kpi-val {
    color: var(--kpi-a-val);
}

.kpi-blue .kpi-val {
    color: var(--kpi-b-val);
}

.kpi-sub {
    font-size: 13px;
    margin-top: 8px;
    font-weight: 500;
}

.kpi-violet .kpi-sub {
    color: var(--kpi-v-lbl);
}

.kpi-teal .kpi-sub {
    color: var(--kpi-t-lbl);
}

.kpi-amber .kpi-sub {
    color: var(--kpi-a-lbl);
}

.kpi-blue .kpi-sub {
    color: var(--kpi-b-lbl);
}

.kpi-deco {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.kpi-violet .kpi-deco {
    color: var(--kpi-v-lbl);
}

.kpi-teal .kpi-deco {
    color: var(--kpi-t-lbl);
}

.kpi-amber .kpi-deco {
    color: var(--kpi-a-lbl);
}

.kpi-blue .kpi-deco {
    color: var(--kpi-b-lbl);
}
</style>