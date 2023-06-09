import { useState } from 'react'
const config = require('../config.json')
//const history = createBrowserHistory();

const Login = () => {
  const { useNavigate } = require('react-router-dom')
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [formError, setFormError] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    setFormError({})

    if (name !== config.user) {
      setFormError((prev) => ({
        ...prev,
        name: 'input input-bordered border-error',
      }))
    } else

      if (pass !== config.pass) {
        setFormError((prev) => ({
          ...prev,
          pass: 'input input-bordered border-error',
        }))
      } else {
        navigate('/dash')
      }
  }



  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Username'
                  className={`border  ${formError['name']
                      ? formError['name']
                      : 'input input-bordered'
                    }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  value={pass}
                  className={`border ${formError['pass']
                      ? formError['pass']
                      : 'input input-bordered'
                    }`}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className='form-control mt-6'>
                <button
                  className='btn btn-outline no-animation btn-warning'
                  type='submit'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login