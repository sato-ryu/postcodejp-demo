$(function() {
  const $form = $('form#postcode-form')
  const $inputPostcode = $('input[name="postcode"]', $form)
  const $address = $('#address')

  $form.submit(function(event) {
    event.preventDefault();

    const query = { postcode: $inputPostcode.val() }

    fetch(`/postcode?${new URLSearchParams(query)}`)
      .then((response) => { return response.json() })
      .then(json => {
        $address.text(json.allAddress)
      })
  })

})