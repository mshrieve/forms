// some input state examples

// if you just have one input

const Input = () => {
  const [value, setValue] = useState('initialValue')

  // everytime input gets a change, an onChange event is fired
  const handleChange = event => setValue(event.target.value)

  return <input value={value} onChange={handleChange} />
}

const Form = () => {
  // now values is an object with the inputs as key-value pairs
  // intial value is an empty object {}
  const [values, setValues] = useState({})

  const handleChange = event =>
    setValues(v => ({
      // spread out the existing values
      ...v,
      // the event also contains the name of the input if it has one
      // this will replace the value with this name
      [event.target.name]: event.target.value
    }))

  return (
    <form>
      {/* make sure each input has a name that matches the value */}
      <input value={values.a} name='a' onChange={handleChange} />
      <input value={values.b} name='b' onChange={handleChange} />
      <input value={values.c} name='c' onChange={handleChange} />
    </form>
  )
}