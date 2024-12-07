create database Outback;
use Outback;

create table Restaurante (
	Id_Restaurante int primary key not null auto_increment,
    Nome varchar(60) not null,
    CNPJ int not null unique,
    Endereço varchar(100) not null,
    Telefone int not null,
    HorarioAbertura time,
    HorarioFechamento time
);

create table Usuarios (
	Id_Usuario int primary key not null auto_increment,
    CPF int not null unique,
    Nome varchar(60) not null,
    Email varchar(60) not null,
    Telefone int not null
);

create table Reservas (
	Id_Reserva int primary key not null auto_increment,
    Id_Usuario int not null,
    Id_Restaurante int not null,
    DataReserva datetime not null,
    QuantPessoas int not null,
    FOREIGN KEY (Id_Usuario) REFERENCES Usuarios(Id_Usuario),
	FOREIGN KEY (Id_Restaurante) REFERENCES Restaurante(Id_Restaurante)
);
create table Cupons (
	Id_Cupom int primary key not null auto_increment,
    Codigo varchar(8) not null unique,
	Categoria varchar(60) not null,
    ValorDesconto decimal not null,
	DataValidade date not null,
    Descricao char not null,
    StatusCupom boolean not null
);