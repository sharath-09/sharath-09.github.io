# my-portfolio-app

This repo contains the code for my portfolio website/blog.

## Dev Set-up

Install dependencies

```sh
npm run install
```

and run a development server

```sh
npm run dev
```

## Deployment

To create a production version of the app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Adding a blog

Blogs are to be written in markdown files, using the template provided in `templates/`, obtained from [source](https://github.com/josh-collinsworth/sveltekit-blog-starter/blob/main/src/lib/posts/heading-links-example.md).

Images embedded into blogs are to be placed in `static/images/`.

## References

- [Sveltekit-docs](https://svelte.dev/)
- [mdsvex](https://mdsvex.pngwn.io/) for markdown rendering
- [Sveltekit-blog-starter](https://github.com/josh-collinsworth/sveltekit-blog-starter): Used as reference implementation for markdown files, and structure.
