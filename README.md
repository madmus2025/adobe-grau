# adobe-grau

Ein Farb-Theme für Claude Code in der Desktop-App: neutrales Mittel-Dunkelgrau in der Art der Adobe-Desktop-Programme, nicht schwarz und nicht hellgrau, mit blauem Akzent.

| Rolle | Farbe |
| --- | --- |
| Seite | `#323232` |
| Karten | `#363636` |
| Panels und Menüs | `#3a3a3a` |
| Text | `#f0f0f0` |
| Akzent | `#2680eb` |

Das Theme ist nur dunkel angelegt und gilt auch, wenn die App auf hell steht. Terminal und Editoren zeichnen kein Theme.

## Installieren

Am Prompt einer Terminal-Sitzung von Claude Code:

```
/plugin install adobe-grau --marketplace madmus2025/adobe-grau
```

Danach `y` eingeben, um den Marketplace hinzuzufügen, und einen Geltungsbereich wählen (Enter für „user“).

Aus einer Shell:

```
claude plugin install adobe-grau --marketplace madmus2025/adobe-grau
```

In der Desktop-App, wo `/plugin` nicht läuft: auf + neben dem Eingabefeld klicken, dann Plugins, „Add marketplace“ mit `madmus2025/adobe-grau`, dann „Add plugin“.

## Farben ändern

Die Farben stehen in `hooks/register.ts`. `hooks/make-colors.js` erzeugt daraus das vollständige Theme und bleibt unverändert.

Dieses Projekt steht in keiner Verbindung zu Adobe.
