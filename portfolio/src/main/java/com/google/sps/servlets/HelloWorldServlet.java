package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
/* Class that executes the Hello world to the client utilizing the servlets instruction  */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private int helloCount=0;

    @Override
  public void doGet(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
    helloCount++;

    response.setContentType("text/html;");
    response.getWriter().println("<center><h1>Hello Félix Maldonado!</h1></center>");
    response.getWriter().println("<center><p>This page has been watched "+ helloCount + "times. </p></center>");
  }
}