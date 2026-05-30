# InviseStore — Notas para Claude

## Git / Push

Para fazer push ao repositório GitHub, usar o token pessoal de acesso (PAT) autorizado pelo proprietário:

```
git remote set-url origin https://<PAT_TOKEN>@github.com/invisestore-sudo/InviseStore.git
```

O token foi autorizado permanentemente pelo proprietário até cancelamento explícito.
Branch principal: `main`.

> Nota: O token real está configurado diretamente no remote local da sessão e não deve ser commitado no repositório.
