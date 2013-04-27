using System;
using System.Collections.Generic;
using System.Web;
using System.Configuration;
using System.Globalization;
using System.Security.Cryptography;
using Facebook.Rest;
using Facebook.Session;
using Facebook.Schema;
using System.Text;
/// <summary>
/// Summary description for ConnectAuthentication
/// </summary>
public class ConnectAuthentication
{
    public ConnectAuthentication()
    {

    }

    public static bool isConnected()
    {

        return (SessionKey != null && UserID != -1);
        //if (SessionKey != null && UserID != -1) return false;
        //// can't really tell if the session key we have is still valid
        //// let's try connecting
        //try
        //{
        //    Api api = new Api(session);
        //    Facebook.Schema.user u = api.Users.GetInfo();

        //    //UserID = Facebook.Rest.Users.GetLoggedInUser();
        //}
        //catch (Facebook.Utility.FacebookException)
        //{
        //    // invalid session key found
        //    ClearFacebookCookies();
        //    return false;
        //}
        //return true;

    }

    public static string ApiKey
    {
        get
        {
            return ConfigurationManager.AppSettings["APIKey"];
        }
    }

    public static string SecretKey
    {
        get
        {
            return ConfigurationManager.AppSettings["Secret"];
        }
    }

    public static string SessionKey
    {
        get
        {
            return GetFacebookCookie("session_key");
        }
    }

    public static long UserID
    {
        get
        {
            long userID = -1;
            long.TryParse(GetFacebookCookie("user"), out userID);
            return userID;
        }
    }

    private static string GetFacebookCookie(string cookieName)
    {
        string retString = null;
        string fullCookie = ApiKey + "_" + cookieName;

        if (HttpContext.Current.Request.Cookies[fullCookie] != null)
            retString = HttpContext.Current.Request.Cookies[fullCookie].Value;

        return retString;
    }

    //private bool IsValidFacebookSignature()
    //{
    //    //keys must remain in alphabetical order
    //    string[] keyArray = { "expires", "session_key", "ss", "user" };
    //    string signature = "";

    //    foreach (string key in keyArray)
    //        signature += string.Format("{0}={1}", key, GetFacebookCookie(key));

    //    signature += SecretKey; //your secret key issued by FB

    //    MD5 md5 = MD5.Create();
    //    byte[] hash = md5.ComputeHash(Encoding.UTF8.GetBytes(signature.Trim()));

    //    StringBuilder sb = new StringBuilder();
    //    foreach (byte hashByte in hash)
    //        sb.Append(hashByte.ToString("x2", CultureInfo.InvariantCulture));

    //    return (GetFacebookCookie("") == sb.ToString());
    //}

    
    public static void ClearFacebookCookies()
    {
        string[] cookies = new[] { "user", "session_key", "expires", "ss" };
        foreach (var c in cookies)
        {
            string fullCookie = ApiKey + "_" + c;

            if (HttpContext.Current != null &&
                HttpContext.Current.Response.Cookies[fullCookie] != null)
            {
                HttpContext.Current.Response.Cookies[fullCookie].Expires = DateTime.Now.AddMonths(-1);
            }
        }
    }
}