// https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GluePartitionIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#catalog_id GluePartitionIndex#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#database_name GluePartitionIndex#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#table_name GluePartitionIndex#table_name}
  */
  readonly tableName: string;
  /**
  * partition_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#partition_index GluePartitionIndex#partition_index}
  */
  readonly partitionIndex: GluePartitionIndexPartitionIndex[];
}
export interface GluePartitionIndexPartitionIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#index_name GluePartitionIndex#index_name}
  */
  readonly indexName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html#keys GluePartitionIndex#keys}
  */
  readonly keys?: string[];
}

function gluePartitionIndexPartitionIndexToTerraform(struct?: GluePartitionIndexPartitionIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index}
*/
export class GluePartitionIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_partition_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition_index.html aws_glue_partition_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GluePartitionIndexConfig
  */
  public constructor(scope: Construct, id: string, config: GluePartitionIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_partition_index',
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
    this._tableName = config.tableName;
    this._partitionIndex = config.partitionIndex;
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

  // partition_index - computed: false, optional: false, required: true
  private _partitionIndex: GluePartitionIndexPartitionIndex[];
  public get partitionIndex() {
    return this.interpolationForAttribute('partition_index') as any;
  }
  public set partitionIndex(value: GluePartitionIndexPartitionIndex[]) {
    this._partitionIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      table_name: cdktf.stringToTerraform(this._tableName),
      partition_index: cdktf.listMapper(gluePartitionIndexPartitionIndexToTerraform)(this._partitionIndex),
    };
  }
}
