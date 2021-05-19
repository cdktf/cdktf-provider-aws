// https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
  readonly databaseName: string;
  readonly tableName: string;
  readonly tags?: { [key: string]: string };
  readonly tagsAll?: { [key: string]: string };
  /** retention_properties block */
  readonly retentionProperties?: TimestreamwriteTableRetentionProperties[];
}
export interface TimestreamwriteTableRetentionProperties {
  readonly magneticStoreRetentionPeriodInDays: number;
  readonly memoryStoreRetentionPeriodInHours: number;
}

function timestreamwriteTableRetentionPropertiesToTerraform(struct?: TimestreamwriteTableRetentionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}


// Resource

export class TimestreamwriteTable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TimestreamwriteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreamwrite_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._tableName = config.tableName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._retentionProperties = config.retentionProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // retention_properties - computed: false, optional: true, required: false
  private _retentionProperties?: TimestreamwriteTableRetentionProperties[];
  public get retentionProperties() {
    return this.interpolationForAttribute('retention_properties') as any;
  }
  public set retentionProperties(value: TimestreamwriteTableRetentionProperties[] ) {
    this._retentionProperties = value;
  }
  public resetRetentionProperties() {
    this._retentionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPropertiesInput() {
    return this._retentionProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      table_name: cdktf.stringToTerraform(this._tableName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      retention_properties: cdktf.listMapper(timestreamwriteTableRetentionPropertiesToTerraform)(this._retentionProperties),
    };
  }
}
