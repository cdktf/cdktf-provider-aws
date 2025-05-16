// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCatalogTableOptimizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#catalog_id GlueCatalogTableOptimizer#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#database_name GlueCatalogTableOptimizer#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#table_name GlueCatalogTableOptimizer#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#type GlueCatalogTableOptimizer#type}
  */
  readonly type: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#configuration GlueCatalogTableOptimizer#configuration}
  */
  readonly configuration?: GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable;
}
export interface GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#location GlueCatalogTableOptimizer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#orphan_file_retention_period_in_days GlueCatalogTableOptimizer#orphan_file_retention_period_in_days}
  */
  readonly orphanFileRetentionPeriodInDays?: number;
}

export function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    orphan_file_retention_period_in_days: cdktf.numberToTerraform(struct!.orphanFileRetentionPeriodInDays),
  }
}


export function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_file_retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.orphanFileRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._orphanFileRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileRetentionPeriodInDays = this._orphanFileRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._orphanFileRetentionPeriodInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._orphanFileRetentionPeriodInDays = value.orphanFileRetentionPeriodInDays;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // orphan_file_retention_period_in_days - computed: false, optional: true, required: false
  private _orphanFileRetentionPeriodInDays?: number; 
  public get orphanFileRetentionPeriodInDays() {
    return this.getNumberAttribute('orphan_file_retention_period_in_days');
  }
  public set orphanFileRetentionPeriodInDays(value: number) {
    this._orphanFileRetentionPeriodInDays = value;
  }
  public resetOrphanFileRetentionPeriodInDays() {
    this._orphanFileRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileRetentionPeriodInDaysInput() {
    return this._orphanFileRetentionPeriodInDays;
  }
}

export class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference {
    return new GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration {
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
}

export function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iceberg_configuration: cdktf.listMapper(glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToTerraform, true)(struct!.icebergConfiguration),
  }
}


export function glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iceberg_configuration: {
      value: cdktf.listMapperHcl(glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationToHclTerraform, true)(struct!.icebergConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationList(this, "iceberg_configuration", false);
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration[] | cdktf.IResolvable) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}

export class GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference {
    return new GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#clean_expired_files GlueCatalogTableOptimizer#clean_expired_files}
  */
  readonly cleanExpiredFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#number_of_snapshots_to_retain GlueCatalogTableOptimizer#number_of_snapshots_to_retain}
  */
  readonly numberOfSnapshotsToRetain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#snapshot_retention_period_in_days GlueCatalogTableOptimizer#snapshot_retention_period_in_days}
  */
  readonly snapshotRetentionPeriodInDays?: number;
}

export function glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clean_expired_files: cdktf.booleanToTerraform(struct!.cleanExpiredFiles),
    number_of_snapshots_to_retain: cdktf.numberToTerraform(struct!.numberOfSnapshotsToRetain),
    snapshot_retention_period_in_days: cdktf.numberToTerraform(struct!.snapshotRetentionPeriodInDays),
  }
}


export function glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clean_expired_files: {
      value: cdktf.booleanToHclTerraform(struct!.cleanExpiredFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_snapshots_to_retain: {
      value: cdktf.numberToHclTerraform(struct!.numberOfSnapshotsToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_retention_period_in_days: {
      value: cdktf.numberToHclTerraform(struct!.snapshotRetentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanExpiredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanExpiredFiles = this._cleanExpiredFiles;
    }
    if (this._numberOfSnapshotsToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfSnapshotsToRetain = this._numberOfSnapshotsToRetain;
    }
    if (this._snapshotRetentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotRetentionPeriodInDays = this._snapshotRetentionPeriodInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = undefined;
      this._numberOfSnapshotsToRetain = undefined;
      this._snapshotRetentionPeriodInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanExpiredFiles = value.cleanExpiredFiles;
      this._numberOfSnapshotsToRetain = value.numberOfSnapshotsToRetain;
      this._snapshotRetentionPeriodInDays = value.snapshotRetentionPeriodInDays;
    }
  }

  // clean_expired_files - computed: false, optional: true, required: false
  private _cleanExpiredFiles?: boolean | cdktf.IResolvable; 
  public get cleanExpiredFiles() {
    return this.getBooleanAttribute('clean_expired_files');
  }
  public set cleanExpiredFiles(value: boolean | cdktf.IResolvable) {
    this._cleanExpiredFiles = value;
  }
  public resetCleanExpiredFiles() {
    this._cleanExpiredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanExpiredFilesInput() {
    return this._cleanExpiredFiles;
  }

  // number_of_snapshots_to_retain - computed: false, optional: true, required: false
  private _numberOfSnapshotsToRetain?: number; 
  public get numberOfSnapshotsToRetain() {
    return this.getNumberAttribute('number_of_snapshots_to_retain');
  }
  public set numberOfSnapshotsToRetain(value: number) {
    this._numberOfSnapshotsToRetain = value;
  }
  public resetNumberOfSnapshotsToRetain() {
    this._numberOfSnapshotsToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSnapshotsToRetainInput() {
    return this._numberOfSnapshotsToRetain;
  }

  // snapshot_retention_period_in_days - computed: false, optional: true, required: false
  private _snapshotRetentionPeriodInDays?: number; 
  public get snapshotRetentionPeriodInDays() {
    return this.getNumberAttribute('snapshot_retention_period_in_days');
  }
  public set snapshotRetentionPeriodInDays(value: number) {
    this._snapshotRetentionPeriodInDays = value;
  }
  public resetSnapshotRetentionPeriodInDays() {
    this._snapshotRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotRetentionPeriodInDaysInput() {
    return this._snapshotRetentionPeriodInDays;
  }
}

export class GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference {
    return new GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOptimizerConfigurationRetentionConfiguration {
  /**
  * iceberg_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#iceberg_configuration GlueCatalogTableOptimizer#iceberg_configuration}
  */
  readonly icebergConfiguration?: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable;
}

export function glueCatalogTableOptimizerConfigurationRetentionConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iceberg_configuration: cdktf.listMapper(glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToTerraform, true)(struct!.icebergConfiguration),
  }
}


export function glueCatalogTableOptimizerConfigurationRetentionConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iceberg_configuration: {
      value: cdktf.listMapperHcl(glueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationToHclTerraform, true)(struct!.icebergConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icebergConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icebergConfiguration = this._icebergConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOptimizerConfigurationRetentionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icebergConfiguration.internalValue = value.icebergConfiguration;
    }
  }

  // iceberg_configuration - computed: false, optional: true, required: false
  private _icebergConfiguration = new GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationList(this, "iceberg_configuration", false);
  public get icebergConfiguration() {
    return this._icebergConfiguration;
  }
  public putIcebergConfiguration(value: GlueCatalogTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration[] | cdktf.IResolvable) {
    this._icebergConfiguration.internalValue = value;
  }
  public resetIcebergConfiguration() {
    this._icebergConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergConfigurationInput() {
    return this._icebergConfiguration.internalValue;
  }
}

export class GlueCatalogTableOptimizerConfigurationRetentionConfigurationList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference {
    return new GlueCatalogTableOptimizerConfigurationRetentionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlueCatalogTableOptimizerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#enabled GlueCatalogTableOptimizer#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#role_arn GlueCatalogTableOptimizer#role_arn}
  */
  readonly roleArn: string;
  /**
  * orphan_file_deletion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#orphan_file_deletion_configuration GlueCatalogTableOptimizer#orphan_file_deletion_configuration}
  */
  readonly orphanFileDeletionConfiguration?: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable;
  /**
  * retention_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#retention_configuration GlueCatalogTableOptimizer#retention_configuration}
  */
  readonly retentionConfiguration?: GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable;
}

export function glueCatalogTableOptimizerConfigurationToTerraform(struct?: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    orphan_file_deletion_configuration: cdktf.listMapper(glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToTerraform, true)(struct!.orphanFileDeletionConfiguration),
    retention_configuration: cdktf.listMapper(glueCatalogTableOptimizerConfigurationRetentionConfigurationToTerraform, true)(struct!.retentionConfiguration),
  }
}


export function glueCatalogTableOptimizerConfigurationToHclTerraform(struct?: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable): any {
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_file_deletion_configuration: {
      value: cdktf.listMapperHcl(glueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationToHclTerraform, true)(struct!.orphanFileDeletionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList",
    },
    retention_configuration: {
      value: cdktf.listMapperHcl(glueCatalogTableOptimizerConfigurationRetentionConfigurationToHclTerraform, true)(struct!.retentionConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "GlueCatalogTableOptimizerConfigurationRetentionConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlueCatalogTableOptimizerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._orphanFileDeletionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanFileDeletionConfiguration = this._orphanFileDeletionConfiguration?.internalValue;
    }
    if (this._retentionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionConfiguration = this._retentionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlueCatalogTableOptimizerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._orphanFileDeletionConfiguration.internalValue = undefined;
      this._retentionConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._orphanFileDeletionConfiguration.internalValue = value.orphanFileDeletionConfiguration;
      this._retentionConfiguration.internalValue = value.retentionConfiguration;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // orphan_file_deletion_configuration - computed: false, optional: true, required: false
  private _orphanFileDeletionConfiguration = new GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfigurationList(this, "orphan_file_deletion_configuration", false);
  public get orphanFileDeletionConfiguration() {
    return this._orphanFileDeletionConfiguration;
  }
  public putOrphanFileDeletionConfiguration(value: GlueCatalogTableOptimizerConfigurationOrphanFileDeletionConfiguration[] | cdktf.IResolvable) {
    this._orphanFileDeletionConfiguration.internalValue = value;
  }
  public resetOrphanFileDeletionConfiguration() {
    this._orphanFileDeletionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanFileDeletionConfigurationInput() {
    return this._orphanFileDeletionConfiguration.internalValue;
  }

  // retention_configuration - computed: false, optional: true, required: false
  private _retentionConfiguration = new GlueCatalogTableOptimizerConfigurationRetentionConfigurationList(this, "retention_configuration", false);
  public get retentionConfiguration() {
    return this._retentionConfiguration;
  }
  public putRetentionConfiguration(value: GlueCatalogTableOptimizerConfigurationRetentionConfiguration[] | cdktf.IResolvable) {
    this._retentionConfiguration.internalValue = value;
  }
  public resetRetentionConfiguration() {
    this._retentionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigurationInput() {
    return this._retentionConfiguration.internalValue;
  }
}

export class GlueCatalogTableOptimizerConfigurationList extends cdktf.ComplexList {
  public internalValue? : GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GlueCatalogTableOptimizerConfigurationOutputReference {
    return new GlueCatalogTableOptimizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer}
*/
export class GlueCatalogTableOptimizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog_table_optimizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlueCatalogTableOptimizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlueCatalogTableOptimizer to import
  * @param importFromId The id of the existing GlueCatalogTableOptimizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlueCatalogTableOptimizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_glue_catalog_table_optimizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/glue_catalog_table_optimizer aws_glue_catalog_table_optimizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogTableOptimizerConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogTableOptimizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table_optimizer',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._tableName = config.tableName;
    this._type = config.type;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new GlueCatalogTableOptimizerConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: GlueCatalogTableOptimizerConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      table_name: cdktf.stringToTerraform(this._tableName),
      type: cdktf.stringToTerraform(this._type),
      configuration: cdktf.listMapper(glueCatalogTableOptimizerConfigurationToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(glueCatalogTableOptimizerConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlueCatalogTableOptimizerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
