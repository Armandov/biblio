document.addEventListener("DOMContentLoaded",filterTable);

function filterTable(){
	var inputFilter = document.getElementById("txtFind"); 
	var bodyRow 	= document.getElementById("table").getElementsByTagName("tbody")[0];  
	var rowTable    = bodyRow.getElementsByTagName("tr");
	var lengthRow   = rowTable.length;
	var lengthCol 	= document.getElementById("table").getElementsByTagName("th").length; 
	var arrStr  	= [];  
	var saveNumRows = []; 
	var backupArr   = []; 
	var getNumRows = []; 
	var lenVal , goFilter , numRowArr;

	for( var i = 0 ; i < lengthRow ; i++){
		getNumRows[i] = rowTable[i].getElementsByTagName("td")[0].innerHTML;
	}
	backupArr[0] = getNumRows; 

	
	inputFilter.addEventListener("keyup", function(e){

		var val = this.value.toLowerCase().trim();
		arrStr  = val.split(" "); 
		lenVal  = arrStr.length; 

		if(val.length == 0){ 
			for( var i = 0 ; i < lengthRow ; i++){
				saveNumRows[i] = rowTable[i].getElementsByTagName("td")[0].innerHTML; 
			}		
		}

		for( var i = 0 ; i < lenVal ; i++){
			goFilter(arrStr[i],lenVal); 
		}

	});

	var goFilter = function(val,arrInput){

 		for( var i = 0, counter= 0 , numRowArr = backupArr[arrInput-1].length ; i < numRowArr ; i++){
			for( var j = 1 ; j < lengthCol ; j++){
					 
				    var colTable = rowTable[parseInt(backupArr[arrInput-1][i])-1].getElementsByTagName("td")[j].innerHTML.toLowerCase();

  					if( colTable.indexOf(val) >= 0){
   						saveNumRows[counter] = rowTable[parseInt(backupArr[arrInput-1][i])-1].getElementsByTagName("td")[0].innerHTML;

						rowTable[parseInt(saveNumRows[counter])-1].setAttribute("class","showRowResult"); 

						
						counter++;
						break;
					}
					else{
						rowTable[parseInt(backupArr[arrInput-1][i])-1].setAttribute("class","results"); 
					}
			
		}
		backupArr[arrInput] = saveNumRows;
		saveNumRows = []; 	
  	}
}}