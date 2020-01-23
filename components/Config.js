import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Data = styled.span`
  padding-left: 0.25rem;
  font-family: Menlo;
  font-size: 12px;
`

const Control = ({ label, value, ...props }) => (
  <label style={{ display: 'block' }}>
    <span style={{ display: 'inline-block', width: '6rem' }}>
      {label}
    </span>
    <input type='range' name='drop' value={value} {...props} />
    <Data>{value}</Data>
  </label>
)

const Box = styled.div.attrs(props => ({
  style: {
    filter: `drop-shadow(0 ${props.ay}px ${props.ar}px rgba(0,0,0,${props.ao})) drop-shadow(0 ${props.ky}px ${props.kr}px rgba(0,0,0,${props.ko}))`,
  }
}))`
  background: white;
  border-radius: 4px;
  margin: 0 auto;
`

const MotionBox = motion.custom(Box)

const boxVariants = {
  default: {
    height: '100px',
    width: '100px',
  },
  big: {
    height: '250px',
    width: '250px',
  }
}

export default function Config() {
  const [ay, setAY] = useState(10)
  const [ar, setAR] = useState(10)
  const [ao, setAO] = useState(0.1)

  const [ky, setKY] = useState(5)
  const [kr, setKR] = useState(5)
  const [ko, setKO] = useState(0.2)

  const [big, setBig] = useState(false)

  return (
    <>
      <button onClick={() => setBig(big => !big)}>
        Toggle Bigboi
      </button>

      <h3>Key</h3>
      <Control
        label='y offset'
        id='ky'
        min='0'
        max='25'
        value={ky}
        onChange={e => setKY(e.target.value)}
      />

      <Control
        label='blur radius'
        id='kr'
        min='0'
        max='25'
        value={kr}
        onChange={e => setKR(e.target.value)}
      />

      <Control
        label='opacity'
        id='ko'
        min='0'
        max='1'
        step='0.01'
        value={ko}
        onChange={e => setKO(e.target.value)}
      />

      <h3>Ambient</h3>
      <Control
        label='y offset'
        id='ay'
        min='0'
        max='100'
        value={ay}
        onChange={e => setAY(e.target.value)}
      />

      <Control
        label='blur radius'
        id='ar'
        min='0'
        max='100'
        value={ar}
        onChange={e => setAR(e.target.value)}
      />

      <Control
        label='opacity'
        id='ao'
        min='0'
        max='1'
        step='0.01'
        value={ao}
        onChange={e => setAO(e.target.value)}
      />

      <div style={{ marginTop: '4rem' }}>
        <MotionBox
          ay={ay}
          ar={ar}
          ao={ao}
          ky={ky}
          kr={kr}
          ko={ko}
          variants={boxVariants}
          animate={big ? 'big' : 'default'}
        />
      </div>
    </>
  )
}
