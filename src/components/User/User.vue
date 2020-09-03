<template>
    <div>
        <div class="row" style="padding:8px;">
            <div class="col">
                <user-basic-info></user-basic-info>
            </div>
            <div class="col">
                <user-application></user-application>
            </div>
            <div class="col">
                <user-roles></user-roles>
            </div>
        </div>
    </div>
</template>

<script>
import UserBasicInfo from './UserBasicInfo';
import UserRoles from './UserRoles';
import UserApplication from './UserApplication';

export default {
    components: {
        UserBasicInfo,
        UserApplication,
        UserRoles
    }
};
</script>
