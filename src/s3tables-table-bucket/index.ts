/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3TablesTableBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}
  */
  readonly maintenanceConfiguration?: S3TablesTableBucketMaintenanceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}
  */
  readonly name: string;
}
export interface S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}
  */
  readonly nonCurrentDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}
  */
  readonly unreferencedDays?: number;
}

export function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_current_days: cdktf.numberToTerraform(struct!.nonCurrentDays),
    unreferenced_days: cdktf.numberToTerraform(struct!.unreferencedDays),
  }
}


export function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_current_days: {
      value: cdktf.numberToHclTerraform(struct!.nonCurrentDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unreferenced_days: {
      value: cdktf.numberToHclTerraform(struct!.unreferencedDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonCurrentDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCurrentDays = this._nonCurrentDays;
    }
    if (this._unreferencedDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreferencedDays = this._unreferencedDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonCurrentDays = undefined;
      this._unreferencedDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonCurrentDays = value.nonCurrentDays;
      this._unreferencedDays = value.unreferencedDays;
    }
  }

  // non_current_days - computed: true, optional: true, required: false
  private _nonCurrentDays?: number; 
  public get nonCurrentDays() {
    return this.getNumberAttribute('non_current_days');
  }
  public set nonCurrentDays(value: number) {
    this._nonCurrentDays = value;
  }
  public resetNonCurrentDays() {
    this._nonCurrentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCurrentDaysInput() {
    return this._nonCurrentDays;
  }

  // unreferenced_days - computed: true, optional: true, required: false
  private _unreferencedDays?: number; 
  public get unreferencedDays() {
    return this.getNumberAttribute('unreferenced_days');
  }
  public set unreferencedDays(value: number) {
    this._unreferencedDays = value;
  }
  public resetUnreferencedDays() {
    this._unreferencedDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreferencedDaysInput() {
    return this._unreferencedDays;
  }
}
export interface S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}
  */
  readonly settings?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}
  */
  readonly status?: string;
}

export function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToTerraform(struct!.settings),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    settings: {
      value: s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings",
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

export class S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable | undefined {
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

  public set internalValue(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval | cdktf.IResolvable | undefined) {
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
  private _settings = new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings) {
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
export interface S3TablesTableBucketMaintenanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}
  */
  readonly icebergUnreferencedFileRemoval?: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval;
}

export function s3TablesTableBucketMaintenanceConfigurationToTerraform(struct?: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iceberg_unreferenced_file_removal: s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToTerraform(struct!.icebergUnreferencedFileRemoval),
  }
}


export function s3TablesTableBucketMaintenanceConfigurationToHclTerraform(struct?: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iceberg_unreferenced_file_removal: {
      value: s3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalToHclTerraform(struct!.icebergUnreferencedFileRemoval),
      isBlock: true,
      type: "struct",
      storageClassType: "S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergUnreferencedFileRemoval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergUnreferencedFileRemoval = this._icebergUnreferencedFileRemoval?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableBucketMaintenanceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergUnreferencedFileRemoval.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergUnreferencedFileRemoval.internalValue = value.icebergUnreferencedFileRemoval;
    }
  }

  // iceberg_unreferenced_file_removal - computed: true, optional: true, required: false
  private _icebergUnreferencedFileRemoval = new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference(this, "iceberg_unreferenced_file_removal");
  public get icebergUnreferencedFileRemoval() {
    return this._icebergUnreferencedFileRemoval;
  }
  public putIcebergUnreferencedFileRemoval(value: S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval) {
    this._icebergUnreferencedFileRemoval.internalValue = value;
  }
  public resetIcebergUnreferencedFileRemoval() {
    this._icebergUnreferencedFileRemoval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergUnreferencedFileRemovalInput() {
    return this._icebergUnreferencedFileRemoval.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket}
*/
export class S3TablesTableBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3tables_table_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTableBucket to import
  * @param importFromId The id of the existing S3TablesTableBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTableBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3tables_table_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableBucketConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3tables_table_bucket',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.86.0',
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
    this._maintenanceConfiguration.internalValue = config.maintenanceConfiguration;
    this._name = config.name;
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

  // maintenance_configuration - computed: true, optional: true, required: false
  private _maintenanceConfiguration = new S3TablesTableBucketMaintenanceConfigurationOutputReference(this, "maintenance_configuration");
  public get maintenanceConfiguration() {
    return this._maintenanceConfiguration;
  }
  public putMaintenanceConfiguration(value: S3TablesTableBucketMaintenanceConfiguration) {
    this._maintenanceConfiguration.internalValue = value;
  }
  public resetMaintenanceConfiguration() {
    this._maintenanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigurationInput() {
    return this._maintenanceConfiguration.internalValue;
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

  // owner_account_id - computed: true, optional: false, required: false
  public get ownerAccountId() {
    return this.getStringAttribute('owner_account_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maintenance_configuration: s3TablesTableBucketMaintenanceConfigurationToTerraform(this._maintenanceConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      maintenance_configuration: {
        value: s3TablesTableBucketMaintenanceConfigurationToHclTerraform(this._maintenanceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3TablesTableBucketMaintenanceConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
