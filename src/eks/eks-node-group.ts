// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
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
  readonly launchTemplate?: EksNodeGroupLaunchTemplate;
  /**
  * remote_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
  */
  readonly remoteAccess?: EksNodeGroupRemoteAccess;
  /**
  * scaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
  */
  readonly scalingConfig: EksNodeGroupScalingConfig;
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
  readonly updateConfig?: EksNodeGroupUpdateConfig;
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
    // Getting the computed value is not yet implemented
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

export function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class EksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksNodeGroupLaunchTemplate | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupLaunchTemplate | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this._name = value.name;
      this._version = value.version;
    }
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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

export function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
    source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceSecurityGroupIds),
  }
}

export class EksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksNodeGroupRemoteAccess | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ec2SshKey) {
      hasAnyValues = true;
      internalValueResult.ec2SshKey = this._ec2SshKey;
    }
    if (this._sourceSecurityGroupIds) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupIds = this._sourceSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupRemoteAccess | undefined) {
    if (value === undefined) {
      this._ec2SshKey = undefined;
      this._sourceSecurityGroupIds = undefined;
    }
    else {
      this._ec2SshKey = value.ec2SshKey;
      this._sourceSecurityGroupIds = value.sourceSecurityGroupIds;
    }
  }

  // ec2_ssh_key - computed: false, optional: true, required: false
  private _ec2SshKey?: string; 
  public get ec2SshKey() {
    return this.getStringAttribute('ec2_ssh_key');
  }
  public set ec2SshKey(value: string) {
    this._ec2SshKey = value;
  }
  public resetEc2SshKey() {
    this._ec2SshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SshKeyInput() {
    return this._ec2SshKey;
  }

  // source_security_group_ids - computed: false, optional: true, required: false
  private _sourceSecurityGroupIds?: string[]; 
  public get sourceSecurityGroupIds() {
    return this.getListAttribute('source_security_group_ids');
  }
  public set sourceSecurityGroupIds(value: string[]) {
    this._sourceSecurityGroupIds = value;
  }
  public resetSourceSecurityGroupIds() {
    this._sourceSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupIdsInput() {
    return this._sourceSecurityGroupIds;
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

export function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_size: cdktf.numberToTerraform(struct!.desiredSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}

export class EksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksNodeGroupScalingConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._desiredSize) {
      hasAnyValues = true;
      internalValueResult.desiredSize = this._desiredSize;
    }
    if (this._maxSize) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupScalingConfig | undefined) {
    if (value === undefined) {
      this._desiredSize = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else {
      this._desiredSize = value.desiredSize;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // desired_size - computed: false, optional: false, required: true
  private _desiredSize?: number; 
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }
  public set desiredSize(value: number) {
    this._desiredSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSizeInput() {
    return this._desiredSize;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

export function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeoutsOutputReference | EksNodeGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksNodeGroupTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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

export function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
  }
}

export class EksNodeGroupUpdateConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EksNodeGroupUpdateConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxUnavailable) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._maxUnavailablePercentage) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercentage = this._maxUnavailablePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupUpdateConfig | undefined) {
    if (value === undefined) {
      this._maxUnavailable = undefined;
      this._maxUnavailablePercentage = undefined;
    }
    else {
      this._maxUnavailable = value.maxUnavailable;
      this._maxUnavailablePercentage = value.maxUnavailablePercentage;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // max_unavailable_percentage - computed: false, optional: true, required: false
  private _maxUnavailablePercentage?: number; 
  public get maxUnavailablePercentage() {
    return this.getNumberAttribute('max_unavailable_percentage');
  }
  public set maxUnavailablePercentage(value: number) {
    this._maxUnavailablePercentage = value;
  }
  public resetMaxUnavailablePercentage() {
    this._maxUnavailablePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentageInput() {
    return this._maxUnavailablePercentage;
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
    this._launchTemplate.internalValue = config.launchTemplate;
    this._remoteAccess.internalValue = config.remoteAccess;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._taint = config.taint;
    this._timeouts.internalValue = config.timeouts;
    this._updateConfig.internalValue = config.updateConfig;
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
    return this._amiType;
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
    return this._capacityType;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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
    return this._diskSize;
  }

  // force_update_version - computed: false, optional: true, required: false
  private _forceUpdateVersion?: boolean | cdktf.IResolvable; 
  public get forceUpdateVersion() {
    return this.getBooleanAttribute('force_update_version') as any;
  }
  public set forceUpdateVersion(value: boolean | cdktf.IResolvable) {
    this._forceUpdateVersion = value;
  }
  public resetForceUpdateVersion() {
    this._forceUpdateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateVersionInput() {
    return this._forceUpdateVersion;
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
    return this._instanceTypes;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._nodeGroupName;
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
    return this._nodeGroupNamePrefix;
  }

  // node_role_arn - computed: false, optional: false, required: true
  private _nodeRoleArn?: string; 
  public get nodeRoleArn() {
    return this.getStringAttribute('node_role_arn');
  }
  public set nodeRoleArn(value: string) {
    this._nodeRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleArnInput() {
    return this._nodeRoleArn;
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
    return this._releaseVersion;
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
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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
    return this._version;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new EksNodeGroupLaunchTemplateOutputReference(this as any, "launch_template", true);
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: EksNodeGroupLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess = new EksNodeGroupRemoteAccessOutputReference(this as any, "remote_access", true);
  public get remoteAccess() {
    return this._remoteAccess;
  }
  public putRemoteAccess(value: EksNodeGroupRemoteAccess) {
    this._remoteAccess.internalValue = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess.internalValue;
  }

  // scaling_config - computed: false, optional: false, required: true
  private _scalingConfig = new EksNodeGroupScalingConfigOutputReference(this as any, "scaling_config", true);
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: EksNodeGroupScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint?: EksNodeGroupTaint[]; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taint') as any;
  }
  public set taint(value: EksNodeGroupTaint[]) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksNodeGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksNodeGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig = new EksNodeGroupUpdateConfigOutputReference(this as any, "update_config", true);
  public get updateConfig() {
    return this._updateConfig;
  }
  public putUpdateConfig(value: EksNodeGroupUpdateConfig) {
    this._updateConfig.internalValue = value;
  }
  public resetUpdateConfig() {
    this._updateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig.internalValue;
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
      launch_template: eksNodeGroupLaunchTemplateToTerraform(this._launchTemplate.internalValue),
      remote_access: eksNodeGroupRemoteAccessToTerraform(this._remoteAccess.internalValue),
      scaling_config: eksNodeGroupScalingConfigToTerraform(this._scalingConfig.internalValue),
      taint: cdktf.listMapper(eksNodeGroupTaintToTerraform)(this._taint),
      timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
      update_config: eksNodeGroupUpdateConfigToTerraform(this._updateConfig.internalValue),
    };
  }
}
