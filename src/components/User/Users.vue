<template>
    <div>
        <div class="card" style="margin: auto; width: 90%; margin-top: 4%;">
            <div class="card-header">User</div>
            <user-search-bar></user-search-bar>
            <users-grid></users-grid>
            <user-pagination></user-pagination>
        </div>
    </div>
</template>

<script>
import UserSearchBar from './UserSearchBar';
import UserPagination from './UserPagination';
import UsersGrid from './UsersGrid';

export default {
    components: {
        UserSearchBar,
        UserPagination,
        UsersGrid
    }
};
</script>
