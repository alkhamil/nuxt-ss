<template>
  <div>
    <h1>Index</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus neque doloribus officiis harum autem, quo fugit porro eveniet at culpa!</p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: "Judul Home",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Halaman home",
        },
      ],
    };
  },
}
</script>
