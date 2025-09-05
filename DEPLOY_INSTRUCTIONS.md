# 🚀 Instruções para Deploy do Sushilay

## 1. Criar Repositório no GitHub

### Passo a passo:
1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository" (botão verde)
3. Nome do repositório: `sushilay`
4. Descrição: `Sushilay - Restaurante Japonés en Santa Cruz de la Sierra`
5. Deixe como **Público**
6. **NÃO** marque "Add a README file"
7. **NÃO** marque "Add .gitignore"
8. **NÃO** marque "Choose a license"
9. Clique em "Create repository"

### Depois de criar o repositório, execute no terminal:

```bash
# Remover o remote atual (se existir)
git remote remove origin

# Adicionar o novo remote (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/sushilay.git

# Fazer o push
git push -u origin main
```

## 2. Deploy no EasyPanel

### Configurações:
1. **Nome do projeto**: `sushilay`
2. **Repositório**: `https://github.com/SEU_USUARIO/sushilay.git`
3. **Branch**: `main`
4. **Dockerfile**: Usar o Dockerfile incluído no projeto
5. **Porta**: `3000`
6. **Domínio**: `sushilay.com` (ou o domínio que você preferir)

### Variáveis de ambiente:
```
NODE_ENV=production
PORT=3000
```

### Recursos:
- **CPU**: 0.5 cores
- **RAM**: 512MB
- **Storage**: 1GB

## 3. Verificar Deploy

Após o deploy, acesse:
- **URL do EasyPanel**: `https://sushilay.com`
- **WhatsApp**: +591 629 86325
- **Instagram**: @sushilay_scz

## 4. SEO e Performance

O site já está otimizado com:
- ✅ Meta tags completas
- ✅ Schema markup
- ✅ Open Graph
- ✅ PWA manifest
- ✅ Favicons para todos os dispositivos
- ✅ Mobile-first design
- ✅ Performance otimizada

## 5. Monitoramento

Após o deploy, monitore:
- **Google Search Console** - Para SEO
- **Google Analytics** - Para tráfego
- **EasyPanel Dashboard** - Para performance
- **WhatsApp Business** - Para pedidos

---

**🎯 Objetivo**: Ranking #1 no Google para "sushi santa cruz" e "delivery sushi santa cruz"

**📱 Foco**: Mobile-first para o mercado boliviano

**🍣 Resultado**: Mais pedidos via WhatsApp e maior visibilidade online
