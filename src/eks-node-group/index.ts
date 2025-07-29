/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#ami_type EksNodeGroup#ami_type}
  */
  readonly amiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#capacity_type EksNodeGroup#capacity_type}
  */
  readonly capacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#cluster_name EksNodeGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#disk_size EksNodeGroup#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#force_update_version EksNodeGroup#force_update_version}
  */
  readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#id EksNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#instance_types EksNodeGroup#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#labels EksNodeGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#node_group_name EksNodeGroup#node_group_name}
  */
  readonly nodeGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
  */
  readonly nodeGroupNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}
  */
  readonly nodeRoleArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#region EksNodeGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#release_version EksNodeGroup#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#tags EksNodeGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#tags_all EksNodeGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#version EksNodeGroup#version}
  */
  readonly version?: string;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#launch_template EksNodeGroup#launch_template}
  */
  readonly launchTemplate?: EksNodeGroupLaunchTemplate;
  /**
  * node_repair_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#node_repair_config EksNodeGroup#node_repair_config}
  */
  readonly nodeRepairConfig?: EksNodeGroupNodeRepairConfig;
  /**
  * remote_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#remote_access EksNodeGroup#remote_access}
  */
  readonly remoteAccess?: EksNodeGroupRemoteAccess;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#scaling_config EksNodeGroup#scaling_config}
  */
  readonly scalingConfig: EksNodeGroupScalingConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#taint EksNodeGroup#taint}
  */
  readonly taint?: EksNodeGroupTaint[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#timeouts EksNodeGroup#timeouts}
  */
  readonly timeouts?: EksNodeGroupTimeouts;
  /**
  * update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#update_config EksNodeGroup#update_config}
  */
  readonly updateConfig?: EksNodeGroupUpdateConfig;
}
export interface EksNodeGroupResourcesAutoscalingGroups {
}

export function eksNodeGroupResourcesAutoscalingGroupsToTerraform(struct?: EksNodeGroupResourcesAutoscalingGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eksNodeGroupResourcesAutoscalingGroupsToHclTerraform(struct?: EksNodeGroupResourcesAutoscalingGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EksNodeGroupResourcesAutoscalingGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksNodeGroupResourcesAutoscalingGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupResourcesAutoscalingGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class EksNodeGroupResourcesAutoscalingGroupsList extends cdktf.ComplexList {

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
  public get(index: number): EksNodeGroupResourcesAutoscalingGroupsOutputReference {
    return new EksNodeGroupResourcesAutoscalingGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksNodeGroupResources {
}

export function eksNodeGroupResourcesToTerraform(struct?: EksNodeGroupResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eksNodeGroupResourcesToHclTerraform(struct?: EksNodeGroupResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EksNodeGroupResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EksNodeGroupResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_groups - computed: true, optional: false, required: false
  private _autoscalingGroups = new EksNodeGroupResourcesAutoscalingGroupsList(this, "autoscaling_groups", false);
  public get autoscalingGroups() {
    return this._autoscalingGroups;
  }

  // remote_access_security_group_id - computed: true, optional: false, required: false
  public get remoteAccessSecurityGroupId() {
    return this.getStringAttribute('remote_access_security_group_id');
  }
}

export class EksNodeGroupResourcesList extends cdktf.ComplexList {

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
  public get(index: number): EksNodeGroupResourcesOutputReference {
    return new EksNodeGroupResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksNodeGroupLaunchTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#id EksNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#name EksNodeGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#version EksNodeGroup#version}
  */
  readonly version: string;
}

export function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function eksNodeGroupLaunchTemplateToHclTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksNodeGroupLaunchTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._version = value.version;
    }
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
export interface EksNodeGroupNodeRepairConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#enabled EksNodeGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function eksNodeGroupNodeRepairConfigToTerraform(struct?: EksNodeGroupNodeRepairConfigOutputReference | EksNodeGroupNodeRepairConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function eksNodeGroupNodeRepairConfigToHclTerraform(struct?: EksNodeGroupNodeRepairConfigOutputReference | EksNodeGroupNodeRepairConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupNodeRepairConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksNodeGroupNodeRepairConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupNodeRepairConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EksNodeGroupRemoteAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
  */
  readonly ec2SshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}
  */
  readonly sourceSecurityGroupIds?: string[];
}

export function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
    source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceSecurityGroupIds),
  }
}


export function eksNodeGroupRemoteAccessToHclTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ec2_ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.ec2SshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksNodeGroupRemoteAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2SshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2SshKey = this._ec2SshKey;
    }
    if (this._sourceSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupIds = this._sourceSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupRemoteAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ec2SshKey = undefined;
      this._sourceSecurityGroupIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return cdktf.Fn.tolist(this.getListAttribute('source_security_group_ids'));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#desired_size EksNodeGroup#desired_size}
  */
  readonly desiredSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#max_size EksNodeGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#min_size EksNodeGroup#min_size}
  */
  readonly minSize: number;
}

export function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_size: cdktf.numberToTerraform(struct!.desiredSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function eksNodeGroupScalingConfigToHclTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_size: {
      value: cdktf.numberToHclTerraform(struct!.desiredSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksNodeGroupScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredSize = this._desiredSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredSize = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#effect EksNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#key EksNodeGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#value EksNodeGroup#value}
  */
  readonly value?: string;
}

export function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eksNodeGroupTaintToHclTerraform(struct?: EksNodeGroupTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksNodeGroupTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EksNodeGroupTaintList extends cdktf.ComplexList {
  public internalValue? : EksNodeGroupTaint[] | cdktf.IResolvable

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
  public get(index: number): EksNodeGroupTaintOutputReference {
    return new EksNodeGroupTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksNodeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#create EksNodeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#delete EksNodeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#update EksNodeGroup#update}
  */
  readonly update?: string;
}

export function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function eksNodeGroupTimeoutsToHclTerraform(struct?: EksNodeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksNodeGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
  */
  readonly maxUnavailablePercentage?: number;
}

export function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
  }
}


export function eksNodeGroupUpdateConfigToHclTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailablePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksNodeGroupUpdateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksNodeGroupUpdateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._maxUnavailablePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercentage = this._maxUnavailablePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksNodeGroupUpdateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnavailable = undefined;
      this._maxUnavailablePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group aws_eks_node_group}
*/
export class EksNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksNodeGroup to import
  * @param importFromId The id of the existing EksNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/eks_node_group aws_eks_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EksNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_node_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amiType = config.amiType;
    this._capacityType = config.capacityType;
    this._clusterName = config.clusterName;
    this._diskSize = config.diskSize;
    this._forceUpdateVersion = config.forceUpdateVersion;
    this._id = config.id;
    this._instanceTypes = config.instanceTypes;
    this._labels = config.labels;
    this._nodeGroupName = config.nodeGroupName;
    this._nodeGroupNamePrefix = config.nodeGroupNamePrefix;
    this._nodeRoleArn = config.nodeRoleArn;
    this._region = config.region;
    this._releaseVersion = config.releaseVersion;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._launchTemplate.internalValue = config.launchTemplate;
    this._nodeRepairConfig.internalValue = config.nodeRepairConfig;
    this._remoteAccess.internalValue = config.remoteAccess;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._taint.internalValue = config.taint;
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
    return this.getBooleanAttribute('force_update_version');
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
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _resources = new EksNodeGroupResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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
  private _launchTemplate = new EksNodeGroupLaunchTemplateOutputReference(this, "launch_template");
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

  // node_repair_config - computed: false, optional: true, required: false
  private _nodeRepairConfig = new EksNodeGroupNodeRepairConfigOutputReference(this, "node_repair_config");
  public get nodeRepairConfig() {
    return this._nodeRepairConfig;
  }
  public putNodeRepairConfig(value: EksNodeGroupNodeRepairConfig) {
    this._nodeRepairConfig.internalValue = value;
  }
  public resetNodeRepairConfig() {
    this._nodeRepairConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRepairConfigInput() {
    return this._nodeRepairConfig.internalValue;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess = new EksNodeGroupRemoteAccessOutputReference(this, "remote_access");
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
  private _scalingConfig = new EksNodeGroupScalingConfigOutputReference(this, "scaling_config");
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
  private _taint = new EksNodeGroupTaintList(this, "taint", true);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: EksNodeGroupTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksNodeGroupTimeoutsOutputReference(this, "timeouts");
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
  private _updateConfig = new EksNodeGroupUpdateConfigOutputReference(this, "update_config");
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
      id: cdktf.stringToTerraform(this._id),
      instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceTypes),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
      node_group_name_prefix: cdktf.stringToTerraform(this._nodeGroupNamePrefix),
      node_role_arn: cdktf.stringToTerraform(this._nodeRoleArn),
      region: cdktf.stringToTerraform(this._region),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      launch_template: eksNodeGroupLaunchTemplateToTerraform(this._launchTemplate.internalValue),
      node_repair_config: eksNodeGroupNodeRepairConfigToTerraform(this._nodeRepairConfig.internalValue),
      remote_access: eksNodeGroupRemoteAccessToTerraform(this._remoteAccess.internalValue),
      scaling_config: eksNodeGroupScalingConfigToTerraform(this._scalingConfig.internalValue),
      taint: cdktf.listMapper(eksNodeGroupTaintToTerraform, true)(this._taint.internalValue),
      timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts.internalValue),
      update_config: eksNodeGroupUpdateConfigToTerraform(this._updateConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ami_type: {
        value: cdktf.stringToHclTerraform(this._amiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_type: {
        value: cdktf.stringToHclTerraform(this._capacityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_update_version: {
        value: cdktf.booleanToHclTerraform(this._forceUpdateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      node_group_name: {
        value: cdktf.stringToHclTerraform(this._nodeGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_group_name_prefix: {
        value: cdktf.stringToHclTerraform(this._nodeGroupNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_role_arn: {
        value: cdktf.stringToHclTerraform(this._nodeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_version: {
        value: cdktf.stringToHclTerraform(this._releaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template: {
        value: eksNodeGroupLaunchTemplateToHclTerraform(this._launchTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksNodeGroupLaunchTemplateList",
      },
      node_repair_config: {
        value: eksNodeGroupNodeRepairConfigToHclTerraform(this._nodeRepairConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksNodeGroupNodeRepairConfigList",
      },
      remote_access: {
        value: eksNodeGroupRemoteAccessToHclTerraform(this._remoteAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksNodeGroupRemoteAccessList",
      },
      scaling_config: {
        value: eksNodeGroupScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksNodeGroupScalingConfigList",
      },
      taint: {
        value: cdktf.listMapperHcl(eksNodeGroupTaintToHclTerraform, true)(this._taint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EksNodeGroupTaintList",
      },
      timeouts: {
        value: eksNodeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksNodeGroupTimeouts",
      },
      update_config: {
        value: eksNodeGroupUpdateConfigToHclTerraform(this._updateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksNodeGroupUpdateConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
