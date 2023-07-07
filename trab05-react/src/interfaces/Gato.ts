import Categoria from "./Categoria";

interface Gato {
    id?: number;
    imagem: string;
    categoria: Categoria;
    nome: string;
    descricao: string;
    dataNascimento: Date;
    sexo: string;
}

export default Gato;
