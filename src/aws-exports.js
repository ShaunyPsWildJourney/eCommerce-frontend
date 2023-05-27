/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-southeast-2",
    "aws_cognito_identity_pool_id": "ap-southeast-2:3569d504-1877-4b03-9f33-ae705ffc06ff",
    "aws_cognito_region": "ap-southeast-2",
    "aws_user_pools_id": "ap-southeast-2_AbTnBtzYG",
    "aws_user_pools_web_client_id": "4me57gvo43kblki9meuivkqqla",
    "oauth": {
        "domain": "barebonesdomain-dev.auth.ap-southeast-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,https://www.shaunysshop.com/",
        "redirectSignOut": "http://localhost:3000/login,https://www.shaunysshop.com/login",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
