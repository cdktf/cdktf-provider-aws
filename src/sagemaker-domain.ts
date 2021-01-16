// https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SagemakerDomainConfig extends TerraformMetaArguments {
  readonly appNetworkAccessType?: string;
  readonly authMode: string;
  readonly domainName: string;
  readonly kmsKeyId?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly vpcId: string;
  /** default_user_settings block */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings[];
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  readonly appImageConfigName: string;
  readonly imageName: string;
  readonly imageVersionNumber?: number;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /** custom_image block */
  readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  readonly notebookOutputOption?: string;
  readonly s3KmsKeyId?: string;
  readonly s3OutputPath?: string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  readonly instanceType?: string;
  readonly sagemakerImageArn?: string;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
  /** default_resource_spec block */
  readonly defaultResourceSpec: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec[];
}
export interface SagemakerDomainDefaultUserSettings {
  readonly executionRole: string;
  readonly securityGroups?: string[];
  /** jupyter_server_app_settings block */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings[];
  /** kernel_gateway_app_settings block */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings[];
  /** sharing_settings block */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings[];
  /** tensor_board_app_settings block */
  readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings[];
}

// Resource

export class SagemakerDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._authMode = config.authMode;
    this._domainName = config.domainName;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._defaultUserSettings = config.defaultUserSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string;
  public get appNetworkAccessType() {
    return this._appNetworkAccessType;
  }
  public set appNetworkAccessType(value: string | undefined) {
    this._appNetworkAccessType = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode: string;
  public get authMode() {
    return this._authMode;
  }
  public set authMode(value: string) {
    this._authMode = value;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string) {
    this._domainName = value;
  }

  // home_efs_file_system_id - computed: true, optional: false, required: true
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: true
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings: SagemakerDomainDefaultUserSettings[];
  public get defaultUserSettings() {
    return this._defaultUserSettings;
  }
  public set defaultUserSettings(value: SagemakerDomainDefaultUserSettings[]) {
    this._defaultUserSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: this._appNetworkAccessType,
      auth_mode: this._authMode,
      domain_name: this._domainName,
      kms_key_id: this._kmsKeyId,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      vpc_id: this._vpcId,
      default_user_settings: this._defaultUserSettings,
    };
  }
}
