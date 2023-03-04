// https://www.terraform.io/docs/providers/aws/d/dynamodb_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#server_side_encryption DataAwsDynamodbTable#server_side_encryption}
  */
  readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption;
}
export interface DataAwsDynamodbTableAttribute {
}

export function dataAwsDynamodbTableAttributeToTerraform(struct?: DataAwsDynamodbTableAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTableAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsDynamodbTableAttributeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTableAttributeOutputReference {
    return new DataAwsDynamodbTableAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTableGlobalSecondaryIndex {
}

export function dataAwsDynamodbTableGlobalSecondaryIndexToTerraform(struct?: DataAwsDynamodbTableGlobalSecondaryIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableGlobalSecondaryIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTableGlobalSecondaryIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableGlobalSecondaryIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAwsDynamodbTableGlobalSecondaryIndexList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTableGlobalSecondaryIndexOutputReference {
    return new DataAwsDynamodbTableGlobalSecondaryIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTableLocalSecondaryIndex {
}

export function dataAwsDynamodbTableLocalSecondaryIndexToTerraform(struct?: DataAwsDynamodbTableLocalSecondaryIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableLocalSecondaryIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTableLocalSecondaryIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableLocalSecondaryIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
}

export class DataAwsDynamodbTableLocalSecondaryIndexList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTableLocalSecondaryIndexOutputReference {
    return new DataAwsDynamodbTableLocalSecondaryIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTablePointInTimeRecovery {
}

export function dataAwsDynamodbTablePointInTimeRecoveryToTerraform(struct?: DataAwsDynamodbTablePointInTimeRecovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTablePointInTimeRecovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTablePointInTimeRecovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsDynamodbTablePointInTimeRecoveryList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTablePointInTimeRecoveryOutputReference {
    return new DataAwsDynamodbTablePointInTimeRecoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTableReplica {
}

export function dataAwsDynamodbTableReplicaToTerraform(struct?: DataAwsDynamodbTableReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableReplicaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTableReplica | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableReplica | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class DataAwsDynamodbTableReplicaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTableReplicaOutputReference {
    return new DataAwsDynamodbTableReplicaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTableTtl {
}

export function dataAwsDynamodbTableTtlToTerraform(struct?: DataAwsDynamodbTableTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsDynamodbTableTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataAwsDynamodbTableTtlList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsDynamodbTableTtlOutputReference {
    return new DataAwsDynamodbTableTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsDynamodbTableServerSideEncryption {
}

export function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct?: DataAwsDynamodbTableServerSideEncryptionOutputReference | DataAwsDynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsDynamodbTableServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table aws_dynamodb_table}
*/
export class DataAwsDynamodbTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table aws_dynamodb_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDynamodbTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute - computed: true, optional: false, required: false
  private _attribute = new DataAwsDynamodbTableAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_index - computed: true, optional: false, required: false
  private _globalSecondaryIndex = new DataAwsDynamodbTableGlobalSecondaryIndexList(this, "global_secondary_index", true);
  public get globalSecondaryIndex() {
    return this._globalSecondaryIndex;
  }

  // hash_key - computed: true, optional: false, required: false
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_secondary_index - computed: true, optional: false, required: false
  private _localSecondaryIndex = new DataAwsDynamodbTableLocalSecondaryIndexList(this, "local_secondary_index", true);
  public get localSecondaryIndex() {
    return this._localSecondaryIndex;
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

  // point_in_time_recovery - computed: true, optional: false, required: false
  private _pointInTimeRecovery = new DataAwsDynamodbTablePointInTimeRecoveryList(this, "point_in_time_recovery", false);
  public get pointInTimeRecovery() {
    return this._pointInTimeRecovery;
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
  private _replica = new DataAwsDynamodbTableReplicaList(this, "replica", true);
  public get replica() {
    return this._replica;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: true, optional: false, required: false
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled');
  }

  // stream_label - computed: true, optional: false, required: false
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }

  // table_class - computed: true, optional: false, required: false
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: true, optional: false, required: false
  private _ttl = new DataAwsDynamodbTableTtlList(this, "ttl", true);
  public get ttl() {
    return this._ttl;
  }

  // write_capacity - computed: true, optional: false, required: false
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new DataAwsDynamodbTableServerSideEncryptionOutputReference(this, "server_side_encryption");
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: DataAwsDynamodbTableServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      server_side_encryption: dataAwsDynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
    };
  }
}
