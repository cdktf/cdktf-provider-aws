// https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppstreamImageBuilderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}
  */
  readonly appstreamAgentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#description AppstreamImageBuilder#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#display_name AppstreamImageBuilder#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}
  */
  readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#iam_role_arn AppstreamImageBuilder#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#image_arn AppstreamImageBuilder#image_arn}
  */
  readonly imageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#image_name AppstreamImageBuilder#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#instance_type AppstreamImageBuilder#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#name AppstreamImageBuilder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#tags AppstreamImageBuilder#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#tags_all AppstreamImageBuilder#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#access_endpoint AppstreamImageBuilder#access_endpoint}
  */
  readonly accessEndpoint?: AppstreamImageBuilderAccessEndpoint[];
  /**
  * domain_join_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#domain_join_info AppstreamImageBuilder#domain_join_info}
  */
  readonly domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo[];
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#vpc_config AppstreamImageBuilder#vpc_config}
  */
  readonly vpcConfig?: AppstreamImageBuilderVpcConfig[];
}
export interface AppstreamImageBuilderAccessEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#endpoint_type AppstreamImageBuilder#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#vpce_id AppstreamImageBuilder#vpce_id}
  */
  readonly vpceId?: string;
}

function appstreamImageBuilderAccessEndpointToTerraform(struct?: AppstreamImageBuilderAccessEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    vpce_id: cdktf.stringToTerraform(struct!.vpceId),
  }
}

export interface AppstreamImageBuilderDomainJoinInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#directory_name AppstreamImageBuilder#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
}

function appstreamImageBuilderDomainJoinInfoToTerraform(struct?: AppstreamImageBuilderDomainJoinInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}

export interface AppstreamImageBuilderVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#security_group_ids AppstreamImageBuilder#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#subnet_ids AppstreamImageBuilder#subnet_ids}
  */
  readonly subnetIds?: string[];
}

function appstreamImageBuilderVpcConfigToTerraform(struct?: AppstreamImageBuilderVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder}
*/
export class AppstreamImageBuilder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appstream_image_builder";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html aws_appstream_image_builder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamImageBuilderConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamImageBuilderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_image_builder',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appstreamAgentVersion = config.appstreamAgentVersion;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
    this._iamRoleArn = config.iamRoleArn;
    this._imageArn = config.imageArn;
    this._imageName = config.imageName;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessEndpoint = config.accessEndpoint;
    this._domainJoinInfo = config.domainJoinInfo;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appstream_agent_version - computed: true, optional: true, required: false
  private _appstreamAgentVersion?: string;
  public get appstreamAgentVersion() {
    return this.getStringAttribute('appstream_agent_version');
  }
  public set appstreamAgentVersion(value: string) {
    this._appstreamAgentVersion = value;
  }
  public resetAppstreamAgentVersion() {
    this._appstreamAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appstreamAgentVersionInput() {
    return this._appstreamAgentVersion
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enable_default_internet_access - computed: true, optional: true, required: false
  private _enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
  public get enableDefaultInternetAccess() {
    return this.getBooleanAttribute('enable_default_internet_access');
  }
  public set enableDefaultInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableDefaultInternetAccess = value;
  }
  public resetEnableDefaultInternetAccess() {
    this._enableDefaultInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultInternetAccessInput() {
    return this._enableDefaultInternetAccess
  }

  // iam_role_arn - computed: true, optional: true, required: false
  private _iamRoleArn?: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  public resetIamRoleArn() {
    this._iamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_arn - computed: true, optional: true, required: false
  private _imageArn?: string;
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }
  public set imageArn(value: string) {
    this._imageArn = value;
  }
  public resetImageArn() {
    this._imageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageArnInput() {
    return this._imageArn
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string;
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // access_endpoint - computed: false, optional: true, required: false
  private _accessEndpoint?: AppstreamImageBuilderAccessEndpoint[];
  public get accessEndpoint() {
    return this.interpolationForAttribute('access_endpoint') as any;
  }
  public set accessEndpoint(value: AppstreamImageBuilderAccessEndpoint[] ) {
    this._accessEndpoint = value;
  }
  public resetAccessEndpoint() {
    this._accessEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointInput() {
    return this._accessEndpoint
  }

  // domain_join_info - computed: false, optional: true, required: false
  private _domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo[];
  public get domainJoinInfo() {
    return this.interpolationForAttribute('domain_join_info') as any;
  }
  public set domainJoinInfo(value: AppstreamImageBuilderDomainJoinInfo[] ) {
    this._domainJoinInfo = value;
  }
  public resetDomainJoinInfo() {
    this._domainJoinInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainJoinInfoInput() {
    return this._domainJoinInfo
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: AppstreamImageBuilderVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: AppstreamImageBuilderVpcConfig[] ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appstream_agent_version: cdktf.stringToTerraform(this._appstreamAgentVersion),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_default_internet_access: cdktf.booleanToTerraform(this._enableDefaultInternetAccess),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      image_arn: cdktf.stringToTerraform(this._imageArn),
      image_name: cdktf.stringToTerraform(this._imageName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      access_endpoint: cdktf.listMapper(appstreamImageBuilderAccessEndpointToTerraform)(this._accessEndpoint),
      domain_join_info: cdktf.listMapper(appstreamImageBuilderDomainJoinInfoToTerraform)(this._domainJoinInfo),
      vpc_config: cdktf.listMapper(appstreamImageBuilderVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
