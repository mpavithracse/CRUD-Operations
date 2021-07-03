var selectedrow=null;
function submitbutton()
{
    var formdata=readData();
    if(selectedrow==null)
    {
        addrow(formdata);
    }
    else
    {
     upadatedata(formdata);
    }
    reset();             
 }

 function readData()
 {
     var formdata={
     uname: document.getElementById("username").value,
     uage : document.getElementById("userage").value,
     umail : document.getElementById("usergmail").value
     }
     return formdata;
 }

 function addrow(data)
 {
 var table=document.getElementById("userdetails").getElementsByTagName('tbody')[0];
 var row=table.insertRow(table.length);
 c1=row.insertCell(0);
 c1.innerHTML=data.uname;
 c2=row.insertCell(1);
 c2.innerHTML=data.uage;
 c3=row.insertCell(2);
 c3.innerHTML=data.umail;
 c1=row.insertCell(3);
 c1.innerHTML=`<button onclick="editclick(this)">Edit</button>
                <button onclick="deleteclick(this)">Delete</button>`;
 }

 function reset()
 {
     document.getElementById("username").value="";
     document.getElementById("userage").value="";
     document.getElementById("usergmail").value="";
     selectedrow=null;
 }

 function editclick(td)
 {
     selectedrow=td.parentElement.parentElement;
     document.getElementById("username").value=selectedrow.cells[0].innerHTML;
     document.getElementById("userage").value=selectedrow.cells[1].innerHTML;
     document.getElementById("usergmail").value=selectedrow.cells[2].innerHTML;       
 }

 function upadatedata(formdata)
 {
    selectedrow.cells[0].innerHTML=formdata.uname;
    selectedrow.cells[1].innerHTML=formdata.uage;
    selectedrow.cells[2].innerHTML=formdata.umail;
 }
 
 function deleteclick(td)
 {
    row=td.parentElement.parentElement;
    document.getElementById("userdetails").deleteRow(row.rowIndex);
 }