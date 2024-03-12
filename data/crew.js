var num = 1;

function NextPerson()
{
    num++;
    console.log(num);
    
    if (num === 2)
    {
        document.getElementById("memPfp").src = "data/devpfp/fdi_nick_new.png";
        document.getElementById("memName").innerHTML = '<p>Nick Armes</p>';
        document.getElementById("memPos").innerHTML = '<p>Co-Founder, COO, Dev, Writer</p>';
    }
    else if (num === 3)
    {
        document.getElementById("memPfp").src = "data/devpfp/fdi_das.png";
        document.getElementById("memName").innerHTML = '<p>Das Baby (D.V.D.)</p>';
        document.getElementById("memPos").innerHTML = '<p>COO, Dev, Writer</p>';
    }
    else if (num === 4)
    {
        document.getElementById("memPfp").src = "data/devpfp/fdi_nathan.png";
        document.getElementById("memName").innerHTML = '<p>Nathan E.</p>';
        document.getElementById("memPos").innerHTML = '<p>Manager, Developer, Artist</p>';        
    }
    else if (num === 5)
    {
        document.getElementById("memPfp").src = "data/devpfp/fdi_alex.png";
        document.getElementById("memName").innerHTML = '<p>Alex Fallon</p>';
        document.getElementById("memPos").innerHTML = '<p>Developer</p>';        
    }
    else if (num >= 6)
    {
        num = 1;
        document.getElementById("memPfp").src = "data/devpfp/fdi_john.png";
        document.getElementById("memName").innerHTML = '<p>John Fiore</p>';
        document.getElementById("memPos").innerHTML = '<p>Founder, CEO, Director, Developer</p>';
    }
}
