// https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppstreamFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#description AppstreamFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}
  */
  readonly disconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#display_name AppstreamFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#enable_default_internet_access AppstreamFleet#enable_default_internet_access}
  */
  readonly enableDefaultInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#fleet_type AppstreamFleet#fleet_type}
  */
  readonly fleetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#iam_role_arn AppstreamFleet#iam_role_arn}
  */
  readonly iamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}
  */
  readonly idleDisconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#image_arn AppstreamFleet#image_arn}
  */
  readonly imageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#image_name AppstreamFleet#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#instance_type AppstreamFleet#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}
  */
  readonly maxUserDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#name AppstreamFleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#stream_view AppstreamFleet#stream_view}
  */
  readonly streamView?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#tags AppstreamFleet#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#tags_all AppstreamFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * compute_capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#compute_capacity AppstreamFleet#compute_capacity}
  */
  readonly computeCapacity: AppstreamFleetComputeCapacity[];
  /**
  * domain_join_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#domain_join_info AppstreamFleet#domain_join_info}
  */
  readonly domainJoinInfo?: AppstreamFleetDomainJoinInfo[];
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#vpc_config AppstreamFleet#vpc_config}
  */
  readonly vpcConfig?: AppstreamFleetVpcConfig[];
}
export interface AppstreamFleetComputeCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#desired_instances AppstreamFleet#desired_instances}
  */
  readonly desiredInstances: number;
}

function appstreamFleetComputeCapacityToTerraform(struct?: AppstreamFleetComputeCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    desired_instances: cdktf.numberToTerraform(struct!.desiredInstances),
  }
}

export interface AppstreamFleetDomainJoinInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#directory_name AppstreamFleet#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
}

function appstreamFleetDomainJoinInfoToTerraform(struct?: AppstreamFleetDomainJoinInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
  }
}

export interface AppstreamFleetVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#security_group_ids AppstreamFleet#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#subnet_ids AppstreamFleet#subnet_ids}
  */
  readonly subnetIds?: string[];
}

function appstreamFleetVpcConfigToTerraform(struct?: AppstreamFleetVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet}
*/
export class AppstreamFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appstream_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html aws_appstream_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamFleetConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._disconnectTimeoutInSeconds = config.disconnectTimeoutInSeconds;
    this._displayName = config.displayName;
    this._enableDefaultInternetAccess = config.enableDefaultInternetAccess;
    this._fleetType = config.fleetType;
    this._iamRoleArn = config.iamRoleArn;
    this._idleDisconnectTimeoutInSeconds = config.idleDisconnectTimeoutInSeconds;
    this._imageArn = config.imageArn;
    this._imageName = config.imageName;
    this._instanceType = config.instanceType;
    this._maxUserDurationInSeconds = config.maxUserDurationInSeconds;
    this._name = config.name;
    this._streamView = config.streamView;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._computeCapacity = config.computeCapacity;
    this._domainJoinInfo = config.domainJoinInfo;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _disconnectTimeoutInSeconds?: number;
  public get disconnectTimeoutInSeconds() {
    return this.getNumberAttribute('disconnect_timeout_in_seconds');
  }
  public set disconnectTimeoutInSeconds(value: number) {
    this._disconnectTimeoutInSeconds = value;
  }
  public resetDisconnectTimeoutInSeconds() {
    this._disconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInSecondsInput() {
    return this._disconnectTimeoutInSeconds
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

  // fleet_type - computed: true, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType
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

  // idle_disconnect_timeout_in_seconds - computed: false, optional: true, required: false
  private _idleDisconnectTimeoutInSeconds?: number;
  public get idleDisconnectTimeoutInSeconds() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
  }
  public set idleDisconnectTimeoutInSeconds(value: number ) {
    this._idleDisconnectTimeoutInSeconds = value;
  }
  public resetIdleDisconnectTimeoutInSeconds() {
    this._idleDisconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDisconnectTimeoutInSecondsInput() {
    return this._idleDisconnectTimeoutInSeconds
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

  // max_user_duration_in_seconds - computed: true, optional: true, required: false
  private _maxUserDurationInSeconds?: number;
  public get maxUserDurationInSeconds() {
    return this.getNumberAttribute('max_user_duration_in_seconds');
  }
  public set maxUserDurationInSeconds(value: number) {
    this._maxUserDurationInSeconds = value;
  }
  public resetMaxUserDurationInSeconds() {
    this._maxUserDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserDurationInSecondsInput() {
    return this._maxUserDurationInSeconds
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

  // stream_view - computed: true, optional: true, required: false
  private _streamView?: string;
  public get streamView() {
    return this.getStringAttribute('stream_view');
  }
  public set streamView(value: string) {
    this._streamView = value;
  }
  public resetStreamView() {
    this._streamView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamViewInput() {
    return this._streamView
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

  // compute_capacity - computed: false, optional: false, required: true
  private _computeCapacity: AppstreamFleetComputeCapacity[];
  public get computeCapacity() {
    return this.interpolationForAttribute('compute_capacity') as any;
  }
  public set computeCapacity(value: AppstreamFleetComputeCapacity[]) {
    this._computeCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCapacityInput() {
    return this._computeCapacity
  }

  // domain_join_info - computed: false, optional: true, required: false
  private _domainJoinInfo?: AppstreamFleetDomainJoinInfo[];
  public get domainJoinInfo() {
    return this.interpolationForAttribute('domain_join_info') as any;
  }
  public set domainJoinInfo(value: AppstreamFleetDomainJoinInfo[] ) {
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
  private _vpcConfig?: AppstreamFleetVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: AppstreamFleetVpcConfig[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      disconnect_timeout_in_seconds: cdktf.numberToTerraform(this._disconnectTimeoutInSeconds),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_default_internet_access: cdktf.booleanToTerraform(this._enableDefaultInternetAccess),
      fleet_type: cdktf.stringToTerraform(this._fleetType),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      idle_disconnect_timeout_in_seconds: cdktf.numberToTerraform(this._idleDisconnectTimeoutInSeconds),
      image_arn: cdktf.stringToTerraform(this._imageArn),
      image_name: cdktf.stringToTerraform(this._imageName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      max_user_duration_in_seconds: cdktf.numberToTerraform(this._maxUserDurationInSeconds),
      name: cdktf.stringToTerraform(this._name),
      stream_view: cdktf.stringToTerraform(this._streamView),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      compute_capacity: cdktf.listMapper(appstreamFleetComputeCapacityToTerraform)(this._computeCapacity),
      domain_join_info: cdktf.listMapper(appstreamFleetDomainJoinInfoToTerraform)(this._domainJoinInfo),
      vpc_config: cdktf.listMapper(appstreamFleetVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
