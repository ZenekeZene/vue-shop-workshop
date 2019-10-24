<template>
  <header>
    <h1>My shop</h1>
    <article class="cart">
      <span class="icon"></span>
    </article>
  </header>
</template>

<script>

export default {
  name: "HeaderItem",
};
</script>
<style scoped lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #f9f9f9;
		text-align: left;

	}

	h1 {
		max-width: 45rem;
		width: 100%;
		margin: 0 auto;
	}
</style>
