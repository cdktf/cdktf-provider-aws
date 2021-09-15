// https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#description GlueCatalogTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#owner GlueCatalogTable#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#retention GlueCatalogTable#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#table_type GlueCatalogTable#table_type}
  */
  readonly tableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_expanded_text GlueCatalogTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_original_text GlueCatalogTable#view_original_text}
  */
  readonly viewOriginalText?: string;
  /**
  * partition_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_index GlueCatalogTable#partition_index}
  */
  readonly partitionIndex?: GlueCatalogTablePartitionIndex[];
  /**
  * partition_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_keys GlueCatalogTable#partition_keys}
  */
  readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
  /**
  * storage_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#storage_descriptor GlueCatalogTable#storage_descriptor}
  */
  readonly storageDescriptor?: GlueCatalogTableStorageDescriptor[];
  /**
  * target_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#target_table GlueCatalogTable#target_table}
  */
  readonly targetTable?: GlueCatalogTableTargetTable[];
}
export interface GlueCatalogTablePartitionIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#index_name GlueCatalogTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#keys GlueCatalogTable#keys}
  */
  readonly keys: string[];
}

function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
  }
}

export interface GlueCatalogTablePartitionKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GlueCatalogTableStorageDescriptorColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#registry_name GlueCatalogTable#registry_name}
  */
  readonly registryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_arn GlueCatalogTable#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_name GlueCatalogTable#schema_name}
  */
  readonly schemaName?: string;
}

function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    schema_arn: cdktf.stringToTerraform(struct!.schemaArn),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}

export interface GlueCatalogTableStorageDescriptorSchemaReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_id GlueCatalogTable#schema_version_id}
  */
  readonly schemaVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_number GlueCatalogTable#schema_version_number}
  */
  readonly schemaVersionNumber: number;
  /**
  * schema_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_id GlueCatalogTable#schema_id}
  */
  readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId[];
}

function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schema_version_id: cdktf.stringToTerraform(struct!.schemaVersionId),
    schema_version_number: cdktf.numberToTerraform(struct!.schemaVersionNumber),
    schema_id: cdktf.listMapper(glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform)(struct!.schemaId),
  }
}

export interface GlueCatalogTableStorageDescriptorSerDeInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#serialization_library GlueCatalogTable#serialization_library}
  */
  readonly serializationLibrary?: string;
}

function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
  }
}

export interface GlueCatalogTableStorageDescriptorSkewedInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_names GlueCatalogTable#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_values GlueCatalogTable#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
  }
}

export interface GlueCatalogTableStorageDescriptorSortColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#column GlueCatalogTable#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_order GlueCatalogTable#sort_order}
  */
  readonly sortOrder: number;
}

function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
  }
}

export interface GlueCatalogTableStorageDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#bucket_columns GlueCatalogTable#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#compressed GlueCatalogTable#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#input_format GlueCatalogTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#location GlueCatalogTable#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#number_of_buckets GlueCatalogTable#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#output_format GlueCatalogTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#columns GlueCatalogTable#columns}
  */
  readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
  /**
  * schema_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_reference GlueCatalogTable#schema_reference}
  */
  readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference[];
  /**
  * ser_de_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#ser_de_info GlueCatalogTable#ser_de_info}
  */
  readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo[];
  /**
  * skewed_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_info GlueCatalogTable#skewed_info}
  */
  readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo[];
  /**
  * sort_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_columns GlueCatalogTable#sort_columns}
  */
  readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
}

function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptor): any {
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
    columns: cdktf.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform)(struct!.columns),
    schema_reference: cdktf.listMapper(glueCatalogTableStorageDescriptorSchemaReferenceToTerraform)(struct!.schemaReference),
    ser_de_info: cdktf.listMapper(glueCatalogTableStorageDescriptorSerDeInfoToTerraform)(struct!.serDeInfo),
    skewed_info: cdktf.listMapper(glueCatalogTableStorageDescriptorSkewedInfoToTerraform)(struct!.skewedInfo),
    sort_columns: cdktf.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
  }
}

export interface GlueCatalogTableTargetTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
}

function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}
*/
export class GlueCatalogTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_catalog_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogTableConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table',
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
    this._description = config.description;
    this._name = config.name;
    this._owner = config.owner;
    this._parameters = config.parameters;
    this._retention = config.retention;
    this._tableType = config.tableType;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._partitionIndex = config.partitionIndex;
    this._partitionKeys = config.partitionKeys;
    this._storageDescriptor = config.storageDescriptor;
    this._targetTable = config.targetTable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string;
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string ) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
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

  // retention - computed: false, optional: true, required: false
  private _retention?: number;
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number ) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention
  }

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string;
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string ) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string;
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string ) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string;
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string ) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText
  }

  // partition_index - computed: false, optional: true, required: false
  private _partitionIndex?: GlueCatalogTablePartitionIndex[];
  public get partitionIndex() {
    return this.interpolationForAttribute('partition_index') as any;
  }
  public set partitionIndex(value: GlueCatalogTablePartitionIndex[] ) {
    this._partitionIndex = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys?: GlueCatalogTablePartitionKeys[];
  public get partitionKeys() {
    return this.interpolationForAttribute('partition_keys') as any;
  }
  public set partitionKeys(value: GlueCatalogTablePartitionKeys[] ) {
    this._partitionKeys = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GlueCatalogTableStorageDescriptor[];
  public get storageDescriptor() {
    return this.interpolationForAttribute('storage_descriptor') as any;
  }
  public set storageDescriptor(value: GlueCatalogTableStorageDescriptor[] ) {
    this._storageDescriptor = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor
  }

  // target_table - computed: false, optional: true, required: false
  private _targetTable?: GlueCatalogTableTargetTable[];
  public get targetTable() {
    return this.interpolationForAttribute('target_table') as any;
  }
  public set targetTable(value: GlueCatalogTableTargetTable[] ) {
    this._targetTable = value;
  }
  public resetTargetTable() {
    this._targetTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      retention: cdktf.numberToTerraform(this._retention),
      table_type: cdktf.stringToTerraform(this._tableType),
      view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
      view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
      partition_index: cdktf.listMapper(glueCatalogTablePartitionIndexToTerraform)(this._partitionIndex),
      partition_keys: cdktf.listMapper(glueCatalogTablePartitionKeysToTerraform)(this._partitionKeys),
      storage_descriptor: cdktf.listMapper(glueCatalogTableStorageDescriptorToTerraform)(this._storageDescriptor),
      target_table: cdktf.listMapper(glueCatalogTableTargetTableToTerraform)(this._targetTable),
    };
  }
}
