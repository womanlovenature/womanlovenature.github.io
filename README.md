# Jednoduchá Jekyll webovka pro GitHub Pages

Tento balíček obsahuje minimální web postavený na Jekyllu s předpřipraveným
GitHub tématem **Cayman**.

## Licence
© 2026. Práva vyhrazena vlastníkem repozitáře. Více informací viz soubor [LICENSE](LICENSE).

## Soubory

- `_config.yml` – konfigurace webu a nastavení tématu
- `index.md` – hlavní (uvítací) stránka webu

## Rychlé spuštění na GitHubu

1. Vytvoř nový repozitář na GitHubu (např. `muj-web`).
2. Nahraj do něj oba soubory (`_config.yml`, `index.md`) do kořenové
   složky repozitáře.
3. Jdi do **Settings → Pages**.
4. U "Build and deployment" vyber **Source: Deploy from a branch**,
   větev `main`, složku `/ (root)`.
5. Ulož a počkej pár minut – GitHub ti vygeneruje odkaz na hotový web
   (obvykle `https://tvoje-uzivatelske-jmeno.github.io/muj-web/`).

## Jak změnit téma

GitHub Pages podporuje i další hotová témata bez nutnosti cokoliv
instalovat – stačí v `_config.yml` změnit řádek `theme:` na jedno z:

- `jekyll-theme-cayman` (aktuálně použité)
- `jekyll-theme-minimal`
- `jekyll-theme-slate`
- `jekyll-theme-architect`
- `jekyll-theme-hacker`
- `jekyll-theme-midnight`
- `jekyll-theme-tactile`
- `jekyll-theme-dinky`

## Lokální testování (volitelné)

Pokud chceš web vidět i mimo GitHub, potřebuješ Ruby a Jekyll:

```bash
gem install bundler jekyll
bundle exec jekyll serve
```

Web pak poběží na `http://localhost:4000`.
