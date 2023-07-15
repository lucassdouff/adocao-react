import icCover from '../../assets/ic-cover.jpg'
import catsHistory from '../../assets/cats-history.png'
import catsHelp from '../../assets/cats-help.png'

import petCare from '../../assets/pet_care.png'
import pepeCats from '../../assets/pepe-cats.png'
import petzLogo from '../../assets/petz.png'
import royalCanin from '../../assets/royal-canin.png'
import wellFelis from '../../assets/well-felis.png'
import gatoModerno from '../../assets/gato-moderno.png'

export function QuemSomos() {
    return(
        <>
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col mb-3 col-md-4 col-12">
                <img className="img-fluid" src={icCover} alt="" />
                <h5 className="mt-2"><strong>O começo</strong></h5>
                <p>No coração da cidade, em um bairro tranquilo, encontra-se um antigo prédio de tijolos vermelhos com grandes janelas. Durante anos, esse local serviu como armazém abandonado, mas agora, está prestes a se transformar em um refúgio para gatos sem lar.</p>
                </div>
                <div className="col mb-3 col-md-4 col-12">
                <img className="img-fluid" src={catsHistory} alt="" />
                <h5 className="mt-2"><strong>História</strong></h5>
                <p>À medida que a transformação do antigo armazém avança, a notícia se espalha pela comunidade sobre a criação da "StrayCats". Pessoas entusiasmadas se voluntariam para ajudar, doando tempo e recursos para garantir o sucesso da empresa. O telefone de Lucas não para de tocar, com pessoas interessadas em adotar ou apoiar a causa dos gatos abandonados.</p>
                </div>
                <div className="col mb-3 col-md-4 col-12">
                <img className="img-fluid" src={catsHelp} alt="" />
                <h5 className="mt-2"><strong>Nos ajude!</strong></h5>
                <p>Nessa história, a criação da empresa de adoção de gatos, "StrayCats", assume um papel central ao destacar a importância de ajudar esses animais desamparados. Os gatos abandonados enfrentam uma série de desafios e dificuldades, desde encontrar abrigo e comida até lidar com a solidão e a falta de afeto.</p>
                </div>
            </div>
            </div>
            
            <div style={{
                backgroundColor: "#B9E9E3",
                }}>
            <div className="container py-4">
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-mission-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mission" type="button" role="tab" aria-controls="v-pills-mission" aria-selected="true">Missão</button>
                    <button className="nav-link" id="v-pills-values-tab" data-bs-toggle="pill" data-bs-target="#v-pills-values" type="button" role="tab" aria-controls="v-pills-values" aria-selected="false">Valores</button>
                    <button className="nav-link" id="v-pills-vision-tab" data-bs-toggle="pill" data-bs-target="#v-pills-vision" type="button" role="tab" aria-controls="v-pills-vision" aria-selected="false">Visão</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">A missão da "StrayCats" é resgatar, cuidar e encontrar lares amorosos para gatos abandonados. Nós nos dedicamos a fornecer um ambiente seguro e acolhedor para os felinos, atendendo às suas necessidades físicas e emocionais. Por meio de programas de adoção responsável, educação sobre o bem-estar dos gatos e sensibilização da comunidade, buscamos reduzir o número de gatos abandonados e promover uma convivência harmoniosa entre humanos e felinos.</div>
                    <div className="tab-pane fade" id="v-pills-values" role="tabpanel" aria-labelledby="v-pills-values-tab">Amor e Compaixão: Colocamos o amor e o respeito pelos gatos no centro de tudo o que fazemos. Cada gato que acolhemos é tratado com carinho, cuidado e dedicação, proporcionando a eles a oportunidade de experimentar o afeto humano.
                    <br/>
                    Colaboração: Acreditamos no poder da colaboração e da parceria. Trabalhamos em estreita colaboração com abrigos de animais, voluntários, profissionais veterinários e a comunidade em geral para garantir que nossos esforços sejam eficazes e abrangentes.
                    </div>
                    <div className="tab-pane fade" id="v-pills-vision" role="tabpanel" aria-labelledby="v-pills-vision-tab">A visão da empresa de adoção de gatos, "StrayCats", é criar uma sociedade onde todos os gatos tenham um lar amoroso e sejam tratados com dignidade e respeito. Acreditamos em um mundo onde nenhum gato seja abandonado e onde a adoção seja a primeira escolha para quem busca um novo membro na família. Queremos ser uma referência na promoção da adoção responsável e na conscientização sobre a importância do bem-estar felino.</div>
                    </div>
                </div>
            </div>
            </div>

            <div className="container d-flex flex-column align-items-center py-4 mb-4">
                <h2 className="mb-4"><strong>Depoimentos</strong></h2>
                <div className="container">
                <div className="list-group testimoniesList">
                    <a className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Pedro Henrique</h5>
                        <small>3 dias atrás</small>
                    </div>
                    <p className="mb-1">É incrível, toda a dedicação e o carinho da iniciativa para com os gatinhos.</p>
                    <small>Estudante da Universidade Federal Fluminense</small>
                    </a>
                    <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Paulo Soares</h5>
                        <small className="text-muted">1 hora atrás</small>
                    </div>
                    <p className="mb-1">Gostei muito do site, me lembra um Pokemón de gatos.</p>
                    <small className="text-muted">YouTuber</small>
                    </a>
                    <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Gabriel Felix</h5>
                        <small className="text-muted">1 semana atrás</small>
                    </div>
                    <p className="mb-1">Sinto que tem algum gato falando mal de mim pelas costas, vou apagar minha mensagem...</p>
                    <small className="text-muted">Paranóico</small>
                    </a>
                </div>
                </div>
            </div>

            <div style={{
                backgroundColor: "#B9E9E3",
                }}>
                <div className="container text-center py-4">
                <h2 className="mb-4"><strong>Nossos Parceiros</strong></h2>
                <div className="row">
                    <div className="mb-4 col-md-4 col-sm-6 text-center"><img className="partnerImg" src={petCare} alt="" /></div>
                    <div className="mb-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"><img className="partnerImg"src={pepeCats} alt="" /></div>
                    <div className="mb-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"><img className="partnerImg" src={petzLogo} alt="" /></div>
                    <div className="mb-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"><img className="partnerImg" src={royalCanin} alt="" /></div>
                    <div className="mb-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"><img className="partnerImg" src={wellFelis} alt="" /></div>
                    <div className="mb-4 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"><img className="partnerImg" src={gatoModerno} alt="" /></div>
                </div>
                </div>
            </div>
        </>
    )
}
