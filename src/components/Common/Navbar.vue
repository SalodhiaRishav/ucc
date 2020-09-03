<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">UCC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/dashboard">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user">User <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Application <span class="sr-only">(current)</span></a>
                </li>
            </ul>

            <ul class="navbar-nav pull-right">
                <span class="navbar-text" style="margin-right:10px;">
                  Admin
                </span>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Logout <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
</template>
