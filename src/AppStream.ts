// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AppStream
*/
export namespace AppStream {
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
    readonly computeCapacity: AppstreamFleetComputeCapacity;
    /**
    * domain_join_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#domain_join_info AppstreamFleet#domain_join_info}
    */
    readonly domainJoinInfo?: AppstreamFleetDomainJoinInfo;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#vpc_config AppstreamFleet#vpc_config}
    */
    readonly vpcConfig?: AppstreamFleetVpcConfig;
  }
  export interface AppstreamFleetComputeCapacity {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet.html#desired_instances AppstreamFleet#desired_instances}
    */
    readonly desiredInstances: number;
  }

  function appstreamFleetComputeCapacityToTerraform(struct?: AppstreamFleetComputeCapacityOutputReference | AppstreamFleetComputeCapacity): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      desired_instances: cdktf.numberToTerraform(struct!.desiredInstances),
    }
  }

  export class AppstreamFleetComputeCapacityOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // desired_instances - computed: false, optional: false, required: true
    private _desiredInstances?: number; 
    public get desiredInstances() {
      return this.getNumberAttribute('desired_instances');
    }
    public set desiredInstances(value: number) {
      this._desiredInstances = value;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredInstancesInput() {
      return this._desiredInstances
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

  function appstreamFleetDomainJoinInfoToTerraform(struct?: AppstreamFleetDomainJoinInfoOutputReference | AppstreamFleetDomainJoinInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      directory_name: cdktf.stringToTerraform(struct!.directoryName),
      organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    }
  }

  export class AppstreamFleetDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // directory_name - computed: false, optional: true, required: false
    private _directoryName?: string | undefined; 
    public get directoryName() {
      return this.getStringAttribute('directory_name');
    }
    public set directoryName(value: string | undefined) {
      this._directoryName = value;
    }
    public resetDirectoryName() {
      this._directoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryNameInput() {
      return this._directoryName
    }

    // organizational_unit_distinguished_name - computed: false, optional: true, required: false
    private _organizationalUnitDistinguishedName?: string | undefined; 
    public get organizationalUnitDistinguishedName() {
      return this.getStringAttribute('organizational_unit_distinguished_name');
    }
    public set organizationalUnitDistinguishedName(value: string | undefined) {
      this._organizationalUnitDistinguishedName = value;
    }
    public resetOrganizationalUnitDistinguishedName() {
      this._organizationalUnitDistinguishedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitDistinguishedNameInput() {
      return this._organizationalUnitDistinguishedName
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

  function appstreamFleetVpcConfigToTerraform(struct?: AppstreamFleetVpcConfigOutputReference | AppstreamFleetVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class AppstreamFleetVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _disconnectTimeoutInSeconds?: number | undefined; 
    public get disconnectTimeoutInSeconds() {
      return this.getNumberAttribute('disconnect_timeout_in_seconds');
    }
    public set disconnectTimeoutInSeconds(value: number | undefined) {
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
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
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
    private _enableDefaultInternetAccess?: boolean | cdktf.IResolvable | undefined; 
    public get enableDefaultInternetAccess() {
      return this.getBooleanAttribute('enable_default_internet_access') as any;
    }
    public set enableDefaultInternetAccess(value: boolean | cdktf.IResolvable | undefined) {
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
    private _fleetType?: string | undefined; 
    public get fleetType() {
      return this.getStringAttribute('fleet_type');
    }
    public set fleetType(value: string | undefined) {
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
    private _iamRoleArn?: string | undefined; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string | undefined) {
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
    private _idleDisconnectTimeoutInSeconds?: number | undefined; 
    public get idleDisconnectTimeoutInSeconds() {
      return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
    }
    public set idleDisconnectTimeoutInSeconds(value: number | undefined) {
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
    private _imageArn?: string | undefined; 
    public get imageArn() {
      return this.getStringAttribute('image_arn');
    }
    public set imageArn(value: string | undefined) {
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
    private _imageName?: string | undefined; 
    public get imageName() {
      return this.getStringAttribute('image_name');
    }
    public set imageName(value: string | undefined) {
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
    private _instanceType?: string; 
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
    private _maxUserDurationInSeconds?: number | undefined; 
    public get maxUserDurationInSeconds() {
      return this.getNumberAttribute('max_user_duration_in_seconds');
    }
    public set maxUserDurationInSeconds(value: number | undefined) {
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
    private _name?: string; 
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
    private _streamView?: string | undefined; 
    public get streamView() {
      return this.getStringAttribute('stream_view');
    }
    public set streamView(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _computeCapacity?: AppstreamFleetComputeCapacity; 
    private __computeCapacityOutput = new AppstreamFleetComputeCapacityOutputReference(this as any, "compute_capacity", true);
    public get computeCapacity() {
      return this.__computeCapacityOutput;
    }
    public putComputeCapacity(value: AppstreamFleetComputeCapacity) {
      this._computeCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get computeCapacityInput() {
      return this._computeCapacity
    }

    // domain_join_info - computed: false, optional: true, required: false
    private _domainJoinInfo?: AppstreamFleetDomainJoinInfo | undefined; 
    private __domainJoinInfoOutput = new AppstreamFleetDomainJoinInfoOutputReference(this as any, "domain_join_info", true);
    public get domainJoinInfo() {
      return this.__domainJoinInfoOutput;
    }
    public putDomainJoinInfo(value: AppstreamFleetDomainJoinInfo | undefined) {
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
    private _vpcConfig?: AppstreamFleetVpcConfig | undefined; 
    private __vpcConfigOutput = new AppstreamFleetVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: AppstreamFleetVpcConfig | undefined) {
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
        compute_capacity: appstreamFleetComputeCapacityToTerraform(this._computeCapacity),
        domain_join_info: appstreamFleetDomainJoinInfoToTerraform(this._domainJoinInfo),
        vpc_config: appstreamFleetVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
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
    readonly domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo;
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_image_builder.html#vpc_config AppstreamImageBuilder#vpc_config}
    */
    readonly vpcConfig?: AppstreamImageBuilderVpcConfig;
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function appstreamImageBuilderDomainJoinInfoToTerraform(struct?: AppstreamImageBuilderDomainJoinInfoOutputReference | AppstreamImageBuilderDomainJoinInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      directory_name: cdktf.stringToTerraform(struct!.directoryName),
      organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    }
  }

  export class AppstreamImageBuilderDomainJoinInfoOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // directory_name - computed: false, optional: true, required: false
    private _directoryName?: string | undefined; 
    public get directoryName() {
      return this.getStringAttribute('directory_name');
    }
    public set directoryName(value: string | undefined) {
      this._directoryName = value;
    }
    public resetDirectoryName() {
      this._directoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryNameInput() {
      return this._directoryName
    }

    // organizational_unit_distinguished_name - computed: false, optional: true, required: false
    private _organizationalUnitDistinguishedName?: string | undefined; 
    public get organizationalUnitDistinguishedName() {
      return this.getStringAttribute('organizational_unit_distinguished_name');
    }
    public set organizationalUnitDistinguishedName(value: string | undefined) {
      this._organizationalUnitDistinguishedName = value;
    }
    public resetOrganizationalUnitDistinguishedName() {
      this._organizationalUnitDistinguishedName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationalUnitDistinguishedNameInput() {
      return this._organizationalUnitDistinguishedName
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

  function appstreamImageBuilderVpcConfigToTerraform(struct?: AppstreamImageBuilderVpcConfigOutputReference | AppstreamImageBuilderVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export class AppstreamImageBuilderVpcConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
    private _appstreamAgentVersion?: string | undefined; 
    public get appstreamAgentVersion() {
      return this.getStringAttribute('appstream_agent_version');
    }
    public set appstreamAgentVersion(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
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
    private _enableDefaultInternetAccess?: boolean | cdktf.IResolvable | undefined; 
    public get enableDefaultInternetAccess() {
      return this.getBooleanAttribute('enable_default_internet_access') as any;
    }
    public set enableDefaultInternetAccess(value: boolean | cdktf.IResolvable | undefined) {
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
    private _iamRoleArn?: string | undefined; 
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string | undefined) {
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
    private _imageArn?: string | undefined; 
    public get imageArn() {
      return this.getStringAttribute('image_arn');
    }
    public set imageArn(value: string | undefined) {
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
    private _imageName?: string | undefined; 
    public get imageName() {
      return this.getStringAttribute('image_name');
    }
    public set imageName(value: string | undefined) {
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
    private _instanceType?: string; 
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
    private _name?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _accessEndpoint?: AppstreamImageBuilderAccessEndpoint[] | undefined; 
    public get accessEndpoint() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('access_endpoint') as any;
    }
    public set accessEndpoint(value: AppstreamImageBuilderAccessEndpoint[] | undefined) {
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
    private _domainJoinInfo?: AppstreamImageBuilderDomainJoinInfo | undefined; 
    private __domainJoinInfoOutput = new AppstreamImageBuilderDomainJoinInfoOutputReference(this as any, "domain_join_info", true);
    public get domainJoinInfo() {
      return this.__domainJoinInfoOutput;
    }
    public putDomainJoinInfo(value: AppstreamImageBuilderDomainJoinInfo | undefined) {
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
    private _vpcConfig?: AppstreamImageBuilderVpcConfig | undefined; 
    private __vpcConfigOutput = new AppstreamImageBuilderVpcConfigOutputReference(this as any, "vpc_config", true);
    public get vpcConfig() {
      return this.__vpcConfigOutput;
    }
    public putVpcConfig(value: AppstreamImageBuilderVpcConfig | undefined) {
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
        domain_join_info: appstreamImageBuilderDomainJoinInfoToTerraform(this._domainJoinInfo),
        vpc_config: appstreamImageBuilderVpcConfigToTerraform(this._vpcConfig),
      };
    }
  }
  export interface AppstreamStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#description AppstreamStack#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#display_name AppstreamStack#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#embed_host_domains AppstreamStack#embed_host_domains}
    */
    readonly embedHostDomains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#feedback_url AppstreamStack#feedback_url}
    */
    readonly feedbackUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#name AppstreamStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#redirect_url AppstreamStack#redirect_url}
    */
    readonly redirectUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#tags AppstreamStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#tags_all AppstreamStack#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * access_endpoints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#access_endpoints AppstreamStack#access_endpoints}
    */
    readonly accessEndpoints?: AppstreamStackAccessEndpoints[];
    /**
    * application_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#application_settings AppstreamStack#application_settings}
    */
    readonly applicationSettings?: AppstreamStackApplicationSettings;
    /**
    * storage_connectors block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#storage_connectors AppstreamStack#storage_connectors}
    */
    readonly storageConnectors?: AppstreamStackStorageConnectors[];
    /**
    * user_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#user_settings AppstreamStack#user_settings}
    */
    readonly userSettings?: AppstreamStackUserSettings[];
  }
  export interface AppstreamStackAccessEndpoints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#endpoint_type AppstreamStack#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#vpce_id AppstreamStack#vpce_id}
    */
    readonly vpceId?: string;
  }

  function appstreamStackAccessEndpointsToTerraform(struct?: AppstreamStackAccessEndpoints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
      vpce_id: cdktf.stringToTerraform(struct!.vpceId),
    }
  }

  export interface AppstreamStackApplicationSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#enabled AppstreamStack#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#settings_group AppstreamStack#settings_group}
    */
    readonly settingsGroup?: string;
  }

  function appstreamStackApplicationSettingsToTerraform(struct?: AppstreamStackApplicationSettingsOutputReference | AppstreamStackApplicationSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      settings_group: cdktf.stringToTerraform(struct!.settingsGroup),
    }
  }

  export class AppstreamStackApplicationSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // settings_group - computed: false, optional: true, required: false
    private _settingsGroup?: string | undefined; 
    public get settingsGroup() {
      return this.getStringAttribute('settings_group');
    }
    public set settingsGroup(value: string | undefined) {
      this._settingsGroup = value;
    }
    public resetSettingsGroup() {
      this._settingsGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsGroupInput() {
      return this._settingsGroup
    }
  }
  export interface AppstreamStackStorageConnectors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#connector_type AppstreamStack#connector_type}
    */
    readonly connectorType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#domains AppstreamStack#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#resource_identifier AppstreamStack#resource_identifier}
    */
    readonly resourceIdentifier?: string;
  }

  function appstreamStackStorageConnectorsToTerraform(struct?: AppstreamStackStorageConnectors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connector_type: cdktf.stringToTerraform(struct!.connectorType),
      domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
      resource_identifier: cdktf.stringToTerraform(struct!.resourceIdentifier),
    }
  }

  export interface AppstreamStackUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#action AppstreamStack#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#permission AppstreamStack#permission}
    */
    readonly permission: string;
  }

  function appstreamStackUserSettingsToTerraform(struct?: AppstreamStackUserSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      permission: cdktf.stringToTerraform(struct!.permission),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack}
  */
  export class AppstreamStack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appstream_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamStackConfig
    */
    public constructor(scope: Construct, id: string, config: AppstreamStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appstream_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._displayName = config.displayName;
      this._embedHostDomains = config.embedHostDomains;
      this._feedbackUrl = config.feedbackUrl;
      this._name = config.name;
      this._redirectUrl = config.redirectUrl;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._accessEndpoints = config.accessEndpoints;
      this._applicationSettings = config.applicationSettings;
      this._storageConnectors = config.storageConnectors;
      this._userSettings = config.userSettings;
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
    }

    // embed_host_domains - computed: true, optional: true, required: false
    private _embedHostDomains?: string[] | undefined; 
    public get embedHostDomains() {
      return this.getListAttribute('embed_host_domains');
    }
    public set embedHostDomains(value: string[] | undefined) {
      this._embedHostDomains = value;
    }
    public resetEmbedHostDomains() {
      this._embedHostDomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get embedHostDomainsInput() {
      return this._embedHostDomains
    }

    // feedback_url - computed: true, optional: true, required: false
    private _feedbackUrl?: string | undefined; 
    public get feedbackUrl() {
      return this.getStringAttribute('feedback_url');
    }
    public set feedbackUrl(value: string | undefined) {
      this._feedbackUrl = value;
    }
    public resetFeedbackUrl() {
      this._feedbackUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get feedbackUrlInput() {
      return this._feedbackUrl
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
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

    // redirect_url - computed: true, optional: true, required: false
    private _redirectUrl?: string | undefined; 
    public get redirectUrl() {
      return this.getStringAttribute('redirect_url');
    }
    public set redirectUrl(value: string | undefined) {
      this._redirectUrl = value;
    }
    public resetRedirectUrl() {
      this._redirectUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectUrlInput() {
      return this._redirectUrl
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // access_endpoints - computed: false, optional: true, required: false
    private _accessEndpoints?: AppstreamStackAccessEndpoints[] | undefined; 
    public get accessEndpoints() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('access_endpoints') as any;
    }
    public set accessEndpoints(value: AppstreamStackAccessEndpoints[] | undefined) {
      this._accessEndpoints = value;
    }
    public resetAccessEndpoints() {
      this._accessEndpoints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessEndpointsInput() {
      return this._accessEndpoints
    }

    // application_settings - computed: false, optional: true, required: false
    private _applicationSettings?: AppstreamStackApplicationSettings | undefined; 
    private __applicationSettingsOutput = new AppstreamStackApplicationSettingsOutputReference(this as any, "application_settings", true);
    public get applicationSettings() {
      return this.__applicationSettingsOutput;
    }
    public putApplicationSettings(value: AppstreamStackApplicationSettings | undefined) {
      this._applicationSettings = value;
    }
    public resetApplicationSettings() {
      this._applicationSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSettingsInput() {
      return this._applicationSettings
    }

    // storage_connectors - computed: false, optional: true, required: false
    private _storageConnectors?: AppstreamStackStorageConnectors[] | undefined; 
    public get storageConnectors() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('storage_connectors') as any;
    }
    public set storageConnectors(value: AppstreamStackStorageConnectors[] | undefined) {
      this._storageConnectors = value;
    }
    public resetStorageConnectors() {
      this._storageConnectors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageConnectorsInput() {
      return this._storageConnectors
    }

    // user_settings - computed: false, optional: true, required: false
    private _userSettings?: AppstreamStackUserSettings[] | undefined; 
    public get userSettings() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('user_settings') as any;
    }
    public set userSettings(value: AppstreamStackUserSettings[] | undefined) {
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
        description: cdktf.stringToTerraform(this._description),
        display_name: cdktf.stringToTerraform(this._displayName),
        embed_host_domains: cdktf.listMapper(cdktf.stringToTerraform)(this._embedHostDomains),
        feedback_url: cdktf.stringToTerraform(this._feedbackUrl),
        name: cdktf.stringToTerraform(this._name),
        redirect_url: cdktf.stringToTerraform(this._redirectUrl),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        access_endpoints: cdktf.listMapper(appstreamStackAccessEndpointsToTerraform)(this._accessEndpoints),
        application_settings: appstreamStackApplicationSettingsToTerraform(this._applicationSettings),
        storage_connectors: cdktf.listMapper(appstreamStackStorageConnectorsToTerraform)(this._storageConnectors),
        user_settings: cdktf.listMapper(appstreamStackUserSettingsToTerraform)(this._userSettings),
      };
    }
  }
}
