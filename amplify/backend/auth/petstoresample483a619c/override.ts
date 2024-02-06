import { AmplifyAuthCognitoStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    const userTypeAttribute = {
        attributeDataType: 'String',
        developerOnlyAttribute: false,
        mutable: true,
        name: 'userType',
        required: false,
    }
    
    const storeOwnerAttr = {
        attributeDataType: 'String',
        developerOnlyAttribute: false,
        mutable: true,
        name: 'storeOwner',
        required: false,
    }
    
    const employmentStoreCode = {
        attributeDataType: 'String',
        developerOnlyAttribute: false,
        mutable: true,
        name: 'employmentStoreCode',
        required: false,
    }
    
    resources.userPool.schema = [
        ...(resources.userPool.schema as any[]), // Carry over existing attributes (example: email)
        userTypeAttribute, storeOwnerAttr, employmentStoreCode
    ]
    
    resources.userPoolClientWeb.writeAttributes = [
        "email"
    ]
    
    resources.userPoolClient.writeAttributes = [
        "email"
    ]
}
