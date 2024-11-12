// https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/cognito_user_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsCognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/cognito_user_pool#user_pool_id DataAwsCognitoUserPool#user_pool_id}
  */
  readonly userPoolId: string;
}
export interface DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism {
}

export function dataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismToHclTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanism | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference {
    return new DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolAccountRecoverySetting {
}

export function dataAwsCognitoUserPoolAccountRecoverySettingToTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolAccountRecoverySettingToHclTerraform(struct?: DataAwsCognitoUserPoolAccountRecoverySetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolAccountRecoverySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolAccountRecoverySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_mechanism - computed: true, optional: false, required: false
  private _recoveryMechanism = new DataAwsCognitoUserPoolAccountRecoverySettingRecoveryMechanismList(this, "recovery_mechanism", false);
  public get recoveryMechanism() {
    return this._recoveryMechanism;
  }
}

export class DataAwsCognitoUserPoolAccountRecoverySettingList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolAccountRecoverySettingOutputReference {
    return new DataAwsCognitoUserPoolAccountRecoverySettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
}

export function dataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToHclTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_message - computed: true, optional: false, required: false
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }

  // email_subject - computed: true, optional: false, required: false
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }

  // sms_message - computed: true, optional: false, required: false
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
}

export class DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference {
    return new DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolAdminCreateUserConfig {
}

export function dataAwsCognitoUserPoolAdminCreateUserConfigToTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolAdminCreateUserConfigToHclTerraform(struct?: DataAwsCognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolAdminCreateUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolAdminCreateUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_admin_create_user_only - computed: true, optional: false, required: false
  public get allowAdminCreateUserOnly() {
    return this.getBooleanAttribute('allow_admin_create_user_only');
  }

  // invite_message_template - computed: true, optional: false, required: false
  private _inviteMessageTemplate = new DataAwsCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateList(this, "invite_message_template", false);
  public get inviteMessageTemplate() {
    return this._inviteMessageTemplate;
  }

  // unused_account_validity_days - computed: true, optional: false, required: false
  public get unusedAccountValidityDays() {
    return this.getNumberAttribute('unused_account_validity_days');
  }
}

export class DataAwsCognitoUserPoolAdminCreateUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference {
    return new DataAwsCognitoUserPoolAdminCreateUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolDeviceConfiguration {
}

export function dataAwsCognitoUserPoolDeviceConfigurationToTerraform(struct?: DataAwsCognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolDeviceConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolDeviceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolDeviceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // challenge_required_on_new_device - computed: true, optional: false, required: false
  public get challengeRequiredOnNewDevice() {
    return this.getBooleanAttribute('challenge_required_on_new_device');
  }

  // device_only_remembered_on_user_prompt - computed: true, optional: false, required: false
  public get deviceOnlyRememberedOnUserPrompt() {
    return this.getBooleanAttribute('device_only_remembered_on_user_prompt');
  }
}

export class DataAwsCognitoUserPoolDeviceConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolDeviceConfigurationOutputReference {
    return new DataAwsCognitoUserPoolDeviceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolEmailConfiguration {
}

export function dataAwsCognitoUserPoolEmailConfigurationToTerraform(struct?: DataAwsCognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolEmailConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_set - computed: true, optional: false, required: false
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }

  // email_sending_account - computed: true, optional: false, required: false
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // reply_to_email_address - computed: true, optional: false, required: false
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
}

export class DataAwsCognitoUserPoolEmailConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolEmailConfigurationOutputReference {
    return new DataAwsCognitoUserPoolEmailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolLambdaConfigCustomEmailSender {
}

export function dataAwsCognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolLambdaConfigCustomEmailSenderToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolLambdaConfigCustomEmailSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolLambdaConfigCustomEmailSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}

export class DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference {
    return new DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolLambdaConfigCustomSmsSender {
}

export function dataAwsCognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolLambdaConfigCustomSmsSenderToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolLambdaConfigCustomSmsSender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolLambdaConfigCustomSmsSender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}

export class DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference {
    return new DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig {
}

export function dataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }

  // lambda_version - computed: true, optional: false, required: false
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
}

export class DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference {
    return new DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolLambdaConfig {
}

export function dataAwsCognitoUserPoolLambdaConfigToTerraform(struct?: DataAwsCognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolLambdaConfigToHclTerraform(struct?: DataAwsCognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_auth_challenge - computed: true, optional: false, required: false
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }

  // custom_email_sender - computed: true, optional: false, required: false
  private _customEmailSender = new DataAwsCognitoUserPoolLambdaConfigCustomEmailSenderList(this, "custom_email_sender", false);
  public get customEmailSender() {
    return this._customEmailSender;
  }

  // custom_message - computed: true, optional: false, required: false
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }

  // custom_sms_sender - computed: true, optional: false, required: false
  private _customSmsSender = new DataAwsCognitoUserPoolLambdaConfigCustomSmsSenderList(this, "custom_sms_sender", false);
  public get customSmsSender() {
    return this._customSmsSender;
  }

  // define_auth_challenge - computed: true, optional: false, required: false
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // post_authentication - computed: true, optional: false, required: false
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }

  // post_confirmation - computed: true, optional: false, required: false
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }

  // pre_authentication - computed: true, optional: false, required: false
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }

  // pre_sign_up - computed: true, optional: false, required: false
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }

  // pre_token_generation - computed: true, optional: false, required: false
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }

  // pre_token_generation_config - computed: true, optional: false, required: false
  private _preTokenGenerationConfig = new DataAwsCognitoUserPoolLambdaConfigPreTokenGenerationConfigList(this, "pre_token_generation_config", false);
  public get preTokenGenerationConfig() {
    return this._preTokenGenerationConfig;
  }

  // user_migration - computed: true, optional: false, required: false
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }

  // verify_auth_challenge_response - computed: true, optional: false, required: false
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
}

export class DataAwsCognitoUserPoolLambdaConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolLambdaConfigOutputReference {
    return new DataAwsCognitoUserPoolLambdaConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints {
}

export function dataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}

export class DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference {
    return new DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints {
}

export function dataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_length - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }

  // min_length - computed: true, optional: false, required: false
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
}

export class DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference {
    return new DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsCognitoUserPoolSchemaAttributes {
}

export function dataAwsCognitoUserPoolSchemaAttributesToTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsCognitoUserPoolSchemaAttributesToHclTerraform(struct?: DataAwsCognitoUserPoolSchemaAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsCognitoUserPoolSchemaAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsCognitoUserPoolSchemaAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsCognitoUserPoolSchemaAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_data_type - computed: true, optional: false, required: false
  public get attributeDataType() {
    return this.getStringAttribute('attribute_data_type');
  }

  // developer_only_attribute - computed: true, optional: false, required: false
  public get developerOnlyAttribute() {
    return this.getBooleanAttribute('developer_only_attribute');
  }

  // mutable - computed: true, optional: false, required: false
  public get mutable() {
    return this.getBooleanAttribute('mutable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number_attribute_constraints - computed: true, optional: false, required: false
  private _numberAttributeConstraints = new DataAwsCognitoUserPoolSchemaAttributesNumberAttributeConstraintsList(this, "number_attribute_constraints", false);
  public get numberAttributeConstraints() {
    return this._numberAttributeConstraints;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // string_attribute_constraints - computed: true, optional: false, required: false
  private _stringAttributeConstraints = new DataAwsCognitoUserPoolSchemaAttributesStringAttributeConstraintsList(this, "string_attribute_constraints", false);
  public get stringAttributeConstraints() {
    return this._stringAttributeConstraints;
  }
}

export class DataAwsCognitoUserPoolSchemaAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsCognitoUserPoolSchemaAttributesOutputReference {
    return new DataAwsCognitoUserPoolSchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/cognito_user_pool aws_cognito_user_pool}
*/
export class DataAwsCognitoUserPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsCognitoUserPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsCognitoUserPool to import
  * @param importFromId The id of the existing DataAwsCognitoUserPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/cognito_user_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsCognitoUserPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/data-sources/cognito_user_pool aws_cognito_user_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCognitoUserPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.1',
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
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_recovery_setting - computed: true, optional: false, required: false
  private _accountRecoverySetting = new DataAwsCognitoUserPoolAccountRecoverySettingList(this, "account_recovery_setting", false);
  public get accountRecoverySetting() {
    return this._accountRecoverySetting;
  }

  // admin_create_user_config - computed: true, optional: false, required: false
  private _adminCreateUserConfig = new DataAwsCognitoUserPoolAdminCreateUserConfigList(this, "admin_create_user_config", false);
  public get adminCreateUserConfig() {
    return this._adminCreateUserConfig;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: true, optional: false, required: false
  public get autoVerifiedAttributes() {
    return this.getListAttribute('auto_verified_attributes');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }

  // device_configuration - computed: true, optional: false, required: false
  private _deviceConfiguration = new DataAwsCognitoUserPoolDeviceConfigurationList(this, "device_configuration", false);
  public get deviceConfiguration() {
    return this._deviceConfiguration;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email_configuration - computed: true, optional: false, required: false
  private _emailConfiguration = new DataAwsCognitoUserPoolEmailConfigurationList(this, "email_configuration", false);
  public get emailConfiguration() {
    return this._emailConfiguration;
  }

  // estimated_number_of_users - computed: true, optional: false, required: false
  public get estimatedNumberOfUsers() {
    return this.getNumberAttribute('estimated_number_of_users');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_config - computed: true, optional: false, required: false
  private _lambdaConfig = new DataAwsCognitoUserPoolLambdaConfigList(this, "lambda_config", false);
  public get lambdaConfig() {
    return this._lambdaConfig;
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // mfa_configuration - computed: true, optional: false, required: false
  public get mfaConfiguration() {
    return this.getStringAttribute('mfa_configuration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_attributes - computed: true, optional: false, required: false
  private _schemaAttributes = new DataAwsCognitoUserPoolSchemaAttributesList(this, "schema_attributes", false);
  public get schemaAttributes() {
    return this._schemaAttributes;
  }

  // sms_authentication_message - computed: true, optional: false, required: false
  public get smsAuthenticationMessage() {
    return this.getStringAttribute('sms_authentication_message');
  }

  // sms_configuration_failure - computed: true, optional: false, required: false
  public get smsConfigurationFailure() {
    return this.getStringAttribute('sms_configuration_failure');
  }

  // sms_verification_message - computed: true, optional: false, required: false
  public get smsVerificationMessage() {
    return this.getStringAttribute('sms_verification_message');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // user_pool_tags - computed: true, optional: false, required: false
  private _userPoolTags = new cdktf.StringMap(this, "user_pool_tags");
  public get userPoolTags() {
    return this._userPoolTags;
  }

  // username_attributes - computed: true, optional: false, required: false
  public get usernameAttributes() {
    return this.getListAttribute('username_attributes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      user_pool_id: {
        value: cdktf.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
