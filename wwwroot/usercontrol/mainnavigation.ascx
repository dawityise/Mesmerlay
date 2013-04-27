<%@ Control Language="C#" AutoEventWireup="true" CodeFile="mainnavigation.ascx.cs" Inherits="usercontrol_mainnavigation" %>
<script type="text/javascript" src="../scripts/jquery.hoverIntent.minified.js" ></script>   
<script type="text/javascript">
    $(document).ready(function() {
        function addMega() {
            $(this).addClass("hovering");
        }

        function removeMega() {
            $(this).removeClass("hovering");
        }

        var megaConfig = {
            interval: 100,
            sensitivity: 4,
            over: addMega,
            timeout: 100,
            out: removeMega
        };

        $("li.menuDdl").hoverIntent(megaConfig);

    });
        
    </script>
    
<ul id="menuBar"> 
	  <li class="menuDdl">
	    <h2 class="menuHome">
	        <asp:HyperLink runat="server" ID="LinkHome" NavigateUrl="~/default.aspx"><span>ጎጆ</span></asp:HyperLink>
	       
	    </h2>
	  </li> 
	  <li class="menuDdl">
	   <h2 class="menuContact"> 
	    <asp:HyperLink runat="server" ID="LinkRun" NavigateUrl="#"><span>ተጠሪ</span></asp:HyperLink>
	  </h2>
      </li> 
	  <li class="menuDdl">
	   <h2 class="menuDownload"> 
	    <asp:HyperLink runat="server" ID="LinkSwim" NavigateUrl="#"><span>አውርድ</span></asp:HyperLink>
	  </h2>
      </li> 
      <li class="menuDdl">
	   <h2 class="menuDemo"> 
	    <asp:HyperLink runat="server" ID="LinkCycle" NavigateUrl="#"><span>በተግባር እይ</span></asp:HyperLink>
	  </h2>
          <div>
              <p class="subMenuEditor">
                  <asp:HyperLink runat="server" ID="HLinkCycleAdvice" NavigateUrl="~/editor/pages/amharic.aspx">በተግባር እይ</asp:HyperLink></p>
           
          </div>
      </li> 
     
      
	</ul>