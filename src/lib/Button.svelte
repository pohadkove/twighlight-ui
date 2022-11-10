<script>
	export let Color = '';
	export let Link = '';
	export let Target = '';
    export let Style ='';
</script>

<a class="{Color} btn" href={Link} target={Target} style="{Style}">
	<slot />
</a>

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
	}
    .btn:focus{
        scale: 95%;
    }
    .btn:hover{
        opacity: 90%;
    }
</style>
