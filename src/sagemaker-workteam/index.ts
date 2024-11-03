// https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerWorkteamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}
  */
  readonly workforceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}
  */
  readonly workteamName: string;
  /**
  * member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#member_definition SagemakerWorkteam#member_definition}
  */
  readonly memberDefinition: SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable;
  /**
  * notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}
  */
  readonly notificationConfiguration?: SagemakerWorkteamNotificationConfiguration;
  /**
  * worker_access_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#worker_access_configuration SagemakerWorkteam#worker_access_configuration}
  */
  readonly workerAccessConfiguration?: SagemakerWorkteamWorkerAccessConfiguration;
}
export interface SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}
  */
  readonly userGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}
  */
  readonly userPool: string;
}

export function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
    user_pool: cdktf.stringToTerraform(struct!.userPool),
  }
}


export function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktf.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool: {
      value: cdktf.stringToHclTerraform(struct!.userPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    if (this._userPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPool = this._userPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._userGroup = undefined;
      this._userPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._userGroup = value.userGroup;
      this._userPool = value.userPool;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // user_group - computed: false, optional: false, required: true
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // user_pool - computed: false, optional: false, required: true
  private _userPool?: string; 
  public get userPool() {
    return this.getStringAttribute('user_pool');
  }
  public set userPool(value: string) {
    this._userPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolInput() {
    return this._userPool;
  }
}
export interface SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}
  */
  readonly groups: string[];
}

export function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
  }
}


export function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}
export interface SagemakerWorkteamMemberDefinition {
  /**
  * cognito_member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}
  */
  readonly cognitoMemberDefinition?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
  /**
  * oidc_member_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}
  */
  readonly oidcMemberDefinition?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
}

export function sagemakerWorkteamMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cognito_member_definition: sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct!.cognitoMemberDefinition),
    oidc_member_definition: sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct!.oidcMemberDefinition),
  }
}


export function sagemakerWorkteamMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cognito_member_definition: {
      value: sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToHclTerraform(struct!.cognitoMemberDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionList",
    },
    oidc_member_definition: {
      value: sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToHclTerraform(struct!.oidcMemberDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerWorkteamMemberDefinitionOidcMemberDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamMemberDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerWorkteamMemberDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cognitoMemberDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoMemberDefinition = this._cognitoMemberDefinition?.internalValue;
    }
    if (this._oidcMemberDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcMemberDefinition = this._oidcMemberDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamMemberDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cognitoMemberDefinition.internalValue = undefined;
      this._oidcMemberDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cognitoMemberDefinition.internalValue = value.cognitoMemberDefinition;
      this._oidcMemberDefinition.internalValue = value.oidcMemberDefinition;
    }
  }

  // cognito_member_definition - computed: false, optional: true, required: false
  private _cognitoMemberDefinition = new SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference(this, "cognito_member_definition");
  public get cognitoMemberDefinition() {
    return this._cognitoMemberDefinition;
  }
  public putCognitoMemberDefinition(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition) {
    this._cognitoMemberDefinition.internalValue = value;
  }
  public resetCognitoMemberDefinition() {
    this._cognitoMemberDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoMemberDefinitionInput() {
    return this._cognitoMemberDefinition.internalValue;
  }

  // oidc_member_definition - computed: false, optional: true, required: false
  private _oidcMemberDefinition = new SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference(this, "oidc_member_definition");
  public get oidcMemberDefinition() {
    return this._oidcMemberDefinition;
  }
  public putOidcMemberDefinition(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition) {
    this._oidcMemberDefinition.internalValue = value;
  }
  public resetOidcMemberDefinition() {
    this._oidcMemberDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcMemberDefinitionInput() {
    return this._oidcMemberDefinition.internalValue;
  }
}

export class SagemakerWorkteamMemberDefinitionList extends cdktf.ComplexList {
  public internalValue? : SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable

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
  public get(index: number): SagemakerWorkteamMemberDefinitionOutputReference {
    return new SagemakerWorkteamMemberDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerWorkteamNotificationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}
  */
  readonly notificationTopicArn?: string;
}

export function sagemakerWorkteamNotificationConfigurationToTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_topic_arn: cdktf.stringToTerraform(struct!.notificationTopicArn),
  }
}


export function sagemakerWorkteamNotificationConfigurationToHclTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.notificationTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamNotificationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamNotificationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTopicArn = this._notificationTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamNotificationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationTopicArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationTopicArn = value.notificationTopicArn;
    }
  }

  // notification_topic_arn - computed: false, optional: true, required: false
  private _notificationTopicArn?: string; 
  public get notificationTopicArn() {
    return this.getStringAttribute('notification_topic_arn');
  }
  public set notificationTopicArn(value: string) {
    this._notificationTopicArn = value;
  }
  public resetNotificationTopicArn() {
    this._notificationTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicArnInput() {
    return this._notificationTopicArn;
  }
}
export interface SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}
  */
  readonly vpcSourceIp?: string;
}

export function sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    vpc_source_ip: cdktf.stringToTerraform(struct!.vpcSourceIp),
  }
}


export function sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.vpcSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._vpcSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSourceIp = this._vpcSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceIp = undefined;
      this._vpcSourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceIp = value.sourceIp;
      this._vpcSourceIp = value.vpcSourceIp;
    }
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // vpc_source_ip - computed: true, optional: true, required: false
  private _vpcSourceIp?: string; 
  public get vpcSourceIp() {
    return this.getStringAttribute('vpc_source_ip');
  }
  public set vpcSourceIp(value: string) {
    this._vpcSourceIp = value;
  }
  public resetVpcSourceIp() {
    this._vpcSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSourceIpInput() {
    return this._vpcSourceIp;
  }
}
export interface SagemakerWorkteamWorkerAccessConfigurationS3Presign {
  /**
  * iam_policy_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#iam_policy_constraints SagemakerWorkteam#iam_policy_constraints}
  */
  readonly iamPolicyConstraints?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
}

export function sagemakerWorkteamWorkerAccessConfigurationS3PresignToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3Presign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_policy_constraints: sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToTerraform(struct!.iamPolicyConstraints),
  }
}


export function sagemakerWorkteamWorkerAccessConfigurationS3PresignToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3Presign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_policy_constraints: {
      value: sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToHclTerraform(struct!.iamPolicyConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamWorkerAccessConfigurationS3Presign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamPolicyConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamPolicyConstraints = this._iamPolicyConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamWorkerAccessConfigurationS3Presign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamPolicyConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamPolicyConstraints.internalValue = value.iamPolicyConstraints;
    }
  }

  // iam_policy_constraints - computed: false, optional: true, required: false
  private _iamPolicyConstraints = new SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference(this, "iam_policy_constraints");
  public get iamPolicyConstraints() {
    return this._iamPolicyConstraints;
  }
  public putIamPolicyConstraints(value: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints) {
    this._iamPolicyConstraints.internalValue = value;
  }
  public resetIamPolicyConstraints() {
    this._iamPolicyConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamPolicyConstraintsInput() {
    return this._iamPolicyConstraints.internalValue;
  }
}
export interface SagemakerWorkteamWorkerAccessConfiguration {
  /**
  * s3_presign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#s3_presign SagemakerWorkteam#s3_presign}
  */
  readonly s3Presign?: SagemakerWorkteamWorkerAccessConfigurationS3Presign;
}

export function sagemakerWorkteamWorkerAccessConfigurationToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationOutputReference | SagemakerWorkteamWorkerAccessConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_presign: sagemakerWorkteamWorkerAccessConfigurationS3PresignToTerraform(struct!.s3Presign),
  }
}


export function sagemakerWorkteamWorkerAccessConfigurationToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationOutputReference | SagemakerWorkteamWorkerAccessConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_presign: {
      value: sagemakerWorkteamWorkerAccessConfigurationS3PresignToHclTerraform(struct!.s3Presign),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerWorkteamWorkerAccessConfigurationS3PresignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerWorkteamWorkerAccessConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerWorkteamWorkerAccessConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Presign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Presign = this._s3Presign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerWorkteamWorkerAccessConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Presign.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Presign.internalValue = value.s3Presign;
    }
  }

  // s3_presign - computed: false, optional: true, required: false
  private _s3Presign = new SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference(this, "s3_presign");
  public get s3Presign() {
    return this._s3Presign;
  }
  public putS3Presign(value: SagemakerWorkteamWorkerAccessConfigurationS3Presign) {
    this._s3Presign.internalValue = value;
  }
  public resetS3Presign() {
    this._s3Presign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PresignInput() {
    return this._s3Presign.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam}
*/
export class SagemakerWorkteam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_workteam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerWorkteam to import
  * @param importFromId The id of the existing SagemakerWorkteam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerWorkteam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_workteam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.74.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerWorkteamConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerWorkteamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workteam',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.74.0',
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
    this._description = config.description;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._workforceName = config.workforceName;
    this._workteamName = config.workteamName;
    this._memberDefinition.internalValue = config.memberDefinition;
    this._notificationConfiguration.internalValue = config.notificationConfiguration;
    this._workerAccessConfiguration.internalValue = config.workerAccessConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // workforce_name - computed: false, optional: true, required: false
  private _workforceName?: string; 
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  public resetWorkforceName() {
    this._workforceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName;
  }

  // workteam_name - computed: false, optional: false, required: true
  private _workteamName?: string; 
  public get workteamName() {
    return this.getStringAttribute('workteam_name');
  }
  public set workteamName(value: string) {
    this._workteamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamNameInput() {
    return this._workteamName;
  }

  // member_definition - computed: false, optional: false, required: true
  private _memberDefinition = new SagemakerWorkteamMemberDefinitionList(this, "member_definition", false);
  public get memberDefinition() {
    return this._memberDefinition;
  }
  public putMemberDefinition(value: SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable) {
    this._memberDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDefinitionInput() {
    return this._memberDefinition.internalValue;
  }

  // notification_configuration - computed: false, optional: true, required: false
  private _notificationConfiguration = new SagemakerWorkteamNotificationConfigurationOutputReference(this, "notification_configuration");
  public get notificationConfiguration() {
    return this._notificationConfiguration;
  }
  public putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration) {
    this._notificationConfiguration.internalValue = value;
  }
  public resetNotificationConfiguration() {
    this._notificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigurationInput() {
    return this._notificationConfiguration.internalValue;
  }

  // worker_access_configuration - computed: false, optional: true, required: false
  private _workerAccessConfiguration = new SagemakerWorkteamWorkerAccessConfigurationOutputReference(this, "worker_access_configuration");
  public get workerAccessConfiguration() {
    return this._workerAccessConfiguration;
  }
  public putWorkerAccessConfiguration(value: SagemakerWorkteamWorkerAccessConfiguration) {
    this._workerAccessConfiguration.internalValue = value;
  }
  public resetWorkerAccessConfiguration() {
    this._workerAccessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerAccessConfigurationInput() {
    return this._workerAccessConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      workforce_name: cdktf.stringToTerraform(this._workforceName),
      workteam_name: cdktf.stringToTerraform(this._workteamName),
      member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionToTerraform, true)(this._memberDefinition.internalValue),
      notification_configuration: sagemakerWorkteamNotificationConfigurationToTerraform(this._notificationConfiguration.internalValue),
      worker_access_configuration: sagemakerWorkteamWorkerAccessConfigurationToTerraform(this._workerAccessConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workforce_name: {
        value: cdktf.stringToHclTerraform(this._workforceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workteam_name: {
        value: cdktf.stringToHclTerraform(this._workteamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_definition: {
        value: cdktf.listMapperHcl(sagemakerWorkteamMemberDefinitionToHclTerraform, true)(this._memberDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkteamMemberDefinitionList",
      },
      notification_configuration: {
        value: sagemakerWorkteamNotificationConfigurationToHclTerraform(this._notificationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkteamNotificationConfigurationList",
      },
      worker_access_configuration: {
        value: sagemakerWorkteamWorkerAccessConfigurationToHclTerraform(this._workerAccessConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerWorkteamWorkerAccessConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
