<script>
export let Width = '';
export let Color = '';
export let Margin = '';
</script>
<div class="card {Color}" style="margin:{Margin}; width: {Width};" >
  <slot />
</div>
<style>
    .card{
    border-radius: 2px;
    box-shadow: 2px var(--body-accent);
    display: block;
    padding: .75rem;
    overflow-wrap:break-word;
    box-sizing: border-box;
    }
</style>