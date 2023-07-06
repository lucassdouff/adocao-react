import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import wppIcon from '../../../../assets/wpp-icon.png'

export function ToastDemo() {
    const [showA, setShowA] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
  
    return (
      <Row>
        <Col md={6} className="mb-2">
            <button type='button' onClick={toggleShowA} className="btn" id='liveToastBtn'>
            <img className="whatsappIcon" src={wppIcon} alt="" />
            </button>
            <Toast show={showA} onClose={toggleShowA} style={{position: "fixed", right: 15, bottom: 15}}>
                <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Fale conosco!</strong>
                <small>11 mins atrás</small>
                </Toast.Header>
                <Toast.Body>Olá, se quiser nos contatar pelo WhatsApp, ligue ou envie uma mensagem para (21) 99213-2301 🐱</Toast.Body>
            </Toast>
        </Col>
      </Row>
    );
}
