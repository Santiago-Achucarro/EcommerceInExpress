const alert = document.querySelectorAll('#liveToast')
for(i = 0; i < alert.length; i++){
    const element = alert[i]
    const toast = new bootstrap.Toast(element)
    toast.show()
}