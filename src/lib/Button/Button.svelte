<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  import classNames from 'classnames/bind';
  import style from './style.module.scss';
  const cx = classNames.bind(style);

  export let as: string | undefined;

  export let events: Array<EventReceiver> = [];

  const ELEMENT = as ?? 'button';

  let componentElement: HTMLElement | null = null;

  onMount(() => {
    events.forEach(({ event, eventHandler, option }) => {
      componentElement?.addEventListener(event, eventHandler, option);
    });
  });

  onDestroy(() => {
    events.forEach(({ event, eventHandler, option }) => {
      componentElement?.removeEventListener(event, eventHandler, option);
    });
  });
</script>

<svelte:element
  this="{ELEMENT}"
  {...$$restProps}
  class="{cx($$restProps.class)}"
  bind:this="{componentElement}"
>
  <slot />
</svelte:element>
