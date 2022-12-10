<script>export let Color = '';
export let target = null;
export let href = null;
export let rel = null;
</script>

{#if href}
  <a
	{target}
    {href}
    {rel}
  >
    <button
      class="btn {Color}"
      on:click
      on:focus
    >
      <slot />
    </button>
  </a>
{:else}
  <button
  	class="btn {Color}"
    on:click
    on:focus
  >
    <slot />
  </button>
{/if}
<style>
	.btn {
		display: inline-flex;
        padding: .80rem;
		margin-top: 0.5rem;
		color: var(--btn-font);
		font-size: 1.125rem;
		line-height: 1.75rem;
		align-items: center;
        border-radius: 9999999px;
        transition-duration: .2s;
		border:none;
		cursor:pointer;
		scale:100%;
	}
    .btn:active{
        scale: 95%;
    }
    .btn:hover{
        opacity: 90%;
    }
</style>
