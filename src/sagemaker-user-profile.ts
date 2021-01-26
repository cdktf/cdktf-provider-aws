// https://www.terraform.io/docs/providers/aws/r/sagemaker_user_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
  readonly domainId: string;
  readonly singleSignOnUserIdentifier?: string;
  readonly singleSignOnUserValue?: string;
  readonly tags?: { [key: string]: string };
  readonly userProfileName: string;
  /** user_settings block */
  readonly userSettings?: SagemakerUserProfileUserSettings[];
}
export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}

function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec[];
}

function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage {
  readonly appImageConfigName: string;
  readonly imageName: string;
  readonly imageVersionNumber?: number;
}

function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}

function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
  /** custom_image block */
  readonly customImage?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImage[];
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec[];
}

function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_image: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct!.customImage),
    default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerUserProfileUserSettingsSharingSettings {
  readonly notebookOutputOption?: string;
  readonly s3KmsKeyId?: string;
  readonly s3OutputPath?: string;
}

function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export interface SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}

function sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerUserProfileUserSettingsTensorBoardAppSettings {
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec[];
}

function sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: cdktf.listMapper(sagemakerUserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerUserProfileUserSettings {
  readonly executionRole: string;
  readonly securityGroups?: string[];
  /** jupyter_server_app_settings block */
  readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings[];
  /** kernel_gateway_app_settings block */
  readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings[];
  /** sharing_settings block */
  readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings[];
  /** tensor_board_app_settings block */
  readonly tensorBoardAppSettings?: SagemakerUserProfileUserSettingsTensorBoardAppSettings[];
}

function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    jupyter_server_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform)(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform)(struct!.kernelGatewayAppSettings),
    sharing_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsSharingSettingsToTerraform)(struct!.sharingSettings),
    tensor_board_app_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsTensorBoardAppSettingsToTerraform)(struct!.tensorBoardAppSettings),
  }
}


// Resource

export class SagemakerUserProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._userProfileName = config.userProfileName;
    this._userSettings = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId: string;
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
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
  public set singleSignOnUserIdentifier(value: string ) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier
  }

  // single_sign_on_user_value - computed: false, optional: true, required: false
  private _singleSignOnUserValue?: string;
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string ) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName: string;
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings?: SagemakerUserProfileUserSettings[];
  public get userSettings() {
    return this.interpolationForAttribute('user_settings') as any;
  }
  public set userSettings(value: SagemakerUserProfileUserSettings[] ) {
    this._userSettings = value;
  }
  public resetUserSettings() {
    this._userSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings
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
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
      user_settings: cdktf.listMapper(sagemakerUserProfileUserSettingsToTerraform)(this._userSettings),
    };
  }
}
