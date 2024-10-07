// https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedpermissionsIdentitySourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}
  */
  readonly policyStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}
  */
  readonly principalEntityType?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}
  */
  readonly configuration?: VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
  */
  readonly groupEntityType: string;
}

export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_entity_type: cdktf.stringToTerraform(struct!.groupEntityType),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_entity_type - computed: false, optional: false, required: true
  private _groupEntityType?: string; 
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable;
}

export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientIds),
    user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
    group_configuration: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform, true)(struct!.groupConfiguration),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_pool_arn: {
      value: cdktf.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_configuration: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform, true)(struct!.groupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._userPoolArn = undefined;
      this._groupConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._userPoolArn = value.userPoolArn;
      this._groupConfiguration.internalValue = value.groupConfiguration;
    }
  }

  // client_ids - computed: true, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList(this, "group_configuration", false);
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}
  */
  readonly groupClaim: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
  */
  readonly groupEntityType: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_claim: cdktf.stringToTerraform(struct!.groupClaim),
    group_entity_type: cdktf.stringToTerraform(struct!.groupEntityType),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.groupEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupClaim = this._groupClaim;
    }
    if (this._groupEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupEntityType = this._groupEntityType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupClaim = undefined;
      this._groupEntityType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupClaim = value.groupClaim;
      this._groupEntityType = value.groupEntityType;
    }
  }

  // group_claim - computed: false, optional: false, required: true
  private _groupClaim?: string; 
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }
  public set groupClaim(value: string) {
    this._groupClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupClaimInput() {
    return this._groupClaim;
  }

  // group_entity_type - computed: false, optional: false, required: true
  private _groupEntityType?: string; 
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
  public set groupEntityType(value: string) {
    this._groupEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEntityTypeInput() {
    return this._groupEntityType;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    principal_id_claim: cdktf.stringToTerraform(struct!.principalIdClaim),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktf.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audiences = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audiences = value.audiences;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // principal_id_claim - computed: false, optional: true, required: false
  private _principalIdClaim?: string; 
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
  */
  readonly clientIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
  */
  readonly principalIdClaim?: string;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientIds),
    principal_id_claim: cdktf.stringToTerraform(struct!.principalIdClaim),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal_id_claim: {
      value: cdktf.stringToHclTerraform(struct!.principalIdClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._principalIdClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalIdClaim = this._principalIdClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._principalIdClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._principalIdClaim = value.principalIdClaim;
    }
  }

  // client_ids - computed: false, optional: true, required: false
  private _clientIds?: string[]; 
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }
  public set clientIds(value: string[]) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // principal_id_claim - computed: false, optional: true, required: false
  private _principalIdClaim?: string; 
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
  public set principalIdClaim(value: string) {
    this._principalIdClaim = value;
  }
  public resetPrincipalIdClaim() {
    this._principalIdClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdClaimInput() {
    return this._principalIdClaim;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
  /**
  * access_token_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#access_token_only VerifiedpermissionsIdentitySource#access_token_only}
  */
  readonly accessTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable;
  /**
  * identity_token_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#identity_token_only VerifiedpermissionsIdentitySource#identity_token_only}
  */
  readonly identityTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_only: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform, true)(struct!.accessTokenOnly),
    identity_token_only: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform, true)(struct!.identityTokenOnly),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_only: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform, true)(struct!.accessTokenOnly),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList",
    },
    identity_token_only: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform, true)(struct!.identityTokenOnly),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenOnly = this._accessTokenOnly?.internalValue;
    }
    if (this._identityTokenOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityTokenOnly = this._identityTokenOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = undefined;
      this._identityTokenOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenOnly.internalValue = value.accessTokenOnly;
      this._identityTokenOnly.internalValue = value.identityTokenOnly;
    }
  }

  // access_token_only - computed: false, optional: true, required: false
  private _accessTokenOnly = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList(this, "access_token_only", false);
  public get accessTokenOnly() {
    return this._accessTokenOnly;
  }
  public putAccessTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable) {
    this._accessTokenOnly.internalValue = value;
  }
  public resetAccessTokenOnly() {
    this._accessTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenOnlyInput() {
    return this._accessTokenOnly.internalValue;
  }

  // identity_token_only - computed: false, optional: true, required: false
  private _identityTokenOnly = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList(this, "identity_token_only", false);
  public get identityTokenOnly() {
    return this._identityTokenOnly;
  }
  public putIdentityTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable) {
    this._identityTokenOnly.internalValue = value;
  }
  public resetIdentityTokenOnly() {
    this._identityTokenOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenOnlyInput() {
    return this._identityTokenOnly.internalValue;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}
  */
  readonly entityIdPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}
  */
  readonly issuer: string;
  /**
  * group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
  */
  readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable;
  /**
  * token_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#token_selection VerifiedpermissionsIdentitySource#token_selection}
  */
  readonly tokenSelection?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable;
}

export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id_prefix: cdktf.stringToTerraform(struct!.entityIdPrefix),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    group_configuration: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform, true)(struct!.groupConfiguration),
    token_selection: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform, true)(struct!.tokenSelection),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id_prefix: {
      value: cdktf.stringToHclTerraform(struct!.entityIdPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_configuration: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform, true)(struct!.groupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList",
    },
    token_selection: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform, true)(struct!.tokenSelection),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdPrefix = this._entityIdPrefix;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._groupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConfiguration = this._groupConfiguration?.internalValue;
    }
    if (this._tokenSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSelection = this._tokenSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityIdPrefix = undefined;
      this._issuer = undefined;
      this._groupConfiguration.internalValue = undefined;
      this._tokenSelection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityIdPrefix = value.entityIdPrefix;
      this._issuer = value.issuer;
      this._groupConfiguration.internalValue = value.groupConfiguration;
      this._tokenSelection.internalValue = value.tokenSelection;
    }
  }

  // entity_id_prefix - computed: false, optional: true, required: false
  private _entityIdPrefix?: string; 
  public get entityIdPrefix() {
    return this.getStringAttribute('entity_id_prefix');
  }
  public set entityIdPrefix(value: string) {
    this._entityIdPrefix = value;
  }
  public resetEntityIdPrefix() {
    this._entityIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdPrefixInput() {
    return this._entityIdPrefix;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // group_configuration - computed: false, optional: true, required: false
  private _groupConfiguration = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList(this, "group_configuration", false);
  public get groupConfiguration() {
    return this._groupConfiguration;
  }
  public putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable) {
    this._groupConfiguration.internalValue = value;
  }
  public resetGroupConfiguration() {
    this._groupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigurationInput() {
    return this._groupConfiguration.internalValue;
  }

  // token_selection - computed: false, optional: true, required: false
  private _tokenSelection = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList(this, "token_selection", false);
  public get tokenSelection() {
    return this._tokenSelection;
  }
  public putTokenSelection(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable) {
    this._tokenSelection.internalValue = value;
  }
  public resetTokenSelection() {
    this._tokenSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSelectionInput() {
    return this._tokenSelection.internalValue;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VerifiedpermissionsIdentitySourceConfiguration {
  /**
  * cognito_user_pool_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration VerifiedpermissionsIdentitySource#cognito_user_pool_configuration}
  */
  readonly cognitoUserPoolConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable;
  /**
  * open_id_connect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration VerifiedpermissionsIdentitySource#open_id_connect_configuration}
  */
  readonly openIdConnectConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable;
}

export function verifiedpermissionsIdentitySourceConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cognito_user_pool_configuration: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform, true)(struct!.cognitoUserPoolConfiguration),
    open_id_connect_configuration: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform, true)(struct!.openIdConnectConfiguration),
  }
}


export function verifiedpermissionsIdentitySourceConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cognito_user_pool_configuration: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform, true)(struct!.cognitoUserPoolConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList",
    },
    open_id_connect_configuration: {
      value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform, true)(struct!.openIdConnectConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VerifiedpermissionsIdentitySourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoUserPoolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoUserPoolConfiguration = this._cognitoUserPoolConfiguration?.internalValue;
    }
    if (this._openIdConnectConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openIdConnectConfiguration = this._openIdConnectConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = undefined;
      this._openIdConnectConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoUserPoolConfiguration.internalValue = value.cognitoUserPoolConfiguration;
      this._openIdConnectConfiguration.internalValue = value.openIdConnectConfiguration;
    }
  }

  // cognito_user_pool_configuration - computed: false, optional: true, required: false
  private _cognitoUserPoolConfiguration = new VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList(this, "cognito_user_pool_configuration", false);
  public get cognitoUserPoolConfiguration() {
    return this._cognitoUserPoolConfiguration;
  }
  public putCognitoUserPoolConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable) {
    this._cognitoUserPoolConfiguration.internalValue = value;
  }
  public resetCognitoUserPoolConfiguration() {
    this._cognitoUserPoolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoUserPoolConfigurationInput() {
    return this._cognitoUserPoolConfiguration.internalValue;
  }

  // open_id_connect_configuration - computed: false, optional: true, required: false
  private _openIdConnectConfiguration = new VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList(this, "open_id_connect_configuration", false);
  public get openIdConnectConfiguration() {
    return this._openIdConnectConfiguration;
  }
  public putOpenIdConnectConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable) {
    this._openIdConnectConfiguration.internalValue = value;
  }
  public resetOpenIdConnectConfiguration() {
    this._openIdConnectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdConnectConfigurationInput() {
    return this._openIdConnectConfiguration.internalValue;
  }
}

export class VerifiedpermissionsIdentitySourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VerifiedpermissionsIdentitySourceConfigurationOutputReference {
    return new VerifiedpermissionsIdentitySourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source}
*/
export class VerifiedpermissionsIdentitySource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedpermissions_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedpermissionsIdentitySource to import
  * @param importFromId The id of the existing VerifiedpermissionsIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedpermissionsIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedpermissions_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedpermissionsIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedpermissionsIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedpermissions_identity_source',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.70.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyStoreId = config.policyStoreId;
    this._principalEntityType = config.principalEntityType;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_store_id - computed: false, optional: false, required: true
  private _policyStoreId?: string; 
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }
  public set policyStoreId(value: string) {
    this._policyStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStoreIdInput() {
    return this._policyStoreId;
  }

  // principal_entity_type - computed: true, optional: true, required: false
  private _principalEntityType?: string; 
  public get principalEntityType() {
    return this.getStringAttribute('principal_entity_type');
  }
  public set principalEntityType(value: string) {
    this._principalEntityType = value;
  }
  public resetPrincipalEntityType() {
    this._principalEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalEntityTypeInput() {
    return this._principalEntityType;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new VerifiedpermissionsIdentitySourceConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_store_id: cdktf.stringToTerraform(this._policyStoreId),
      principal_entity_type: cdktf.stringToTerraform(this._principalEntityType),
      configuration: cdktf.listMapper(verifiedpermissionsIdentitySourceConfigurationToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_store_id: {
        value: cdktf.stringToHclTerraform(this._policyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_entity_type: {
        value: cdktf.stringToHclTerraform(this._principalEntityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(verifiedpermissionsIdentitySourceConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VerifiedpermissionsIdentitySourceConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
