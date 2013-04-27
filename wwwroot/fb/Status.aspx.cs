using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Facebook.Rest;
using Facebook.Session;
using Facebook.Schema;
using System.Configuration;

public partial class _Status : System.Web.UI.Page 
{
  

    /// <summary>
    /// Get the current authanticated facebook session
    /// </summary>
    public ConnectSession CurrentSession
    {
        get
        {
            ConnectSession connectSession = new ConnectSession(
               ConnectAuthentication.ApiKey,
               ConnectAuthentication.SecretKey);

            return connectSession;
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        //string content = Request.QueryString["freeRTE_content"].ToString().Replace("&nbsp;", " ");

        //content = StripHtml(content, false);
        if (ConnectAuthentication.isConnected())
        {
            //Load data for authanticated user
            try
            {
                string content = Request.QueryString["freeRTE_content"].ToString().Replace("&nbsp;", " ");
                UpdateStatus(StripHtml(content, false));
            }
            catch
            {
                //Label1.Text = "content not found";
                return;
            }
        }
        else
        {
            //Facebook Connect not authenticated, proceed as usual.

        }


    }

    public string StripHtml(string html, bool allowHarmlessTags)
    {
       if (html == null || html == string.Empty)
         return string.Empty; 

       if (allowHarmlessTags)
         return System.Text.RegularExpressions.Regex.Replace(html, "", string.Empty); 

       return System.Text.RegularExpressions.Regex.Replace(html, "<[^>]*>", string.Empty);
    }
   
   

    private void UpdateStatus (string message)
    {
       
            //Create instance of REST api using current authanticated session
        try
        {
            Api api = new Api(CurrentSession);

            //Display user data captured from the Facebook API.
            if (api.Users.HasAppPermission(Facebook.Schema.Enums.ExtendedPermissions.status_update))
            {
                P1.Visible = false;
                Facebook.Schema.user user = api.Users.GetInfo();

                long? uid = user.uid;
                api.Status.Set(message);
                if (uid != null)
                {
                    Response.Redirect("http://www.facebook.com/profile.php?id=" + uid.ToString());
                }
                else
                {
                    Response.Redirect("http://www.facebook.com/");
                }
                Response.Write("Success" + message);
            }
           
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        
    }
}

