/* upload preview — index page only */
(function(){
  var dz=document.getElementById('demo'),file=document.getElementById('file');
  if(!dz||!file)return;
  var pv=document.createElement('img');
  pv.id='preview'; pv.alt='Preview of the photo you uploaded';
  dz.insertBefore(pv,dz.querySelector('.chips'));
  dz.addEventListener('click',function(e){if(e.target!==pv)file.click()});
  dz.addEventListener('dragover',function(e){e.preventDefault();dz.classList.add('over')});
  dz.addEventListener('dragleave',function(){dz.classList.remove('over')});
  dz.addEventListener('drop',function(e){e.preventDefault();dz.classList.remove('over');if(e.dataTransfer.files[0])show(e.dataTransfer.files[0])});
  file.addEventListener('change',function(){if(file.files[0])show(file.files[0])});
  function show(f){
    if(!f.type.startsWith('image/'))return;
    var fr=new FileReader();
    fr.onload=function(){pv.src=fr.result;pv.style.display='block'};
    fr.readAsDataURL(f);
  }
})();
