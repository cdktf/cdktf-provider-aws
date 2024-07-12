/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#id SagemakerUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#tags_all SagemakerUserProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}
  */
  readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
  */
  readonly status?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#amazon_bedrock_role_arn SagemakerUserProfile#amazon_bedrock_role_arn}
  */
  readonly amazonBedrockRoleArn?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_bedrock_role_arn: cdktf.stringToTerraform(struct!.amazonBedrockRoleArn),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_bedrock_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.amazonBedrockRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonBedrockRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonBedrockRoleArn = this._amazonBedrockRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonBedrockRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonBedrockRoleArn = value.amazonBedrockRoleArn;
    }
  }

  // amazon_bedrock_role_arn - computed: false, optional: true, required: false
  private _amazonBedrockRoleArn?: string; 
  public get amazonBedrockRoleArn() {
    return this.getStringAttribute('amazon_bedrock_role_arn');
  }
  public set amazonBedrockRoleArn(value: string) {
    this._amazonBedrockRoleArn = value;
  }
  public resetAmazonBedrockRoleArn() {
    this._amazonBedrockRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonBedrockRoleArnInput() {
    return this._amazonBedrockRoleArn;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#data_source_name SagemakerUserProfile#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#secret_arn SagemakerUserProfile#secret_arn}
  */
  readonly secretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
  */
  readonly status?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_name: cdktf.stringToTerraform(struct!.dataSourceName),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceName = this._dataSourceName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceName = undefined;
      this._secretArn = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceName = value.dataSourceName;
      this._secretArn = value.secretArn;
      this._status = value.status;
    }
  }

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference {
    return new SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
  */
  readonly status?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#cross_account_model_register_role_arn SagemakerUserProfile#cross_account_model_register_role_arn}
  */
  readonly crossAccountModelRegisterRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
  */
  readonly status?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account_model_register_role_arn: cdktf.stringToTerraform(struct!.crossAccountModelRegisterRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account_model_register_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountModelRegisterRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccountModelRegisterRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountModelRegisterRoleArn = this._crossAccountModelRegisterRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossAccountModelRegisterRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossAccountModelRegisterRoleArn = value.crossAccountModelRegisterRoleArn;
      this._status = value.status;
    }
  }

  // cross_account_model_register_role_arn - computed: false, optional: true, required: false
  private _crossAccountModelRegisterRoleArn?: string; 
  public get crossAccountModelRegisterRoleArn() {
    return this.getStringAttribute('cross_account_model_register_role_arn');
  }
  public set crossAccountModelRegisterRoleArn(value: string) {
    this._crossAccountModelRegisterRoleArn = value;
  }
  public resetCrossAccountModelRegisterRoleArn() {
    this._crossAccountModelRegisterRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountModelRegisterRoleArnInput() {
    return this._crossAccountModelRegisterRoleArn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#amazon_forecast_role_arn SagemakerUserProfile#amazon_forecast_role_arn}
  */
  readonly amazonForecastRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#status SagemakerUserProfile#status}
  */
  readonly status?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_forecast_role_arn: cdktf.stringToTerraform(struct!.amazonForecastRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_forecast_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.amazonForecastRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonForecastRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonForecastRoleArn = this._amazonForecastRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amazonForecastRoleArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amazonForecastRoleArn = value.amazonForecastRoleArn;
      this._status = value.status;
    }
  }

  // amazon_forecast_role_arn - computed: false, optional: true, required: false
  private _amazonForecastRoleArn?: string; 
  public get amazonForecastRoleArn() {
    return this.getStringAttribute('amazon_forecast_role_arn');
  }
  public set amazonForecastRoleArn(value: string) {
    this._amazonForecastRoleArn = value;
  }
  public resetAmazonForecastRoleArn() {
    this._amazonForecastRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonForecastRoleArnInput() {
    return this._amazonForecastRoleArn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#s3_artifact_path SagemakerUserProfile#s3_artifact_path}
  */
  readonly s3ArtifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_artifact_path: cdktf.stringToTerraform(struct!.s3ArtifactPath),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_artifact_path: {
      value: cdktf.stringToHclTerraform(struct!.s3ArtifactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3ArtifactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ArtifactPath = this._s3ArtifactPath;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3ArtifactPath = undefined;
      this._s3KmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3ArtifactPath = value.s3ArtifactPath;
      this._s3KmsKeyId = value.s3KmsKeyId;
    }
  }

  // s3_artifact_path - computed: false, optional: true, required: false
  private _s3ArtifactPath?: string; 
  public get s3ArtifactPath() {
    return this.getStringAttribute('s3_artifact_path');
  }
  public set s3ArtifactPath(value: string) {
    this._s3ArtifactPath = value;
  }
  public resetS3ArtifactPath() {
    this._s3ArtifactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ArtifactPathInput() {
    return this._s3ArtifactPath;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }
}
export interface SagemakerUserProfileUserSettingsCanvasAppSettings {
  /**
  * direct_deploy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#direct_deploy_settings SagemakerUserProfile#direct_deploy_settings}
  */
  readonly directDeploySettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings;
  /**
  * generative_ai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#generative_ai_settings SagemakerUserProfile#generative_ai_settings}
  */
  readonly generativeAiSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings;
  /**
  * identity_provider_oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#identity_provider_oauth_settings SagemakerUserProfile#identity_provider_oauth_settings}
  */
  readonly identityProviderOauthSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
  /**
  * kendra_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#kendra_settings SagemakerUserProfile#kendra_settings}
  */
  readonly kendraSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings;
  /**
  * model_register_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#model_register_settings SagemakerUserProfile#model_register_settings}
  */
  readonly modelRegisterSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings;
  /**
  * time_series_forecasting_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#time_series_forecasting_settings SagemakerUserProfile#time_series_forecasting_settings}
  */
  readonly timeSeriesForecastingSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
  /**
  * workspace_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#workspace_settings SagemakerUserProfile#workspace_settings}
  */
  readonly workspaceSettings?: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings;
}

export function sagemakerUserProfileUserSettingsCanvasAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_deploy_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct!.directDeploySettings),
    generative_ai_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct!.generativeAiSettings),
    identity_provider_oauth_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform, true)(struct!.identityProviderOauthSettings),
    kendra_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct!.kendraSettings),
    model_register_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct!.modelRegisterSettings),
    time_series_forecasting_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct!.timeSeriesForecastingSettings),
    workspace_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct!.workspaceSettings),
  }
}


export function sagemakerUserProfileUserSettingsCanvasAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference | SagemakerUserProfileUserSettingsCanvasAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_deploy_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct!.directDeploySettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsList",
    },
    generative_ai_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct!.generativeAiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsList",
    },
    identity_provider_oauth_settings: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform, true)(struct!.identityProviderOauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList",
    },
    kendra_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct!.kendraSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsList",
    },
    model_register_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct!.modelRegisterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsList",
    },
    time_series_forecasting_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct!.timeSeriesForecastingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsList",
    },
    workspace_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct!.workspaceSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCanvasAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directDeploySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directDeploySettings = this._directDeploySettings?.internalValue;
    }
    if (this._generativeAiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeAiSettings = this._generativeAiSettings?.internalValue;
    }
    if (this._identityProviderOauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderOauthSettings = this._identityProviderOauthSettings?.internalValue;
    }
    if (this._kendraSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraSettings = this._kendraSettings?.internalValue;
    }
    if (this._modelRegisterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelRegisterSettings = this._modelRegisterSettings?.internalValue;
    }
    if (this._timeSeriesForecastingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSeriesForecastingSettings = this._timeSeriesForecastingSettings?.internalValue;
    }
    if (this._workspaceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceSettings = this._workspaceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCanvasAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directDeploySettings.internalValue = undefined;
      this._generativeAiSettings.internalValue = undefined;
      this._identityProviderOauthSettings.internalValue = undefined;
      this._kendraSettings.internalValue = undefined;
      this._modelRegisterSettings.internalValue = undefined;
      this._timeSeriesForecastingSettings.internalValue = undefined;
      this._workspaceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directDeploySettings.internalValue = value.directDeploySettings;
      this._generativeAiSettings.internalValue = value.generativeAiSettings;
      this._identityProviderOauthSettings.internalValue = value.identityProviderOauthSettings;
      this._kendraSettings.internalValue = value.kendraSettings;
      this._modelRegisterSettings.internalValue = value.modelRegisterSettings;
      this._timeSeriesForecastingSettings.internalValue = value.timeSeriesForecastingSettings;
      this._workspaceSettings.internalValue = value.workspaceSettings;
    }
  }

  // direct_deploy_settings - computed: false, optional: true, required: false
  private _directDeploySettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference(this, "direct_deploy_settings");
  public get directDeploySettings() {
    return this._directDeploySettings;
  }
  public putDirectDeploySettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsDirectDeploySettings) {
    this._directDeploySettings.internalValue = value;
  }
  public resetDirectDeploySettings() {
    this._directDeploySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directDeploySettingsInput() {
    return this._directDeploySettings.internalValue;
  }

  // generative_ai_settings - computed: false, optional: true, required: false
  private _generativeAiSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference(this, "generative_ai_settings");
  public get generativeAiSettings() {
    return this._generativeAiSettings;
  }
  public putGenerativeAiSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsGenerativeAiSettings) {
    this._generativeAiSettings.internalValue = value;
  }
  public resetGenerativeAiSettings() {
    this._generativeAiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeAiSettingsInput() {
    return this._generativeAiSettings.internalValue;
  }

  // identity_provider_oauth_settings - computed: false, optional: true, required: false
  private _identityProviderOauthSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList(this, "identity_provider_oauth_settings", false);
  public get identityProviderOauthSettings() {
    return this._identityProviderOauthSettings;
  }
  public putIdentityProviderOauthSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable) {
    this._identityProviderOauthSettings.internalValue = value;
  }
  public resetIdentityProviderOauthSettings() {
    this._identityProviderOauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderOauthSettingsInput() {
    return this._identityProviderOauthSettings.internalValue;
  }

  // kendra_settings - computed: false, optional: true, required: false
  private _kendraSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettingsOutputReference(this, "kendra_settings");
  public get kendraSettings() {
    return this._kendraSettings;
  }
  public putKendraSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsKendraSettings) {
    this._kendraSettings.internalValue = value;
  }
  public resetKendraSettings() {
    this._kendraSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraSettingsInput() {
    return this._kendraSettings.internalValue;
  }

  // model_register_settings - computed: false, optional: true, required: false
  private _modelRegisterSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference(this, "model_register_settings");
  public get modelRegisterSettings() {
    return this._modelRegisterSettings;
  }
  public putModelRegisterSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsModelRegisterSettings) {
    this._modelRegisterSettings.internalValue = value;
  }
  public resetModelRegisterSettings() {
    this._modelRegisterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelRegisterSettingsInput() {
    return this._modelRegisterSettings.internalValue;
  }

  // time_series_forecasting_settings - computed: false, optional: true, required: false
  private _timeSeriesForecastingSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(this, "time_series_forecasting_settings");
  public get timeSeriesForecastingSettings() {
    return this._timeSeriesForecastingSettings;
  }
  public putTimeSeriesForecastingSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings) {
    this._timeSeriesForecastingSettings.internalValue = value;
  }
  public resetTimeSeriesForecastingSettings() {
    this._timeSeriesForecastingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesForecastingSettingsInput() {
    return this._timeSeriesForecastingSettings.internalValue;
  }

  // workspace_settings - computed: false, optional: true, required: false
  private _workspaceSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference(this, "workspace_settings");
  public get workspaceSettings() {
    return this._workspaceSettings;
  }
  public putWorkspaceSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettingsWorkspaceSettings) {
    this._workspaceSettings.internalValue = value;
  }
  public resetWorkspaceSettings() {
    this._workspaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSettingsInput() {
    return this._workspaceSettings.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageOutputReference {
    return new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsCodeEditorAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
  */
  readonly customImage?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference | SagemakerUserProfileUserSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}
  */
  readonly fileSystemPath?: string;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    file_system_path: cdktf.stringToTerraform(struct!.fileSystemPath),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_path: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._fileSystemPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemPath = this._fileSystemPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._fileSystemPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._fileSystemPath = value.fileSystemPath;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // file_system_path - computed: false, optional: true, required: false
  private _fileSystemPath?: string; 
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }
  public set fileSystemPath(value: string) {
    this._fileSystemPath = value;
  }
  public resetFileSystemPath() {
    this._fileSystemPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemPathInput() {
    return this._fileSystemPath;
  }
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference {
    return new SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCustomFileSystemConfig {
  /**
  * efs_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}
  */
  readonly efsFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable;
}

export function sagemakerUserProfileUserSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system_config: cdktf.listMapper(sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform, true)(struct!.efsFileSystemConfig),
  }
}


export function sagemakerUserProfileUserSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system_config: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform, true)(struct!.efsFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystemConfig = this._efsFileSystemConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystemConfig.internalValue = value.efsFileSystemConfig;
    }
  }

  // efs_file_system_config - computed: false, optional: true, required: false
  private _efsFileSystemConfig = new SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfigList(this, "efs_file_system_config", false);
  public get efsFileSystemConfig() {
    return this._efsFileSystemConfig;
  }
  public putEfsFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigEfsFileSystemConfig[] | cdktf.IResolvable) {
    this._efsFileSystemConfig.internalValue = value;
  }
  public resetEfsFileSystemConfig() {
    this._efsFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemConfigInput() {
    return this._efsFileSystemConfig.internalValue;
  }
}

export class SagemakerUserProfileUserSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference {
    return new SagemakerUserProfileUserSettingsCustomFileSystemConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsCustomPosixUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}
  */
  readonly uid: number;
}

export function sagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference | SagemakerUserProfileUserSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function sagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference | SagemakerUserProfileUserSettingsCustomPosixUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gid = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gid = value.gid;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference {
    return new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference {
    return new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterLabAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}
  */
  readonly codeRepository?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
  */
  readonly customImage?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference {
    return new SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#code_repository SagemakerUserProfile#code_repository}
  */
  readonly codeRepository?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference {
    return new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
  */
  readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference {
    return new SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsRSessionAppSettings {
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_image SagemakerUserProfile#custom_image}
  */
  readonly customImage?: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsRSessionAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsRSessionAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference | SagemakerUserProfileUserSettingsRSessionAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsRSessionAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsRSessionAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerUserProfileUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsRStudioServerProAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}
  */
  readonly userGroup?: string;
}

export function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerUserProfileUserSettingsRStudioServerProAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_status: cdktf.stringToTerraform(struct!.accessStatus),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerUserProfileUserSettingsRStudioServerProAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_status: {
      value: cdktf.stringToHclTerraform(struct!.accessStatus),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessStatus = undefined;
      this._userGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessStatus = value.accessStatus;
      this._userGroup = value.userGroup;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_output_option: {
      value: cdktf.stringToHclTerraform(struct!.notebookOutputOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3KmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookOutputOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookOutputOption = value.notebookOutputOption;
      this._s3KmsKeyId = value.s3KmsKeyId;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // notebook_output_option - computed: false, optional: true, required: false
  private _notebookOutputOption?: string; 
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }
  public set notebookOutputOption(value: string) {
    this._notebookOutputOption = value;
  }
  public resetNotebookOutputOption() {
    this._notebookOutputOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookOutputOptionInput() {
    return this._notebookOutputOption;
  }

  // s3_kms_key_id - computed: false, optional: true, required: false
  private _s3KmsKeyId?: string; 
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }
  public set s3KmsKeyId(value: string) {
    this._s3KmsKeyId = value;
  }
  public resetS3KmsKeyId() {
    this._s3KmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KmsKeyIdInput() {
    return this._s3KmsKeyId;
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}
  */
  readonly defaultEbsVolumeSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}
  */
  readonly maximumEbsVolumeSizeInGb: number;
}

export function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.defaultEbsVolumeSizeInGb),
    maximum_ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.maximumEbsVolumeSizeInGb),
  }
}


export function sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.defaultEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.maximumEbsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsVolumeSizeInGb = this._defaultEbsVolumeSizeInGb;
    }
    if (this._maximumEbsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEbsVolumeSizeInGb = this._maximumEbsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsVolumeSizeInGb = undefined;
      this._maximumEbsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsVolumeSizeInGb = value.defaultEbsVolumeSizeInGb;
      this._maximumEbsVolumeSizeInGb = value.maximumEbsVolumeSizeInGb;
    }
  }

  // default_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _defaultEbsVolumeSizeInGb?: number; 
  public get defaultEbsVolumeSizeInGb() {
    return this.getNumberAttribute('default_ebs_volume_size_in_gb');
  }
  public set defaultEbsVolumeSizeInGb(value: number) {
    this._defaultEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsVolumeSizeInGbInput() {
    return this._defaultEbsVolumeSizeInGb;
  }

  // maximum_ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _maximumEbsVolumeSizeInGb?: number; 
  public get maximumEbsVolumeSizeInGb() {
    return this.getNumberAttribute('maximum_ebs_volume_size_in_gb');
  }
  public set maximumEbsVolumeSizeInGb(value: number) {
    this._maximumEbsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEbsVolumeSizeInGbInput() {
    return this._maximumEbsVolumeSizeInGb;
  }
}
export interface SagemakerUserProfileUserSettingsSpaceStorageSettings {
  /**
  * default_ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}
  */
  readonly defaultEbsStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}

export function sagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ebs_storage_settings: sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct!.defaultEbsStorageSettings),
  }
}


export function sagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference | SagemakerUserProfileUserSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ebs_storage_settings: {
      value: sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct!.defaultEbsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEbsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEbsStorageSettings = this._defaultEbsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEbsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEbsStorageSettings.internalValue = value.defaultEbsStorageSettings;
    }
  }

  // default_ebs_storage_settings - computed: false, optional: true, required: false
  private _defaultEbsStorageSettings = new SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(this, "default_ebs_storage_settings");
  public get defaultEbsStorageSettings() {
    return this._defaultEbsStorageSettings;
  }
  public putDefaultEbsStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings) {
    this._defaultEbsStorageSettings.internalValue = value;
  }
  public resetDefaultEbsStorageSettings() {
    this._defaultEbsStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEbsStorageSettingsInput() {
    return this._defaultEbsStorageSettings.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_alias SagemakerUserProfile#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sagemaker_image_version_arn SagemakerUserProfile#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: true, required: false
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  public resetDefaultResourceSpec() {
    this._defaultResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}
  */
  readonly defaultLandingUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}
  */
  readonly studioWebPortal?: string;
  /**
  * canvas_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#canvas_app_settings SagemakerUserProfile#canvas_app_settings}
  */
  readonly canvasAppSettings?: SagemakerUserProfileUserSettingsCanvasAppSettings;
  /**
  * code_editor_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: SagemakerUserProfileUserSettingsCodeEditorAppSettings;
  /**
  * custom_file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_file_system_config SagemakerUserProfile#custom_file_system_config}
  */
  readonly customFileSystemConfig?: SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
  /**
  * custom_posix_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}
  */
  readonly customPosixUserConfig?: SagemakerUserProfileUserSettingsCustomPosixUserConfig;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerUserProfileUserSettingsJupyterLabAppSettings;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
  /**
  * r_session_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#r_session_app_settings SagemakerUserProfile#r_session_app_settings}
  */
  readonly rSessionAppSettings?: SagemakerUserProfileUserSettingsRSessionAppSettings;
  /**
  * r_studio_server_pro_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}
  */
  readonly rStudioServerProAppSettings?: SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
  /**
  * sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}
  */
  readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerUserProfileUserSettingsSpaceStorageSettings;
  /**
  * tensor_board_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings;
}

export function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_landing_uri: cdktf.stringToTerraform(struct!.defaultLandingUri),
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    studio_web_portal: cdktf.stringToTerraform(struct!.studioWebPortal),
    canvas_app_settings: sagemakerUserProfileUserSettingsCanvasAppSettingsToTerraform(struct!.canvasAppSettings),
    code_editor_app_settings: sagemakerUserProfileUserSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system_config: cdktf.listMapper(sagemakerUserProfileUserSettingsCustomFileSystemConfigToTerraform, true)(struct!.customFileSystemConfig),
    custom_posix_user_config: sagemakerUserProfileUserSettingsCustomPosixUserConfigToTerraform(struct!.customPosixUserConfig),
    jupyter_lab_app_settings: sagemakerUserProfileUserSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    r_session_app_settings: sagemakerUserProfileUserSettingsRSessionAppSettingsToTerraform(struct!.rSessionAppSettings),
    r_studio_server_pro_app_settings: sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToTerraform(struct!.rStudioServerProAppSettings),
    sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    space_storage_settings: sagemakerUserProfileUserSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
    tensor_board_app_settings: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}


export function sagemakerUserProfileUserSettingsToHclTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_landing_uri: {
      value: cdktf.stringToHclTerraform(struct!.defaultLandingUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    studio_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.studioWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canvas_app_settings: {
      value: sagemakerUserProfileUserSettingsCanvasAppSettingsToHclTerraform(struct!.canvasAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCanvasAppSettingsList",
    },
    code_editor_app_settings: {
      value: sagemakerUserProfileUserSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCodeEditorAppSettingsList",
    },
    custom_file_system_config: {
      value: cdktf.listMapperHcl(sagemakerUserProfileUserSettingsCustomFileSystemConfigToHclTerraform, true)(struct!.customFileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCustomFileSystemConfigList",
    },
    custom_posix_user_config: {
      value: sagemakerUserProfileUserSettingsCustomPosixUserConfigToHclTerraform(struct!.customPosixUserConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsCustomPosixUserConfigList",
    },
    jupyter_lab_app_settings: {
      value: sagemakerUserProfileUserSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterLabAppSettingsList",
    },
    jupyter_server_app_settings: {
      value: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsJupyterServerAppSettingsList",
    },
    kernel_gateway_app_settings: {
      value: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsKernelGatewayAppSettingsList",
    },
    r_session_app_settings: {
      value: sagemakerUserProfileUserSettingsRSessionAppSettingsToHclTerraform(struct!.rSessionAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsRSessionAppSettingsList",
    },
    r_studio_server_pro_app_settings: {
      value: sagemakerUserProfileUserSettingsRStudioServerProAppSettingsToHclTerraform(struct!.rStudioServerProAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsRStudioServerProAppSettingsList",
    },
    sharing_settings: {
      value: sagemakerUserProfileUserSettingsSharingSettingsToHclTerraform(struct!.sharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsSharingSettingsList",
    },
    space_storage_settings: {
      value: sagemakerUserProfileUserSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsSpaceStorageSettingsList",
    },
    tensor_board_app_settings: {
      value: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToHclTerraform(struct!.tensorBoardAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerUserProfileUserSettingsTensorBoardAppSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerUserProfileUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLandingUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingUri = this._defaultLandingUri;
    }
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._studioWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.studioWebPortal = this._studioWebPortal;
    }
    if (this._canvasAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canvasAppSettings = this._canvasAppSettings?.internalValue;
    }
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystemConfig = this._customFileSystemConfig?.internalValue;
    }
    if (this._customPosixUserConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPosixUserConfig = this._customPosixUserConfig?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._rSessionAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rSessionAppSettings = this._rSessionAppSettings?.internalValue;
    }
    if (this._rStudioServerProAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rStudioServerProAppSettings = this._rStudioServerProAppSettings?.internalValue;
    }
    if (this._sharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    if (this._tensorBoardAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLandingUri = undefined;
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._studioWebPortal = undefined;
      this._canvasAppSettings.internalValue = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystemConfig.internalValue = undefined;
      this._customPosixUserConfig.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._rSessionAppSettings.internalValue = undefined;
      this._rStudioServerProAppSettings.internalValue = undefined;
      this._sharingSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLandingUri = value.defaultLandingUri;
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._studioWebPortal = value.studioWebPortal;
      this._canvasAppSettings.internalValue = value.canvasAppSettings;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystemConfig.internalValue = value.customFileSystemConfig;
      this._customPosixUserConfig.internalValue = value.customPosixUserConfig;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._rSessionAppSettings.internalValue = value.rSessionAppSettings;
      this._rStudioServerProAppSettings.internalValue = value.rStudioServerProAppSettings;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
  }

  // default_landing_uri - computed: false, optional: true, required: false
  private _defaultLandingUri?: string; 
  public get defaultLandingUri() {
    return this.getStringAttribute('default_landing_uri');
  }
  public set defaultLandingUri(value: string) {
    this._defaultLandingUri = value;
  }
  public resetDefaultLandingUri() {
    this._defaultLandingUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingUriInput() {
    return this._defaultLandingUri;
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // studio_web_portal - computed: true, optional: true, required: false
  private _studioWebPortal?: string; 
  public get studioWebPortal() {
    return this.getStringAttribute('studio_web_portal');
  }
  public set studioWebPortal(value: string) {
    this._studioWebPortal = value;
  }
  public resetStudioWebPortal() {
    this._studioWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioWebPortalInput() {
    return this._studioWebPortal;
  }

  // canvas_app_settings - computed: false, optional: true, required: false
  private _canvasAppSettings = new SagemakerUserProfileUserSettingsCanvasAppSettingsOutputReference(this, "canvas_app_settings");
  public get canvasAppSettings() {
    return this._canvasAppSettings;
  }
  public putCanvasAppSettings(value: SagemakerUserProfileUserSettingsCanvasAppSettings) {
    this._canvasAppSettings.internalValue = value;
  }
  public resetCanvasAppSettings() {
    this._canvasAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canvasAppSettingsInput() {
    return this._canvasAppSettings.internalValue;
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system_config - computed: false, optional: true, required: false
  private _customFileSystemConfig = new SagemakerUserProfileUserSettingsCustomFileSystemConfigList(this, "custom_file_system_config", false);
  public get customFileSystemConfig() {
    return this._customFileSystemConfig;
  }
  public putCustomFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable) {
    this._customFileSystemConfig.internalValue = value;
  }
  public resetCustomFileSystemConfig() {
    this._customFileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemConfigInput() {
    return this._customFileSystemConfig.internalValue;
  }

  // custom_posix_user_config - computed: false, optional: true, required: false
  private _customPosixUserConfig = new SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(this, "custom_posix_user_config");
  public get customPosixUserConfig() {
    return this._customPosixUserConfig;
  }
  public putCustomPosixUserConfig(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig) {
    this._customPosixUserConfig.internalValue = value;
  }
  public resetCustomPosixUserConfig() {
    this._customPosixUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPosixUserConfigInput() {
    return this._customPosixUserConfig.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // r_session_app_settings - computed: false, optional: true, required: false
  private _rSessionAppSettings = new SagemakerUserProfileUserSettingsRSessionAppSettingsOutputReference(this, "r_session_app_settings");
  public get rSessionAppSettings() {
    return this._rSessionAppSettings;
  }
  public putRSessionAppSettings(value: SagemakerUserProfileUserSettingsRSessionAppSettings) {
    this._rSessionAppSettings.internalValue = value;
  }
  public resetRSessionAppSettings() {
    this._rSessionAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rSessionAppSettingsInput() {
    return this._rSessionAppSettings.internalValue;
  }

  // r_studio_server_pro_app_settings - computed: false, optional: true, required: false
  private _rStudioServerProAppSettings = new SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(this, "r_studio_server_pro_app_settings");
  public get rStudioServerProAppSettings() {
    return this._rStudioServerProAppSettings;
  }
  public putRStudioServerProAppSettings(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings) {
    this._rStudioServerProAppSettings.internalValue = value;
  }
  public resetRStudioServerProAppSettings() {
    this._rStudioServerProAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rStudioServerProAppSettingsInput() {
    return this._rStudioServerProAppSettings.internalValue;
  }

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this, "sharing_settings");
  public get sharingSettings() {
    return this._sharingSettings;
  }
  public putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings) {
    this._sharingSettings.internalValue = value;
  }
  public resetSharingSettings() {
    this._sharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingSettingsInput() {
    return this._sharingSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings");
  public get tensorBoardAppSettings() {
    return this._tensorBoardAppSettings;
  }
  public putTensorBoardAppSettings(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings) {
    this._tensorBoardAppSettings.internalValue = value;
  }
  public resetTensorBoardAppSettings() {
    this._tensorBoardAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tensorBoardAppSettingsInput() {
    return this._tensorBoardAppSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile}
*/
export class SagemakerUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerUserProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerUserProfile to import
  * @param importFromId The id of the existing SagemakerUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/resources/sagemaker_user_profile aws_sagemaker_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.58.0',
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
    this._domainId = config.domainId;
    this._id = config.id;
    this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
    this._singleSignOnUserValue = config.singleSignOnUserValue;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userProfileName = config.userProfileName;
    this._userSettings.internalValue = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // home_efs_file_system_uid - computed: true, optional: false, required: false
  public get homeEfsFileSystemUid() {
    return this.getStringAttribute('home_efs_file_system_uid');
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

  // single_sign_on_user_identifier - computed: false, optional: true, required: false
  private _singleSignOnUserIdentifier?: string; 
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }
  public set singleSignOnUserIdentifier(value: string) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier;
  }

  // single_sign_on_user_value - computed: false, optional: true, required: false
  private _singleSignOnUserValue?: string; 
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue;
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

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName?: string; 
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName;
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings = new SagemakerUserProfileUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: SagemakerUserProfileUserSettings) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
      single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
      user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      single_sign_on_user_identifier: {
        value: cdktf.stringToHclTerraform(this._singleSignOnUserIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_user_value: {
        value: cdktf.stringToHclTerraform(this._singleSignOnUserValue),
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
      user_profile_name: {
        value: cdktf.stringToHclTerraform(this._userProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_settings: {
        value: sagemakerUserProfileUserSettingsToHclTerraform(this._userSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerUserProfileUserSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
