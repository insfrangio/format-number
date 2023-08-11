const updateValues = (value): [number, string] => {
  const [calculatedValue, calculatedMaskedValue] = calculateValues(value)

  if (!max || calculatedValue <= max) {
    setMaskedValue(calculatedMaskedValue)

    return [calculatedValue, calculatedMaskedValue]
  } else {
    return [normalizeValue(maskedValue), maskedValue]
  }
}

const handleChange = (event) => {
  event.preventDefault()

  const [value, maskedValue] = updateValues(event.target.value)

  if (maskedValue) {
    onChange(event, value, maskedValue)
  }
}
