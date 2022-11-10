<script>
	import Alert from '$lib/Alert.svelte';
import Avatar from '$lib/Avatar.svelte';
import Button from '$lib/Button.svelte';
	import Card from '$lib/Card.svelte';
	import Fab from '$lib/Fab.svelte';
	import '$lib/Main.css';
</script>
<main class="elements">
<Alert Color="primary">
  <div style="text-align:center;">Alert!</div>
</Alert>
<Alert Color="secondary">
  <div style="text-align:center;">
    <a href="https://sidebar.io/" target="_blank">LINK</a>
    <br>
    <br>
    <br>
    <br>
  </div>
</Alert>
<Button Color="primary">Button</Button>
<Button Color="secondary">Button</Button>
<Button Color="secondary2">Button</Button>
<Button Color="accent">Button</Button>
<Fab Color="primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg>
</Fab>
<Avatar Img="https://cdn-images.win.gg/wp/uploads/2022/08/image-22.png" Size="lg" />
<Avatar Img="https://cdn-images.win.gg/wp/uploads/2022/08/image-22.png" Style="outlined primary-border" Size="xl" />
<Card Margin="2px" Color="secondary2" Width="fit-content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea reprehenderit voluptatem pariatur commodi quae aspernatur, molestias laboriosam, in nisi est excepturi aliquid corporis. Officia tempora veritatis debitis labore quo est!
</Card>
</main>
<style>
.elements{
  padding: 5px;
}
</style>