<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Use TanStack Router file routes with shared navigation definitions in `src/lib/site-config.ts`; this preserves framework-native type safety while centralizing all site links.
- The frontend submits lead forms to the external `VITE_API_URL`. The standalone `backend/` service owns `/api/leads` and MongoDB access; never connect to MongoDB from the browser.
