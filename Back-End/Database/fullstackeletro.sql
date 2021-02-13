

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




--
-- Banco de dados: `fullstackeletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int(11) NOT NULL,
  `idnome de cliente` varchar(255) NOT NULL,
  `idendereço` varchar(255) NOT NULL,
  `idtelefone` float NOT NULL,
  `idproduto` int(11) NOT NULL,
  `idpedidos` int(11) NOT NULL,
  `idquantidade` int(11) NOT NULL
)

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `mensagem` varchar(300) NOT NULL,
  `data` datetime DEFAULT current_timestamp()
) 

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL,
  `idnome do cliente` varchar(255) NOT NULL,
  `idendereço` varchar(255) NOT NULL,
  `idtelefone` float DEFAULT NULL,
  `nome do produto` varchar(50) NOT NULL,
  `valor unitário` decimal(8,2) NOT NULL,
  `idquantidade` decimal(8,2) DEFAULT NULL,
  `valor total` decimal(8,2) DEFAULT NULL
) 

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `idnome do cliente`, `idendereço`, `idtelefone`, `nome do produto`, `valor unitário`, `idquantidade`, `valor total`) VALUES
(193083, 'Wilderson Carrera Lima', 'Rua das Focas, 123 Apto 8 - Parque Feliz - São Paulo', 1156150000, 'Forno de Microondas Consul Inox ', '409.88', '1.00', '409.88'),
(193084, 'Altair Bezerra da Silva', 'Rua Azul, 300 Jardim das Cores - Guarulhos', 11985700000, 'Forno de Microondas Philco 25 litros ', '436.05', '2.00', '872.10'),
(193085, 'Indio Brasileiro Cardoso ', 'Avenida da Saudade, 16 cs 5 Vila Militar-Barueri', 1166670000, 'Forno de Microondas Eletrolux Branco de 20 litros ', '464.53', '1.00', '464.53'),
(193082, 'Ivan Lins do Rego', 'Avenida Bororé, 300 Casa 5 -Jardim das fontes - São Paulo', 11975800000, 'Fogao de 4 bocas Atlas Monaco ', '519.70', '1.00', '519.70'),
(193081, 'Augusto Lima Otavio', 'Rua Do Limoeiro, 1357-Jardim Fonte nova - São Paulo', 1156720000, 'Fogao 4 bocas Consul Inox ', '1129.00', '2.00', '2258.00'),
(193086, 'Caroline Lira Barbatimão', 'Travessa da Paz, 30 Jardim das Oliveiras - São Paulo', 1156750000, 'Lavadora de roupas Brastemp 11kg ', '1214.10', '1.00', '1214.10'),
(193089, 'Julia Martins Sorrano', 'Avenida Nossa  Senhora das Almas, 1410 Apto 2 - São Paulo', 1156160000, 'Lava-louca Brastemp Compacta ', '1730.61', '1.00', '1730.61'),
(193079, 'Marcelo Cosme Damião', 'Avenida Italia, 500 Apto 42 - Vila Emir-São Paulo', 11945900000, 'Geladeira Brastemp Frost Free branca ', '1910.00', '1.00', '1910.00'),
(193080, 'Alana de Jesus Calvario', 'Alameda Vitoria, 635 -Vila Caiçara-Praia Grande', 13979800000, 'Geladeira Consul Frost Free Inox s', '2069.00', '1.00', '2069.00'),
(193087, 'Josefa Maria Lourenço', 'Rua Das Primas, 89 - Jardom dos Reis - São Paulo ', 1156220000, 'Lavadora de roupas Philco Inverter 12kg', '2179.00', '3.00', '6537.00'),
(193088, 'Luciano Louis Loyola', 'Avenida Dos Capitoes, 63 Apto 42 Vila dos Pescadores - Osasco', 11986300000, 'Lava-louça Eletrolux Inox ', '2799.90', '1.00', '2799.90'),
(193078, 'Maria Aparecida da Luz Santos', 'Rua das Flores, 394 - Jardim Italia - São Paulo', 11955600000, 'Geladeira Inverse Brastemp', '5019.00', '1.00', '5019.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descrição` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(250) DEFAULT NULL
) 
--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descrição`, `preco`, `precofinal`, `imagem`) VALUES
(3, 'geladeira', 'Geladeira Brastemp inverse Frost Free Inox de 574 litros', '6389.00', '5019.00', './imagens/geladeira inverse brastemp.jpg'),
(4, 'geladeira', 'Geladeira Brastemp Frost Free branca de 375 litros', '2068.00', '1910.00', './imagens/g_brastemp_branca.jpg'),
(5, 'geladeira', 'Geladeira Consul Frost Free Inox 340 litros', '2199.90', '2069.00', './imagens/g_ff consul.jpg'),
(6, 'fogões', 'Fogao 4 bocas Consul Inox com mesa de vidro', '1209.00', '1129.00', './imagens/fogao_consul_inox.jpg'),
(7, 'fogões', 'Fogao de 4 bocas Atlas Monaco com acedimento automatico', '609.90', '519.70', './imagens/fogao_monaco.jpg'),
(8, 'microondas', 'Forno de Microondas Consul Inox 32 litros 220 volts', '580.90', '409.88', './imagens/microondas_consul.jpg'),
(9, 'microondas', 'Forno de Microondas Philco 25 litros Espelhado 220 volts', '459.90', '436.05', './imagens/microondas_Philco.jpg'),
(10, 'microondas', 'Forno de Microondas Eletrolux Branco de 20 litros 127 volts', '508.70', '464.53', './imagens/microondas_electrolux.jpg'),
(11, 'lavadora', 'Lavadora de roupas Brastemp 11kg Com Turbo Performance Branca', '1699.00', '1214.10', './imagens/lavadora_de_roupa_brastemp.jpg'),
(12, 'lavadora', 'Lavadora de roupas Philco Inverter 12kg', '2399.90', '2179.90', './imagens/lavador_de_roupa_Philco.jpg'),
(13, 'lava-louca', 'Lava-louça Eletrolux Inox 10 servicos, 6 prog. de lavagem e painel blue touch', '3599.00', '2799.90', './imagens/lava_louça_electrolux.jpg'),
(14, 'lava-louca', 'Lava-louca Brastemp Compacta com 8 servicos Branca 127v', '1970.50', '1730.61', './imagens/lava_louça_brastemp.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `idnome de cliente` (`idnome de cliente`),
  ADD UNIQUE KEY `idEndereço` (`idendereço`),
  ADD UNIQUE KEY `idTelefone` (`idtelefone`),
  ADD UNIQUE KEY `idProduto` (`idproduto`),
  ADD UNIQUE KEY `idPedidos` (`idpedidos`),
  ADD KEY `idQuantidade` (`idquantidade`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Data` (`data`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`valor unitário`),
  ADD UNIQUE KEY `idnome do cliente` (`idnome do cliente`),
  ADD UNIQUE KEY `idendereço` (`idendereço`),
  ADD KEY `idtelefone` (`idtelefone`),
  ADD KEY `idquantidade` (`idquantidade`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem_UNIQUE` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`idendereço`) REFERENCES `pedidos` (`idendereço`);
COMMIT;

