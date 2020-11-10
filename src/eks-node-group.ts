// https://www.terraform.io/docs/providers/aws/r/eks_node_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface EksNodeGroupConfig extends TerraformMetaArguments {
  readonly amiType?: string;
  readonly clusterName: string;
  readonly diskSize?: number;
  readonly forceUpdateVersion?: boolean;
  readonly instanceTypes?: string[];
  readonly labels?: { [key: string]: string };
  readonly nodeGroupName: string;
  readonly nodeRoleArn: string;
  readonly releaseVersion?: string;
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
  readonly version?: string;
  /** remote_access block */
  readonly remoteAccess?: EksNodeGroupRemoteAccess[];
  /** scaling_config block */
  readonly scalingConfig: EksNodeGroupScalingConfig[];
  /** timeouts block */
  readonly timeouts?: EksNodeGroupTimeouts;
}
export class EksNodeGroupResourcesAutoscalingGroups extends ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class EksNodeGroupResources extends ComplexComputedList {

  // autoscaling_groups - computed: true, optional: false, required: false
  public get autoscalingGroups() {
    return this.interpolationForAttribute('autoscaling_groups') as any;
  }

  // remote_access_security_group_id - computed: true, optional: false, required: false
  public get remoteAccessSecurityGroupId() {
    return this.getStringAttribute('remote_access_security_group_id');
  }
}
export interface EksNodeGroupRemoteAccess {
  readonly ec2SshKey?: string;
  readonly sourceSecurityGroupIds?: string[];
}
export interface EksNodeGroupScalingConfig {
  readonly desiredSize: number;
  readonly maxSize: number;
  readonly minSize: number;
}
export interface EksNodeGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class EksNodeGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._clusterName = config.clusterName;
    this._diskSize = config.diskSize;
    this._forceUpdateVersion = config.forceUpdateVersion;
    this._instanceTypes = config.instanceTypes;
    this._labels = config.labels;
    this._nodeGroupName = config.nodeGroupName;
    this._nodeRoleArn = config.nodeRoleArn;
    this._releaseVersion = config.releaseVersion;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._version = config.version;
    this._remoteAccess = config.remoteAccess;
    this._scalingConfig = config.scalingConfig;
    this._timeouts = config.timeouts;
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
  private _forceUpdateVersion?: boolean;
  public get forceUpdateVersion() {
    return this.getBooleanAttribute('force_update_version');
  }
  public set forceUpdateVersion(value: boolean ) {
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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // node_group_name - computed: false, optional: false, required: true
  private _nodeGroupName: string;
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ami_type: this._amiType,
      cluster_name: this._clusterName,
      disk_size: this._diskSize,
      force_update_version: this._forceUpdateVersion,
      instance_types: this._instanceTypes,
      labels: this._labels,
      node_group_name: this._nodeGroupName,
      node_role_arn: this._nodeRoleArn,
      release_version: this._releaseVersion,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      version: this._version,
      remote_access: this._remoteAccess,
      scaling_config: this._scalingConfig,
      timeouts: this._timeouts,
    };
  }
}
