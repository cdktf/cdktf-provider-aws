// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DynamoDB
*/
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#table_class DynamodbTable#table_class}
  */
  readonly tableClass?: string;
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

export function dynamodbTableAttributeToTerraform(struct?: DynamodbTableAttribute): any {
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

export function dynamodbTableGlobalSecondaryIndexToTerraform(struct?: DynamodbTableGlobalSecondaryIndex): any {
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

export function dynamodbTableLocalSecondaryIndexToTerraform(struct?: DynamodbTableLocalSecondaryIndex): any {
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

export function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class DynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DynamodbTablePointInTimeRecovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTablePointInTimeRecovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
    return this._enabled;
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

export function dynamodbTableReplicaToTerraform(struct?: DynamodbTableReplica): any {
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

export function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DynamodbTableServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyArn) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._kmsKeyArn = value.kmsKeyArn;
    }
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
    return this._enabled;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

export function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeoutsOutputReference | DynamodbTableTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DynamodbTableTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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

export function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DynamodbTableTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyArn) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeName = undefined;
      this._enabled = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeName = value.attributeName;
      this._enabled = value.enabled;
      this._kmsKeyArn = value.kmsKeyArn;
    }
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
    return this._attributeName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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
    this._tableClass = config.tableClass;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._writeCapacity = config.writeCapacity;
    this._attribute = config.attribute;
    this._globalSecondaryIndex = config.globalSecondaryIndex;
    this._localSecondaryIndex = config.localSecondaryIndex;
    this._pointInTimeRecovery.internalValue = config.pointInTimeRecovery;
    this._replica = config.replica;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
    this._timeouts.internalValue = config.timeouts;
    this._ttl.internalValue = config.ttl;
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
  public set billingMode(value: string) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
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
    return this._hashKey;
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
    return this._name;
  }

  // range_key - computed: false, optional: true, required: false
  private _rangeKey?: string; 
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
  public set rangeKey(value: string) {
    this._rangeKey = value;
  }
  public resetRangeKey() {
    this._rangeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyInput() {
    return this._rangeKey;
  }

  // read_capacity - computed: false, optional: true, required: false
  private _readCapacity?: number; 
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }
  public set readCapacity(value: number) {
    this._readCapacity = value;
  }
  public resetReadCapacity() {
    this._readCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readCapacityInput() {
    return this._readCapacity;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: false, optional: true, required: false
  private _streamEnabled?: boolean | cdktf.IResolvable; 
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled') as any;
  }
  public set streamEnabled(value: boolean | cdktf.IResolvable) {
    this._streamEnabled = value;
  }
  public resetStreamEnabled() {
    this._streamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEnabledInput() {
    return this._streamEnabled;
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
    return this._streamViewType;
  }

  // table_class - computed: false, optional: true, required: false
  private _tableClass?: string; 
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }
  public set tableClass(value: string) {
    this._tableClass = value;
  }
  public resetTableClass() {
    this._tableClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableClassInput() {
    return this._tableClass;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // write_capacity - computed: false, optional: true, required: false
  private _writeCapacity?: number; 
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }
  public set writeCapacity(value: number) {
    this._writeCapacity = value;
  }
  public resetWriteCapacity() {
    this._writeCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCapacityInput() {
    return this._writeCapacity;
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
    return this._attribute;
  }

  // global_secondary_index - computed: false, optional: true, required: false
  private _globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[]; 
  public get globalSecondaryIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('global_secondary_index') as any;
  }
  public set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[]) {
    this._globalSecondaryIndex = value;
  }
  public resetGlobalSecondaryIndex() {
    this._globalSecondaryIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexInput() {
    return this._globalSecondaryIndex;
  }

  // local_secondary_index - computed: false, optional: true, required: false
  private _localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[]; 
  public get localSecondaryIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local_secondary_index') as any;
  }
  public set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[]) {
    this._localSecondaryIndex = value;
  }
  public resetLocalSecondaryIndex() {
    this._localSecondaryIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecondaryIndexInput() {
    return this._localSecondaryIndex;
  }

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery = new DynamodbTablePointInTimeRecoveryOutputReference(this as any, "point_in_time_recovery", true);
  public get pointInTimeRecovery() {
    return this._pointInTimeRecovery;
  }
  public putPointInTimeRecovery(value: DynamodbTablePointInTimeRecovery) {
    this._pointInTimeRecovery.internalValue = value;
  }
  public resetPointInTimeRecovery() {
    this._pointInTimeRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryInput() {
    return this._pointInTimeRecovery.internalValue;
  }

  // replica - computed: false, optional: true, required: false
  private _replica?: DynamodbTableReplica[]; 
  public get replica() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('replica') as any;
  }
  public set replica(value: DynamodbTableReplica[]) {
    this._replica = value;
  }
  public resetReplica() {
    this._replica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new DynamodbTableServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: DynamodbTableServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DynamodbTableTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynamodbTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new DynamodbTableTtlOutputReference(this as any, "ttl", true);
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: DynamodbTableTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
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
      table_class: cdktf.stringToTerraform(this._tableClass),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      write_capacity: cdktf.numberToTerraform(this._writeCapacity),
      attribute: cdktf.listMapper(dynamodbTableAttributeToTerraform)(this._attribute),
      global_secondary_index: cdktf.listMapper(dynamodbTableGlobalSecondaryIndexToTerraform)(this._globalSecondaryIndex),
      local_secondary_index: cdktf.listMapper(dynamodbTableLocalSecondaryIndexToTerraform)(this._localSecondaryIndex),
      point_in_time_recovery: dynamodbTablePointInTimeRecoveryToTerraform(this._pointInTimeRecovery.internalValue),
      replica: cdktf.listMapper(dynamodbTableReplicaToTerraform)(this._replica),
      server_side_encryption: dynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
      timeouts: dynamodbTableTimeoutsToTerraform(this._timeouts.internalValue),
      ttl: dynamodbTableTtlToTerraform(this._ttl.internalValue),
    };
  }
}
