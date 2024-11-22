

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { SapComponent } from './sap/sap.component';
import { PythonComponent } from './python/python.component';
import { LinuxComponent } from './linux/linux.component';
import { GooglecloudComponent } from './googlecloud/googlecloud.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { AwscloudComponent } from './awscloud/awscloud.component';
import { CustomDigitalPlatformComponent } from './custom-digital-platform/custom-digital-platform.component';
import { CloudDataSolutionComponent } from './cloud-data-solution/cloud-data-solution.component';
import { AiMachineLearningComponent } from './ai-machine-learning/ai-machine-learning.component';
import { SeamlessUserExperienceComponent } from './seamless-user-experience/seamless-user-experience.component';
import { CybersecurityComplianceComponent } from './cybersecurity-compliance/cybersecurity-compliance.component';
import { BusinessAutomationSolutionComponent } from './business-automation-solution/business-automation-solution.component';
import { ECommerceGrowthComponent } from './e-commerce-growth/e-commerce-growth.component';
import { AzureCloudComponent } from './azure-cloud/azure-cloud.component';
import { DataEngComponent } from './data-eng/data-eng.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataanylistComponent } from './dataanylist/dataanylist.component';
import { DevopsComponent } from './devops/devops.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { ECommercedevelopmentComponent } from './e-commercedevelopment/e-commercedevelopment.component';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { MobileappdevelopmentComponent } from './mobileappdevelopment/mobileappdevelopment.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { UxComponent } from './ux/ux.component';
import { SoftwaredeveloperComponent } from './softwaredeveloper/softwaredeveloper.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { SoftwaretestingComponent } from './softwaretesting/softwaretesting.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { BfsiComponent } from './bfsi/bfsi.component';
import { EnergyComponent } from './energy/energy.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { MediaEntertainmentComponent } from './media-entertainment/media-entertainment.component';
import { LogisticComponent } from './logistic/logistic.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TelecomComponent } from './telecom/telecom.component';
import { RetailComponent } from './retail/retail.component';
import { TravelTourismComponent } from './travel-tourism/travel-tourism.component';
import { InshuranceComponent } from './inshurance/inshurance.component';
import { EducationComponent } from './education/education.component';
import { GovernmentPublicSectorComponent } from './government-public-sector/government-public-sector.component';
import { ComputingSoftwareComponent } from './computing-software/computing-software.component';
import { TestingComponent } from './testing/testing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurLeadershipTeamComponent } from './our-leadership-team/our-leadership-team.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { ValuePropositionComponent } from './value-proposition/value-proposition.component';
import { SafeShoreMethodologyComponent } from './safe-shore-methodology/safe-shore-methodology.component';
import { RigFrameworkComponent } from './rig-framework/rig-framework.component';
import { AwardAndRecoginationComponent } from './award-and-recogination/award-and-recogination.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ConsumerElectronicsComponent } from './consumer-electronics/consumer-electronics.component';
import { BankingComponent } from './banking/banking.component';
import { SportComponent } from './sport/sport.component';
import { NewsComponent } from './news/news.component';
import { FintechComponent } from './fintech/fintech.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { FullStackDevelopmentComponent } from './full-stack-development/full-stack-development.component';
import { ContinuousIntegrationComponent } from './continuous-integration/continuous-integration.component';
import { ComprehensiveDigitalComponent } from './comprehensive-digital/comprehensive-digital.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { ScalableSoftwareComponent } from './scalable-software/scalable-software.component';
import { BusinessAnalystComponent } from './business-analyst/business-analyst.component';
import { FraudAlertComponent } from './fraud-alert/fraud-alert.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { JobOpeningComponent } from './job-opening/job-opening.component';
import { AdminComponent } from './admin/admin.component';
import { JobsNavbarComponent } from './jobs-navbar/jobs-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminAllFormsComponent } from './admin-all-forms/admin-all-forms.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { ApplyComponent } from './apply/apply.component';
import { FrontNewsComponent } from './front-news/front-news.component';
import { FrontBlogsComponent } from './front-blogs/front-blogs.component';
import { AdminService } from 'src/service/admin.service';

import { AdminregisterComponent } from './adminregister/adminregister.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    ServicesComponent,
    AboutusComponent,
    FooterComponent,
    SapComponent,
    PythonComponent,
    LinuxComponent,
    GooglecloudComponent,
    DatascienceComponent,
    AwscloudComponent,
    CustomDigitalPlatformComponent,
    CloudDataSolutionComponent,
    AiMachineLearningComponent,
    SeamlessUserExperienceComponent,
    CybersecurityComplianceComponent,
    BusinessAutomationSolutionComponent,
    ECommerceGrowthComponent,
    DigitalmarketingComponent,
    AzureCloudComponent,
    DataEngComponent,
    CyberSecurityComponent,
    DataanylistComponent,
    DevopsComponent,

    ECommercedevelopmentComponent,
    JavafullstackComponent,
    MobileappdevelopmentComponent,
    PowerbiComponent,
    UxComponent,
    SoftwaredeveloperComponent,
    WebsiteDevelopmentComponent,
    SoftwaretestingComponent,
    AppfooterComponent,
    BfsiComponent,
    EnergyComponent,
    ShippingComponent,
    HealthcareComponent,
    MediaEntertainmentComponent,
    LogisticComponent,
    RestaurantComponent,
    TelecomComponent,
    RetailComponent,
    TravelTourismComponent,
    InshuranceComponent,
    EducationComponent,
    GovernmentPublicSectorComponent,
    ComputingSoftwareComponent,
    TestingComponent,

    AboutUsComponent,
    OurLeadershipTeamComponent,
    OurClientsComponent,
    CodeOfConductComponent,
    ValuePropositionComponent,
    SafeShoreMethodologyComponent,
    RigFrameworkComponent,
    AwardAndRecoginationComponent,
    ECommerceComponent,
    ConsumerElectronicsComponent,
    BankingComponent,
    SportComponent,
    NewsComponent,
    FintechComponent,
    AgricultureComponent,
    RealEstateComponent,
    FullStackDevelopmentComponent,
    ContinuousIntegrationComponent,
    ComprehensiveDigitalComponent,
    DataDrivenComponent,
    ScalableSoftwareComponent,
    BusinessAnalystComponent,
    FraudAlertComponent,
    ContactUsComponent,
    CareersComponent,
    JobOpeningComponent,
    AdminComponent,
    JobsNavbarComponent,
    AdminAllFormsComponent,
    AdminBlogsComponent,
    AdminNewsComponent,
    AdminContactsComponent,
    ApplyComponent,
    FrontNewsComponent,
    FrontBlogsComponent,
    AdminregisterComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [AdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
