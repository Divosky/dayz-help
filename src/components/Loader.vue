<template>
  <div class="loader">42O</div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped lang="scss">
.loader {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    border: 2px solid black;
    border-radius: 1rem;
    width: 32px;
    height: 32px;
    margin: var(--base-margin) auto;
    font-weight: 700;
    font-size: 75%;
    animation: loader 1s infinite ease-in-out;
}

@keyframes loader {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
}
</style>
