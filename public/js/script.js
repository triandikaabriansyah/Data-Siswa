$(function(){

    $('#tombolTambahData').on('click', function(){
        $('#judulModalLabel').html('Tambah Data Siswa');
        $('.modal-footer button[type=submit').html('Tambah Data');
    });

    $('.tampilModalUbah').on('click', function(){
        $('#judulModalLabel').html('Ubah Data Siswa');
        $('.modal-footer button[type=submit').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/siswa/ubah');

        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/phpmvc/public/siswa/getubah',
            data: {id : id},
            method : 'post',
            dataType: 'json',
            success: function(data){
                $('#nama').val(data.nama);
                $('#nis').val(data.nis);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });
         
    });

});