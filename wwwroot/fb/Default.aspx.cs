using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Facebook.Rest;
using Facebook.Session;
using Facebook.Schema;
using System.Configuration;

public partial class _Default : System.Web.UI.Page 
{
    /// <summary>
    /// Store friend Id's fetched from REST
    /// </summary>
    public List<long> FriendIDs
    {
        get
        {
            if (Session["FB_FRIENDS_FRIENDSIDS"] != null)
                return (List<long>)Session["FB_FRIENDS_FRIENDSIDS"];
            else
                return new List<long>();
        }
        set
        {
            Session["FB_FRIENDS_FRIENDSIDS"] = value;
        }
    }

    /// <summary>
    /// Store friend's fetched from REST
    /// </summary>
    public IList<user> Friends
    {
        get
        {
            if (Session["FB_FRIENDS_FRIENDS"] != null)
                return (IList<user>)Session["FB_FRIENDS_FRIENDS"];
            else
                return null;
        }
        set
        {
            Session["FB_FRIENDS_FRIENDS"] = value;
        }
    }

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
        if (ConnectAuthentication.isConnected())
        {
            //Load data for authanticated user
            LoadData();
        }
        else
        {
            //Facebook Connect not authenticated, proceed as usual.

        }
    }

    protected void lnbSend_Command(object sender, System.Web.UI.WebControls.CommandEventArgs e)
    {
        //Create instance of REST api using current authanticated session
        Api api = new Api(CurrentSession);
        long uid = long.Parse(e.CommandArgument.ToString());
       
        List<long> lst = new List<long>();
        lst.Add(uid);

        //Send email to selected user
        api.Notifications.SendEmail(lst, "Message From Galib's R&D Lab", "Application is working fine.Thanks for testing.", string.Empty);

    }
   
    protected void grvMyFriends_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        grvMyFriends.PageIndex = e.NewPageIndex; ;
        LoadData();
    }

    private void LoadData()
    {
        if (Friends == null)
        {
            //Create instance of REST api using current authanticated session
            Api api = new Api(CurrentSession);

            //Display user data captured from the Facebook API.

            Facebook.Schema.user user = api.Users.GetInfo();
            string fullName = user.first_name + " " + user.last_name;

            lblName.Text = fullName;

            // Call REST to fetch friends id's
            List<long> myFrndId = (List<long>)api.Friends.Get();

            // Call REST to fetch user's of give id's
            IList<user> usrFrnds = api.Users.GetInfo(myFrndId);

            //Store frind's list for paging
            Friends = usrFrnds;

            // Bind to GridView to display
            grvMyFriends.DataSource = Friends;
            grvMyFriends.DataBind();
            UpdatePanel1.Update();

            // Call REST to fetch facebook friends lists's(friend group)
            IList<friendlist> friends = api.Friends.GetLists();

            // Bind to GridView to display
            grvFriends.DataSource = friends;
            grvFriends.DataBind();
        }

        
    }
}

