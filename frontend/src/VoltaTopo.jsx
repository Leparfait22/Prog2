import ceta100 from './cetaUp50.png'
import './styles.css';

function VoltaTopo() {
    return (
        <div style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'row',
            height: '40px',
        }}>
            <img src={ceta100} alt="ceta" />
            <a href='#cursosDisponiveis' className='voltaTopo' > Voltar ao topo</a>
        </div>

    )
}

export default VoltaTopo