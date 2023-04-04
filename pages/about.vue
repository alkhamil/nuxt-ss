<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, odio!
      Lorem ipsum dolor sit.
    </p>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "Judul About",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Halaman about",
        },
      ],
    };
  },
};
</script>
