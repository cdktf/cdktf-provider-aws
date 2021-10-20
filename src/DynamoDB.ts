// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DynamoDB
*/
export namespace DynamoDB {
  export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#name DynamodbGlobalTable#name}
    */
    readonly name: string;
    /**
    * replica block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#replica DynamodbGlobalTable#replica}
    */
    readonly replica: DynamodbGlobalTableReplica[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#timeouts DynamodbGlobalTable#timeouts}
    */
    readonly timeouts?: DynamodbGlobalTableTimeouts;
  }
  export interface DynamodbGlobalTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#region_name DynamodbGlobalTable#region_name}
    */
    readonly regionName: string;
  }

  function dynamodbGlobalTableReplicaToTerraform(struct?: DynamodbGlobalTableReplica): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      region_name: cdktf.stringToTerraform(struct!.regionName),
    }
  }

  export interface DynamodbGlobalTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#create DynamodbGlobalTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#delete DynamodbGlobalTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#update DynamodbGlobalTable#update}
    */
    readonly update?: string;
  }

  function dynamodbGlobalTableTimeoutsToTerraform(struct?: DynamodbGlobalTableTimeoutsOutputReference | DynamodbGlobalTableTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DynamodbGlobalTableTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table}
  */
  export class DynamodbGlobalTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_global_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbGlobalTableConfig
    */
    public constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_global_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._replica = config.replica;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // replica - computed: false, optional: false, required: true
    private _replica?: DynamodbGlobalTableReplica[]; 
    public get replica() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('replica') as any;
    }
    public set replica(value: DynamodbGlobalTableReplica[]) {
      this._replica = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaInput() {
      return this._replica
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DynamodbGlobalTableTimeouts | undefined; 
    private __timeoutsOutput = new DynamodbGlobalTableTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DynamodbGlobalTableTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        replica: cdktf.listMapper(dynamodbGlobalTableReplicaToTerraform)(this._replica),
        timeouts: dynamodbGlobalTableTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DynamodbKinesisStreamingDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html#stream_arn DynamodbKinesisStreamingDestination#stream_arn}
    */
    readonly streamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html#table_name DynamodbKinesisStreamingDestination#table_name}
    */
    readonly tableName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination}
  */
  export class DynamodbKinesisStreamingDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_kinesis_streaming_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_kinesis_streaming_destination.html aws_dynamodb_kinesis_streaming_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbKinesisStreamingDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: DynamodbKinesisStreamingDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_kinesis_streaming_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._streamArn = config.streamArn;
      this._tableName = config.tableName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn?: string; 
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        stream_arn: cdktf.stringToTerraform(this._streamArn),
        table_name: cdktf.stringToTerraform(this._tableName),
      };
    }
  }
  export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#billing_mode DynamodbTable#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_enabled DynamodbTable#stream_enabled}
    */
    readonly streamEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_view_type DynamodbTable#stream_view_type}
    */
    readonly streamViewType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags DynamodbTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags_all DynamodbTable#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
    /**
    * attribute block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute DynamodbTable#attribute}
    */
    readonly attribute: DynamodbTableAttribute[];
    /**
    * global_secondary_index block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#global_secondary_index DynamodbTable#global_secondary_index}
    */
    readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
    /**
    * local_secondary_index block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#local_secondary_index DynamodbTable#local_secondary_index}
    */
    readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
    /**
    * point_in_time_recovery block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#point_in_time_recovery DynamodbTable#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery;
    /**
    * replica block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#replica DynamodbTable#replica}
    */
    readonly replica?: DynamodbTableReplica[];
    /**
    * server_side_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#server_side_encryption DynamodbTable#server_side_encryption}
    */
    readonly serverSideEncryption?: DynamodbTableServerSideEncryption;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#timeouts DynamodbTable#timeouts}
    */
    readonly timeouts?: DynamodbTableTimeouts;
    /**
    * ttl block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#ttl DynamodbTable#ttl}
    */
    readonly ttl?: DynamodbTableTtl;
  }
  export interface DynamodbTableAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#type DynamodbTable#type}
    */
    readonly type: string;
  }

  function dynamodbTableAttributeToTerraform(struct?: DynamodbTableAttribute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface DynamodbTableGlobalSecondaryIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
  }

  function dynamodbTableGlobalSecondaryIndexToTerraform(struct?: DynamodbTableGlobalSecondaryIndex): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      hash_key: cdktf.stringToTerraform(struct!.hashKey),
      name: cdktf.stringToTerraform(struct!.name),
      non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
      projection_type: cdktf.stringToTerraform(struct!.projectionType),
      range_key: cdktf.stringToTerraform(struct!.rangeKey),
      read_capacity: cdktf.numberToTerraform(struct!.readCapacity),
      write_capacity: cdktf.numberToTerraform(struct!.writeCapacity),
    }
  }

  export interface DynamodbTableLocalSecondaryIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey: string;
  }

  function dynamodbTableLocalSecondaryIndexToTerraform(struct?: DynamodbTableLocalSecondaryIndex): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonKeyAttributes),
      projection_type: cdktf.stringToTerraform(struct!.projectionType),
      range_key: cdktf.stringToTerraform(struct!.rangeKey),
    }
  }

  export interface DynamodbTablePointInTimeRecovery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export class DynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }
  }
  export interface DynamodbTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#region_name DynamodbTable#region_name}
    */
    readonly regionName: string;
  }

  function dynamodbTableReplicaToTerraform(struct?: DynamodbTableReplica): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      region_name: cdktf.stringToTerraform(struct!.regionName),
    }
  }

  export interface DynamodbTableServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
  }

  function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    }
  }

  export class DynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: false, required: true
    private _enabled?: boolean | cdktf.IResolvable; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }
  }
  export interface DynamodbTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#create DynamodbTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#delete DynamodbTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#update DynamodbTable#update}
    */
    readonly update?: string;
  }

  function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeoutsOutputReference | DynamodbTableTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class DynamodbTableTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }
  export interface DynamodbTableTtl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute_name DynamodbTable#attribute_name}
    */
    readonly attributeName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
  }

  function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      attribute_name: cdktf.stringToTerraform(struct!.attributeName),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    }
  }

  export class DynamodbTableTtlOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // attribute_name - computed: false, optional: false, required: true
    private _attributeName?: string; 
    public get attributeName() {
      return this.getStringAttribute('attribute_name');
    }
    public set attributeName(value: string) {
      this._attributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeNameInput() {
      return this._attributeName
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table}
  */
  export class DynamodbTable extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableConfig
    */
    public constructor(scope: Construct, id: string, config: DynamodbTableConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._billingMode = config.billingMode;
      this._hashKey = config.hashKey;
      this._name = config.name;
      this._rangeKey = config.rangeKey;
      this._readCapacity = config.readCapacity;
      this._streamEnabled = config.streamEnabled;
      this._streamViewType = config.streamViewType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._writeCapacity = config.writeCapacity;
      this._attribute = config.attribute;
      this._globalSecondaryIndex = config.globalSecondaryIndex;
      this._localSecondaryIndex = config.localSecondaryIndex;
      this._pointInTimeRecovery = config.pointInTimeRecovery;
      this._replica = config.replica;
      this._serverSideEncryption = config.serverSideEncryption;
      this._timeouts = config.timeouts;
      this._ttl = config.ttl;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // billing_mode - computed: false, optional: true, required: false
    private _billingMode?: string | undefined; 
    public get billingMode() {
      return this.getStringAttribute('billing_mode');
    }
    public set billingMode(value: string | undefined) {
      this._billingMode = value;
    }
    public resetBillingMode() {
      this._billingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingModeInput() {
      return this._billingMode
    }

    // hash_key - computed: false, optional: false, required: true
    private _hashKey?: string; 
    public get hashKey() {
      return this.getStringAttribute('hash_key');
    }
    public set hashKey(value: string) {
      this._hashKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyInput() {
      return this._hashKey
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // range_key - computed: false, optional: true, required: false
    private _rangeKey?: string | undefined; 
    public get rangeKey() {
      return this.getStringAttribute('range_key');
    }
    public set rangeKey(value: string | undefined) {
      this._rangeKey = value;
    }
    public resetRangeKey() {
      this._rangeKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyInput() {
      return this._rangeKey
    }

    // read_capacity - computed: false, optional: true, required: false
    private _readCapacity?: number | undefined; 
    public get readCapacity() {
      return this.getNumberAttribute('read_capacity');
    }
    public set readCapacity(value: number | undefined) {
      this._readCapacity = value;
    }
    public resetReadCapacity() {
      this._readCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityInput() {
      return this._readCapacity
    }

    // stream_arn - computed: true, optional: false, required: false
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }

    // stream_enabled - computed: false, optional: true, required: false
    private _streamEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get streamEnabled() {
      return this.getBooleanAttribute('stream_enabled') as any;
    }
    public set streamEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._streamEnabled = value;
    }
    public resetStreamEnabled() {
      this._streamEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamEnabledInput() {
      return this._streamEnabled
    }

    // stream_label - computed: true, optional: false, required: false
    public get streamLabel() {
      return this.getStringAttribute('stream_label');
    }

    // stream_view_type - computed: true, optional: true, required: false
    private _streamViewType?: string | undefined; 
    public get streamViewType() {
      return this.getStringAttribute('stream_view_type');
    }
    public set streamViewType(value: string | undefined) {
      this._streamViewType = value;
    }
    public resetStreamViewType() {
      this._streamViewType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamViewTypeInput() {
      return this._streamViewType
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

    // write_capacity - computed: false, optional: true, required: false
    private _writeCapacity?: number | undefined; 
    public get writeCapacity() {
      return this.getNumberAttribute('write_capacity');
    }
    public set writeCapacity(value: number | undefined) {
      this._writeCapacity = value;
    }
    public resetWriteCapacity() {
      this._writeCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityInput() {
      return this._writeCapacity
    }

    // attribute - computed: false, optional: false, required: true
    private _attribute?: DynamodbTableAttribute[]; 
    public get attribute() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attribute') as any;
    }
    public set attribute(value: DynamodbTableAttribute[]) {
      this._attribute = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
      return this._attribute
    }

    // global_secondary_index - computed: false, optional: true, required: false
    private _globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[] | undefined; 
    public get globalSecondaryIndex() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('global_secondary_index') as any;
    }
    public set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[] | undefined) {
      this._globalSecondaryIndex = value;
    }
    public resetGlobalSecondaryIndex() {
      this._globalSecondaryIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalSecondaryIndexInput() {
      return this._globalSecondaryIndex
    }

    // local_secondary_index - computed: false, optional: true, required: false
    private _localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[] | undefined; 
    public get localSecondaryIndex() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('local_secondary_index') as any;
    }
    public set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[] | undefined) {
      this._localSecondaryIndex = value;
    }
    public resetLocalSecondaryIndex() {
      this._localSecondaryIndex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localSecondaryIndexInput() {
      return this._localSecondaryIndex
    }

    // point_in_time_recovery - computed: false, optional: true, required: false
    private _pointInTimeRecovery?: DynamodbTablePointInTimeRecovery | undefined; 
    private __pointInTimeRecoveryOutput = new DynamodbTablePointInTimeRecoveryOutputReference(this as any, "point_in_time_recovery", true);
    public get pointInTimeRecovery() {
      return this.__pointInTimeRecoveryOutput;
    }
    public putPointInTimeRecovery(value: DynamodbTablePointInTimeRecovery | undefined) {
      this._pointInTimeRecovery = value;
    }
    public resetPointInTimeRecovery() {
      this._pointInTimeRecovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeRecoveryInput() {
      return this._pointInTimeRecovery
    }

    // replica - computed: false, optional: true, required: false
    private _replica?: DynamodbTableReplica[] | undefined; 
    public get replica() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('replica') as any;
    }
    public set replica(value: DynamodbTableReplica[] | undefined) {
      this._replica = value;
    }
    public resetReplica() {
      this._replica = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaInput() {
      return this._replica
    }

    // server_side_encryption - computed: false, optional: true, required: false
    private _serverSideEncryption?: DynamodbTableServerSideEncryption | undefined; 
    private __serverSideEncryptionOutput = new DynamodbTableServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
    public get serverSideEncryption() {
      return this.__serverSideEncryptionOutput;
    }
    public putServerSideEncryption(value: DynamodbTableServerSideEncryption | undefined) {
      this._serverSideEncryption = value;
    }
    public resetServerSideEncryption() {
      this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionInput() {
      return this._serverSideEncryption
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DynamodbTableTimeouts | undefined; 
    private __timeoutsOutput = new DynamodbTableTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: DynamodbTableTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // ttl - computed: false, optional: true, required: false
    private _ttl?: DynamodbTableTtl | undefined; 
    private __ttlOutput = new DynamodbTableTtlOutputReference(this as any, "ttl", true);
    public get ttl() {
      return this.__ttlOutput;
    }
    public putTtl(value: DynamodbTableTtl | undefined) {
      this._ttl = value;
    }
    public resetTtl() {
      this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
      return this._ttl
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        billing_mode: cdktf.stringToTerraform(this._billingMode),
        hash_key: cdktf.stringToTerraform(this._hashKey),
        name: cdktf.stringToTerraform(this._name),
        range_key: cdktf.stringToTerraform(this._rangeKey),
        read_capacity: cdktf.numberToTerraform(this._readCapacity),
        stream_enabled: cdktf.booleanToTerraform(this._streamEnabled),
        stream_view_type: cdktf.stringToTerraform(this._streamViewType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        write_capacity: cdktf.numberToTerraform(this._writeCapacity),
        attribute: cdktf.listMapper(dynamodbTableAttributeToTerraform)(this._attribute),
        global_secondary_index: cdktf.listMapper(dynamodbTableGlobalSecondaryIndexToTerraform)(this._globalSecondaryIndex),
        local_secondary_index: cdktf.listMapper(dynamodbTableLocalSecondaryIndexToTerraform)(this._localSecondaryIndex),
        point_in_time_recovery: dynamodbTablePointInTimeRecoveryToTerraform(this._pointInTimeRecovery),
        replica: cdktf.listMapper(dynamodbTableReplicaToTerraform)(this._replica),
        server_side_encryption: dynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption),
        timeouts: dynamodbTableTimeoutsToTerraform(this._timeouts),
        ttl: dynamodbTableTtlToTerraform(this._ttl),
      };
    }
  }
  export interface DynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#hash_key DynamodbTableItem#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#item DynamodbTableItem#item}
    */
    readonly item: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#range_key DynamodbTableItem#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html#table_name DynamodbTableItem#table_name}
    */
    readonly tableName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item}
  */
  export class DynamodbTableItem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_table_item";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table_item.html aws_dynamodb_table_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableItemConfig
    */
    public constructor(scope: Construct, id: string, config: DynamodbTableItemConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_table_item',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._hashKey = config.hashKey;
      this._item = config.item;
      this._rangeKey = config.rangeKey;
      this._tableName = config.tableName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // hash_key - computed: false, optional: false, required: true
    private _hashKey?: string; 
    public get hashKey() {
      return this.getStringAttribute('hash_key');
    }
    public set hashKey(value: string) {
      this._hashKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hashKeyInput() {
      return this._hashKey
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // item - computed: false, optional: false, required: true
    private _item?: string; 
    public get item() {
      return this.getStringAttribute('item');
    }
    public set item(value: string) {
      this._item = value;
    }
    // Temporarily expose input value. Use with caution.
    public get itemInput() {
      return this._item
    }

    // range_key - computed: false, optional: true, required: false
    private _rangeKey?: string | undefined; 
    public get rangeKey() {
      return this.getStringAttribute('range_key');
    }
    public set rangeKey(value: string | undefined) {
      this._rangeKey = value;
    }
    public resetRangeKey() {
      this._rangeKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeKeyInput() {
      return this._rangeKey
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        hash_key: cdktf.stringToTerraform(this._hashKey),
        item: cdktf.stringToTerraform(this._item),
        range_key: cdktf.stringToTerraform(this._rangeKey),
        table_name: cdktf.stringToTerraform(this._tableName),
      };
    }
  }
  export interface DynamodbTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#key DynamodbTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#resource_arn DynamodbTag#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#value DynamodbTag#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag}
  */
  export class DynamodbTag extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_tag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTagConfig
    */
    public constructor(scope: Construct, id: string, config: DynamodbTagConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_tag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._key = config.key;
      this._resourceArn = config.resourceArn;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn?: string; 
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key: cdktf.stringToTerraform(this._key),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#name DataAwsDynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#tags DataAwsDynamodbTable#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * server_side_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#server_side_encryption DataAwsDynamodbTable#server_side_encryption}
    */
    readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption;
  }
  export class DataAwsDynamodbTableAttribute extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export class DataAwsDynamodbTableGlobalSecondaryIndex extends cdktf.ComplexComputedList {

    // hash_key - computed: true, optional: false, required: false
    public get hashKey() {
      return this.getStringAttribute('hash_key');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // non_key_attributes - computed: true, optional: false, required: false
    public get nonKeyAttributes() {
      return this.getListAttribute('non_key_attributes');
    }

    // projection_type - computed: true, optional: false, required: false
    public get projectionType() {
      return this.getStringAttribute('projection_type');
    }

    // range_key - computed: true, optional: false, required: false
    public get rangeKey() {
      return this.getStringAttribute('range_key');
    }

    // read_capacity - computed: true, optional: false, required: false
    public get readCapacity() {
      return this.getNumberAttribute('read_capacity');
    }

    // write_capacity - computed: true, optional: false, required: false
    public get writeCapacity() {
      return this.getNumberAttribute('write_capacity');
    }
  }
  export class DataAwsDynamodbTableLocalSecondaryIndex extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // non_key_attributes - computed: true, optional: false, required: false
    public get nonKeyAttributes() {
      return this.getListAttribute('non_key_attributes');
    }

    // projection_type - computed: true, optional: false, required: false
    public get projectionType() {
      return this.getStringAttribute('projection_type');
    }

    // range_key - computed: true, optional: false, required: false
    public get rangeKey() {
      return this.getStringAttribute('range_key');
    }
  }
  export class DataAwsDynamodbTablePointInTimeRecovery extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export class DataAwsDynamodbTableReplica extends cdktf.ComplexComputedList {

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }

    // region_name - computed: true, optional: false, required: false
    public get regionName() {
      return this.getStringAttribute('region_name');
    }
  }
  export class DataAwsDynamodbTableTtl extends cdktf.ComplexComputedList {

    // attribute_name - computed: true, optional: false, required: false
    public get attributeName() {
      return this.getStringAttribute('attribute_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export interface DataAwsDynamodbTableServerSideEncryption {
  }

  function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct?: DataAwsDynamodbTableServerSideEncryptionOutputReference | DataAwsDynamodbTableServerSideEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
    }
  }

  export class DataAwsDynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table}
  */
  export class DataAwsDynamodbTable extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_dynamodb_table";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDynamodbTableConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_dynamodb_table',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._serverSideEncryption = config.serverSideEncryption;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // attribute - computed: true, optional: false, required: false
    public attribute(index: string) {
      return new DataAwsDynamodbTableAttribute(this, 'attribute', index);
    }

    // billing_mode - computed: true, optional: false, required: false
    public get billingMode() {
      return this.getStringAttribute('billing_mode');
    }

    // global_secondary_index - computed: true, optional: false, required: false
    public globalSecondaryIndex(index: string) {
      return new DataAwsDynamodbTableGlobalSecondaryIndex(this, 'global_secondary_index', index);
    }

    // hash_key - computed: true, optional: false, required: false
    public get hashKey() {
      return this.getStringAttribute('hash_key');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // local_secondary_index - computed: true, optional: false, required: false
    public localSecondaryIndex(index: string) {
      return new DataAwsDynamodbTableLocalSecondaryIndex(this, 'local_secondary_index', index);
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
      return this._name
    }

    // point_in_time_recovery - computed: true, optional: false, required: false
    public pointInTimeRecovery(index: string) {
      return new DataAwsDynamodbTablePointInTimeRecovery(this, 'point_in_time_recovery', index);
    }

    // range_key - computed: true, optional: false, required: false
    public get rangeKey() {
      return this.getStringAttribute('range_key');
    }

    // read_capacity - computed: true, optional: false, required: false
    public get readCapacity() {
      return this.getNumberAttribute('read_capacity');
    }

    // replica - computed: true, optional: false, required: false
    public replica(index: string) {
      return new DataAwsDynamodbTableReplica(this, 'replica', index);
    }

    // stream_arn - computed: true, optional: false, required: false
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }

    // stream_enabled - computed: true, optional: false, required: false
    public get streamEnabled() {
      return this.getBooleanAttribute('stream_enabled') as any;
    }

    // stream_label - computed: true, optional: false, required: false
    public get streamLabel() {
      return this.getStringAttribute('stream_label');
    }

    // stream_view_type - computed: true, optional: false, required: false
    public get streamViewType() {
      return this.getStringAttribute('stream_view_type');
    }

    // tags - computed: true, optional: true, required: false
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

    // ttl - computed: true, optional: false, required: false
    public ttl(index: string) {
      return new DataAwsDynamodbTableTtl(this, 'ttl', index);
    }

    // write_capacity - computed: true, optional: false, required: false
    public get writeCapacity() {
      return this.getNumberAttribute('write_capacity');
    }

    // server_side_encryption - computed: false, optional: true, required: false
    private _serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption | undefined; 
    private __serverSideEncryptionOutput = new DataAwsDynamodbTableServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
    public get serverSideEncryption() {
      return this.__serverSideEncryptionOutput;
    }
    public putServerSideEncryption(value: DataAwsDynamodbTableServerSideEncryption | undefined) {
      this._serverSideEncryption = value;
    }
    public resetServerSideEncryption() {
      this._serverSideEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionInput() {
      return this._serverSideEncryption
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        server_side_encryption: dataAwsDynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption),
      };
    }
  }
}
