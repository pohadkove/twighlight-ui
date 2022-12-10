<script>
	import Card from "$lib/Card.svelte";


</script>
<slot />
<footer class="footer">
<Card  Color="primary" Width="100%">
    <span>Made by pohadkove</span>
    <span style="float: right;">Color scheme from <a rel="noreferrer" target="_blank" style="text-decoration:underline;" href="https://lospec.com/palette-list/twilight-5">lospec.com/palette-list/twilight-5</a></span>
</Card>
</footer>
<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>