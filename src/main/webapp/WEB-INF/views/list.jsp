<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>AJAX List</title>
</head>
<body>
	<h1>AJAX List</h1>
	<main class="container">
		<div id="results">
		</div>
		<button id="load-more">Load More</button>
	</main>
	<script src="/list.js"></script>
</body>
</html>