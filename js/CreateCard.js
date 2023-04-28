var name = "Swayze"; //prompt('Input name','');
var phone = "+380964959357";//prompt('Input phone','');

/*document.write('<TABLE width="200" border="1" align="CENTER">');
document.write('<TR><TD align="CENTER">');
document.write(' <TABLE width="100%" border="0">');

document.write(' <TR>');
document.write(' <TD align="CENTER" valign="CENTER">');
document.write(' <IMG src="images/visit_card.gif">');
document.write(' </TD>');
document.write(' <TD align="CENTER">');
document.write(' <B>'+name+'</B><BR>');
document.write(' <I>computer engineering</I><BR>');
document.write(' <FONT color="blue">'+phone+'</FONT>');
document.write(' </TD>');
document.write(' </TR>');
document.write(' </TABLE>');
document.write('</TD></TR>');
document.write('</TABLE>');*/

var visitcard = ' <TABLE width="100%" border="0">'
+' <TR>'
+' <TD align="CENTER" valign="CENTER">'
+' <IMG src="images/american-psycho.gif">'
+' </TD>'
+' <TD align="CENTER">'
+' <B>' + name + '</B><BR>'
+' <I>' + "Computer Engineer" + '</I><BR>'
+' <FONT color="blue">' + phone + '</FONT>'
+' </TD>'
+' </TR>'
+' </TABLE>'; 

document.write('<TABLE width="100%" border="0" align="CENTER">'); 

for(var y=0; y<12; y++)
{
document.write('<TR>');
for(var x=0; x<3; x++)
{
document.write( '<TD align="CENTER" style="border-style: dashed; borderwidth:thin;">');
document.write( visitcard );
document.write('</TD>');
}
document.write('</TR>');
}
document.write('</TABLE>'); 