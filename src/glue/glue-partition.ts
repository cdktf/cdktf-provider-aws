// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#catalog_id GluePartition#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#database_name GluePartition#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#partition_values GluePartition#partition_values}
  */
  readonly partitionValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#table_name GluePartition#table_name}
  */
  readonly tableName: string;
  /**
  * storage_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#storage_descriptor GluePartition#storage_descriptor}
  */
  readonly storageDescriptor?: GluePartitionStorageDescriptor;
}
export interface GluePartitionStorageDescriptorColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#comment GluePartition#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#type GluePartition#type}
  */
  readonly type?: string;
}

export function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GluePartitionStorageDescriptorSerDeInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#serialization_library GluePartition#serialization_library}
  */
  readonly serializationLibrary?: string;
}

export function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
  }
}

export class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GluePartitionStorageDescriptorSerDeInfo | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serializationLibrary) {
      hasAnyValues = true;
      internalValueResult.serializationLibrary = this._serializationLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GluePartitionStorageDescriptorSerDeInfo | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._parameters = undefined;
      this._serializationLibrary = undefined;
    }
    else {
      this._name = value.name;
      this._parameters = value.parameters;
      this._serializationLibrary = value.serializationLibrary;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serialization_library - computed: false, optional: true, required: false
  private _serializationLibrary?: string; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string) {
    this._serializationLibrary = value;
  }
  public resetSerializationLibrary() {
    this._serializationLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary;
  }
}
export interface GluePartitionStorageDescriptorSkewedInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_names GluePartition#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_values GluePartition#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

export function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
  }
}

export class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GluePartitionStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._skewedColumnNames) {
      hasAnyValues = true;
      internalValueResult.skewedColumnNames = this._skewedColumnNames;
    }
    if (this._skewedColumnValueLocationMaps) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValueLocationMaps = this._skewedColumnValueLocationMaps;
    }
    if (this._skewedColumnValues) {
      hasAnyValues = true;
      internalValueResult.skewedColumnValues = this._skewedColumnValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GluePartitionStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this._skewedColumnNames = undefined;
      this._skewedColumnValueLocationMaps = undefined;
      this._skewedColumnValues = undefined;
    }
    else {
      this._skewedColumnNames = value.skewedColumnNames;
      this._skewedColumnValueLocationMaps = value.skewedColumnValueLocationMaps;
      this._skewedColumnValues = value.skewedColumnValues;
    }
  }

  // skewed_column_names - computed: false, optional: true, required: false
  private _skewedColumnNames?: string[]; 
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }
  public set skewedColumnNames(value: string[]) {
    this._skewedColumnNames = value;
  }
  public resetSkewedColumnNames() {
    this._skewedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnNamesInput() {
    return this._skewedColumnNames;
  }

  // skewed_column_value_location_maps - computed: false, optional: true, required: false
  private _skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable; 
  public get skewedColumnValueLocationMaps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('skewed_column_value_location_maps') as any;
  }
  public set skewedColumnValueLocationMaps(value: { [key: string]: string } | cdktf.IResolvable) {
    this._skewedColumnValueLocationMaps = value;
  }
  public resetSkewedColumnValueLocationMaps() {
    this._skewedColumnValueLocationMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValueLocationMapsInput() {
    return this._skewedColumnValueLocationMaps;
  }

  // skewed_column_values - computed: false, optional: true, required: false
  private _skewedColumnValues?: string[]; 
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
  public set skewedColumnValues(value: string[]) {
    this._skewedColumnValues = value;
  }
  public resetSkewedColumnValues() {
    this._skewedColumnValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValuesInput() {
    return this._skewedColumnValues;
  }
}
export interface GluePartitionStorageDescriptorSortColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#column GluePartition#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_order GluePartition#sort_order}
  */
  readonly sortOrder: number;
}

export function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
  }
}

export interface GluePartitionStorageDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#bucket_columns GluePartition#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#compressed GluePartition#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#input_format GluePartition#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#location GluePartition#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#number_of_buckets GluePartition#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#output_format GluePartition#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#stored_as_sub_directories GluePartition#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#columns GluePartition#columns}
  */
  readonly columns?: GluePartitionStorageDescriptorColumns[];
  /**
  * ser_de_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#ser_de_info GluePartition#ser_de_info}
  */
  readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo;
  /**
  * skewed_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
  */
  readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo;
  /**
  * sort_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
  */
  readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}

export function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bucketColumns),
    compressed: cdktf.booleanToTerraform(struct!.compressed),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    location: cdktf.stringToTerraform(struct!.location),
    number_of_buckets: cdktf.numberToTerraform(struct!.numberOfBuckets),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    stored_as_sub_directories: cdktf.booleanToTerraform(struct!.storedAsSubDirectories),
    columns: cdktf.listMapper(gluePartitionStorageDescriptorColumnsToTerraform)(struct!.columns),
    ser_de_info: gluePartitionStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
    skewed_info: gluePartitionStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
  }
}

export class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GluePartitionStorageDescriptor | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._bucketColumns) {
      hasAnyValues = true;
      internalValueResult.bucketColumns = this._bucketColumns;
    }
    if (this._compressed) {
      hasAnyValues = true;
      internalValueResult.compressed = this._compressed;
    }
    if (this._inputFormat) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._location) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._numberOfBuckets) {
      hasAnyValues = true;
      internalValueResult.numberOfBuckets = this._numberOfBuckets;
    }
    if (this._outputFormat) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._parameters) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storedAsSubDirectories) {
      hasAnyValues = true;
      internalValueResult.storedAsSubDirectories = this._storedAsSubDirectories;
    }
    if (this._columns) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._serDeInfo) {
      hasAnyValues = true;
      internalValueResult.serDeInfo = this._serDeInfo?.internalValue;
    }
    if (this._skewedInfo) {
      hasAnyValues = true;
      internalValueResult.skewedInfo = this._skewedInfo?.internalValue;
    }
    if (this._sortColumns) {
      hasAnyValues = true;
      internalValueResult.sortColumns = this._sortColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GluePartitionStorageDescriptor | undefined) {
    if (value === undefined) {
      this._bucketColumns = undefined;
      this._compressed = undefined;
      this._inputFormat = undefined;
      this._location = undefined;
      this._numberOfBuckets = undefined;
      this._outputFormat = undefined;
      this._parameters = undefined;
      this._storedAsSubDirectories = undefined;
      this._columns = undefined;
      this._serDeInfo.internalValue = undefined;
      this._skewedInfo.internalValue = undefined;
      this._sortColumns = undefined;
    }
    else {
      this._bucketColumns = value.bucketColumns;
      this._compressed = value.compressed;
      this._inputFormat = value.inputFormat;
      this._location = value.location;
      this._numberOfBuckets = value.numberOfBuckets;
      this._outputFormat = value.outputFormat;
      this._parameters = value.parameters;
      this._storedAsSubDirectories = value.storedAsSubDirectories;
      this._columns = value.columns;
      this._serDeInfo.internalValue = value.serDeInfo;
      this._skewedInfo.internalValue = value.skewedInfo;
      this._sortColumns = value.sortColumns;
    }
  }

  // bucket_columns - computed: false, optional: true, required: false
  private _bucketColumns?: string[]; 
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }
  public set bucketColumns(value: string[]) {
    this._bucketColumns = value;
  }
  public resetBucketColumns() {
    this._bucketColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColumnsInput() {
    return this._bucketColumns;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed') as any;
  }
  public set compressed(value: boolean | cdktf.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
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

  // number_of_buckets - computed: false, optional: true, required: false
  private _numberOfBuckets?: number; 
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }
  public set numberOfBuckets(value: number) {
    this._numberOfBuckets = value;
  }
  public resetNumberOfBuckets() {
    this._numberOfBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBucketsInput() {
    return this._numberOfBuckets;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stored_as_sub_directories - computed: false, optional: true, required: false
  private _storedAsSubDirectories?: boolean | cdktf.IResolvable; 
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories') as any;
  }
  public set storedAsSubDirectories(value: boolean | cdktf.IResolvable) {
    this._storedAsSubDirectories = value;
  }
  public resetStoredAsSubDirectories() {
    this._storedAsSubDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirectoriesInput() {
    return this._storedAsSubDirectories;
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: GluePartitionStorageDescriptorColumns[]; 
  public get columns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('columns') as any;
  }
  public set columns(value: GluePartitionStorageDescriptorColumns[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // ser_de_info - computed: false, optional: true, required: false
  private _serDeInfo = new GluePartitionStorageDescriptorSerDeInfoOutputReference(this as any, "ser_de_info", true);
  public get serDeInfo() {
    return this._serDeInfo;
  }
  public putSerDeInfo(value: GluePartitionStorageDescriptorSerDeInfo) {
    this._serDeInfo.internalValue = value;
  }
  public resetSerDeInfo() {
    this._serDeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serDeInfoInput() {
    return this._serDeInfo.internalValue;
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo = new GluePartitionStorageDescriptorSkewedInfoOutputReference(this as any, "skewed_info", true);
  public get skewedInfo() {
    return this._skewedInfo;
  }
  public putSkewedInfo(value: GluePartitionStorageDescriptorSkewedInfo) {
    this._skewedInfo.internalValue = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo.internalValue;
  }

  // sort_columns - computed: false, optional: true, required: false
  private _sortColumns?: GluePartitionStorageDescriptorSortColumns[]; 
  public get sortColumns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sort_columns') as any;
  }
  public set sortColumns(value: GluePartitionStorageDescriptorSortColumns[]) {
    this._sortColumns = value;
  }
  public resetSortColumns() {
    this._sortColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnsInput() {
    return this._sortColumns;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}
*/
export class GluePartition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_partition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GluePartitionConfig
  */
  public constructor(scope: Construct, id: string, config: GluePartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_partition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._parameters = config.parameters;
    this._partitionValues = config.partitionValues;
    this._tableName = config.tableName;
    this._storageDescriptor.internalValue = config.storageDescriptor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_accessed_time - computed: true, optional: false, required: false
  public get lastAccessedTime() {
    return this.getStringAttribute('last_accessed_time');
  }

  // last_analyzed_time - computed: true, optional: false, required: false
  public get lastAnalyzedTime() {
    return this.getStringAttribute('last_analyzed_time');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // partition_values - computed: false, optional: false, required: true
  private _partitionValues?: string[]; 
  public get partitionValues() {
    return this.getListAttribute('partition_values');
  }
  public set partitionValues(value: string[]) {
    this._partitionValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionValuesInput() {
    return this._partitionValues;
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

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor = new GluePartitionStorageDescriptorOutputReference(this as any, "storage_descriptor", true);
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GluePartitionStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      partition_values: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionValues),
      table_name: cdktf.stringToTerraform(this._tableName),
      storage_descriptor: gluePartitionStorageDescriptorToTerraform(this._storageDescriptor.internalValue),
    };
  }
}
