import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SapComponent } from './sap/sap.component';
import { PythonComponent } from './python/python.component';
import { LinuxComponent } from './linux/linux.component';
import { GooglecloudComponent } from './googlecloud/googlecloud.component';
import { DatascienceComponent } from './datascience/datascience.component';
import { AwscloudComponent } from './awscloud/awscloud.component';
import { CustomDigitalPlatformComponent } from './custom-digital-platform/custom-digital-platform.component';
import { CloudDataSolutionComponent } from './cloud-data-solution/cloud-data-solution.component';
import { SeamlessUserExperienceComponent } from './seamless-user-experience/seamless-user-experience.component';
import { CybersecurityComplianceComponent } from './cybersecurity-compliance/cybersecurity-compliance.component';
import { ECommerceGrowthComponent } from './e-commerce-growth/e-commerce-growth.component';
import { AiMachineLearningComponent } from './ai-machine-learning/ai-machine-learning.component';
import { BusinessAutomationSolutionComponent } from './business-automation-solution/business-automation-solution.component';
import { AzureCloudComponent } from './azure-cloud/azure-cloud.component';
import { DataEngComponent } from './data-eng/data-eng.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataanylistComponent } from './dataanylist/dataanylist.component';
import { DevopsComponent } from './devops/devops.component';
import { ECommercedevelopmentComponent } from './e-commercedevelopment/e-commercedevelopment.component';
import { JavafullstackComponent } from './javafullstack/javafullstack.component';
import { MobileappdevelopmentComponent } from './mobileappdevelopment/mobileappdevelopment.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { UxComponent } from './ux/ux.component';
import { SoftwaredeveloperComponent } from './softwaredeveloper/softwaredeveloper.component';
import { SoftwaretestingComponent } from './softwaretesting/softwaretesting.component';
import { WebsiteDevelopmentComponent } from './website-development/website-development.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
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
import { InshuranceComponent } from './inshurance/inshurance.component';
import { TravelTourismComponent } from './travel-tourism/travel-tourism.component';
import { EducationComponent } from './education/education.component';
import { GovernmentPublicSectorComponent } from './government-public-sector/government-public-sector.component';
import { ComputingSoftwareComponent } from './computing-software/computing-software.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ValuePropositionComponent } from './value-proposition/value-proposition.component';
import { AwardAndRecoginationComponent } from './award-and-recogination/award-and-recogination.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { RigFrameworkComponent } from './rig-framework/rig-framework.component';
import { SafeShoreMethodologyComponent } from './safe-shore-methodology/safe-shore-methodology.component';
import { OurLeadershipTeamComponent } from './our-leadership-team/our-leadership-team.component';

import { FintechComponent } from './fintech/fintech.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BankingComponent } from './banking/banking.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { NewsComponent } from './news/news.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { SportComponent } from './sport/sport.component';
import { ConsumerElectronicsComponent } from './consumer-electronics/consumer-electronics.component';
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
import { AdminAllFormsComponent } from './admin-all-forms/admin-all-forms.component';
import { AdminBlogsComponent } from './admin-blogs/admin-blogs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminContactsComponent } from './admin-contacts/admin-contacts.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { ApplyComponent } from './apply/apply.component';
import { FrontBlogsComponent } from './front-blogs/front-blogs.component';
import { FrontNewsComponent } from './front-news/front-news.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { FounderComponent } from './founder/founder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'sap', component: SapComponent },
  { path: 'python', component: PythonComponent },
  { path: 'linux', component: LinuxComponent },
  { path: 'googlecloud', component: GooglecloudComponent },
  { path: 'datascience', component: DatascienceComponent },
  { path: 'awscloud', component: AwscloudComponent },
  { path: 'cdf', component: CustomDigitalPlatformComponent },
  { path: 'cds', component: CloudDataSolutionComponent },
  { path: 'aiml', component: AiMachineLearningComponent },
  { path: 'sue', component: SeamlessUserExperienceComponent },
  { path: 'csc', component: CybersecurityComplianceComponent },
  { path: 'bas', component: BusinessAutomationSolutionComponent },
  { path: 'ecg', component: ECommerceGrowthComponent },
  { path: 'azure-cloud', component: AzureCloudComponent },
  { path: 'data-eng', component: DataEngComponent },
  { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'dataanylist', component: DataanylistComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'digitalmarketing', component: DigitalmarketingComponent },
  { path: 'e-commercedevelopment', component: ECommercedevelopmentComponent },
  { path: 'javafullstack', component: JavafullstackComponent },
  { path: 'mobileappdevelopment', component: MobileappdevelopmentComponent },
  { path: 'powerbi', component: PowerbiComponent },
  { path: 'ux', component: UxComponent },
  { path: 'softwaredeveloper', component: SoftwaredeveloperComponent },
  { path: 'softwaretesting', component: SoftwaretestingComponent },
  { path: 'appfooter', component: AppfooterComponent },
  { path: 'bfsi', component: BfsiComponent },
  { path: 'energy', component: EnergyComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'media-entertainment', component: MediaEntertainmentComponent },
  { path: 'logistic', component: LogisticComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'telecom', component: TelecomComponent },
  { path: 'retail', component: RetailComponent },
  { path: 'travel-tourism', component: TravelTourismComponent },
  { path: 'inshurance', component: InshuranceComponent },
  { path: 'education', component: EducationComponent },
  {
    path: 'government-public-sector',
    component: GovernmentPublicSectorComponent,
  },
  { path: 'computing-software', component: ComputingSoftwareComponent },

  { path: 'value-propositon', component: ValuePropositionComponent },
  { path: 'award-and-recogination', component: AwardAndRecoginationComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'rig-framework', component: RigFrameworkComponent },
  { path: 'safe-shore-methodology', component: SafeShoreMethodologyComponent },
  { path: 'our-leadership', component: OurLeadershipTeamComponent },

  { path: 'ecommerce', component: ECommerceComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'fintech', component: FintechComponent },
  { path: 'news', component: NewsComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'sport', component: SportComponent },
  { path: 'insurance', component: InshuranceComponent },
  { path: 'consumer-electronics', component: ConsumerElectronicsComponent },
  { path: 'full-stack-development', component: FullStackDevelopmentComponent },
  { path: 'continuous-integration', component: ContinuousIntegrationComponent },
  { path: 'comprehensive-digital', component: ComprehensiveDigitalComponent },
  { path: 'data-driven', component: DataDrivenComponent },
  { path: 'scalable-software', component: ScalableSoftwareComponent },
  { path: 'website-development', component: WebsiteDevelopmentComponent },
  { path: 'business-analyst', component: BusinessAnalystComponent },
  { path: 'fraudalert', component: FraudAlertComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'careers', component: CareersComponent },
  { path: 'job-openning', component: JobOpeningComponent },
  { path: 'front-blogs', component: FrontBlogsComponent },
  { path: 'front-news', component: FrontNewsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-all-forms', component: AdminAllFormsComponent },
  { path: 'admin-blogs', component: AdminBlogsComponent },
  { path: 'admin-contacts', component: AdminContactsComponent },
  { path: 'admin-news', component: AdminNewsComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'adminregister', component: AdminregisterComponent },
  { path: 'adminlogin', component: LoginComponent },
  { path: 'founder', component: FounderComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
