<script>export let Color = '';
export let target = null;
export let href = null;
export let rel = null;
export let Round = null;
</script>

{#if href}
  <a
	  {target}
    {href}
    {rel}
  >
    <button
      class=" btn {Color} {Round}"
      on:click
      on:focus
    >
      <slot />
    </button>
  </a>
{:else}
  <button
  	class="btn {Color} {Round}"
    on:click
    on:focus
  >
    <slot />
  </button>
{/if}
<style>
  
	.btn {
		display: inline-flex;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-top: 0.5rem;
		color: var(--btn-font);
		font-size: 1.125rem;
		line-height: 1.75rem;
		align-items: center;
        border-radius: 2px;
        transition-duration: .2s;
		scale:100%;
		border:none;
		cursor:pointer;
	}
    .btn:active{
        scale: 95%;
    }
    .btn:hover{
        opacity: 90%;
    }
    
</style>
