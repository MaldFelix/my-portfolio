package com.google.sps.servlets;

import java.io.IOException;
import java.util.Date;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/date")
public class DateServlet extends HttpServlet{

    private static final long serialVersionUID = 1L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.setContentType("text/html;");
        response.getWriter().println("The current date in the server is " + new Date());
    }
}