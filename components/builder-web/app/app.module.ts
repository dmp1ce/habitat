// Copyright (c) 2016-2017 Chef Software Inc. and/or applicable contributors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./routes";
import { AppStore } from "./AppStore";
import { AppComponent } from "./AppComponent";
import { BuildListComponent } from "./project-page/BuildListComponent";
import { CheckingInputComponent } from "./CheckingInputComponent";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExplorePageComponent } from "./explore-page/explore-page.component";
import { FooterComponent } from "./footer/FooterComponent";
import { GitHubRepoPickerComponent } from "./github-repo-picker/GitHubRepoPickerComponent";
import { GravatarComponent } from "./GravatarComponent";
import { HeaderComponent } from "./header/HeaderComponent";
import { KeyAddFormComponent } from "./origin-page/KeyAddFormComponent";
import { KeyListComponent } from "./origin-page/KeyListComponent";
import { NotificationsComponent } from "./notifications/NotificationsComponent";
import { OriginCreatePageComponent } from "./origin-create-page/OriginCreatePageComponent";
import { OriginMembersTabComponent } from "./origin-page/OriginMembersTabComponent";
import { OriginPageComponent } from "./origin-page/OriginPageComponent";
import { OriginsPageComponent } from "./origins-page/OriginsPageComponent";
import { OrganizationCreatePageComponent } from "./organization-create-page/OrganizationCreatePageComponent";
import { OrganizationMembersComponent } from "./organization-members/OrganizationMembersComponent";
import { OrganizationsPageComponent } from "./organizations-page/OrganizationsPageComponent";
import { PackageBreadcrumbsComponent } from "./PackageBreadcrumbsComponent";
import { PackagePageComponent } from "./package-page/PackagePageComponent";
import { PackageInfoComponent } from "./package-info/PackageInfoComponent";
import { PackageListComponent } from "./package-page/PackageListComponent";
import { PackagesListComponent } from "./packages-list/PackagesListComponent";
import { PackagesPageComponent } from "./packages-page/PackagesPageComponent";
import { ProjectSettingsPageComponent } from "./project-settings-page/ProjectSettingsPageComponent";
import { ProjectCreatePageComponent } from "./project-create-page/ProjectCreatePageComponent";
import { ProjectInfoComponent } from "./project-info/ProjectInfoComponent";
import { ProjectPageComponent } from "./project-page/ProjectPageComponent";
import { ProjectsPageComponent } from "./projects-page/ProjectsPageComponent";
import { SCMReposPageComponent } from "./scm-repos-page/SCMReposPageComponent";
import { SideNavComponent } from "./side-nav/SideNavComponent";
import { SignInPageComponent } from "./sign-in-page/SignInPageComponent";
import { SpinnerComponent } from "./SpinnerComponent";
import { TabComponent } from "./TabComponent";
import { TabsComponent } from "./TabsComponent";
import { UserNavComponent } from "./header/user-nav/UserNavComponent";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        BuildListComponent,
        CheckingInputComponent,
        ExplorePageComponent,
        FooterComponent,
        GitHubRepoPickerComponent,
        GravatarComponent,
        HeaderComponent,
        KeyAddFormComponent,
        KeyListComponent,
        NotificationsComponent,
        OriginCreatePageComponent,
        OriginMembersTabComponent,
        OriginPageComponent,
        OriginsPageComponent,
        OrganizationCreatePageComponent,
        OrganizationMembersComponent,
        OrganizationsPageComponent,
        PackageBreadcrumbsComponent,
        PackageListComponent,
        PackageInfoComponent,
        PackagePageComponent,
        PackagesListComponent,
        PackagesPageComponent,
        ProjectCreatePageComponent,
        ProjectInfoComponent,
        ProjectPageComponent,
        ProjectsPageComponent,
        SCMReposPageComponent,
        SideNavComponent,
        SignInPageComponent,
        SpinnerComponent,
        ProjectSettingsPageComponent,
        TabComponent,
        TabsComponent,
        UserNavComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AppStore
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
