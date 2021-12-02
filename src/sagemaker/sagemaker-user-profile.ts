// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tags_all SagemakerUserProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * user_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
  */
  readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._instanceType) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._sagemakerImageArn) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this._instanceType = undefined;
      this._sagemakerImageArn = undefined;
    }
    else {
      this._instanceType = value.instanceType;
      this._sagemakerImageArn = value.sagemakerImageArn;
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
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference | SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._defaultResourceSpec) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this._lifecycleConfigArns = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
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

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._instanceType) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._sagemakerImageArn) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this._instanceType = undefined;
      this._sagemakerImageArn = undefined;
    }
    else {
      this._instanceType = value.instanceType;
      this._sagemakerImageArn = value.sagemakerImageArn;
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
}
export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#custom_image SagemakerUserProfile#custom_image}
  */
  readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct!.customImage),
    default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage;
    }
    if (this._defaultResourceSpec) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this._lifecycleConfigArns = undefined;
      this._customImage = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return this.getListAttribute('lifecycle_config_arns');
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
  private _customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[]; 
  public get customImage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_image') as any;
  }
  public set customImage(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[]) {
    this._customImage = value;
  }
  public resetCustomImage() {
    this._customImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage;
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettingsOutputReference | SagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class SagemakerUserProfileUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsSharingSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._notebookOutputOption) {
      hasAnyValues = true;
      internalValueResult.notebookOutputOption = this._notebookOutputOption;
    }
    if (this._s3KmsKeyId) {
      hasAnyValues = true;
      internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
    }
    if (this._s3OutputPath) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsSharingSettings | undefined) {
    if (value === undefined) {
      this._notebookOutputOption = undefined;
      this._s3KmsKeyId = undefined;
      this._s3OutputPath = undefined;
    }
    else {
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
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sagemaker_image_arn SagemakerUserProfile#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._instanceType) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._sagemakerImageArn) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this._instanceType = undefined;
      this._sagemakerImageArn = undefined;
    }
    else {
      this._instanceType = value.instanceType;
      this._sagemakerImageArn = value.sagemakerImageArn;
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
}
export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference | SagemakerUserProfileUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettingsTensorBoardAppSettings | undefined) {
    if (value === undefined) {
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this as any, "default_resource_spec", true);
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerUserProfileUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * jupyter_server_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
  /**
  * sharing_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
  */
  readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
  /**
  * tensor_board_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html#tensor_board_app_settings SagemakerUserProfile#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings;
}

export function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsOutputReference | SagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
    tensor_board_app_settings: sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct!.tensorBoardAppSettings),
  }
}

export class SagemakerUserProfileUserSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SagemakerUserProfileUserSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._executionRole) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._securityGroups) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._jupyterServerAppSettings) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._sharingSettings) {
      hasAnyValues = true;
      internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
    }
    if (this._tensorBoardAppSettings) {
      hasAnyValues = true;
      internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerUserProfileUserSettings | undefined) {
    if (value === undefined) {
      this._executionRole = undefined;
      this._securityGroups = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._sharingSettings.internalValue = undefined;
      this._tensorBoardAppSettings.internalValue = undefined;
    }
    else {
      this._executionRole = value.executionRole;
      this._securityGroups = value.securityGroups;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._sharingSettings.internalValue = value.sharingSettings;
      this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
    }
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
    return this.getListAttribute('security_groups');
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

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(this as any, "jupyter_server_app_settings", true);
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
  private _kernelGatewayAppSettings = new SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(this as any, "kernel_gateway_app_settings", true);
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

  // sharing_settings - computed: false, optional: true, required: false
  private _sharingSettings = new SagemakerUserProfileUserSettingsSharingSettingsOutputReference(this as any, "sharing_settings", true);
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

  // tensor_board_app_settings - computed: false, optional: true, required: false
  private _tensorBoardAppSettings = new SagemakerUserProfileUserSettingsTensorBoardAppSettingsOutputReference(this as any, "tensor_board_app_settings", true);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile}
*/
export class SagemakerUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_user_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html aws_sagemaker_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainId = config.domainId;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _userSettings = new SagemakerUserProfileUserSettingsOutputReference(this as any, "user_settings", true);
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
      single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
      single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
      user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings.internalValue),
    };
  }
}
