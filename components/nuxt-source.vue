<script setup>
const props = defineProps({
  src: String,
  media: String,
  sizes: String,
});

const img = useImage()

const cSizes = computed(() =>
  img.getSizes(props.src, {
    sizes: props.sizes,
  })
);
</script>

<template>
  <source :media="media" :srcset="cSizes.srcset" :sizes="cSizes.sizes" />
</template>
