function asset(rootDir){
  $.ajax({
    url: rootDir + "include/asset.html", // ディレクトリー変更
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      html = html.replace(/\{\$root\}/g, rootDir);
      document.write(html);
    }
  });
}

function header(rootDir){
  $.ajax({
    url: rootDir + "include/header.html", // ディレクトリー変更
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      html = html.replace(/\{\$root\}/g, rootDir);
      document.write(html);
    }
  });
}

function footer(rootDir){
  $.ajax({
    url: rootDir + "include/footer.html", // ディレクトリー変更
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
      html = html.replace(/\{\$root\}/g, rootDir);
      document.write(html);
    }
  });
}

var arg  = new Object;
url = location.search.substring(1).split('&');

for(i=0; url[i]; i++) {
  var k = url[i].split('=');
  arg[k[0]] = decodeURIComponent(k[1]);
}

var resourceUri = arg["curation"] != null ? arg["curation"] : "https://mp.ex.nii.ac.jp/api/curation/json/528810d2-4e28-4a46-910c-c9b517f86943";
var title = arg["title"] != null ? arg["title"] : "";
var bimage = arg["bimage"] != null ? arg["bimage"] : "";
var credit = arg["credit"] != null ? arg["credit"] : "";

function init(){

  if(title != ""){
    var text ="「"+title+"」"
    $("#head").text(text)
    $("#head2").text(text)
  }

  $("#credit").text(credit)

  if(resourceUri == ""){
    $("#loading").empty()
    alert("Error.")
  } else {
    var param = "curation="+resourceUri+"&title="+title+"&bimage="+bimage+"&credit="+credit
    $("#top").attr("href", "./?"+param)

    $("#lista").attr("href", "list.html?"+param)
    $("#compa").attr("href", "compare2.html?"+param)
    $("#mosaica").attr("href", "mosaic.html?"+param)
    $("#miradora").attr("href", "mirador.html?"+param)
    $("#icpa").attr("href", "http://codh.rois.ac.jp/software/iiif-curation-player/demo/?"+param)
  }
}
