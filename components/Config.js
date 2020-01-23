import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Data = styled.input`
  margin-left: 0.25rem;
  font-family: Menlo;
  font-size: 12px;
`

const Control = ({ label, value, setValue, ...props }) => (
  <label style={{ display: 'block' }}>
    <span style={{ display: 'inline-block', width: '6rem' }}>
      {label}
    </span>
    <input type='range' name='drop' value={value} {...props} />
    <Data type='number' onChange={e => setValue(e.target.value)} value={value} />
  </label>
)

const Box = styled.div.attrs(props => ({
  style: {
    filter: `drop-shadow(0 ${props.ay}px ${props.ar}px rgba(0,0,0,${props.ao})) drop-shadow(0 ${props.ky}px ${props.kr}px rgba(0,0,0,${props.ko}))`,
  }
}))`
  background: white;
  margin: 0 auto;
`

const MotionBox = motion.custom(Box)

const boxVariants = {
  default: {
    height: '100px',
    width: '100px',
    borderRadius: '4px',
  },
  big: {
    height: '250px',
    width: '250px',
    borderRadius: '4px',
  },
  chonk: {
    height: '100px',
    width: '100px',
    borderRadius: '50px',
  },
  bigChonk: {
    height: '250px',
    width: '250px',
    borderRadius: '125px',
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
  const [chonk, setChonk] = useState(false)

  return (
    <div style={{ marginTop: '2rem' }}>
      <button onClick={() => setBig(big => !big)}>
        Toggle Bigboi
      </button>

      <button onClick={() => setChonk(chonk => !chonk)}>
        Toggle Chonk
      </button>

      <h3>Key</h3>
      <Control
        label='y offset'
        id='ky'
        min='0'
        max='25'
        value={ky}
        setValue={setKY}
        onChange={e => setKY(e.target.value)}
      />

      <Control
        label='blur radius'
        id='kr'
        min='0'
        max='25'
        value={kr}
        setValue={setKR}
        onChange={e => setKR(e.target.value)}
      />

      <Control
        label='opacity'
        id='ko'
        min='0'
        max='1'
        step='0.01'
        value={ko}
        setValue={setKO}
        onChange={e => setKO(e.target.value)}
      />

      <h3>Ambient</h3>
      <Control
        label='y offset'
        id='ay'
        min='0'
        max='100'
        value={ay}
        setValue={setAY}
        onChange={e => setAY(e.target.value)}
      />

      <Control
        label='blur radius'
        id='ar'
        min='0'
        max='100'
        value={ar}
        setValue={setAR}
        onChange={e => setAR(e.target.value)}
      />

      <Control
        label='opacity'
        id='ao'
        min='0'
        max='1'
        step='0.01'
        value={ao}
        setValue={setAO}
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
          animate={
            big
              ? chonk
                ? 'bigChonk'
                : 'big'
              : chonk
                ? 'chonk'
                : 'default'
          }
        />
      </div>
    </div>
  )
}
