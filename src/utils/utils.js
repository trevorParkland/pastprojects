export const menuItemsType = {
  RESIDENTIAL: {
    DEFAULT: 'residential',
    SUBNAVIGATIONS: {
      OVERVIEW: {
        DEFAULT: 'residentialNavigationOverview',
        SUBMENU: {
          AUTOMATIC_DELIVERY: 'residentailNavigationOverviewAutomaticDelivery',
          BUDGET_PAYMENT_PLAN:
            'residentailNavigationOverviewBudgetPaymentPlans',
          BILLING_AND_PAYMENT:
            'residentailNavigationOverviewBillingAndPayments',
          EBILLING: 'residentailNavigationOverviewEBilling',
          ORDER_ONLINE: 'residentailNavigationOverviewOrderFuelOnline',
        },
      },
      HOME_HEATING_OIL: { DEFAULT: 'residentailNavigationHomeHeatingOil' },
      PROPANE: { DEFAULT: 'residentailNavigationPropane' },
      ORDER_ONLINE: { DEFAULT: 'residentailNavigationOrderFuelOnline' },
      PROMOTIONS: {
        DEFAULT: 'residentailNavigationPromotions',
        SUBMENU: {
          HOME_HEATING_PROGRAM:
            'residentailNavigationPromotionsHomeHeatingProgram',
          REFERRAL_PROGRAM: 'residentailNavigationPromotionsReferralProgram',
        },
      },
      ACCOUNTS: {
        DEFAULT: 'residentailNavigationAccount',
        SUBMENU: {
          OPEN_ACCOUNT: 'residentailNavigationAccountOpenAccount',
          CREDIT_APPLICATION: 'residentailNavigationAccountCreditApplication',
        },
      },
      FAQS: { DEFAULT: 'residentailNavigationFaqs' },
    },
  },
  COMMERCIAL: {
    DEFAULT: 'commercialNavigation',
    SUBNAVIGATIONS: {
      OVERVIEW: {
        DEFAULT: 'commercialNavigationOverview',
        SUBMENU: {
          ORDER_ONLINE: 'commercialNavigationOverviewOrderFuelOnline',
          EBILLING: 'commercialNavigationOverviewEbilling',
        },
      },
      DIESEL: { DEFAULT: 'commercialNavigationDiesel' },
      PROPANE: { DEFAULT: 'commercialNavigationPropane' },
      LUBRICANTS: {
        DEFAULT: 'commercialNavigationLubricants',
        SUBMENU: {
          AVIATION_MARINE:
            'commercialNavigationLubricantsAviationAndMarineLubricants',
          COMMERCIAL_INDUSTRIAL:
            'commercialNavigationLubricantsCommercialAndIndustrialLubricants',
          DIESEL_EXHAUST: 'commercialNavigationLubricantsDieselExhaustFluid',
          MAT_SAFETY_TECH_DATA:
            'commercialNavigationLubricantsMaterialSafetyAndTechnicalDataSheets',
          HEAVY_DUTY_ENGINE_OIL:
            'commercialNavigationLubricantsTransportHeavyDutyEngineOils',
          AUTOMOTIVE_PASSENGER:
            'commercialNavigationLubricantsAutomotivePassengerCarMotorOils',
        },
      },
      ORDER_ONLINE: { DEFAULT: 'commercialNavigationOrderFuelOnline' },
      SERVICES: {
        DEFAULT: 'commercialNavigationServices',
        SUBMENU: {
          DELIVERED_FUEL: 'commercialNavigationServicesDeliveredFuel',
          ONSITE_REFUELLING: 'commercialNavigationServicesOnsiteRefuelling',
          CARDLOCK_NETWORK: {
            DEFAULT: 'commercialNavigationServicesCardlockNetwork',
            SUBMENU: {
              PIPELINE: 'commercialNavigationServicesCardlockNetworkPipeline',
            },
          },
        },
      },
      SECTORS: {
        DEFAULT: 'commercialNavigationSectors',
        SUBMENU: {
          FARM_CREDIT: 'commercialNavigationSectorsFarmCreditCanada',
        },
      },
      CASE_STUDIES: {
        DEFAULT: 'commercialNavigationCaseStudies',
        SUBMENU: {},
      },
      MY_ACCOUNT: {
        DEFAULT: 'commercialNavigationMyAccount',
        SUBMENU: {
          OPEN_ACCOUNT: 'commercialNavigationMyAccountOpenAnAccount',
          ACCOUNT_LOGIN: 'commercialNavigationMyAccountMyAccountLogin',
        },
      },
      FAQS: { DEFAULT: 'commercialNavigationFaqs' },
    },
  },
  LOCATIONS: 'locationsNavigation',
  ABOUT: {
    DEFAULT: 'AboutBluewaveNavigation',
    SUBNAVIGATIONS: {
      DEFAULT: 'AboutBluewaveNavigation',
      OUR_HISTORY: 'aboutBluewaveNavigationOurHistory',
      PARTNERSHIPS: 'aboutBluewaveNavigationPartnershipsAndAffiliations',
      CAREERS: 'aboutBluewaveNavigationCareers',
      HEALTH_AND_SAFETY: {
        DEFAULT: 'aboutBluewaveNavigationHse',
        SUBMENU: {
          DEDICATED_TO_HSE: 'aboutBluewaveNavigationHseDedicatedToHse',
        },
      },
      BLOG: {
        DEFAULT: 'aboutBluewaveNavigationBlog',
        SUBMENU: {
          WINTER_SAFETY: 'aboutBluewaveBlogWinterSefty',
          PROPANE_BLOG:
            'aboutBluewaveBlogPropaneGrowthServiceDeliveryNationalSupply',
          CUSTOMER_VALUES: 'aboutBlogwaveLocalPropaneSuperiorCustomerValue',
        },
      },
    },
  },
  CONTACT: {
    DEFAULT: 'contactNavigation',
    SUBNAVIGATIONS: {
      CONTACT_US: 'contactNavigationContactUs',
      CUSTOMER_CARE: 'contactNavigationCustomerCare',
      LOCAL_BRANCH: 'contactNavigationFindLocalBranch',
    },
  },
};

export const domainName = 'bluewaveenergy.ca';
export const Breakpoints = {
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 1399,
};

const constants = {
  HOME: {
    HOME_TOP_NOTIFICATION: 'homeTopNotification',
    HOME_CONTAINERS: 'homeContainers',
    HOME_RESIDENTIAL_SECTION: 'homeResidentialSection',
    HOME_COMMERCIAL_SECTION: 'homeCommercialSection',
    HOME_PROMO: 'homePromo',
    HOME_RESIDENTIAL_CUSTOMERS: 'homeResidentialCustomers',
    HOME_REFERRAL_PROGRAM: 'homeReferralProgram',
    HOME_CARDS: 'homeCards',
    HOME_DELIVERY_PRODUCTS: 'homeDeliveryProducts',
    HOME_MAP_CONTAINER: 'homeMapContainer',
    HOME_CUSTOMER_CARE: 'homeCustomerCare',
    HOME_HSC_SECTION: 'homeHseSection',
    HOME_PLEDGE_PROGRAM: 'homePledgeProgram',
    HOME_CARBON_OFFSET: 'homeCarbonOffset',
  },
  COMMON: {
    FOOTER: 'footer',
    COMMON_TOP_BAR: 'commonTopBar',
    NAVIGATION: 'navigation',
    EBILLING_POP_UP: {
      DEFAULT: 'contactCustomerCareeBillingContents',
      FOR_HOME: 'contactCustomerCareEBillingForHome',
      FOR_BUSINESS: 'contactCustomerCareEBillingForYourBusiness',
      BACKGROUND_IMAGE: 'ebillingPopupBackground',
    },
    OPEN_ACCOUNT_POP_UP: {
      DEFAULT: 'contactCustomerCareOpenAnAccountContents',
      FOR_HOME: 'contactCustomerCareOpenAnAccoutPopUpForHome',
      FOR_BUSINESS: 'contactCustomerCareOpenAnAccountBusiness',
      BACKGROUND_IMAGE: 'openAnAccountPopupBackground',
    },
    PROPANE_POP_UP: {
      DEFAULT: 'deliveringMorePropaneContents',
      IMAGE: 'deliveringMorePropaneImage',
      FOR_HOME: 'deliveringMorePropaneForHome',
      FOR_BUSINESS: 'deliveringMorePropaneForBusiness',
      FOOTER: 'footerProductPropane',
      DELIVERING_MORE: 'homePropane',
      BACKGROUND_IMAGE: 'propanePopupBackground',
    },
  },
  DEFAULT_MENU: {
    REQUEST_A_CALLBACK: 'REQUEST A CALLBACK',
    SEARCH_SITE: 'SEARCH SITE',
    CLIENT_SPACE: {
      DEFAULT: 'CLIENT SPACE',
      CONTENT_LIST: 'clientSpaceContents',
      CONTENT: 'ClientSpaceContent',
      RESIDENTIAL_CONTENT: 'clientSpaceResidentialCustomer',
      COMMERCIAL_CONTENT: 'clientSpaceCommercialCustomers',
      CONTENT_TEXT_WITH_LINK: 'ClientSpaceContentLink',
    },
  },
  RESIDENTIAL_BLUEWAVE: {
    RESIDENTIAL_TOP_BAR: 'ResidentialImageContainer',
    OVERVIEW: {
      RESIDENTIAL_OVERVIEW_TEXT: 'residentailOverviewText',
      RESIDENTIAL_OVERVIEW_FAQ: 'residentialOverviewFaqs',
      RESIDENTIAL_OVERVIEW_DISCLAIMER_TEXT: 'residentialOverviewDisclaimerText',
      AUTOMATIC_DELIVERY: {
        DEFAULT: 'residentialOverviewAutomaticDeliveryText',
        LIST: 'residentialOverviewAutomaticDeliveryList',
      },
      BILLING_AND_PAYMENT: {
        SECTION: 'residentialOverviewBillingAndPaymentsHeader',
        PLAN_FAQS: 'residentialOverviewBillingAndPaymentsPlans',
        PAYMENT_FAQS: 'residentialOverviewBillingAndPaymentsPMs',
      },
      BUDGET_PAYMENT_PLAN: {
        HEADER_SECTION: 'residentialOverviewBudgetPaymentPlansHeader',
        SECTION_TEXT: 'residentialOverviewBudgetPaymentPlansText',
        SIGN_UP_TEXT: 'residentialOverviewBudgetPaymentPlansCard',
        FAQS: 'residentialOverviewBudgetPaymentPlanFaqs',
        DISCLAIMER: 'residentialOverviewBudgetPaymentPlansDisclaimerText',
      },
      EBILLING: {
        HEADER: 'residentialOverviewEbillingHeader',
        SECTION_TEXT: 'residentialOverviewEBillingText',
        RIGHT_CARD: 'residentialOverviewEBillingCard',
        DISCLAIMER: 'residentailOverviewEbillingDisclaimerText',
      },
      ORDER_ONLINE: {
        HEADER: 'residentialOverviewOrderFuelOnlineHeader',
        ORDER_HEATING_OIL: 'residentialOverviewOrderFuelOnlineHeatingOil',
        ORDER_PROPANE: 'residentialOverviewOrderFuelOnlineOrderPropane',
      },
    },
    HOME_HEATING_OIL: {
      DEFAULT: 'residentialOverviewHomeHeatingFurnaceOil',
      CONTENT_LIST: {
        HEADER: 'residentialOverviewHomeHeatingFurnaceOilContent',
        GET_FASTER: 'residentialOverviewHomeHeatingFurnaceOilChooseAccount',
        LEFT_BLOCK: 'residentialOverviewHomeHeatingFurnaceOilAutomaticDelivery',
        RIGHT_BLOCK: 'residentialOverviewHomeHeatingFurnaceOilClickForDele',
      },
      DISCLAIMER: 'residentialOverviewHomeHeatingDisclaimer',
    },
    PROPANE: {
      HEADER: 'residentialPropaneHeader',
      LEFT_SECTION: 'residentialPropaneText',
      RIGHT_CARD: 'residentialPropaneResources',
      PROPANE_COVERAGE: 'residentialPropaneCoverage',
      FAQS: 'residentialPropaneFaqs',
    },
    PROMOTIONS: {
      CANEX: {
        DEFAULT: 'residentialPromotionsCanexHomeHeatingProgram',
        CFONE_CARD: 'residentialPromotionsCanexHomeHeatingProgramCFOneCard',
        DISCLAIMER: 'residentialPromotionsCanexHomeHeatingProgramDisclaimer',
      },
      REFERRAL_PROGRAM: {
        DEFAULT: 'residentialPromotionsReferralProgram',
        MAIN_TEXT: 'residentialPromotionsReferralProgram',
        DISCLAIMER: 'residentialPromotionsReferralProgramDisclaimerText',
      },
    },
    ACCOUNTS: {
      DEFAULT: 'residentialAccount',
      OPEN_ACCOUNT: {
        OPEN_ACCOUNT_TEXT: 'residentialOpenAccountText',
        FAQS: 'residentialOpenAccountFaq',
      },
      OPEN_ACCOUNT_SUB_NAV: {
        DEFAULT: 'residentailNavigationAccountOpenAccount',
        SECTION_TEXT: 'residentialAccountOpenAccountText',
        LINK_BUTTON: 'residentialAccountOpenAccountLinkButton',
        FOOT_NOTE: 'residentialPromotionsOpenAccountFootNote',
      },
      OPEN_ACCOUNT_ON_CALL: {
        DEFAULT: 'residentialAccountOpenAnOnCallAccount',
        HEADER: 'residentialAccountOpenAnOnCallAccountHeader',
        CONTENT_LIST: {
          DEFAULT: 'residentialOpenAnOnCallAccountContents',
          SIGN_UP_FOR_ON_CALL: 'residentialOpenAnOnCallAccountContent',
          PAY_AS_YOU_GO: 'residentialOpenAnOnCallAccountContentPayment',
        },
      },
    },
    RESIDENTIAL_ORDER_ONLINE_CARD: 'residentialOverviewOrderFuelOnlineBadge',
    RESIDENTIAL_EBILLING_CARD: 'residentialOverviewEBillingBadge',
    RESIDENTIAL_OPEN_ACCOUNT_CARD: 'residentialOverviewOpenAccountBadge',
  },
  COMMERCIAL_BLUEWAVE: {
    COMMERCIAL_TOP_BAR: 'commercialImageContainer',
    OVERVIEW: {
      COMMERCIAL_OVERVIEW_HEADER: 'commercialOverviewHeader',
      COMMERCIAL_OVERVIEW_TEXT: {
        DEFAULT: 'commercialOverviewContents',
        HIGH_QUAITY_PRODUCT: 'commercialOverviewContentHighQualityProducts',
        BAS_EXCELLENCE: 'commercialOverviewContentBusinessAndServiceExcellence',
        SRR: 'commercialOverviewContentSRR',
        LARGEST_DISTRIBUTOR: 'commercialOverviewContentLargestDistributor',
        AT_YOUR_SERVICE: 'commercialOverviewContentAtYourService',
      },
      COMMERCIAL_OVERVIEW_FAQ: 'commercialOverviewFaqs',
      EBILLING: {
        CONTENT_LIST: {
          DEFAULT: 'commercialOverviewEbillingContents',
          EASY_SECURE: 'commercialOverviewEbillingContentEasyAndSecure',
          REG_EBILLING:
            'commercialOverviewEbillingContentRegisteringForEBilling',
          SEVERAL_METHODS: 'commercialOverviewEbillingContentSeveralMethods',
          EBILLING_CLIENT_SPACE: 'commercialeBillingPaperlessContent',
          LEFT_BLOCK: 'commercialeBillingPaperlessLeftBlock',
          RIGHT_BLOCK: 'commercialeBillingPaperlessRightBlock',
        },
        HEADER: 'commercialOverviewEBilling',
        REGISTER_NOW: 'commercialEbillingRegisterNow',
        DISCLAIMER: 'commercialOverviewEbillingDisclaimer',
      },
      ORDER_ONLINE: {
        SECTION_TEXT: 'commercialOverviewOrderFuelOnlineContent',
      },
    },
    DIESEL: {
      DEFAULT: 'commercialDiesel',
      HEADER: 'commercialDieselBulkDieselHeader',
      CONTENT_LIST: {
        DEFAULT: 'commercialDieselContents',
        DIESEL_FUEL: 'commercialDieselContentDieselFuel',
        DISCLAIMER: 'commercialDieselFeatureDieselCoverage',
      },
    },
    PROPANE: {
      DEFAULT: 'commercialPropane',
      HEADER: 'commercialPropaneHeader',
      CONTENT_LIST: {
        DEFAULT: 'commercialPropaneContents',
        DISCLAIMER: 'commercialPropaneContentPropaneCoverage',
      },
    },
    LUBRICANTS: {
      DEFAULT: 'commercialLubricants',
      HEADER: 'commercialLubricantsHeader',
      CONTENT_LIST: 'commercialLubricantsContents',
      FAQS: 'commercialLubricantsTechnicalSupport',
      RIGHT_CARD: 'commercial LubricantsMSTDSText',
      AVIATION_MARINE: {
        DEFAULT: 'commercialLubricantsAviationAndMarineLubricants',
        HEADER: 'commercialLubricantAviationAndMarineHeader',
        CONTENT: 'commercialLubricantsContentAviationAndMarine',
      },
      COMMERCIAL_INDUSTRIAL: {
        DEFAULT: 'commercialLubricantsCommercialAndIndustrialLubricants',
        HEADER: 'commercialLubricantsHeaderCommercialAndIndustrialLubricants',
        CONTENT_LIST: {
          DEFAULT:
            'commercialLubricantsContentsCommercialAndIndustrialLubricants',
          SHELL:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsShell',
          SHELL_CATALOG:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsShellCatalog',
          P66: 'commercialLubricantsContentCommercialAndIndustrialLubricantsP66',
          ILX: 'commercialLubricantsContentCommercialAndIndustrialLubricantsILX',
          ILX_BUTTON:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsILXHydraulicLink',
          OECD: 'commercialLubricantsContentCommercialAndIndustrialLubricantsOECDILX',
          OECD_BUTTON:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsOECDILXLink',
          COMPRESSOR:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsHCCompressorILX',
          COMPRESSOR_BUTTON:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsHCLink',
          RIDGE_LINE:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsRidgeline',
          RIDGE_LINE_BUTTON:
            'commercialLubricantsContentCommercialAndIndustrialLubricantsRidgelineLink',
        },
      },
      DIESEL_EXHAUST: {
        DEFAULT: 'commercialLubricantsDEF',
        HEADER: 'commercialLubricantDEFHeader',
        CONTENT: 'commercialLubricantsContentDEF',
      },
      MAT_SAFETY_TECH_DATA: {
        DEFAULT: 'commercialLubricantsMSTDS',
        HEADER: 'commercialLubricantMaterialSefty',
        CONTENT: 'commercialLubricantsMSTDSContent',
        BULLET: 'commercialLubricantsMaterialSeftyAndDataBullets',
      },
      TRANSPORT_HEAVY_DUTY: {
        DEFAULT: 'commercialLubricantsTransport',
        HEADER: 'commercialLubricantsTransportHeader',
        CONTENT_LIST: {
          DEFAULT: 'commercialLubricantsContentsTransportHeavyDutyOils',
          RIDGE_LINE_BUTTON:
            'commercialLubricantsContentTransportRidgelineLink',
        },
      },
      AUTOMOTIVE_PASSENGER: {
        DEFAULT: 'commercialLubricantsAutomotive ',
        HEADER: 'commercialLubricantsAutomotiveHeader',
        CONTENT_LIST: 'commercialLubricantsContentsAutomotive',
      },
    },
    ORDER_ONLINE: {},
    SERVICES: {
      DEFAULT: 'commercialServices',
      HEADER: 'commercialServicesHeader',
      CONTENT_LIST: 'commercialServicesContents',
      CARDLOCK: {
        DEFAULT: 'commercialServicesCardlock',
        HEADER: 'commercialServicesCardlockHeader',
        CONTENT_LIST: {
          DEFAULT: 'commercialServicesCardlockContents',
          FUELING_UP_BUTTON: 'CardlockContentFuelingLinks',
          GREATER_COVERAGE_BUTTON:
            'commercialServicesCardlockContentNeedGreaterCoverage ',
        },
        RIGHT_CARD: 'commercialServicesCardlockContent',
        PIPELINE: {
          DEFAULT: 'commercialServicesCardlockPipelineCommercial',
          HEADER: 'commercialServicesCardlockPipelineCommercialHeader',
          CONTENT: 'commercialServicesCardlockPipelineCommercialContent',
        },
      },
      ONSITE_REFUELLING: {
        DEFAULT: 'commercialServicesOnsiteRefuelling',
        HEADER: 'commercialServicesOnsiteRefuellingHeader',
        CONTENT_LIST: 'commercialServicesOnsiteRefuellingContents',
        DISCLAIMER: 'commercialServicesOnsiteRefuellingDisclaimer',
        RIGHT_CARD: 'commercialServicesOnsiteRefuellingSavingsContent',
        SAVE_TIME: 'commercialServicesOnsiteRefuellingContentSaveTimeMoney',
        CALCULATE_SAVINGS:
          'commercialServicesOnsiteRefuellingContentCalculateSavings',
      },
      DELIVERED_FUEL: {
        CONTENT_LIST: 'commercialServicesDeliveredFuelContents',
        HEADER: 'commercialServicesDeliveredFuelHeader',
        DELIVERED_FUEL_CONTENT:
          'commercialServicesDeliveredFuelContentDeliveredFuel',
      },
    },
    SECTORS: {
      DEFAULT: 'commercialSectors',
      HEADER: 'commercialSectorsHeaderContent',
      CONTENT_LIST: 'commercialSectorsContents',
      IMAGES_SVG: 'commercialSectorsAssets',
      FARM_CREDIT: {
        DEFAULT: 'commercialSectorsFarmCreditCanada',
        HEADER: 'commercialSectorsFarmCreditCanadaHeader',
        CONTENT_LIST: {
          DEFAULT: 'commercialSectorsFarmCreditCanadaContents',
          SECTION_ONE: 'commercialSectorsFarmCreditCanadaContent',
          SECTION_TWO: 'commercialSectorsFarmCreditCanadaContentGetInTouch',
        },
      },
    },
    MY_ACCOUNT: {
      DEFAULT: 'commercialAccount',
      MULTIMEDIA_TEXT: 'commercialOpenAccountText',
      FAQS: 'commercialAccountFaqs',
    },
    CASE_STUDIES: {
      DEFAULT: 'commercialCaseStudies',
      HEADER: 'commercialCaseStudiesHeader',
      CONTENT_LIST: {
        DEFAULT: 'commercialCaseStudiesContents',
        CD: 'commercialCaseStudiesContentReliableService',
      },
    },
    FAQ: {},
    COMMERCIAL_CONTACT_CARD: 'commercialOverviewContactUs',
    COMMERCIAL_OPEN_ACCOUNT_CARD: 'commercialOverviewOpenAccountBadge',
  },
  LOCATION_BLUEWAVE: {
    LOCATION_TOP_BAR: 'locationImageContainer',
    LOCATION_DETAILS_CONTENT: {
      DEFAULT: 'locationDetails',
      CONTENT_LIST: 'locationDetailsContents',
      PRODUCT_SUPPLIER: 'productSupplierInCityContent',
      PRODUCT_SUPPLIER_IMAGES: 'locationAddressProductSupplierImages',
      LOCATION_DETAILS: 'locationDetailsContent',
      MULTI_PRODUCT_OFFERING: 'loctionDeatilsMutiProductOffering',
      CUSTOMER_CARE_EXCELLENCE: 'locationDetailsCustomerCareExcellence',
      SAFETY_REPUTATION: 'locationDetailsSaftyReputation',
      LOCATION_CONTACT: 'locationContactUsToday',
      ALSO_AVAILABLE: 'locationDetailsAlsoAvailable',
      DIESEL_IMAGE: 'homeDiesel',
      HEATING_OIL_IMAGE: 'homeHeatingOil',
      LUBRICANTS_IMAGE: 'homeLubricants',
      PROPANE_IMAGE: 'homePropane',
      DEF_IMAGE: 'productDef',
      GRANDE_PRAIRIE_DC_TITLE: 'GRANDE PRAIRIE DC',
      GRANDE_PRAIRIE_DC_SLUG: 'grandeprairie-dc',
    },
  },
  ABOUT_BLUEWAVE: {
    ABOUT_BLUEWAVE_SLUG: 'about',
    ABOUT_BLUEWAVE_TITLE: 'about bluewave',
    ABOUT_NAVIGATION: 'AboutBluewaveNavigation',
    ABOUT_TOP_BAR: 'aboutImageContainer',
    ABOUT_BLUEWAVE_TEXT: 'aboutBluewaveEnergyText',
    ABOUT_SHELL_LUBRICANTS: 'aboutShellLubricants',
    ABOUT_PHILLIPS66_LUBRICANTS: 'aboutPhillips66Lubricants',
    ABOUT_PLEDGE_PROGRAM: 'aboutPledgeProgram',
    ABOUT_NEED_ASSISTANCE: 'aboutNeedAssistance',
    ABOUT_JOIN_OUR_TEAM: 'aboutJoinOurTeam',
    ABOUT_SECTION_VALUES_TEXT: 'AboutValuesText',
    OUR_HISTORY: {
      DEFAULT: 'aboutBluewaveOurHistory',
      HEADER: 'aboutBleuwaveOurHistoryHeader',
      CONTENT: 'aboutBluewaveOurHistoryContent',
    },
    CAREERS: {
      DEFAULT: 'aboutBluewaveCareers',
      HEADER: 'aboutBluewaveCareersHeader',
      CONTENT_LIST: {
        DEFAULT: 'aboutBluewaveCareersContents',
        CONTENT_HEADER: 'aboutCareersContentHeader',
      },
    },
    PARTNERSHIPS: {
      DEFAULT: 'aboutBluewavePartnershipsAndAffiliations',
      HEADER: 'bluewaveEnergyPartnershipsAndAffiliationsHeader',
      CONTENT_LIST: {
        DEFAULT: 'bluewaveEnergyPartnershipsAndAffiliationsContents',
      },
    },
    HEALTH_AND_SAFETY: {
      SLUG: 'hse',
      TITLE: 'Health, Safety & Environment',
      DEFAULT: 'aboutBluewaveHealthSafetyAndEnvironment',
      HEADER: 'aboutBluwaveHSEHeader',
      CONTENT_LIST: {
        DEFAULT: 'aboutBluewaveHSEContents',
        DEDICATED_TO_HSE_SECTION: 'aboutBluewaveHSEBatch',
        HEALTH_SAFETY_ENVIRONMENT: 'aboutBluewaveHSE',
        RISK_MITIGATION: 'aboutBluewaveHSERiskMitigation',
      },
      DEDICATED_TO_HSE: {
        DEFAULT: 'aboutBluewaveDadicatedToHse',
        HEADER: 'aboutBluewaveHSEDedicatedToHSEHeader',
        CONTENT_LIST: {
          DEFAULT: 'aboutBluewaveHSEDedicatedToHSEContents',
          DEDICATED_TO_HSE_SECTION: 'aboutBluewaveHSEBatch',
          VIDEO_SECTION: 'aboutBluewaveHSEBusinessMeetsSafety',
          HSC_CULTURE: 'aboutDedicatedToHseHSECulture',
          DEDICATED_TO_HSE_CONTENT: 'aboutBluewaveHSEDedicatedToHSE',
        },
      },
    },
    BLOG: {
      WINTER_SAFETY: {
        DEFAULT: 'aboutBluewaveBLOG',
        HEADER: 'aboutBluewaveBlogHeader',
        CONTENT_LIST: {
          DEFAULT: 'aboutBluewaveBLOGContents',
          TOP_SECTION: 'aboutBluewaveBlogWintersafety',
          BORDER_SECTION: 'aboutBluewaveBlogAutomaticDeliveryBatch',
        },
      },
      PROPANE_BLOG: {
        DEFAULT: 'aboutBluewaveBlogPropane',
        HEADER: 'aboutBluewaveBlogPropaneHeader',
        CONTENT_LIST: {
          DEFAULT: 'aboutBluewaveBlogPropaneByParklandContents',
        },
      },
      CUSTOMER_VALUES: {
        DEFAULT: 'aboutBluewaveBlogLocalPropaneService',
        HEADER: 'commercialLubricantAviationAndMarineHeader',
        CONTENT: 'aboutBluewaveBlogLocalPropaneServiceCustomerValue',
      },
    },
    ABOUT_PLEDGE_PAGE: {
      DEFAULT: 'aboutBluewaveEnergyPledgeProgram',
      HEADER: 'bluewaveEnergyPledgeProgramHeader',
      CONTENT_LIST: {
        DEFAULT: 'bluewaveEnergyPledgeProgramContents',
      },
    },
  },
  THANKYOU_BLUEWAVE: {
    THANKYOU: {
      DEFAULT: 'ThankYou',
      HEADER_TEXT: 'residentialThankYouHeader',
      CONTENT: 'residentialThankYouContent',
    },
    RESIDENTIAL_EBILLING: {
      DEFAULT: 'residentialeBillingThankYou',
      HEADER_TEXT: 'residentialeBillingThankYouHeader',
      CONTENT_LIST: 'residentialThankYouContents',
      CONTENT: 'residentialThankYouContent ',
      TWITTER_LINK: 'residentialThankYouTwitterConnectLink',
    },
    COMMERCIAL_EBILLING: {
      DEFAULT: 'commercialThankYou',
      HEADER_TEXT: 'commercialThankYouHeader',
      CONTENT_LIST: 'commercialThankYouContents',
      CONTENT: 'commercialThankYouContent',
      TWITTER_LINK: 'comercialThankYouTwitterLink',
    },
    WELCOME: {
      DEFAULT: '',
      CONTENT: 'thankYouWelcomeContent',
    },
  },
  CONTACT_US: {
    DEFAULT: 'contactUs',
    CONTACT_NAVIGATION: 'contactNavigation',
    CONTACT_TOP_BAR: 'contactImageContainer',
    CONTACT_TOP_BAR_TABLET: 'contactImageContainerTablet',
    PHONE_EMAIL_CARD: 'contactOverviewCommonPhoneOrEmail',
    CUSTOMER_CARE_CARD: 'contactOverviewCustomerCareBadge',
    MEDIA_INQUIRIES_CARD: 'contactCustomerCareMediaInquiries',
    HEADER: 'contactHeader',
    CONTENT: 'contactUsContent',
    CUSTOMER_CARE: {
      DEFAULT: 'contactCustomerCare',
      HEADER: 'contactCustomerCareHeader',
      CONTENT_LIST: {
        DEFAULT: 'contactCustomerCareContents',
        EXCELLENCE: 'contactCustomerCareExcellence',
        CUSTOMER_CARE_PHONE: 'contactCustomerCareByPhone',
        CUSTOMER_CARE_EMAIL: 'contactCustomerCareByEmail',
        CLIENT_SPACE: 'contactCustomerCareClientSpace',
        ONLINE_FORMS: 'contactCustomerCareOnlineForms',
        REFERENCE_LINKS: 'contactCustomerCareQuickReferenceLinks',
      },
    },
    ALERT_DETAILS: 'contactCovid19Content',
    CONTACT_US_COMMERCIAL: {
      DEFAULT: 'contactContactUsCommercial',
      HEADER: 'contactUsCommercialHeader',
      CONTENT: 'contactContactUsCommercialContent',
    },
  },
  PAGES: {
    WELCOME: {
      DEFAULT: 'welcomePage',
      BACKGROUND_IMAGE: 'welcomeToBWImageBackground',
      LOGO_CONTAINER: 'bwlogo',
      FORM_HEADER: 'deliverYourFuel',
      CONTENT_LIST: {
        DEFAULT: 'fuelProaneLubricants',
      },
      FOOTER: 'welcomePageFooter',
    },
    PROPANE_YOU_TRUST: {
      DEFAULT: 'propaneYouCanTrust',
      TOP_BAR: 'propaneYouCanTrustHeader',
      IMAGE_CONTAINER: 'propaneYouCanTrustBackgroundImage',
      HEADER: 'propaneProviderHeader',
      CONTENT_LIST: {
        DEFAULT: 'propaneYouCanTrustContents',
        PROPANE_CONTACT_US: 'propaneContactUs',
        PROPANE_SERVICE_AREAS: 'propaneServiceAreas',
      },
    },
    LORDCO: {
      BACKGROUND_IMAGE: 'backgroundImage',
      TOP_BAR: 'lordcoImageHeader',
      SUB_HEADER: 'deliveringMoreForYou',
      BOTTOM_LINKS: {
        DEFAULT: 'listOfImageLinks',
        SOLUTIONS_HUB: 'imageWithLinkTraining',
      },
      LUBRICANTS_CATALOGUE: {
        DEFAULT: 'lubricantsCatalogue',
        IMAGE_WITH_PDF: 'imageswithLinks',
      },
      TEXT_WITH_IMAGE: {
        DEFAULT: 'textWithCenterImage',
        LIST_TEXT_WITH_IMAGE: 'centerAllignedText',
        LIST_CONTACT_TEXT: 'centerAlignedtextWithEmailAndContact',
      },
      PROMOTION: {
        DEFAULT: 'imagesWithPdfLinks',
      },
      FOOTER: 'lordcoFooter',
    },
  },
};

export const LocationTypes = {
  Branch: 'Branch',
  Cardlock: 'Cardlock',
  LubricantDistributionCentre: 'Lubricant Distribution Centre',
};

export const MenuType = [
  {
    path: 'about',
    name: 'about bluewave',
  },
];

export default constants;
