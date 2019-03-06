import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {

  ERRORS = {
    INVALID_EMAIL: "Please enter a valid email address",
    INVALID_PASSWORD: "Password must contain at least 8 characters, 1 number, 1 upper case letter, and 1 symbol.",
    INVALID_PROFILE_NAME: "Two profiles cannot have same name",
    INVALID_CONFIRM_PASSWORD: "The passwords you entered do not match",
    NO_CONNECTION: "Unable to connect to server, please check your network connection and try again",
    SOCIAL_LOGIN_EMAIL_MISSING: "We are unable to get any email id from your social media account. Please try another medium to signup",
    OOPS: "Oops...Something went wrong, please try again later",
  };

  LANGS = {
    ADMIN_EMAIL: "Info@clavora.com",
    ADMIN_PHONE: "(628) 8678 8900",
    LABEL_SIGN_UP: "Sign Up",
    LABEL_FACEBOOK: "Facebook",
    LABEL_GOOGLE: "Google",
    LABEL_LOGIN: "Login",
    LABEL_YES: "Yes",
    LABEL_NO: "No",
    LABEL_OK: "Ok",
    LABEL_FORGOT_PASSWORD: "Forgot Password",
    LABEL_SUBMIT: "Submit",
    LABEL_SKIP: "SKIP",
    LABEL_NEXT: "NEXT",
    LABEL_RETRY: "RETRY",
    LABEL_GO_BACK: "GO BACK",
    LABEL_FINISH: "FINISH",
    LABEL_SET: "Set",
    LABEL_DONE: "DONE",
    LABEL_VITAMIN: "Vitamin",
    LABEL_DOSAGE: "Dosage",
    LABEL_APPROX_TIME: "Approx Time",
    LABEL_FREQUENCY: "Frequency",
    LABEL_INSTRUCTIONS: "Instructions",
    LABEL_PREV: "PREV",
    LABEL_BUY_NOW: "Buy Vitamin",
    LABEL_COMING_SOON: "Coming Soon",
    LABEL_ACCEPT_TERMS: "Accept Terms & Conditions",
    LABEL_DOSE_TAKEN: "Dose Taken",
    LABEL_MARK_TAKEN: "Mark when taken",
    LABEL_CURRENT_PASSWORD: "Current Password",
    LABEL_NEW_PASSWORD: "New Password",
    LABEL_CONFIRM_PASSWORD: "Confirm New Password",
    LABEL_DAYS: "Days",
    LABEL_IN_PROGRESS: "In progress",
    LABEL_COMPLETED_ON: "Completed on",
    LABEL_EMAIL_ADDRESS: "Email address",
    LABEL_PASSWORD: "Password",
    LABEL_A: "A",
    LABEL_B: "B",
    LABEL_SURVEY: "+ Start A Survey",
    LABEL_SURVEY_AGAIN: "+ Survey Again",
    LABEL_COURSE_PLAN: "Course Plan Management",
    PAGE_LABEL_COURSE_PLAN: "Course Plan",
    LABEL_NOTIFICATIONS: "Notifications",
    PAGE_LABEL_SIGN_UP_DETAIL: "Please enter your email and create a password below to create your account.",
    // PAGE_LABEL_ACCEPT_TNC_1: "By creating an account you are agreeing to our",
    PAGE_LABEL_ACCEPT_TNC_2: "Terms & Conditions",
    PAGE_LABEL_ACCEPT_TNC_3: "and",
    PAGE_LABEL_ACCEPT_TNC_4: "Privacy & Policy",
    PAGE_LABEL_ALREADY_HAVE_ACCOUNT: "Already have an account?",
    PAGE_LABEL_LOGOUT_SUBTITLE: "Are you sure you want to log out?",
    PAGE_LABEL_COMPLETE_TITLE: "Are you sure want to complete?",
    PAGE_LABEL_COMPLETE_SUBTITLE: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    PAGE_TITLE_CHOOSE_CONSUMPTION_1: "Please select one of the vitamins below:",
    PAGE_TITLE_CHOOSE_CONSUMPTION_2: "A",
    PAGE_TITLE_CHOOSE_CONSUMPTION_3: "How many vitamins should I take?",
    PAGE_TITLE_DURATION: "Duration",
    PAGE_TITLE_ADD_COURSE_PLAN: "Add Course Plan",
    PAGE_LABEL_DONT_HAVE_ACCOUNT: "Don’t have an account? ",
    PAGE_LABEL_HEALTH_ARTICLE: "Health Article",
    PAGE_LABEL_GO_TO_DATE: "Go to Date",
    PAGE_LABEL_NO_ARTICLE: "No Article Found",
    PAGE_LABEL_NO_NOTIFICATIONS: "No Older Notifications",
    PAGE_LABEL_LOGIN: "Login Here",
    PAGE_LABEL_START_COURSE_AGAIN: "Course plan for same vitamin already exists for this user, do you really want to edit it?",
    PAGE_LABEL_START_COURSE_AGAIN_2: "Course plan for same vitamin already completed for this user, do you really want to start it again?",
    PAGE_LABEL_SUPP_REQ: "Supplements Required",
    PAGE_LABEL_NO_SUPP_REQ: "No Supplement Required",
    PAGE_LABEL_LOGIN_DETAIL: "Please enter your email and password to log into your account.",
    PAGE_LABEL_FORGOT_PASSWORD_DETAIL: "Please enter your email and we will send you a link to reset your password.",
    PAGE_LABEL_CONGRATS_0: "You have not taken any survey yet",
    PAGE_LABEL_CONGRATS_1: "Congratulations! You are doing great.",
    PAGE_LABEL_SETTINGS_ONBOARDING_TUTORIAL: "Onboarding Tutorial",
    PAGE_LABEL_SETTINGS_LOGOUT: "Logout",
    PAGE_LABEL_START_DATE: "Start Date",
    PAGE_LABEL_END_DATE: "End Date",
    PAGE_LABEL_DURATION: "Duration : ",
    PAGE_LABEL_SELF: "Create for Self ",
    PAGE_LABEL_OTHER: "Create for Other’s ",
    PAGE_LABEL_YOUR_NAME: "Enter Your Name",
    PAGE_LABEL_PERSON_NAME: "Enter Person name ",
    PAGE_LABEL_PERSON: "Select Person",
    PAGE_LABEL_RELATION: "Relation",
    PAGE_LABEL_WELCOME: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    PAGE_LABEL_USER_DETAILS: "Please enter the user details for whom you creating new course plan .",
    PAGE_LABEL_MARK_COMPLETE: " Mark as complete",
    PAGE_LABEL_PARTIAL: "Incomplete daily supplement intake",
    PAGE_LABEL_INCOMPLETE: "Start the day with Supplements",
    PAGE_LABEL_NONE_SUPP: "Supplements taken/No Supplements required for the day",
    PAGE_TITLE_CHANGE_PASSWORD: "Change Password",
    PAGE_TITLE_CONTACT_ADMIN: "Contact Admin",
    PAGE_TITLE_BUY_VIT: "Buy Vitamin",
    PAGE_TITLE_SETTINGS: "Settings",
    PAGE_TITLE_NOTIFICATION: "Notifications",
    PAGE_TITLE_NO_INTERNET: "No Internet connection",
    PAGE_TITLE_WELCOME: "Welcome to Clavora",
    PAGE_SUB_TITLE_NO_INTERNET: "Could not connect to the network. Please check and try again",
    PAGE_TITLE_CHOOSE_CONSUMPTION: "Your Consumption",
    PAGE_LABEL_RESULT: "Your Result",
    PAGE_LABLE_COMING_VIT: "Vitamins are Coming soon",
    PAGE_LABEL_CHOOSE_VITAMIN_DESC: "Choose one of the vitamin and series of question will be presented to analyze how much consumption is required, if its required at all",
    PAGE_LABEL_VITAMIN_NO_DESC: "No Description Added"
  };


  PAGES = {
    FORGOT_PASSWORD: "ForgotPasswordPage",
    TERMS_N_CONDITION: "TncPage",
    LOGIN_SIGNUP: "LoginSignupPage",
    CHOOSE_CONSUMPTION: "ChooseConsumptionPage",
    ONBOARDING: "OnboardingPage",
    CHANGE_PASSWORD: "ChangePasswordPage",
    WELCOME: "WelcomePage",
    CONTACT_ADMIN: "ContactAdminPage",
    COURSE_PLAN: "CoursePlanPage",
    TABS: "TabsPage",
    COURSE_PLAN_MANAGEMENT: "CoursePlanManagementPage",
    SUPPLEMENT_REQUIREMENT: "SupplementRequirementPage",
    CALENDAR: "CalendarPage",
    HEALTH_ARTICLE: "HealthArticlePage",
    HEALTH_ARTICLE_DETAIL: "HealthArticleDetailPage",
    QUESTIONAIRE: "QuestionnairePage",
    SETTINGS: "SettingsPage",
    SUMMARY: "SurveySummaryPage",
    NOTIFICATIONS: "NotificationPage",
    COMING_SOON: "ComingSoonPage",
    BUY_VIT: "BuyVitaminPage",
    NO_INTERNET: "NoInternetPage",
    CHOOSE_PROFILE: "ChooseProfilePage"
  }

  constructor() {
  }

}