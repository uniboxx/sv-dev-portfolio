<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    onclick: (e: MouseEvent) => void;
    className?: string;
  }
  const { children, className, ...props }: Props = $props();
</script>

<button {...props} class={`btn ${className}`}>{@render children?.()}</button>

<style>
  .btn {
    font-family: inherit;
    font-weight: 500;
    background-color: var(--foreground);
    color: var(--background);
    font-size: 1.2rem;
    padding: 14px 40px;
    border-radius: 10px;
    &:hover,
    &:focus {
      background-color: var(--background);
      color: var(--foreground);
      border: 1px solid var(--foreground);
    }
  }
  .nav-bar {
    padding: 10px 24px;
    font-size: 1rem;
  }
</style>
