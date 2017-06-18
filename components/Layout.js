import React from 'react'
import isBrowser from 'is-in-browser'
import Link from 'next/link'
import Head from 'next/head'

function isActiveRoute (routeName) {
  if (isBrowser) {
    return window.location.pathname === routeName
  }
}

function Logo () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="#ffffff" width="190">
      <path
        d="M68.6 34c-2.6 0-4.7 1.6-5.7 3.8l-25.4-6v-.4c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2 0 3.1 2.2 5.6 5.2 6.1v25.1c-2.9.5-5.2 3-5.2 6.1 0 3.4 2.8 6.2 6.2 6.2 3.1 0 5.6-2.2 6.1-5.2h16.7c.5 2.9 3 5.2 6.1 5.2 3.4 0 6.2-2.8 6.2-6.2 0-2.4-1.4-4.4-3.3-5.5l4.8-16.9c.3 0 .6.1.9.1 3.4 0 6.2-2.8 6.2-6.2-.2-3.4-3-6.2-6.4-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM31.4 27.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2zm4.1 41.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.4.1 4.2 1.9 4.2 4.2zm24.7 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm.9-10.3c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.2-6.1 5.2H37.5C37 65 35 63 32.4 62.5v-25c2.1-.3 3.9-1.8 4.7-3.7l25.4 6v.4c0 2.4 1.4 4.5 3.4 5.5l-4.8 16.8z" />
    </svg>
  )
}

function trackingScript() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60624235-5', 'auto');
  ga('send', 'pageview');
}

export default function ({children}) {
  return (
    <div className="main-wrapper">
      <Head>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <script>
          {isBrowser && trackingScript()}
        </script>
      </Head>
      <style jsx>{`
        .sidebar{
          height: 100vh;
          width: 250px;
          background-color: #424242;
          font-size: 15px;
          display: flex;
          flex-direction: column;
        }

        .main-wrapper {
          flex-direction: row;
          display: flex;
          flex: 1;
        }

        .content {
          flex: 1;
        }

        ul {
          padding: 20px 0;
          flex: 1;
        }

        li {
          color: whitesmoke;
          font-family: 'Lato', sans-serif;
          line-height: 40px;
          padding-left: 15px;
          cursor: pointer;
        }

        li:hover {
          color: #fff;
          background-color: #2d2d2d;
        }

        a {
          color: #fff;
        }

        .logo {
          height: 180px;
          margin: 0 auto;
        }

        .footer {
          height: 70px;
          text-align: center;
          color: #fff;
          font-family: 'Lato', sans-serif;
        }

        .footer svg {
          height: 30px;
          width: 30px;
          color: #fff;
        }
      `}</style>

      <div className="sidebar">
        <div className="logo">
          <Logo/>
        </div>
        <ul>
          <li><Link prefetch href="/"><a>JS Object to React PropTypes</a></Link></li>
        </ul>

        <div className="footer">
          <a href="https://github.com/ritz078/transform-www"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg></a>
          <br />Created by <a href="https://twitter.com/ritz078">@ritz078</a>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}