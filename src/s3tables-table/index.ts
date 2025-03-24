/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3TablesTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#format S3TablesTable#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: S3TablesTableMaintenanceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#name S3TablesTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}
  */
  readonly tableBucketArn: string;
}
export interface S3TablesTableMaintenanceConfigurationIcebergCompactionSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}
  */
  readonly targetFileSizeMb?: number;
}

export function s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_file_size_mb: cdktf.numberToTerraform(struct!.targetFileSizeMb),
  }
}


export function s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_file_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.targetFileSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetFileSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFileSizeMb = this._targetFileSizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetFileSizeMb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetFileSizeMb = value.targetFileSizeMb;
    }
  }

  // target_file_size_mb - computed: true, optional: true, required: false
  private _targetFileSizeMb?: number; 
  public get targetFileSizeMb() {
    return this.getNumberAttribute('target_file_size_mb');
  }
  public set targetFileSizeMb(value: number) {
    this._targetFileSizeMb = value;
  }
  public resetTargetFileSizeMb() {
    this._targetFileSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeMbInput() {
    return this._targetFileSizeMb;
  }
}
export interface S3TablesTableMaintenanceConfigurationIcebergCompaction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#settings S3TablesTable#settings}
  */
  readonly settings?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#status S3TablesTable#status}
  */
  readonly status?: string;
}

export function s3TablesTableMaintenanceConfigurationIcebergCompactionToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToTerraform(struct!.settings),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3TablesTableMaintenanceConfigurationIcebergCompactionToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableMaintenanceConfigurationIcebergCompactionSettings",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings.internalValue = value.settings;
      this._status = value.status;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}
  */
  readonly maxSnapshotAgeHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}
  */
  readonly minSnapshotsToKeep?: number;
}

export function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_snapshot_age_hours: cdktf.numberToTerraform(struct!.maxSnapshotAgeHours),
    min_snapshots_to_keep: cdktf.numberToTerraform(struct!.minSnapshotsToKeep),
  }
}


export function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_snapshot_age_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxSnapshotAgeHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_snapshots_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.minSnapshotsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSnapshotAgeHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshotAgeHours = this._maxSnapshotAgeHours;
    }
    if (this._minSnapshotsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSnapshotsToKeep = this._minSnapshotsToKeep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = undefined;
      this._minSnapshotsToKeep = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSnapshotAgeHours = value.maxSnapshotAgeHours;
      this._minSnapshotsToKeep = value.minSnapshotsToKeep;
    }
  }

  // max_snapshot_age_hours - computed: true, optional: true, required: false
  private _maxSnapshotAgeHours?: number; 
  public get maxSnapshotAgeHours() {
    return this.getNumberAttribute('max_snapshot_age_hours');
  }
  public set maxSnapshotAgeHours(value: number) {
    this._maxSnapshotAgeHours = value;
  }
  public resetMaxSnapshotAgeHours() {
    this._maxSnapshotAgeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotAgeHoursInput() {
    return this._maxSnapshotAgeHours;
  }

  // min_snapshots_to_keep - computed: true, optional: true, required: false
  private _minSnapshotsToKeep?: number; 
  public get minSnapshotsToKeep() {
    return this.getNumberAttribute('min_snapshots_to_keep');
  }
  public set minSnapshotsToKeep(value: number) {
    this._minSnapshotsToKeep = value;
  }
  public resetMinSnapshotsToKeep() {
    this._minSnapshotsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSnapshotsToKeepInput() {
    return this._minSnapshotsToKeep;
  }
}
export interface S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#settings S3TablesTable#settings}
  */
  readonly settings?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#status S3TablesTable#status}
  */
  readonly status?: string;
}

export function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToTerraform(struct!.settings),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settings.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settings.internalValue = value.settings;
      this._status = value.status;
    }
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface S3TablesTableMaintenanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}
  */
  readonly icebergCompaction?: S3TablesTableMaintenanceConfigurationIcebergCompaction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}
  */
  readonly icebergSnapshotManagement?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement;
}

export function s3TablesTableMaintenanceConfigurationToTerraform(struct?: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iceberg_compaction: s3TablesTableMaintenanceConfigurationIcebergCompactionToTerraform(struct!.icebergCompaction),
    iceberg_snapshot_management: s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToTerraform(struct!.icebergSnapshotManagement),
  }
}


export function s3TablesTableMaintenanceConfigurationToHclTerraform(struct?: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iceberg_compaction: {
      value: s3TablesTableMaintenanceConfigurationIcebergCompactionToHclTerraform(struct!.icebergCompaction),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableMaintenanceConfigurationIcebergCompaction",
    },
    iceberg_snapshot_management: {
      value: s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToHclTerraform(struct!.icebergSnapshotManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableMaintenanceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergCompaction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergCompaction = this._icebergCompaction?.internalValue;
    }
    if (this._icebergSnapshotManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergSnapshotManagement = this._icebergSnapshotManagement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergCompaction.internalValue = undefined;
      this._icebergSnapshotManagement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergCompaction.internalValue = value.icebergCompaction;
      this._icebergSnapshotManagement.internalValue = value.icebergSnapshotManagement;
    }
  }

  // iceberg_compaction - computed: true, optional: true, required: false
  private _icebergCompaction = new S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference(this, "iceberg_compaction");
  public get icebergCompaction() {
    return this._icebergCompaction;
  }
  public putIcebergCompaction(value: S3TablesTableMaintenanceConfigurationIcebergCompaction) {
    this._icebergCompaction.internalValue = value;
  }
  public resetIcebergCompaction() {
    this._icebergCompaction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergCompactionInput() {
    return this._icebergCompaction.internalValue;
  }

  // iceberg_snapshot_management - computed: true, optional: true, required: false
  private _icebergSnapshotManagement = new S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference(this, "iceberg_snapshot_management");
  public get icebergSnapshotManagement() {
    return this._icebergSnapshotManagement;
  }
  public putIcebergSnapshotManagement(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement) {
    this._icebergSnapshotManagement.internalValue = value;
  }
  public resetIcebergSnapshotManagement() {
    this._icebergSnapshotManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergSnapshotManagementInput() {
    return this._icebergSnapshotManagement.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table aws_s3tables_table}
*/
export class S3TablesTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3tables_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTable to import
  * @param importFromId The id of the existing S3TablesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3tables_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/s3tables_table aws_s3tables_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3tables_table',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
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
    this._format = config.format;
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._name = config.name;
    this._namespace = config.namespace;
    this._tableBucketArn = config.tableBucketArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // maintenance_configuration - computed: true, optional: true, required: false
  private _maintenanceConfiguration = new S3TablesTableMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: S3TablesTableMaintenanceConfiguration) {
    this._maintenanceConfiguration.internalValue = value;
  }
  public resetMaintenanceConfiguration() {
    this._maintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationInput() {
    return this._maintenanceConfiguration.internalValue;
  }

  // metadata_location - computed: true, optional: false, required: false
  public get metadataLocation() {
    return this.getStringAttribute('metadata_location');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // table_bucket_arn - computed: false, optional: false, required: true
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // warehouse_location - computed: true, optional: false, required: false
  public get warehouseLocation() {
    return this.getStringAttribute('warehouse_location');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: cdktf.stringToTerraform(this._format),
      maintenance_configuration: s3TablesTableMaintenanceConfigurationToTerraform(this._maintenanceConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      table_bucket_arn: cdktf.stringToTerraform(this._tableBucketArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_configuration: {
        value: s3TablesTableMaintenanceConfigurationToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableMaintenanceConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_bucket_arn: {
        value: cdktf.stringToHclTerraform(this._tableBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
