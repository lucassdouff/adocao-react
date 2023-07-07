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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta neque accusantium vel, nam ab tempora earum hic molestiae quaerat aperiam pariatur facilis, modi at autem sapiente culpa voluptas, dolore voluptatum.</p>
                </div>
                <div className="col mb-3 col-md-4 col-12">
                <img className="img-fluid" src={catsHistory} alt="" />
                <h5 className="mt-2"><strong>História</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta neque accusantium vel, nam ab tempora earum hic molestiae quaerat aperiam pariatur facilis, modi at autem sapiente culpa voluptas, dolore voluptatum.</p>
                </div>
                <div className="col mb-3 col-md-4 col-12">
                <img className="img-fluid" src={catsHelp} alt="" />
                <h5 className="mt-2"><strong>Nos ajude!</strong></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta neque accusantium vel, nam ab tempora earum hic molestiae quaerat aperiam pariatur facilis, modi at autem sapiente culpa voluptas, dolore voluptatum.</p>
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
                    <div className="tab-pane fade show active" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptas repudiandae laborum ratione nulla enim fugit odit eum, expedita, dolorem voluptates! Eveniet rerum odit unde delectus ipsa non tempore illum!</div>
                    <div className="tab-pane fade" id="v-pills-values" role="tabpanel" aria-labelledby="v-pills-values-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi consequatur illum, laborum harum quaerat, unde molestias corrupti ullam mollitia cupiditate vitae explicabo sapiente deserunt atque a perferendis, quidem ex?</div>
                    <div className="tab-pane fade" id="v-pills-vision" role="tabpanel" aria-labelledby="v-pills-vision-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit, in unde quidem modi praesentium repellat voluptates eos sed labore quisquam nihil libero, eius temporibus optio culpa veritatis, ex aspernatur!</div>
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
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                    </a>
                    <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                    </a>
                    <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
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
