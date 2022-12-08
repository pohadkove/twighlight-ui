<script>
    export let Img = '';
    export let Size = '';
    export let Style = '';
    export let Alt = '';
</script>
    <img  class="Avatar {Style} {Size}" src="{Img}" alt="{Alt}">
<style>
.Avatar{
    border-radius: 50%;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
}
.Avatar:hover{
   filter: brightness(80%);
}
:global(.xl){
    width: 64px;
    height: 64px;
}
:global(.lg){
    width: 48px;
    height: 48px;
}
:global(.sm){
    width: 24px;
    height: 24px;
}
:global(.xs){
    width: 16px;
    height: 16px;
}
.outlined{
    border-width: 3px;
    border-style: solid;
    transition-duration:0.3s;
}
</style>