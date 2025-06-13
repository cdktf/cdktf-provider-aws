/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxOntapVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}
  */
  readonly bypassSnaplockEnterpriseRetention?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#final_backup_tags FsxOntapVolume#final_backup_tags}
  */
  readonly finalBackupTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}
  */
  readonly junctionPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}
  */
  readonly ontapVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#size_in_bytes FsxOntapVolume#size_in_bytes}
  */
  readonly sizeInBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}
  */
  readonly sizeInMegabytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}
  */
  readonly skipFinalBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}
  */
  readonly snapshotPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}
  */
  readonly storageEfficiencyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}
  */
  readonly storageVirtualMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#volume_style FsxOntapVolume#volume_style}
  */
  readonly volumeStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}
  */
  readonly volumeType?: string;
  /**
  * aggregate_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#aggregate_configuration FsxOntapVolume#aggregate_configuration}
  */
  readonly aggregateConfiguration?: FsxOntapVolumeAggregateConfiguration;
  /**
  * snaplock_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#snaplock_configuration FsxOntapVolume#snaplock_configuration}
  */
  readonly snaplockConfiguration?: FsxOntapVolumeSnaplockConfiguration;
  /**
  * tiering_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}
  */
  readonly tieringPolicy?: FsxOntapVolumeTieringPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}
  */
  readonly timeouts?: FsxOntapVolumeTimeouts;
}
export interface FsxOntapVolumeAggregateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#aggregates FsxOntapVolume#aggregates}
  */
  readonly aggregates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#constituents_per_aggregate FsxOntapVolume#constituents_per_aggregate}
  */
  readonly constituentsPerAggregate?: number;
}

export function fsxOntapVolumeAggregateConfigurationToTerraform(struct?: FsxOntapVolumeAggregateConfigurationOutputReference | FsxOntapVolumeAggregateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregates),
    constituents_per_aggregate: cdktf.numberToTerraform(struct!.constituentsPerAggregate),
  }
}


export function fsxOntapVolumeAggregateConfigurationToHclTerraform(struct?: FsxOntapVolumeAggregateConfigurationOutputReference | FsxOntapVolumeAggregateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    constituents_per_aggregate: {
      value: cdktf.numberToHclTerraform(struct!.constituentsPerAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeAggregateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeAggregateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregates !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregates = this._aggregates;
    }
    if (this._constituentsPerAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.constituentsPerAggregate = this._constituentsPerAggregate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeAggregateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregates = undefined;
      this._constituentsPerAggregate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregates = value.aggregates;
      this._constituentsPerAggregate = value.constituentsPerAggregate;
    }
  }

  // aggregates - computed: true, optional: true, required: false
  private _aggregates?: string[]; 
  public get aggregates() {
    return this.getListAttribute('aggregates');
  }
  public set aggregates(value: string[]) {
    this._aggregates = value;
  }
  public resetAggregates() {
    this._aggregates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatesInput() {
    return this._aggregates;
  }

  // constituents_per_aggregate - computed: true, optional: true, required: false
  private _constituentsPerAggregate?: number; 
  public get constituentsPerAggregate() {
    return this.getNumberAttribute('constituents_per_aggregate');
  }
  public set constituentsPerAggregate(value: number) {
    this._constituentsPerAggregate = value;
  }
  public resetConstituentsPerAggregate() {
    this._constituentsPerAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constituentsPerAggregateInput() {
    return this._constituentsPerAggregate;
  }

  // total_constituents - computed: true, optional: false, required: false
  public get totalConstituents() {
    return this.getNumberAttribute('total_constituents');
  }
}
export interface FsxOntapVolumeSnaplockConfigurationAutocommitPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
  */
  readonly value?: number;
}

export function fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationAutocommitPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationAutocommitPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfigurationAutocommitPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
  */
  readonly value?: number;
}

export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
  */
  readonly value?: number;
}

export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}
  */
  readonly value?: number;
}

export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface FsxOntapVolumeSnaplockConfigurationRetentionPeriod {
  /**
  * default_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#default_retention FsxOntapVolume#default_retention}
  */
  readonly defaultRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention;
  /**
  * maximum_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#maximum_retention FsxOntapVolume#maximum_retention}
  */
  readonly maximumRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention;
  /**
  * minimum_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#minimum_retention FsxOntapVolume#minimum_retention}
  */
  readonly minimumRetention?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention;
}

export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_retention: fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToTerraform(struct!.defaultRetention),
    maximum_retention: fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToTerraform(struct!.maximumRetention),
    minimum_retention: fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToTerraform(struct!.minimumRetention),
  }
}


export function fsxOntapVolumeSnaplockConfigurationRetentionPeriodToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference | FsxOntapVolumeSnaplockConfigurationRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_retention: {
      value: fsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionToHclTerraform(struct!.defaultRetention),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionList",
    },
    maximum_retention: {
      value: fsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionToHclTerraform(struct!.maximumRetention),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionList",
    },
    minimum_retention: {
      value: fsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionToHclTerraform(struct!.minimumRetention),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfigurationRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
    }
    if (this._maximumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetention = this._maximumRetention?.internalValue;
    }
    if (this._minimumRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRetention = this._minimumRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultRetention.internalValue = undefined;
      this._maximumRetention.internalValue = undefined;
      this._minimumRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultRetention.internalValue = value.defaultRetention;
      this._maximumRetention.internalValue = value.maximumRetention;
      this._minimumRetention.internalValue = value.minimumRetention;
    }
  }

  // default_retention - computed: false, optional: true, required: false
  private _defaultRetention = new FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(this, "default_retention");
  public get defaultRetention() {
    return this._defaultRetention;
  }
  public putDefaultRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention) {
    this._defaultRetention.internalValue = value;
  }
  public resetDefaultRetention() {
    this._defaultRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionInput() {
    return this._defaultRetention.internalValue;
  }

  // maximum_retention - computed: false, optional: true, required: false
  private _maximumRetention = new FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(this, "maximum_retention");
  public get maximumRetention() {
    return this._maximumRetention;
  }
  public putMaximumRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention) {
    this._maximumRetention.internalValue = value;
  }
  public resetMaximumRetention() {
    this._maximumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetentionInput() {
    return this._maximumRetention.internalValue;
  }

  // minimum_retention - computed: false, optional: true, required: false
  private _minimumRetention = new FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(this, "minimum_retention");
  public get minimumRetention() {
    return this._minimumRetention;
  }
  public putMinimumRetention(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention) {
    this._minimumRetention.internalValue = value;
  }
  public resetMinimumRetention() {
    this._minimumRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRetentionInput() {
    return this._minimumRetention.internalValue;
  }
}
export interface FsxOntapVolumeSnaplockConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}
  */
  readonly auditLogVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}
  */
  readonly privilegedDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}
  */
  readonly snaplockType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}
  */
  readonly volumeAppendModeEnabled?: boolean | cdktf.IResolvable;
  /**
  * autocommit_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#autocommit_period FsxOntapVolume#autocommit_period}
  */
  readonly autocommitPeriod?: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod;
  /**
  * retention_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#retention_period FsxOntapVolume#retention_period}
  */
  readonly retentionPeriod?: FsxOntapVolumeSnaplockConfigurationRetentionPeriod;
}

export function fsxOntapVolumeSnaplockConfigurationToTerraform(struct?: FsxOntapVolumeSnaplockConfigurationOutputReference | FsxOntapVolumeSnaplockConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_volume: cdktf.booleanToTerraform(struct!.auditLogVolume),
    privileged_delete: cdktf.stringToTerraform(struct!.privilegedDelete),
    snaplock_type: cdktf.stringToTerraform(struct!.snaplockType),
    volume_append_mode_enabled: cdktf.booleanToTerraform(struct!.volumeAppendModeEnabled),
    autocommit_period: fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToTerraform(struct!.autocommitPeriod),
    retention_period: fsxOntapVolumeSnaplockConfigurationRetentionPeriodToTerraform(struct!.retentionPeriod),
  }
}


export function fsxOntapVolumeSnaplockConfigurationToHclTerraform(struct?: FsxOntapVolumeSnaplockConfigurationOutputReference | FsxOntapVolumeSnaplockConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_volume: {
      value: cdktf.booleanToHclTerraform(struct!.auditLogVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged_delete: {
      value: cdktf.stringToHclTerraform(struct!.privilegedDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snaplock_type: {
      value: cdktf.stringToHclTerraform(struct!.snaplockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_append_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.volumeAppendModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autocommit_period: {
      value: fsxOntapVolumeSnaplockConfigurationAutocommitPeriodToHclTerraform(struct!.autocommitPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOntapVolumeSnaplockConfigurationAutocommitPeriodList",
    },
    retention_period: {
      value: fsxOntapVolumeSnaplockConfigurationRetentionPeriodToHclTerraform(struct!.retentionPeriod),
      isBlock: true,
      type: "list",
      storageClassType: "FsxOntapVolumeSnaplockConfigurationRetentionPeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeSnaplockConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeSnaplockConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogVolume = this._auditLogVolume;
    }
    if (this._privilegedDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegedDelete = this._privilegedDelete;
    }
    if (this._snaplockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snaplockType = this._snaplockType;
    }
    if (this._volumeAppendModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAppendModeEnabled = this._volumeAppendModeEnabled;
    }
    if (this._autocommitPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocommitPeriod = this._autocommitPeriod?.internalValue;
    }
    if (this._retentionPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeSnaplockConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogVolume = undefined;
      this._privilegedDelete = undefined;
      this._snaplockType = undefined;
      this._volumeAppendModeEnabled = undefined;
      this._autocommitPeriod.internalValue = undefined;
      this._retentionPeriod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogVolume = value.auditLogVolume;
      this._privilegedDelete = value.privilegedDelete;
      this._snaplockType = value.snaplockType;
      this._volumeAppendModeEnabled = value.volumeAppendModeEnabled;
      this._autocommitPeriod.internalValue = value.autocommitPeriod;
      this._retentionPeriod.internalValue = value.retentionPeriod;
    }
  }

  // audit_log_volume - computed: false, optional: true, required: false
  private _auditLogVolume?: boolean | cdktf.IResolvable; 
  public get auditLogVolume() {
    return this.getBooleanAttribute('audit_log_volume');
  }
  public set auditLogVolume(value: boolean | cdktf.IResolvable) {
    this._auditLogVolume = value;
  }
  public resetAuditLogVolume() {
    this._auditLogVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogVolumeInput() {
    return this._auditLogVolume;
  }

  // privileged_delete - computed: false, optional: true, required: false
  private _privilegedDelete?: string; 
  public get privilegedDelete() {
    return this.getStringAttribute('privileged_delete');
  }
  public set privilegedDelete(value: string) {
    this._privilegedDelete = value;
  }
  public resetPrivilegedDelete() {
    this._privilegedDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedDeleteInput() {
    return this._privilegedDelete;
  }

  // snaplock_type - computed: false, optional: false, required: true
  private _snaplockType?: string; 
  public get snaplockType() {
    return this.getStringAttribute('snaplock_type');
  }
  public set snaplockType(value: string) {
    this._snaplockType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockTypeInput() {
    return this._snaplockType;
  }

  // volume_append_mode_enabled - computed: false, optional: true, required: false
  private _volumeAppendModeEnabled?: boolean | cdktf.IResolvable; 
  public get volumeAppendModeEnabled() {
    return this.getBooleanAttribute('volume_append_mode_enabled');
  }
  public set volumeAppendModeEnabled(value: boolean | cdktf.IResolvable) {
    this._volumeAppendModeEnabled = value;
  }
  public resetVolumeAppendModeEnabled() {
    this._volumeAppendModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAppendModeEnabledInput() {
    return this._volumeAppendModeEnabled;
  }

  // autocommit_period - computed: false, optional: true, required: false
  private _autocommitPeriod = new FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference(this, "autocommit_period");
  public get autocommitPeriod() {
    return this._autocommitPeriod;
  }
  public putAutocommitPeriod(value: FsxOntapVolumeSnaplockConfigurationAutocommitPeriod) {
    this._autocommitPeriod.internalValue = value;
  }
  public resetAutocommitPeriod() {
    this._autocommitPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitPeriodInput() {
    return this._autocommitPeriod.internalValue;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod = new FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference(this, "retention_period");
  public get retentionPeriod() {
    return this._retentionPeriod;
  }
  public putRetentionPeriod(value: FsxOntapVolumeSnaplockConfigurationRetentionPeriod) {
    this._retentionPeriod.internalValue = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod.internalValue;
  }
}
export interface FsxOntapVolumeTieringPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}
  */
  readonly coolingPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}
  */
  readonly name?: string;
}

export function fsxOntapVolumeTieringPolicyToTerraform(struct?: FsxOntapVolumeTieringPolicyOutputReference | FsxOntapVolumeTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooling_period: cdktf.numberToTerraform(struct!.coolingPeriod),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fsxOntapVolumeTieringPolicyToHclTerraform(struct?: FsxOntapVolumeTieringPolicyOutputReference | FsxOntapVolumeTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooling_period: {
      value: cdktf.numberToHclTerraform(struct!.coolingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapVolumeTieringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapVolumeTieringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingPeriod = this._coolingPeriod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapVolumeTieringPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolingPeriod = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolingPeriod = value.coolingPeriod;
      this._name = value.name;
    }
  }

  // cooling_period - computed: true, optional: true, required: false
  private _coolingPeriod?: number; 
  public get coolingPeriod() {
    return this.getNumberAttribute('cooling_period');
  }
  public set coolingPeriod(value: number) {
    this._coolingPeriod = value;
  }
  public resetCoolingPeriod() {
    this._coolingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingPeriodInput() {
    return this._coolingPeriod;
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
}
export interface FsxOntapVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}
  */
  readonly update?: string;
}

export function fsxOntapVolumeTimeoutsToTerraform(struct?: FsxOntapVolumeTimeouts | cdktf.IResolvable): any {
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


export function fsxOntapVolumeTimeoutsToHclTerraform(struct?: FsxOntapVolumeTimeouts | cdktf.IResolvable): any {
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

export class FsxOntapVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxOntapVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FsxOntapVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}
*/
export class FsxOntapVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_ontap_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxOntapVolume to import
  * @param importFromId The id of the existing FsxOntapVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxOntapVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_ontap_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOntapVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOntapVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_volume',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._bypassSnaplockEnterpriseRetention = config.bypassSnaplockEnterpriseRetention;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._finalBackupTags = config.finalBackupTags;
    this._id = config.id;
    this._junctionPath = config.junctionPath;
    this._name = config.name;
    this._ontapVolumeType = config.ontapVolumeType;
    this._securityStyle = config.securityStyle;
    this._sizeInBytes = config.sizeInBytes;
    this._sizeInMegabytes = config.sizeInMegabytes;
    this._skipFinalBackup = config.skipFinalBackup;
    this._snapshotPolicy = config.snapshotPolicy;
    this._storageEfficiencyEnabled = config.storageEfficiencyEnabled;
    this._storageVirtualMachineId = config.storageVirtualMachineId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._volumeStyle = config.volumeStyle;
    this._volumeType = config.volumeType;
    this._aggregateConfiguration.internalValue = config.aggregateConfiguration;
    this._snaplockConfiguration.internalValue = config.snaplockConfiguration;
    this._tieringPolicy.internalValue = config.tieringPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bypass_snaplock_enterprise_retention - computed: false, optional: true, required: false
  private _bypassSnaplockEnterpriseRetention?: boolean | cdktf.IResolvable; 
  public get bypassSnaplockEnterpriseRetention() {
    return this.getBooleanAttribute('bypass_snaplock_enterprise_retention');
  }
  public set bypassSnaplockEnterpriseRetention(value: boolean | cdktf.IResolvable) {
    this._bypassSnaplockEnterpriseRetention = value;
  }
  public resetBypassSnaplockEnterpriseRetention() {
    this._bypassSnaplockEnterpriseRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSnaplockEnterpriseRetentionInput() {
    return this._bypassSnaplockEnterpriseRetention;
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean | cdktf.IResolvable; 
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: boolean | cdktf.IResolvable) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // final_backup_tags - computed: false, optional: true, required: false
  private _finalBackupTags?: { [key: string]: string }; 
  public get finalBackupTags() {
    return this.getStringMapAttribute('final_backup_tags');
  }
  public set finalBackupTags(value: { [key: string]: string }) {
    this._finalBackupTags = value;
  }
  public resetFinalBackupTags() {
    this._finalBackupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupTagsInput() {
    return this._finalBackupTags;
  }

  // flexcache_endpoint_type - computed: true, optional: false, required: false
  public get flexcacheEndpointType() {
    return this.getStringAttribute('flexcache_endpoint_type');
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

  // junction_path - computed: false, optional: true, required: false
  private _junctionPath?: string; 
  public get junctionPath() {
    return this.getStringAttribute('junction_path');
  }
  public set junctionPath(value: string) {
    this._junctionPath = value;
  }
  public resetJunctionPath() {
    this._junctionPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junctionPathInput() {
    return this._junctionPath;
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
    return this._name;
  }

  // ontap_volume_type - computed: true, optional: true, required: false
  private _ontapVolumeType?: string; 
  public get ontapVolumeType() {
    return this.getStringAttribute('ontap_volume_type');
  }
  public set ontapVolumeType(value: string) {
    this._ontapVolumeType = value;
  }
  public resetOntapVolumeType() {
    this._ontapVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ontapVolumeTypeInput() {
    return this._ontapVolumeType;
  }

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string; 
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle;
  }

  // size_in_bytes - computed: true, optional: true, required: false
  private _sizeInBytes?: string; 
  public get sizeInBytes() {
    return this.getStringAttribute('size_in_bytes');
  }
  public set sizeInBytes(value: string) {
    this._sizeInBytes = value;
  }
  public resetSizeInBytes() {
    this._sizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInBytesInput() {
    return this._sizeInBytes;
  }

  // size_in_megabytes - computed: true, optional: true, required: false
  private _sizeInMegabytes?: number; 
  public get sizeInMegabytes() {
    return this.getNumberAttribute('size_in_megabytes');
  }
  public set sizeInMegabytes(value: number) {
    this._sizeInMegabytes = value;
  }
  public resetSizeInMegabytes() {
    this._sizeInMegabytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMegabytesInput() {
    return this._sizeInMegabytes;
  }

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean | cdktf.IResolvable; 
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup');
  }
  public set skipFinalBackup(value: boolean | cdktf.IResolvable) {
    this._skipFinalBackup = value;
  }
  public resetSkipFinalBackup() {
    this._skipFinalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalBackupInput() {
    return this._skipFinalBackup;
  }

  // snapshot_policy - computed: true, optional: true, required: false
  private _snapshotPolicy?: string; 
  public get snapshotPolicy() {
    return this.getStringAttribute('snapshot_policy');
  }
  public set snapshotPolicy(value: string) {
    this._snapshotPolicy = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy;
  }

  // storage_efficiency_enabled - computed: false, optional: true, required: false
  private _storageEfficiencyEnabled?: boolean | cdktf.IResolvable; 
  public get storageEfficiencyEnabled() {
    return this.getBooleanAttribute('storage_efficiency_enabled');
  }
  public set storageEfficiencyEnabled(value: boolean | cdktf.IResolvable) {
    this._storageEfficiencyEnabled = value;
  }
  public resetStorageEfficiencyEnabled() {
    this._storageEfficiencyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEfficiencyEnabledInput() {
    return this._storageEfficiencyEnabled;
  }

  // storage_virtual_machine_id - computed: false, optional: false, required: true
  private _storageVirtualMachineId?: string; 
  public get storageVirtualMachineId() {
    return this.getStringAttribute('storage_virtual_machine_id');
  }
  public set storageVirtualMachineId(value: string) {
    this._storageVirtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineIdInput() {
    return this._storageVirtualMachineId;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_style - computed: true, optional: true, required: false
  private _volumeStyle?: string; 
  public get volumeStyle() {
    return this.getStringAttribute('volume_style');
  }
  public set volumeStyle(value: string) {
    this._volumeStyle = value;
  }
  public resetVolumeStyle() {
    this._volumeStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeStyleInput() {
    return this._volumeStyle;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // aggregate_configuration - computed: false, optional: true, required: false
  private _aggregateConfiguration = new FsxOntapVolumeAggregateConfigurationOutputReference(this, "aggregate_configuration");
  public get aggregateConfiguration() {
    return this._aggregateConfiguration;
  }
  public putAggregateConfiguration(value: FsxOntapVolumeAggregateConfiguration) {
    this._aggregateConfiguration.internalValue = value;
  }
  public resetAggregateConfiguration() {
    this._aggregateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateConfigurationInput() {
    return this._aggregateConfiguration.internalValue;
  }

  // snaplock_configuration - computed: false, optional: true, required: false
  private _snaplockConfiguration = new FsxOntapVolumeSnaplockConfigurationOutputReference(this, "snaplock_configuration");
  public get snaplockConfiguration() {
    return this._snaplockConfiguration;
  }
  public putSnaplockConfiguration(value: FsxOntapVolumeSnaplockConfiguration) {
    this._snaplockConfiguration.internalValue = value;
  }
  public resetSnaplockConfiguration() {
    this._snaplockConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snaplockConfigurationInput() {
    return this._snaplockConfiguration.internalValue;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy = new FsxOntapVolumeTieringPolicyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }
  public putTieringPolicy(value: FsxOntapVolumeTieringPolicy) {
    this._tieringPolicy.internalValue = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxOntapVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxOntapVolumeTimeouts) {
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
      bypass_snaplock_enterprise_retention: cdktf.booleanToTerraform(this._bypassSnaplockEnterpriseRetention),
      copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
      final_backup_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._finalBackupTags),
      id: cdktf.stringToTerraform(this._id),
      junction_path: cdktf.stringToTerraform(this._junctionPath),
      name: cdktf.stringToTerraform(this._name),
      ontap_volume_type: cdktf.stringToTerraform(this._ontapVolumeType),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      size_in_bytes: cdktf.stringToTerraform(this._sizeInBytes),
      size_in_megabytes: cdktf.numberToTerraform(this._sizeInMegabytes),
      skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
      snapshot_policy: cdktf.stringToTerraform(this._snapshotPolicy),
      storage_efficiency_enabled: cdktf.booleanToTerraform(this._storageEfficiencyEnabled),
      storage_virtual_machine_id: cdktf.stringToTerraform(this._storageVirtualMachineId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      volume_style: cdktf.stringToTerraform(this._volumeStyle),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      aggregate_configuration: fsxOntapVolumeAggregateConfigurationToTerraform(this._aggregateConfiguration.internalValue),
      snaplock_configuration: fsxOntapVolumeSnaplockConfigurationToTerraform(this._snaplockConfiguration.internalValue),
      tiering_policy: fsxOntapVolumeTieringPolicyToTerraform(this._tieringPolicy.internalValue),
      timeouts: fsxOntapVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_snaplock_enterprise_retention: {
        value: cdktf.booleanToHclTerraform(this._bypassSnaplockEnterpriseRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_tags_to_backups: {
        value: cdktf.booleanToHclTerraform(this._copyTagsToBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      final_backup_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._finalBackupTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      junction_path: {
        value: cdktf.stringToHclTerraform(this._junctionPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ontap_volume_type: {
        value: cdktf.stringToHclTerraform(this._ontapVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_style: {
        value: cdktf.stringToHclTerraform(this._securityStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_bytes: {
        value: cdktf.stringToHclTerraform(this._sizeInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_megabytes: {
        value: cdktf.numberToHclTerraform(this._sizeInMegabytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_final_backup: {
        value: cdktf.booleanToHclTerraform(this._skipFinalBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_policy: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_efficiency_enabled: {
        value: cdktf.booleanToHclTerraform(this._storageEfficiencyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_virtual_machine_id: {
        value: cdktf.stringToHclTerraform(this._storageVirtualMachineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      volume_style: {
        value: cdktf.stringToHclTerraform(this._volumeStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_configuration: {
        value: fsxOntapVolumeAggregateConfigurationToHclTerraform(this._aggregateConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOntapVolumeAggregateConfigurationList",
      },
      snaplock_configuration: {
        value: fsxOntapVolumeSnaplockConfigurationToHclTerraform(this._snaplockConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOntapVolumeSnaplockConfigurationList",
      },
      tiering_policy: {
        value: fsxOntapVolumeTieringPolicyToHclTerraform(this._tieringPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOntapVolumeTieringPolicyList",
      },
      timeouts: {
        value: fsxOntapVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxOntapVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
