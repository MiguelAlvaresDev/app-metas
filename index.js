let meta = {
  value: "Ler um livro por mês",
  checked: false,
  log: (info) => {
    console.log(info);
  },
};

let metas = [
  meta,
  {
    value: "caminhar 20 minutos todos os dias",
    checked: false,
  },
];

console.log(metas[1].value);
