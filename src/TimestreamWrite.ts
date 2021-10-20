// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Timestream Write
*/
export namespace TimestreamWrite {
  export interface TimestreamwriteDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html#database_name TimestreamwriteDatabase#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html#kms_key_id TimestreamwriteDatabase#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html#tags TimestreamwriteDatabase#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html#tags_all TimestreamwriteDatabase#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html aws_timestreamwrite_database}
  */
  export class TimestreamwriteDatabase extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_timestreamwrite_database";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_database.html aws_timestreamwrite_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteDatabaseConfig
    */
    public constructor(scope: Construct, id: string, config: TimestreamwriteDatabaseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_timestreamwrite_database',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._databaseName = config.databaseName;
      this._kmsKeyId = config.kmsKeyId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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
      return this._databaseName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // table_count - computed: true, optional: false, required: false
    public get tableCount() {
      return this.getNumberAttribute('table_count');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        database_name: cdktf.stringToTerraform(this._databaseName),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface TimestreamwriteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#database_name TimestreamwriteTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#table_name TimestreamwriteTable#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags TimestreamwriteTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#tags_all TimestreamwriteTable#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * retention_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#retention_properties TimestreamwriteTable#retention_properties}
    */
    readonly retentionProperties?: TimestreamwriteTableRetentionProperties;
  }
  export interface TimestreamwriteTableRetentionProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#magnetic_store_retention_period_in_days TimestreamwriteTable#magnetic_store_retention_period_in_days}
    */
    readonly magneticStoreRetentionPeriodInDays: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html#memory_store_retention_period_in_hours TimestreamwriteTable#memory_store_retention_period_in_hours}
    */
    readonly memoryStoreRetentionPeriodInHours: number;
  }

  function timestreamwriteTableRetentionPropertiesToTerraform(struct?: TimestreamwriteTableRetentionPropertiesOutputReference | TimestreamwriteTableRetentionProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct!.magneticStoreRetentionPeriodInDays),
      memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct!.memoryStoreRetentionPeriodInHours),
    }
  }

  export class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // magnetic_store_retention_period_in_days - computed: false, optional: false, required: true
    private _magneticStoreRetentionPeriodInDays?: number; 
    public get magneticStoreRetentionPeriodInDays() {
      return this.getNumberAttribute('magnetic_store_retention_period_in_days');
    }
    public set magneticStoreRetentionPeriodInDays(value: number) {
      this._magneticStoreRetentionPeriodInDays = value;
    }
    // Temporarily expose input value. Use with caution.
    public get magneticStoreRetentionPeriodInDaysInput() {
      return this._magneticStoreRetentionPeriodInDays
    }

    // memory_store_retention_period_in_hours - computed: false, optional: false, required: true
    private _memoryStoreRetentionPeriodInHours?: number; 
    public get memoryStoreRetentionPeriodInHours() {
      return this.getNumberAttribute('memory_store_retention_period_in_hours');
    }
    public set memoryStoreRetentionPeriodInHours(value: number) {
      this._memoryStoreRetentionPeriodInHours = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryStoreRetentionPeriodInHoursInput() {
      return this._memoryStoreRetentionPeriodInHours
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table}
  */
  export class TimestreamwriteTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_timestreamwrite_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
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
    private _databaseName?: string; 
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
    private _tableName?: string; 
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _retentionProperties?: TimestreamwriteTableRetentionProperties | undefined; 
    private __retentionPropertiesOutput = new TimestreamwriteTableRetentionPropertiesOutputReference(this as any, "retention_properties", true);
    public get retentionProperties() {
      return this.__retentionPropertiesOutput;
    }
    public putRetentionProperties(value: TimestreamwriteTableRetentionProperties | undefined) {
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
        retention_properties: timestreamwriteTableRetentionPropertiesToTerraform(this._retentionProperties),
      };
    }
  }
}
