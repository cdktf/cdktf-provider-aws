// https://www.terraform.io/docs/providers/aws/r/glue_partition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GluePartitionConfig extends TerraformMetaArguments {
  readonly catalogId?: string;
  readonly databaseName: string;
  readonly parameters?: { [key: string]: string };
  readonly partitionValues: string[];
  readonly tableName: string;
  /** storage_descriptor block */
  readonly storageDescriptor?: GluePartitionStorageDescriptor[];
}
export interface GluePartitionStorageDescriptorColumns {
  readonly comment?: string;
  readonly name: string;
  readonly type?: string;
}
export interface GluePartitionStorageDescriptorSerDeInfo {
  readonly name?: string;
  readonly parameters?: { [key: string]: string };
  readonly serializationLibrary?: string;
}
export interface GluePartitionStorageDescriptorSkewedInfo {
  readonly skewedColumnNames?: string[];
  readonly skewedColumnValueLocationMaps?: { [key: string]: string };
  readonly skewedColumnValues?: string[];
}
export interface GluePartitionStorageDescriptorSortColumns {
  readonly column: string;
  readonly sortOrder: number;
}
export interface GluePartitionStorageDescriptor {
  readonly bucketColumns?: string[];
  readonly compressed?: boolean;
  readonly inputFormat?: string;
  readonly location?: string;
  readonly numberOfBuckets?: number;
  readonly outputFormat?: string;
  readonly parameters?: { [key: string]: string };
  readonly storedAsSubDirectories?: boolean;
  /** columns block */
  readonly columns?: GluePartitionStorageDescriptorColumns[];
  /** ser_de_info block */
  readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo[];
  /** skewed_info block */
  readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo[];
  /** sort_columns block */
  readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}

// Resource

export class GluePartition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._catalogId ?? this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_accessed_time - computed: true, optional: false, required: true
  public get lastAccessedTime() {
    return this.getStringAttribute('last_accessed_time');
  }

  // last_analyzed_time - computed: true, optional: false, required: true
  public get lastAnalyzedTime() {
    return this.getStringAttribute('last_analyzed_time');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // partition_values - computed: false, optional: false, required: true
  private _partitionValues: string[];
  public get partitionValues() {
    return this._partitionValues;
  }
  public set partitionValues(value: string[]) {
    this._partitionValues = value;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName: string;
  public get tableName() {
    return this._tableName;
  }
  public set tableName(value: string) {
    this._tableName = value;
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GluePartitionStorageDescriptor[];
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public set storageDescriptor(value: GluePartitionStorageDescriptor[] | undefined) {
    this._storageDescriptor = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      database_name: this._databaseName,
      parameters: this._parameters,
      partition_values: this._partitionValues,
      table_name: this._tableName,
      storage_descriptor: this._storageDescriptor,
    };
  }
}
