window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / window.innerHeight
      );
    },
    false
  );


