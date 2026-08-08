/* =========================================================
   BELLA MODAS — Lógica da loja
   ========================================================= */

// ---------- Dados da loja ----------
// Edite aqui: número de WhatsApp com DDI 55 + DDD, sem espaços/traços.
const LOJA = {
  whatsapp: "5519981165995",
};

// ---------- Eventos na loja ----------
// Edite, adicione ou remova eventos aqui. Deixe a lista vazia ([]) quando
// não houver nenhum evento programado — a seção mostra um aviso automático.
const EVENTOS = [
  {
    dataCurta: "SÁB",
    dataNumero: "8/8",
    tag: "Evento especial",
    titulo: "Visita da Jéssica — Furo Humanizado",
    descricao: "Aplicação de piercing e brincos com todo cuidado e segurança.",
    destaques: [],
  },
  {
    dataCurta: "SÁB",
    dataNumero: "8/8",
    tag: "Parceria",
    titulo: "Josi Boutique — Semijoias",
    descricao: "Venda especial de semijoias com Veridiana Quirino, direto na loja.",
    destaques: [],
  },
  {
    dataCurta: "Toda",
    dataNumero: "estação",
    tag: "Promoção",
    titulo: "Outono & Inverno em promoção",
    descricao: "Toda a coleção da estação com desconto no débito, crédito ou Pix.",
    destaques: ["10% off", "20% off", "30% off"],
  },
];

function renderizarEventos() {
  const grid = document.getElementById("eventoGrid");
  if (!grid) return;

  if (EVENTOS.length === 0) {
    grid.innerHTML = `<p class="eventos-vazio">Nenhum evento programado no momento. Fique de olho no nosso Instagram para as próximas novidades!</p>`;
    return;
  }

  grid.innerHTML = EVENTOS.map(
    (ev) => `
    <article class="evento-card">
      <div class="evento-data">
        <span class="evento-dia">${ev.dataCurta}</span>
        <span class="evento-numero">${ev.dataNumero}</span>
      </div>
      <div class="evento-info">
        <span class="evento-tag">${ev.tag}</span>
        <h3>${ev.titulo}</h3>
        <p>${ev.descricao}</p>
        ${
          ev.destaques.length
            ? `<ul class="evento-destaques">${ev.destaques
                .map((d) => `<li>${d}</li>`)
                .join("")}</ul>`
            : ""
        }
      </div>
    </article>
  `
  ).join("");
}

// ---------- Catálogo de produtos ----------
// Troque "img" pelas fotos reais dos produtos quando tiver.
// "tamanhos": tabela padrão usada por lojas de roupa (PP a XG).
// "tamanhosPlus": use nas peças plus size (G1 a G4) no lugar de "tamanhos".
// "imagens": pode ter 1 ou várias fotos — com mais de uma, o card ganha setinhas de navegação.
const TAMANHOS_PADRAO = ["PP", "P", "M", "G", "GG", "XG"];
const TAMANHOS_PLUS = ["G1", "G2", "G3", "G4"];

const PRODUTOS = [
  { id: 1, nome: "Camisa de Seda Rosé", categoria: "feminino", tags: ["novidade"], preco: 129.9, precoAntigo: null, cor: "e5147d", tamanhos: TAMANHOS_PADRAO },
  { id: 2, nome: "Vestido Midi Elegante", categoria: "feminino", tags: ["novidade"], preco: 229.9, precoAntigo: 279.9, cor: "b80f63", tamanhos: TAMANHOS_PADRAO },
  { id: 3, nome: "Calça Alfaiataria Feminina", categoria: "feminino", tags: [], preco: 179.9, precoAntigo: null, cor: "c9a24b", tamanhos: TAMANHOS_PADRAO },
  { id: 4, nome: "Blazer Estruturado", categoria: "feminino", tags: [], preco: 249.9, precoAntigo: 299.9, cor: "5c1a3a", tamanhos: TAMANHOS_PADRAO },
  { id: 5, nome: "Saia Plissada", categoria: "feminino", tags: ["novidade"], preco: 149.9, precoAntigo: null, cor: "f2a6c6", tamanhos: TAMANHOS_PADRAO },
  { id: 6, nome: "Blusa Cropped Tricot", categoria: "feminino", tags: [], preco: 99.9, precoAntigo: null, cor: "e5147d", tamanhos: TAMANHOS_PADRAO },
  { id: 7, nome: "Camisa Social Slim", categoria: "masculino", tags: ["novidade"], preco: 139.9, precoAntigo: null, cor: "2b1b24", tamanhos: TAMANHOS_PADRAO },
  { id: 8, nome: "Calça Jeans Masculina", categoria: "masculino", tags: [], preco: 179.9, precoAntigo: 209.9, cor: "5c1a3a", tamanhos: TAMANHOS_PADRAO },
  { id: 9, nome: "Jaqueta Bomber", categoria: "masculino", tags: ["novidade"], preco: 259.9, precoAntigo: null, cor: "2b1b24", tamanhos: TAMANHOS_PADRAO },
  { id: 10, nome: "Polo Piquet Masculina", categoria: "masculino", tags: [], preco: 109.9, precoAntigo: null, cor: "c9a24b", tamanhos: TAMANHOS_PADRAO },
  { id: 11, nome: "Bermuda Sarja", categoria: "masculino", tags: [], preco: 119.9, precoAntigo: null, cor: "5c1a3a", tamanhos: TAMANHOS_PADRAO },
  { id: 12, nome: "Suéter Gola Alta", categoria: "masculino", tags: ["novidade"], preco: 159.9, precoAntigo: 189.9, cor: "2b1b24", tamanhos: TAMANHOS_PADRAO },
  // Produtos com fotos reais enviadas pela loja — ajuste nome/preço/tamanhos como quiser.
  { id: 13, nome: "Conjunto Moletom Rosé", categoria: "feminino", tags: ["novidade"], preco: 219.9, precoAntigo: null, cor: "f2a6c6", tamanhos: TAMANHOS_PADRAO, imagens: ["produtos/conjunto-moletom-rose.jpg"] },
  { id: 14, nome: "Colete + Calça Pantalona Rosé", categoria: "feminino", tags: ["novidade"], preco: 259.9, precoAntigo: null, cor: "f2a6c6", tamanhos: TAMANHOS_PADRAO, imagens: ["produtos/colete-calca-rosa.jpg"] },
  { id: 15, nome: "Macacão Alfaiataria Bege", categoria: "feminino", tags: ["novidade"], preco: 249.9, precoAntigo: 289.9, cor: "c9a24b", tamanhos: TAMANHOS_PLUS, imagens: ["produtos/macacao-bege-1.jpg", "produtos/macacao-bege-2.jpg", "produtos/macacao-bege-3.jpg"] },
];

function imagensProduto(p) {
  if (p.imagens && p.imagens.length) return p.imagens;
  const nomeUrl = encodeURIComponent(p.nome);
  return [`https://placehold.co/450x600/${p.cor}/fbf1ef?text=${nomeUrl}`];
}

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ---------- Estado ----------
let filtroAtivo = "todos";
let termoBusca = "";
let carrinho = carregarCarrinho();
const tamanhoSelecionado = {}; // { produtoId: "M" }
const imagemAtual = {}; // { produtoId: indiceDaFoto }

function carregarCarrinho() {
  try {
    const salvo = localStorage.getItem("bellamodas_carrinho");
    return salvo ? JSON.parse(salvo) : [];
  } catch (e) {
    return [];
  }
}

function salvarCarrinho() {
  try {
    localStorage.setItem("bellamodas_carrinho", JSON.stringify(carrinho));
  } catch (e) {
    /* localStorage indisponível: carrinho segue funcionando só na sessão atual */
  }
}

// ---------- Renderização de produtos ----------
const grid = document.getElementById("produtoGrid");

function renderizarProdutos() {
  const lista = PRODUTOS.filter((p) => {
    const combinaFiltro =
      filtroAtivo === "todos" ||
      p.categoria === filtroAtivo ||
      p.tags.includes(filtroAtivo);
    const combinaBusca = p.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return combinaFiltro && combinaBusca;
  });

  if (lista.length === 0) {
    grid.innerHTML = `<p class="sem-resultado">Nenhum produto encontrado. Tente outra busca ou categoria.</p>`;
    return;
  }

  grid.innerHTML = lista
    .map((p) => {
      const imgs = imagensProduto(p);
      const indiceAtual = imagemAtual[p.id] || 0;

      return `
    <article class="produto-card">
      <div class="produto-thumb" data-thumb="${p.id}">
        ${p.tags.includes("novidade") ? '<span class="produto-tag">Novo</span>' : ""}
        <img src="${imgs[indiceAtual]}" alt="${p.nome}" data-img="${p.id}" loading="lazy" />
        ${
          imgs.length > 1
            ? `
          <button type="button" class="img-nav img-nav-prev" data-img-prev="${p.id}" aria-label="Foto anterior">&#8249;</button>
          <button type="button" class="img-nav img-nav-next" data-img-next="${p.id}" aria-label="Próxima foto">&#8250;</button>
          <div class="img-dots" data-dots="${p.id}">
            ${imgs.map((_, i) => `<span class="img-dot${i === indiceAtual ? " active" : ""}" data-dot-index="${i}"></span>`).join("")}
          </div>
        `
            : ""
        }
        <button class="produto-quick" data-add="${p.id}">Adicionar ao carrinho</button>
      </div>
      <div class="produto-info">
        <span class="produto-cat">${p.categoria === "feminino" ? "Feminino" : "Masculino"}</span>
        <h3>${p.nome}</h3>
        <div class="tamanho-select" data-produto-tamanhos="${p.id}">
          ${p.tamanhos
            .map(
              (t) =>
                `<button type="button" class="tamanho-btn" data-tamanho-btn="${p.id}" data-tamanho="${t}">${t}</button>`
            )
            .join("")}
        </div>
        <div class="produto-preco">
          <span class="preco-atual">${formatarPreco(p.preco)}</span>
          ${p.precoAntigo ? `<span class="preco-antigo">${formatarPreco(p.precoAntigo)}</span>` : ""}
        </div>
      </div>
    </article>
  `;
    })
    .join("");
}

function trocarImagem(id, novoIndice) {
  const imgs = imagensProduto(PRODUTOS.find((p) => p.id === id));
  const total = imgs.length;
  const indice = ((novoIndice % total) + total) % total;
  imagemAtual[id] = indice;

  const thumb = document.querySelector(`[data-thumb="${id}"]`);
  if (!thumb) return;
  thumb.querySelector(`[data-img="${id}"]`).src = imgs[indice];
  thumb.querySelectorAll(`[data-dots="${id}"] .img-dot`).forEach((dot, i) => {
    dot.classList.toggle("active", i === indice);
  });
}

grid.addEventListener("click", (e) => {
  const imgPrev = e.target.closest("[data-img-prev]");
  const imgNext = e.target.closest("[data-img-next]");
  if (imgPrev) {
    const id = Number(imgPrev.dataset.imgPrev);
    trocarImagem(id, (imagemAtual[id] || 0) - 1);
    return;
  }
  if (imgNext) {
    const id = Number(imgNext.dataset.imgNext);
    trocarImagem(id, (imagemAtual[id] || 0) + 1);
    return;
  }

  const tamanhoBtn = e.target.closest("[data-tamanho-btn]");
  if (tamanhoBtn) {
    const produtoId = tamanhoBtn.dataset.tamanhoBtn;
    tamanhoSelecionado[produtoId] = tamanhoBtn.dataset.tamanho;
    const grupo = tamanhoBtn.closest("[data-produto-tamanhos]");
    grupo.querySelectorAll(".tamanho-btn").forEach((b) => b.classList.remove("active"));
    tamanhoBtn.classList.add("active");
    return;
  }

  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  const id = Number(btn.dataset.add);
  const tamanho = tamanhoSelecionado[id];
  if (!tamanho) {
    mostrarToast("Escolha um tamanho antes de adicionar");
    const grupo = document.querySelector(`[data-produto-tamanhos="${id}"]`);
    if (grupo) {
      grupo.classList.add("tamanho-aviso");
      setTimeout(() => grupo.classList.remove("tamanho-aviso"), 900);
    }
    return;
  }
  adicionarAoCarrinho(id, tamanho);
});

// ---------- Filtros (abas + menu + categorias + footer) ----------
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filtroAtivo = btn.dataset.filter;
    renderizarProdutos();
  });
});

document.querySelectorAll("[data-filter]").forEach((el) => {
  if (el.classList.contains("tab-btn")) return;
  el.addEventListener("click", () => {
    const alvo = el.dataset.filter;
    filtroAtivo = alvo;
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === alvo);
    });
    renderizarProdutos();
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
  });
});

// ---------- Busca ----------
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  termoBusca = searchInput.value.trim();
  renderizarProdutos();
  document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
});

// ---------- Menu mobile ----------
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("navList");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// ---------- Carrinho ----------
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItemsEl = document.getElementById("cartItems");
const cartCountEl = document.getElementById("cartCount");
const cartSubtotalEl = document.getElementById("cartSubtotal");

function abrirCarrinho() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function fecharCarrinho() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("btnCart").addEventListener("click", abrirCarrinho);
document.getElementById("cartClose").addEventListener("click", fecharCarrinho);
overlay.addEventListener("click", () => {
  fecharCarrinho();
  fecharCheckout();
});

function adicionarAoCarrinho(id, tamanho) {
  const produto = PRODUTOS.find((p) => p.id === id);
  if (!produto) return;
  const item = carrinho.find((i) => i.id === id && i.tamanho === tamanho);
  if (item) {
    item.qtd += 1;
  } else {
    carrinho.push({ id, tamanho, qtd: 1 });
  }
  salvarCarrinho();
  atualizarCarrinho();
  mostrarToast(`${produto.nome} (tam. ${tamanho}) adicionado ao carrinho`);
  abrirCarrinho();
}

function alterarQuantidade(id, tamanho, delta) {
  const item = carrinho.find((i) => i.id === id && i.tamanho === tamanho);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) {
    carrinho = carrinho.filter((i) => !(i.id === id && i.tamanho === tamanho));
  }
  salvarCarrinho();
  atualizarCarrinho();
}

function removerItem(id, tamanho) {
  carrinho = carrinho.filter((i) => !(i.id === id && i.tamanho === tamanho));
  salvarCarrinho();
  atualizarCarrinho();
}

function calcularSubtotal() {
  return carrinho.reduce((total, item) => {
    const produto = PRODUTOS.find((p) => p.id === item.id);
    return total + (produto ? produto.preco * item.qtd : 0);
  }, 0);
}

function atualizarCarrinho() {
  const totalItens = carrinho.reduce((n, i) => n + i.qtd, 0);
  cartCountEl.textContent = totalItens;

  if (carrinho.length === 0) {
    cartItemsEl.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.<br />Que tal dar uma olhada nas novidades?</div>`;
  } else {
    cartItemsEl.innerHTML = carrinho
      .map((item) => {
        const p = PRODUTOS.find((prod) => prod.id === item.id);
        if (!p) return "";
        return `
        <div class="cart-item">
          <img src="${imagensProduto(p)[0]}" alt="${p.nome}" />
          <div>
            <h4>${p.nome}</h4>
            <div class="cart-item-meta">Tam. ${item.tamanho} · ${formatarPreco(p.preco)} cada</div>
            <div class="qty-control">
              <button data-menos="${p.id}" data-tamanho="${item.tamanho}" aria-label="Diminuir quantidade">-</button>
              <span>${item.qtd}</span>
              <button data-mais="${p.id}" data-tamanho="${item.tamanho}" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-remover="${p.id}" data-tamanho="${item.tamanho}">Remover</button>
        </div>`;
      })
      .join("");
  }

  const subtotal = calcularSubtotal();
  cartSubtotalEl.textContent = formatarPreco(subtotal);
  document.getElementById("checkoutTotal").textContent = formatarPreco(subtotal);
}

cartItemsEl.addEventListener("click", (e) => {
  const mais = e.target.closest("[data-mais]");
  const menos = e.target.closest("[data-menos]");
  const remover = e.target.closest("[data-remover]");
  if (mais) alterarQuantidade(Number(mais.dataset.mais), mais.dataset.tamanho, 1);
  if (menos) alterarQuantidade(Number(menos.dataset.menos), menos.dataset.tamanho, -1);
  if (remover) removerItem(Number(remover.dataset.remover), remover.dataset.tamanho);
});

// ---------- Checkout ----------
const checkoutModal = document.getElementById("checkoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutConfirmacao = document.getElementById("checkoutConfirmacao");

document.getElementById("btnCheckout").addEventListener("click", () => {
  if (carrinho.length === 0) {
    mostrarToast("Seu carrinho está vazio");
    return;
  }
  fecharCarrinho();
  abrirCheckout();
});

function abrirCheckout() {
  checkoutForm.style.display = "block";
  checkoutConfirmacao.style.display = "none";
  checkoutModal.classList.add("show");
  overlay.classList.add("show");
}

function fecharCheckout() {
  checkoutModal.classList.remove("show");
  overlay.classList.remove("show");
}

document.getElementById("checkoutClose").addEventListener("click", fecharCheckout);

function montarMensagemWhatsApp(nome, telefone, entrega) {
  const linhas = carrinho.map((item) => {
    const p = PRODUTOS.find((prod) => prod.id === item.id);
    if (!p) return "";
    const valorUnitario = formatarPreco(p.preco);
    const valorLinha = formatarPreco(p.preco * item.qtd);
    return `• ${item.qtd}x ${p.nome} — Tam. ${item.tamanho} (${valorUnitario} cada) — ${valorLinha}`;
  });

  const tipoEntrega = entrega === "entrega" ? "Combinar entrega" : "Retirar na loja";

  const mensagem = [
    "Olá, Bella Modas! 💗",
    "Quero reservar estas peças:",
    "",
    ...linhas,
    "",
    `Total: ${formatarPreco(calcularSubtotal())}`,
    `Como prefiro receber: ${tipoEntrega}`,
    "",
    `Nome: ${nome}`,
    `WhatsApp para contato: ${telefone}`,
  ].join("\n");

  return encodeURIComponent(mensagem);
}

document.getElementById("formPedido").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeCompleto").value;
  const telefone = document.getElementById("telefone").value;
  const entrega = document.querySelector('input[name="entrega"]:checked').value;

  const textoWhatsApp = montarMensagemWhatsApp(nome, telefone, entrega);
  window.open(`https://wa.me/${LOJA.whatsapp}?text=${textoWhatsApp}`, "_blank");

  document.getElementById(
    "confirmacaoTexto"
  ).textContent = `Prontinho, ${nome.split(" ")[0]}! Abrimos o WhatsApp com sua reserva. Finalize o pagamento via Pix por lá para confirmarmos suas peças.`;

  checkoutForm.style.display = "none";
  checkoutConfirmacao.style.display = "block";

  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
});

document.getElementById("fecharConfirmacao").addEventListener("click", () => {
  fecharCheckout();
  document.getElementById("formPedido").reset();
});

// ---------- Toast ----------
let toastTimer;
function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");
  toast.textContent = mensagem;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// ---------- Marcar link ativo no scroll ----------
window.addEventListener("scroll", () => {
  document.querySelector(".site-header").style.boxShadow =
    window.scrollY > 10 ? "0 4px 16px rgba(43,27,36,0.12)" : "var(--shadow)";
});

// ---------- Init ----------
renderizarEventos();
renderizarProdutos();
atualizarCarrinho();
