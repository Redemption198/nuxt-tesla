<template>
  <header
    class="fixed top-0 z-20 my-4 flex w-full items-center justify-between px-4 font-semibold text-zinc-900 lg:px-10"
  >
    <IconTeslaLogo class="h-auto w-32" />
    <ol class="hidden items-center gap-2 text-sm xl:flex">
      <HeaderItem>
        <a href="">Model S</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Model 3</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Model X</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Model Y</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Solar Roof</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Solar Panels</a>
      </HeaderItem>
    </ol>

    <ol class="hidden items-center gap-2 text-sm xl:flex">
      <HeaderItem>
        <a href="">Shop</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Account</a>
      </HeaderItem>
      <HeaderItem>
        <a href="">Menu</a>
      </HeaderItem>
    </ol>
    <p
      class="rounded-xl bg-zinc-700/10 px-4 py-1.5 text-sm backdrop-blur xl:hidden"
    >
      Menu
    </p>
  </header>
</template>
