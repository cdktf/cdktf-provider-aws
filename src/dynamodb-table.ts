// https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery[];
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
  readonly serverSideEncryption?: DynamodbTableServerSideEncryption[];
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
  readonly ttl?: DynamodbTableTtl[];
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

function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecovery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
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

function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
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

function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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

function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
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
  private _billingMode?: string;
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }
  public set billingMode(value: string ) {
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
  private _hashKey: string;
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

  // range_key - computed: false, optional: true, required: false
  private _rangeKey?: string;
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
  public set rangeKey(value: string ) {
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
  private _readCapacity?: number;
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }
  public set readCapacity(value: number ) {
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
  private _streamEnabled?: boolean | cdktf.IResolvable;
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled');
  }
  public set streamEnabled(value: boolean | cdktf.IResolvable ) {
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
  private _streamViewType?: string;
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
  public set streamViewType(value: string) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _writeCapacity?: number;
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }
  public set writeCapacity(value: number ) {
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
  private _attribute: DynamodbTableAttribute[];
  public get attribute() {
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
  private _globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
  public get globalSecondaryIndex() {
    return this.interpolationForAttribute('global_secondary_index') as any;
  }
  public set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[] ) {
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
  private _localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
  public get localSecondaryIndex() {
    return this.interpolationForAttribute('local_secondary_index') as any;
  }
  public set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[] ) {
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
  private _pointInTimeRecovery?: DynamodbTablePointInTimeRecovery[];
  public get pointInTimeRecovery() {
    return this.interpolationForAttribute('point_in_time_recovery') as any;
  }
  public set pointInTimeRecovery(value: DynamodbTablePointInTimeRecovery[] ) {
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
  private _replica?: DynamodbTableReplica[];
  public get replica() {
    return this.interpolationForAttribute('replica') as any;
  }
  public set replica(value: DynamodbTableReplica[] ) {
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
  private _serverSideEncryption?: DynamodbTableServerSideEncryption[];
  public get serverSideEncryption() {
    return this.interpolationForAttribute('server_side_encryption') as any;
  }
  public set serverSideEncryption(value: DynamodbTableServerSideEncryption[] ) {
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
  private _timeouts?: DynamodbTableTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DynamodbTableTimeouts ) {
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
  private _ttl?: DynamodbTableTtl[];
  public get ttl() {
    return this.interpolationForAttribute('ttl') as any;
  }
  public set ttl(value: DynamodbTableTtl[] ) {
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
      point_in_time_recovery: cdktf.listMapper(dynamodbTablePointInTimeRecoveryToTerraform)(this._pointInTimeRecovery),
      replica: cdktf.listMapper(dynamodbTableReplicaToTerraform)(this._replica),
      server_side_encryption: cdktf.listMapper(dynamodbTableServerSideEncryptionToTerraform)(this._serverSideEncryption),
      timeouts: dynamodbTableTimeoutsToTerraform(this._timeouts),
      ttl: cdktf.listMapper(dynamodbTableTtlToTerraform)(this._ttl),
    };
  }
}
