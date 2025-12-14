<template>
  <header
    class="fixed top-0 z-20 my-4 flex w-full items-center justify-between px-4 font-semibold text-zinc-900 lg:px-10"
  >
    <IconTeslaLogo class="h-auto w-32" />
      <ol class="hidden items-center gap-2 text-sm xl:flex">
      <HeaderItem>
        <a href="#model-s">Model S</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#model-3">Model 3</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#model-x">Model X</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#model-y">Model Y</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#solar-roof">Solar Roof</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#solar-panels">Solar Panels</a>
      </HeaderItem>
    </ol>

    <ol class="hidden items-center gap-2 text-sm xl:flex">
      <HeaderItem>
        <a href="#" @click.prevent aria-disabled="true" tabindex="0">Shop</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#" @click.prevent aria-disabled="true" tabindex="0">Account</a>
      </HeaderItem>
      <HeaderItem>
        <a href="#" @click.prevent aria-disabled="true" tabindex="0">Menu</a>
      </HeaderItem>
    </ol>
    <p
      class="rounded-xl bg-zinc-700/10 px-4 py-1.5 text-sm backdrop-blur xl:hidden"
    >
      Menu
    </p>
  </header>
</template>
