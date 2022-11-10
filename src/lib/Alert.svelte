<script>
    	export let Color = '';
</script>
<label>
    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
    <div class="alert info {Color}">
      <span class="alertClose">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--btn-font)" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
      </span>
    
      <span class="alertText">
        <slot />  
        </span>
  
    </div>
  </label>
<style>
    .alert {
  position: relative;
  top: 10;
  left: 0;
  width: auto;
  height: auto;
  padding: 10px;
  border-radius: 2px;
  margin: 5px 0px 5px 0px;
}

.alertCheckbox {
  display: none;
}

.alertCheckbox:checked + .alert {
  display: none;
}

.alertText {
  margin: 0 auto;
  color: var(--btn-font);
}

.alertClose {
  float: right;
  padding-top: 1px;
  cursor: pointer;
}
:global(.alert a){
    color: var(--btn-font);
}
</style>