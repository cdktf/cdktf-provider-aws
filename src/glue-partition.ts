// https://www.terraform.io/docs/providers/aws/r/glue_partition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly storageDescriptor?: GluePartitionStorageDescriptor[];
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

function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
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

function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
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

function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo[];
  /**
  * skewed_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
  */
  readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo[];
  /**
  * sort_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
  */
  readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}

function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    ser_de_info: cdktf.listMapper(gluePartitionStorageDescriptorSerDeInfoToTerraform)(struct!.serDeInfo),
    skewed_info: cdktf.listMapper(gluePartitionStorageDescriptorSkewedInfoToTerraform)(struct!.skewedInfo),
    sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
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
    this._storageDescriptor = config.storageDescriptor;
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
    return this._catalogId
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
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
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // partition_values - computed: false, optional: false, required: true
  private _partitionValues: string[];
  public get partitionValues() {
    return this.getListAttribute('partition_values');
  }
  public set partitionValues(value: string[]) {
    this._partitionValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionValuesInput() {
    return this._partitionValues
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GluePartitionStorageDescriptor[];
  public get storageDescriptor() {
    return this.interpolationForAttribute('storage_descriptor') as any;
  }
  public set storageDescriptor(value: GluePartitionStorageDescriptor[] ) {
    this._storageDescriptor = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor
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
      storage_descriptor: cdktf.listMapper(gluePartitionStorageDescriptorToTerraform)(this._storageDescriptor),
    };
  }
}
