/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DrsReplicationConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}
  */
  readonly associateDefaultSecurityGroup: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}
  */
  readonly autoReplicateNewDisks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}
  */
  readonly bandwidthThrottling: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}
  */
  readonly createPublicIp: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}
  */
  readonly dataPlaneRouting: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}
  */
  readonly defaultLargeStagingDiskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}
  */
  readonly ebsEncryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}
  */
  readonly ebsEncryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}
  */
  readonly replicationServerInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_ids DrsReplicationConfigurationTemplate#replication_servers_security_groups_ids}
  */
  readonly replicationServersSecurityGroupsIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}
  */
  readonly stagingAreaSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}
  */
  readonly stagingAreaTags: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}
  */
  readonly useDedicatedReplicationServer: boolean | cdktf.IResolvable;
  /**
  * pit_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}
  */
  readonly pitPolicy?: DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#timeouts DrsReplicationConfigurationTemplate#timeouts}
  */
  readonly timeouts?: DrsReplicationConfigurationTemplateTimeouts;
}
export interface DrsReplicationConfigurationTemplatePitPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}
  */
  readonly retentionDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}
  */
  readonly ruleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}
  */
  readonly units: string;
}

export function drsReplicationConfigurationTemplatePitPolicyToTerraform(struct?: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.numberToTerraform(struct!.interval),
    retention_duration: cdktf.numberToTerraform(struct!.retentionDuration),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function drsReplicationConfigurationTemplatePitPolicyToHclTerraform(struct?: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable): any {
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
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_duration: {
      value: cdktf.numberToHclTerraform(struct!.retentionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DrsReplicationConfigurationTemplatePitPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retentionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DrsReplicationConfigurationTemplatePitPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._interval = undefined;
      this._retentionDuration = undefined;
      this._ruleId = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._interval = value.interval;
      this._retentionDuration = value.retentionDuration;
      this._ruleId = value.ruleId;
      this._units = value.units;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retention_duration - computed: false, optional: false, required: true
  private _retentionDuration?: number; 
  public get retentionDuration() {
    return this.getNumberAttribute('retention_duration');
  }
  public set retentionDuration(value: number) {
    this._retentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // units - computed: false, optional: false, required: true
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}

export class DrsReplicationConfigurationTemplatePitPolicyList extends cdktf.ComplexList {
  public internalValue? : DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable

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
  public get(index: number): DrsReplicationConfigurationTemplatePitPolicyOutputReference {
    return new DrsReplicationConfigurationTemplatePitPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DrsReplicationConfigurationTemplateTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#create DrsReplicationConfigurationTemplate#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#delete DrsReplicationConfigurationTemplate#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#update DrsReplicationConfigurationTemplate#update}
  */
  readonly update?: string;
}

export function drsReplicationConfigurationTemplateTimeoutsToTerraform(struct?: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable): any {
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


export function drsReplicationConfigurationTemplateTimeoutsToHclTerraform(struct?: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable): any {
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

export class DrsReplicationConfigurationTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DrsReplicationConfigurationTemplateTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template aws_drs_replication_configuration_template}
*/
export class DrsReplicationConfigurationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_drs_replication_configuration_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import
  * @param importFromId The id of the existing DrsReplicationConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_drs_replication_configuration_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/drs_replication_configuration_template aws_drs_replication_configuration_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DrsReplicationConfigurationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DrsReplicationConfigurationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_drs_replication_configuration_template',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.79.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associateDefaultSecurityGroup = config.associateDefaultSecurityGroup;
    this._autoReplicateNewDisks = config.autoReplicateNewDisks;
    this._bandwidthThrottling = config.bandwidthThrottling;
    this._createPublicIp = config.createPublicIp;
    this._dataPlaneRouting = config.dataPlaneRouting;
    this._defaultLargeStagingDiskType = config.defaultLargeStagingDiskType;
    this._ebsEncryption = config.ebsEncryption;
    this._ebsEncryptionKeyArn = config.ebsEncryptionKeyArn;
    this._replicationServerInstanceType = config.replicationServerInstanceType;
    this._replicationServersSecurityGroupsIds = config.replicationServersSecurityGroupsIds;
    this._stagingAreaSubnetId = config.stagingAreaSubnetId;
    this._stagingAreaTags = config.stagingAreaTags;
    this._tags = config.tags;
    this._useDedicatedReplicationServer = config.useDedicatedReplicationServer;
    this._pitPolicy.internalValue = config.pitPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_default_security_group - computed: false, optional: false, required: true
  private _associateDefaultSecurityGroup?: boolean | cdktf.IResolvable; 
  public get associateDefaultSecurityGroup() {
    return this.getBooleanAttribute('associate_default_security_group');
  }
  public set associateDefaultSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._associateDefaultSecurityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associateDefaultSecurityGroupInput() {
    return this._associateDefaultSecurityGroup;
  }

  // auto_replicate_new_disks - computed: true, optional: true, required: false
  private _autoReplicateNewDisks?: boolean | cdktf.IResolvable; 
  public get autoReplicateNewDisks() {
    return this.getBooleanAttribute('auto_replicate_new_disks');
  }
  public set autoReplicateNewDisks(value: boolean | cdktf.IResolvable) {
    this._autoReplicateNewDisks = value;
  }
  public resetAutoReplicateNewDisks() {
    this._autoReplicateNewDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReplicateNewDisksInput() {
    return this._autoReplicateNewDisks;
  }

  // bandwidth_throttling - computed: false, optional: false, required: true
  private _bandwidthThrottling?: number; 
  public get bandwidthThrottling() {
    return this.getNumberAttribute('bandwidth_throttling');
  }
  public set bandwidthThrottling(value: number) {
    this._bandwidthThrottling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthThrottlingInput() {
    return this._bandwidthThrottling;
  }

  // create_public_ip - computed: false, optional: false, required: true
  private _createPublicIp?: boolean | cdktf.IResolvable; 
  public get createPublicIp() {
    return this.getBooleanAttribute('create_public_ip');
  }
  public set createPublicIp(value: boolean | cdktf.IResolvable) {
    this._createPublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createPublicIpInput() {
    return this._createPublicIp;
  }

  // data_plane_routing - computed: false, optional: false, required: true
  private _dataPlaneRouting?: string; 
  public get dataPlaneRouting() {
    return this.getStringAttribute('data_plane_routing');
  }
  public set dataPlaneRouting(value: string) {
    this._dataPlaneRouting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneRoutingInput() {
    return this._dataPlaneRouting;
  }

  // default_large_staging_disk_type - computed: false, optional: false, required: true
  private _defaultLargeStagingDiskType?: string; 
  public get defaultLargeStagingDiskType() {
    return this.getStringAttribute('default_large_staging_disk_type');
  }
  public set defaultLargeStagingDiskType(value: string) {
    this._defaultLargeStagingDiskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLargeStagingDiskTypeInput() {
    return this._defaultLargeStagingDiskType;
  }

  // ebs_encryption - computed: false, optional: false, required: true
  private _ebsEncryption?: string; 
  public get ebsEncryption() {
    return this.getStringAttribute('ebs_encryption');
  }
  public set ebsEncryption(value: string) {
    this._ebsEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionInput() {
    return this._ebsEncryption;
  }

  // ebs_encryption_key_arn - computed: false, optional: true, required: false
  private _ebsEncryptionKeyArn?: string; 
  public get ebsEncryptionKeyArn() {
    return this.getStringAttribute('ebs_encryption_key_arn');
  }
  public set ebsEncryptionKeyArn(value: string) {
    this._ebsEncryptionKeyArn = value;
  }
  public resetEbsEncryptionKeyArn() {
    this._ebsEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyArnInput() {
    return this._ebsEncryptionKeyArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // replication_server_instance_type - computed: false, optional: false, required: true
  private _replicationServerInstanceType?: string; 
  public get replicationServerInstanceType() {
    return this.getStringAttribute('replication_server_instance_type');
  }
  public set replicationServerInstanceType(value: string) {
    this._replicationServerInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationServerInstanceTypeInput() {
    return this._replicationServerInstanceType;
  }

  // replication_servers_security_groups_ids - computed: false, optional: false, required: true
  private _replicationServersSecurityGroupsIds?: string[]; 
  public get replicationServersSecurityGroupsIds() {
    return this.getListAttribute('replication_servers_security_groups_ids');
  }
  public set replicationServersSecurityGroupsIds(value: string[]) {
    this._replicationServersSecurityGroupsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationServersSecurityGroupsIdsInput() {
    return this._replicationServersSecurityGroupsIds;
  }

  // staging_area_subnet_id - computed: false, optional: false, required: true
  private _stagingAreaSubnetId?: string; 
  public get stagingAreaSubnetId() {
    return this.getStringAttribute('staging_area_subnet_id');
  }
  public set stagingAreaSubnetId(value: string) {
    this._stagingAreaSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingAreaSubnetIdInput() {
    return this._stagingAreaSubnetId;
  }

  // staging_area_tags - computed: false, optional: false, required: true
  private _stagingAreaTags?: { [key: string]: string }; 
  public get stagingAreaTags() {
    return this.getStringMapAttribute('staging_area_tags');
  }
  public set stagingAreaTags(value: { [key: string]: string }) {
    this._stagingAreaTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingAreaTagsInput() {
    return this._stagingAreaTags;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // use_dedicated_replication_server - computed: false, optional: false, required: true
  private _useDedicatedReplicationServer?: boolean | cdktf.IResolvable; 
  public get useDedicatedReplicationServer() {
    return this.getBooleanAttribute('use_dedicated_replication_server');
  }
  public set useDedicatedReplicationServer(value: boolean | cdktf.IResolvable) {
    this._useDedicatedReplicationServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDedicatedReplicationServerInput() {
    return this._useDedicatedReplicationServer;
  }

  // pit_policy - computed: false, optional: true, required: false
  private _pitPolicy = new DrsReplicationConfigurationTemplatePitPolicyList(this, "pit_policy", false);
  public get pitPolicy() {
    return this._pitPolicy;
  }
  public putPitPolicy(value: DrsReplicationConfigurationTemplatePitPolicy[] | cdktf.IResolvable) {
    this._pitPolicy.internalValue = value;
  }
  public resetPitPolicy() {
    this._pitPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pitPolicyInput() {
    return this._pitPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DrsReplicationConfigurationTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DrsReplicationConfigurationTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_default_security_group: cdktf.booleanToTerraform(this._associateDefaultSecurityGroup),
      auto_replicate_new_disks: cdktf.booleanToTerraform(this._autoReplicateNewDisks),
      bandwidth_throttling: cdktf.numberToTerraform(this._bandwidthThrottling),
      create_public_ip: cdktf.booleanToTerraform(this._createPublicIp),
      data_plane_routing: cdktf.stringToTerraform(this._dataPlaneRouting),
      default_large_staging_disk_type: cdktf.stringToTerraform(this._defaultLargeStagingDiskType),
      ebs_encryption: cdktf.stringToTerraform(this._ebsEncryption),
      ebs_encryption_key_arn: cdktf.stringToTerraform(this._ebsEncryptionKeyArn),
      replication_server_instance_type: cdktf.stringToTerraform(this._replicationServerInstanceType),
      replication_servers_security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicationServersSecurityGroupsIds),
      staging_area_subnet_id: cdktf.stringToTerraform(this._stagingAreaSubnetId),
      staging_area_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._stagingAreaTags),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_dedicated_replication_server: cdktf.booleanToTerraform(this._useDedicatedReplicationServer),
      pit_policy: cdktf.listMapper(drsReplicationConfigurationTemplatePitPolicyToTerraform, true)(this._pitPolicy.internalValue),
      timeouts: drsReplicationConfigurationTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associate_default_security_group: {
        value: cdktf.booleanToHclTerraform(this._associateDefaultSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_replicate_new_disks: {
        value: cdktf.booleanToHclTerraform(this._autoReplicateNewDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_throttling: {
        value: cdktf.numberToHclTerraform(this._bandwidthThrottling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_public_ip: {
        value: cdktf.booleanToHclTerraform(this._createPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_plane_routing: {
        value: cdktf.stringToHclTerraform(this._dataPlaneRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_large_staging_disk_type: {
        value: cdktf.stringToHclTerraform(this._defaultLargeStagingDiskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_encryption: {
        value: cdktf.stringToHclTerraform(this._ebsEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_encryption_key_arn: {
        value: cdktf.stringToHclTerraform(this._ebsEncryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_server_instance_type: {
        value: cdktf.stringToHclTerraform(this._replicationServerInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_servers_security_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicationServersSecurityGroupsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      staging_area_subnet_id: {
        value: cdktf.stringToHclTerraform(this._stagingAreaSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_area_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._stagingAreaTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_dedicated_replication_server: {
        value: cdktf.booleanToHclTerraform(this._useDedicatedReplicationServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pit_policy: {
        value: cdktf.listMapperHcl(drsReplicationConfigurationTemplatePitPolicyToHclTerraform, true)(this._pitPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DrsReplicationConfigurationTemplatePitPolicyList",
      },
      timeouts: {
        value: drsReplicationConfigurationTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DrsReplicationConfigurationTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
