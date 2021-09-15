// https://www.terraform.io/docs/providers/aws/r/eks_node_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ami_type EksNodeGroup#ami_type}
  */
  readonly amiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#capacity_type EksNodeGroup#capacity_type}
  */
  readonly capacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#cluster_name EksNodeGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#disk_size EksNodeGroup#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#force_update_version EksNodeGroup#force_update_version}
  */
  readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#instance_types EksNodeGroup#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#labels EksNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name EksNodeGroup#node_group_name}
  */
  readonly nodeGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
  */
  readonly nodeGroupNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_role_arn EksNodeGroup#node_role_arn}
  */
  readonly nodeRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#release_version EksNodeGroup#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#subnet_ids EksNodeGroup#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags EksNodeGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags_all EksNodeGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
  */
  readonly version?: string;
  /**
  * launch_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#launch_template EksNodeGroup#launch_template}
  */
  readonly launchTemplate?: EksNodeGroupLaunchTemplate[];
  /**
  * remote_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
  */
  readonly remoteAccess?: EksNodeGroupRemoteAccess[];
  /**
  * scaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
  */
  readonly scalingConfig: EksNodeGroupScalingConfig[];
  /**
  * taint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#taint EksNodeGroup#taint}
  */
  readonly taint?: EksNodeGroupTaint[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#timeouts EksNodeGroup#timeouts}
  */
  readonly timeouts?: EksNodeGroupTimeouts;
  /**
  * update_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update_config EksNodeGroup#update_config}
  */
  readonly updateConfig?: EksNodeGroupUpdateConfig[];
}
export class EksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class EksNodeGroupResources extends cdktf.ComplexComputedList {

  // autoscaling_groups - computed: true, optional: false, required: false
  public get autoscalingGroups() {
    return this.interpolationForAttribute('autoscaling_groups') as any;
  }

  // remote_access_security_group_id - computed: true, optional: false, required: false
  public get remoteAccessSecurityGroupId() {
    return this.getStringAttribute('remote_access_security_group_id');
  }
}
export interface EksNodeGroupLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#id EksNodeGroup#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#name EksNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
  */
  readonly version: string;
}

function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface EksNodeGroupRemoteAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
  */
  readonly ec2SshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#source_security_group_ids EksNodeGroup#source_security_group_ids}
  */
  readonly sourceSecurityGroupIds?: string[];
}

function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
    source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceSecurityGroupIds),
  }
}

export interface EksNodeGroupScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#desired_size EksNodeGroup#desired_size}
  */
  readonly desiredSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_size EksNodeGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#min_size EksNodeGroup#min_size}
  */
  readonly minSize: number;
}

function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    desired_size: cdktf.numberToTerraform(struct!.desiredSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}

export interface EksNodeGroupTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#effect EksNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#key EksNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#value EksNodeGroup#value}
  */
  readonly value?: string;
}

function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EksNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#create EksNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#delete EksNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update EksNodeGroup#update}
  */
  readonly update?: string;
}

function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface EksNodeGroupUpdateConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable EksNodeGroup#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
  */
  readonly maxUnavailablePercentage?: number;
}

function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}
*/
export class EksNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EksNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_node_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amiType = config.amiType;
    this._capacityType = config.capacityType;
    this._clusterName = config.clusterName;
    this._diskSize = config.diskSize;
    this._forceUpdateVersion = config.forceUpdateVersion;
    this._instanceTypes = config.instanceTypes;
    this._labels = config.labels;
    this._nodeGroupName = config.nodeGroupName;
    this._nodeGroupNamePrefix = config.nodeGroupNamePrefix;
    this._nodeRoleArn = config.nodeRoleArn;
    this._releaseVersion = config.releaseVersion;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._launchTemplate = config.launchTemplate;
    this._remoteAccess = config.remoteAccess;
    this._scalingConfig = config.scalingConfig;
    this._taint = config.taint;
    this._timeouts = config.timeouts;
    this._updateConfig = config.updateConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ami_type - computed: true, optional: true, required: false
  private _amiType?: string;
  public get amiType() {
    return this.getStringAttribute('ami_type');
  }
  public set amiType(value: string) {
    this._amiType = value;
  }
  public resetAmiType() {
    this._amiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTypeInput() {
    return this._amiType
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_type - computed: true, optional: true, required: false
  private _capacityType?: string;
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }
  public set capacityType(value: string) {
    this._capacityType = value;
  }
  public resetCapacityType() {
    this._capacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTypeInput() {
    return this._capacityType
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number;
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize
  }

  // force_update_version - computed: false, optional: true, required: false
  private _forceUpdateVersion?: boolean | cdktf.IResolvable;
  public get forceUpdateVersion() {
    return this.getBooleanAttribute('force_update_version');
  }
  public set forceUpdateVersion(value: boolean | cdktf.IResolvable ) {
    this._forceUpdateVersion = value;
  }
  public resetForceUpdateVersion() {
    this._forceUpdateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateVersionInput() {
    return this._forceUpdateVersion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_types - computed: true, optional: true, required: false
  private _instanceTypes?: string[];
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // node_group_name - computed: true, optional: true, required: false
  private _nodeGroupName?: string;
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  public resetNodeGroupName() {
    this._nodeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName
  }

  // node_group_name_prefix - computed: true, optional: true, required: false
  private _nodeGroupNamePrefix?: string;
  public get nodeGroupNamePrefix() {
    return this.getStringAttribute('node_group_name_prefix');
  }
  public set nodeGroupNamePrefix(value: string) {
    this._nodeGroupNamePrefix = value;
  }
  public resetNodeGroupNamePrefix() {
    this._nodeGroupNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNamePrefixInput() {
    return this._nodeGroupNamePrefix
  }

  // node_role_arn - computed: false, optional: false, required: true
  private _nodeRoleArn: string;
  public get nodeRoleArn() {
    return this.getStringAttribute('node_role_arn');
  }
  public set nodeRoleArn(value: string) {
    this._nodeRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleArnInput() {
    return this._nodeRoleArn
  }

  // release_version - computed: true, optional: true, required: false
  private _releaseVersion?: string;
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion
  }

  // resources - computed: true, optional: false, required: false
  public resources(index: string) {
    return new EksNodeGroupResources(this, 'resources', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate?: EksNodeGroupLaunchTemplate[];
  public get launchTemplate() {
    return this.interpolationForAttribute('launch_template') as any;
  }
  public set launchTemplate(value: EksNodeGroupLaunchTemplate[] ) {
    this._launchTemplate = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess?: EksNodeGroupRemoteAccess[];
  public get remoteAccess() {
    return this.interpolationForAttribute('remote_access') as any;
  }
  public set remoteAccess(value: EksNodeGroupRemoteAccess[] ) {
    this._remoteAccess = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess
  }

  // scaling_config - computed: false, optional: false, required: true
  private _scalingConfig: EksNodeGroupScalingConfig[];
  public get scalingConfig() {
    return this.interpolationForAttribute('scaling_config') as any;
  }
  public set scalingConfig(value: EksNodeGroupScalingConfig[]) {
    this._scalingConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig
  }

  // taint - computed: false, optional: true, required: false
  private _taint?: EksNodeGroupTaint[];
  public get taint() {
    return this.interpolationForAttribute('taint') as any;
  }
  public set taint(value: EksNodeGroupTaint[] ) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksNodeGroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EksNodeGroupTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig?: EksNodeGroupUpdateConfig[];
  public get updateConfig() {
    return this.interpolationForAttribute('update_config') as any;
  }
  public set updateConfig(value: EksNodeGroupUpdateConfig[] ) {
    this._updateConfig = value;
  }
  public resetUpdateConfig() {
    this._updateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ami_type: cdktf.stringToTerraform(this._amiType),
      capacity_type: cdktf.stringToTerraform(this._capacityType),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      force_update_version: cdktf.booleanToTerraform(this._forceUpdateVersion),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
      node_group_name_prefix: cdktf.stringToTerraform(this._nodeGroupNamePrefix),
      node_role_arn: cdktf.stringToTerraform(this._nodeRoleArn),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      launch_template: cdktf.listMapper(eksNodeGroupLaunchTemplateToTerraform)(this._launchTemplate),
      remote_access: cdktf.listMapper(eksNodeGroupRemoteAccessToTerraform)(this._remoteAccess),
      scaling_config: cdktf.listMapper(eksNodeGroupScalingConfigToTerraform)(this._scalingConfig),
      taint: cdktf.listMapper(eksNodeGroupTaintToTerraform)(this._taint),
      timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts),
      update_config: cdktf.listMapper(eksNodeGroupUpdateConfigToTerraform)(this._updateConfig),
    };
  }
}
