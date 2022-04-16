var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var json = localStorage.getItem('giaoDich')
var arrayItem = JSON.parse(json)
if (arrayItem == null) {
    arrayItem = []
} else {
    DOM()
}

function create(tenKhachHang, tien, xe, date) {
    var item = new Object()
    item.tenKhachHang = tenKhachHang
    item.tien = tien
    item.xe = xe
    item.date = date
    return item
}

// function nap() {
//     var pass = prompt('Nhập mã...')
//     var ma = 'venus19032001'
//     if (ma === pass) {
//         document.getElementById('bangNapTien').style.display = 'block'
//     } else {
//         alert('Mã sai')
//     }
// }

// var tienConLai = Number(localStorage.getItem('TienConLai'))
// if (!tienConLai) {
//     tienConLai = 0
// } else {
//     var tienCon = Number(tienConLai)
//     document.getElementById('money').innerHTML = tienCon
// }



// function napXong() {
//     var tienMuonNap = document.getElementById('soTienMuonNap').value
//     var tienNap = Number(tienMuonNap)
//     tienConLai += Number(tienNap)
//     localStorage.setItem('TienConLai', tienConLai)
//     document.getElementById('money').innerHTML = tienConLai
//     document.getElementById('bangNapTien').style.display = 'none'

// }

function xong() {
    var json = localStorage.getItem('giaoDich')
    var arrayItem = JSON.parse(json)
    if (arrayItem == null) {
        arrayItem = []
    }

    var tenKhachHang = document.getElementById('tenKhachHang').value
    var xe = document.getElementById('xe').value
    var soTien = document.getElementById('soTien').value

    if (tenKhachHang == '' || xe == '' || soTien == '') {
        alert('Nhập đầy đủ thông tin !')
        document.getElementById('tenKhachHang').value = ''
        document.getElementById('xe').value = ''
        document.getElementById('soTien').value = ''
        return
    }
    if (soTien <= 0) {
        alert('Nhập số tiền !')
        document.getElementById('tenKhachHang').value = ''
        document.getElementById('xe').value = ''
        document.getElementById('tien').value = ''
        return
    }
    var newItem = create(tenKhachHang, xe, soTien, date)
    arrayItem.unshift(newItem)
    var jsonItem = JSON.stringify(arrayItem)
    localStorage.setItem('giaoDich', jsonItem)
    location.reload();
    console.log(newItem)
}

function DOM() {
    var json = localStorage.getItem('giaoDich')
    var arrayItem = JSON.parse(json)
    if (arrayItem == null) {
        arrayItem = []
    }


    var items = ''
    for (var i = 0; i < arrayItem.length; i++) {
        items += `<tr>`
        items += `<td>${arrayItem[i].tenKhachHang}</td>`
        items += `<td>${arrayItem[i].tien}</td>`
        items += `<td>${arrayItem[i].xe}</td>`
        items += `<td>${arrayItem[i].date}</td>`
        items += `</tr>`
    }
    document.getElementById('items').innerHTML = items

}