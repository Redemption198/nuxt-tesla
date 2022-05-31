<template>
  <header
    class="
      fixed
      top-0
      z-20
      w-full
      flex
      justify-between
      items-center
      text-zinc-900
      font-semibold
      px-4
      lg:px-10
      my-4
    "
  >
    <IconTeslaLogo class="w-32 h-auto" />
    <ol class="xl:flex items-center gap-2 text-sm hidden">
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

    <ol class="xl:flex items-center gap-2 text-sm hidden">
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
      class="
        text-sm
        px-4
        py-1.5
        bg-zinc-700/10
        rounded-xl
        xl:hidden
        backdrop-blur
      "
    >
      Menu
    </p>
  </header>
</template>