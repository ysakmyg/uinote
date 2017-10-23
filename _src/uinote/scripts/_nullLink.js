//----------------------------------------------------
// UINOTE Null Link Prevent
//----------------------------------------------------

  // Null Link
  nullLinkPrevent = function() {
    $('a[href="#undefined"]').on('click',function(e){
      event.preventDefault();
    })
  }();
