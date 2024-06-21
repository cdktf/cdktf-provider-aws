// https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}
  */
  readonly billingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}
  */
  readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}
  */
  readonly hashKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#id DynamodbTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#name DynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
  */
  readonly rangeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}
  */
  readonly readCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}
  */
  readonly restoreDateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}
  */
  readonly restoreSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}
  */
  readonly restoreToLatestTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}
  */
  readonly streamEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}
  */
  readonly streamViewType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}
  */
  readonly tableClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}
  */
  readonly writeCapacity?: number;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#attribute DynamodbTable#attribute}
  */
  readonly attribute?: DynamodbTableAttribute[] | cdktf.IResolvable;
  /**
  * global_secondary_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}
  */
  readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable;
  /**
  * import_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#import_table DynamodbTable#import_table}
  */
  readonly importTable?: DynamodbTableImportTable;
  /**
  * local_secondary_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}
  */
  readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable;
  /**
  * point_in_time_recovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}
  */
  readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery;
  /**
  * replica block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#replica DynamodbTable#replica}
  */
  readonly replica?: DynamodbTableReplica[] | cdktf.IResolvable;
  /**
  * server_side_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}
  */
  readonly serverSideEncryption?: DynamodbTableServerSideEncryption;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#timeouts DynamodbTable#timeouts}
  */
  readonly timeouts?: DynamodbTableTimeouts;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#ttl DynamodbTable#ttl}
  */
  readonly ttl?: DynamodbTableTtl;
}
export interface DynamodbTableAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#name DynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#type DynamodbTable#type}
  */
  readonly type: string;
}

export function dynamodbTableAttributeToTerraform(struct?: DynamodbTableAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dynamodbTableAttributeToHclTerraform(struct?: DynamodbTableAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamodbTableAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DynamodbTableAttributeList extends cdktf.ComplexList {
  public internalValue? : DynamodbTableAttribute[] | cdktf.IResolvable

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
  public get(index: number): DynamodbTableAttributeOutputReference {
    return new DynamodbTableAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbTableGlobalSecondaryIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}
  */
  readonly hashKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#name DynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}
  */
  readonly projectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
  */
  readonly rangeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}
  */
  readonly readCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}
  */
  readonly writeCapacity?: number;
}

export function dynamodbTableGlobalSecondaryIndexToTerraform(struct?: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_key: cdktf.stringToTerraform(struct!.hashKey),
    name: cdktf.stringToTerraform(struct!.name),
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
    range_key: cdktf.stringToTerraform(struct!.rangeKey),
    read_capacity: cdktf.numberToTerraform(struct!.readCapacity),
    write_capacity: cdktf.numberToTerraform(struct!.writeCapacity),
  }
}


export function dynamodbTableGlobalSecondaryIndexToHclTerraform(struct?: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_key: {
      value: cdktf.stringToHclTerraform(struct!.hashKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_key_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key: {
      value: cdktf.stringToHclTerraform(struct!.rangeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_capacity: {
      value: cdktf.numberToHclTerraform(struct!.readCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_capacity: {
      value: cdktf.numberToHclTerraform(struct!.writeCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableGlobalSecondaryIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKey = this._hashKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    if (this._rangeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKey = this._rangeKey;
    }
    if (this._readCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.readCapacity = this._readCapacity;
    }
    if (this._writeCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCapacity = this._writeCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashKey = undefined;
      this._name = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
      this._rangeKey = undefined;
      this._readCapacity = undefined;
      this._writeCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashKey = value.hashKey;
      this._name = value.name;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
      this._rangeKey = value.rangeKey;
      this._readCapacity = value.readCapacity;
      this._writeCapacity = value.writeCapacity;
    }
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

  // non_key_attributes - computed: false, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: false, optional: false, required: true
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
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
}

export class DynamodbTableGlobalSecondaryIndexList extends cdktf.ComplexList {
  public internalValue? : DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable

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
  public get(index: number): DynamodbTableGlobalSecondaryIndexOutputReference {
    return new DynamodbTableGlobalSecondaryIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbTableImportTableInputFormatOptionsCsv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}
  */
  readonly headerList?: string[];
}

export function dynamodbTableImportTableInputFormatOptionsCsvToTerraform(struct?: DynamodbTableImportTableInputFormatOptionsCsvOutputReference | DynamodbTableImportTableInputFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerList),
  }
}


export function dynamodbTableImportTableInputFormatOptionsCsvToHclTerraform(struct?: DynamodbTableImportTableInputFormatOptionsCsvOutputReference | DynamodbTableImportTableInputFormatOptionsCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableImportTableInputFormatOptionsCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableImportTableInputFormatOptionsCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._headerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerList = this._headerList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableImportTableInputFormatOptionsCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._headerList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._headerList = value.headerList;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // header_list - computed: false, optional: true, required: false
  private _headerList?: string[]; 
  public get headerList() {
    return cdktf.Fn.tolist(this.getListAttribute('header_list'));
  }
  public set headerList(value: string[]) {
    this._headerList = value;
  }
  public resetHeaderList() {
    this._headerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerListInput() {
    return this._headerList;
  }
}
export interface DynamodbTableImportTableInputFormatOptions {
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}
  */
  readonly csv?: DynamodbTableImportTableInputFormatOptionsCsv;
}

export function dynamodbTableImportTableInputFormatOptionsToTerraform(struct?: DynamodbTableImportTableInputFormatOptionsOutputReference | DynamodbTableImportTableInputFormatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: dynamodbTableImportTableInputFormatOptionsCsvToTerraform(struct!.csv),
  }
}


export function dynamodbTableImportTableInputFormatOptionsToHclTerraform(struct?: DynamodbTableImportTableInputFormatOptionsOutputReference | DynamodbTableImportTableInputFormatOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    csv: {
      value: dynamodbTableImportTableInputFormatOptionsCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "DynamodbTableImportTableInputFormatOptionsCsvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableImportTableInputFormatOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableImportTableInputFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableImportTableInputFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csv.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csv.internalValue = value.csv;
    }
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new DynamodbTableImportTableInputFormatOptionsCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: DynamodbTableImportTableInputFormatOptionsCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }
}
export interface DynamodbTableImportTableS3BucketSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}
  */
  readonly bucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function dynamodbTableImportTableS3BucketSourceToTerraform(struct?: DynamodbTableImportTableS3BucketSourceOutputReference | DynamodbTableImportTableS3BucketSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    bucket_owner: cdktf.stringToTerraform(struct!.bucketOwner),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
  }
}


export function dynamodbTableImportTableS3BucketSourceToHclTerraform(struct?: DynamodbTableImportTableS3BucketSourceOutputReference | DynamodbTableImportTableS3BucketSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableImportTableS3BucketSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableImportTableS3BucketSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._bucketOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwner = this._bucketOwner;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableImportTableS3BucketSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._bucketOwner = undefined;
      this._keyPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._bucketOwner = value.bucketOwner;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_owner - computed: false, optional: true, required: false
  private _bucketOwner?: string; 
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }
  public set bucketOwner(value: string) {
    this._bucketOwner = value;
  }
  public resetBucketOwner() {
    this._bucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerInput() {
    return this._bucketOwner;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}
export interface DynamodbTableImportTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}
  */
  readonly inputCompressionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}
  */
  readonly inputFormat: string;
  /**
  * input_format_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}
  */
  readonly inputFormatOptions?: DynamodbTableImportTableInputFormatOptions;
  /**
  * s3_bucket_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}
  */
  readonly s3BucketSource: DynamodbTableImportTableS3BucketSource;
}

export function dynamodbTableImportTableToTerraform(struct?: DynamodbTableImportTableOutputReference | DynamodbTableImportTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_compression_type: cdktf.stringToTerraform(struct!.inputCompressionType),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    input_format_options: dynamodbTableImportTableInputFormatOptionsToTerraform(struct!.inputFormatOptions),
    s3_bucket_source: dynamodbTableImportTableS3BucketSourceToTerraform(struct!.s3BucketSource),
  }
}


export function dynamodbTableImportTableToHclTerraform(struct?: DynamodbTableImportTableOutputReference | DynamodbTableImportTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_compression_type: {
      value: cdktf.stringToHclTerraform(struct!.inputCompressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_format: {
      value: cdktf.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_format_options: {
      value: dynamodbTableImportTableInputFormatOptionsToHclTerraform(struct!.inputFormatOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DynamodbTableImportTableInputFormatOptionsList",
    },
    s3_bucket_source: {
      value: dynamodbTableImportTableS3BucketSourceToHclTerraform(struct!.s3BucketSource),
      isBlock: true,
      type: "list",
      storageClassType: "DynamodbTableImportTableS3BucketSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableImportTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableImportTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputCompressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputCompressionType = this._inputCompressionType;
    }
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._inputFormatOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatOptions = this._inputFormatOptions?.internalValue;
    }
    if (this._s3BucketSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketSource = this._s3BucketSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableImportTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputCompressionType = undefined;
      this._inputFormat = undefined;
      this._inputFormatOptions.internalValue = undefined;
      this._s3BucketSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputCompressionType = value.inputCompressionType;
      this._inputFormat = value.inputFormat;
      this._inputFormatOptions.internalValue = value.inputFormatOptions;
      this._s3BucketSource.internalValue = value.s3BucketSource;
    }
  }

  // input_compression_type - computed: false, optional: true, required: false
  private _inputCompressionType?: string; 
  public get inputCompressionType() {
    return this.getStringAttribute('input_compression_type');
  }
  public set inputCompressionType(value: string) {
    this._inputCompressionType = value;
  }
  public resetInputCompressionType() {
    this._inputCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCompressionTypeInput() {
    return this._inputCompressionType;
  }

  // input_format - computed: false, optional: false, required: true
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // input_format_options - computed: false, optional: true, required: false
  private _inputFormatOptions = new DynamodbTableImportTableInputFormatOptionsOutputReference(this, "input_format_options");
  public get inputFormatOptions() {
    return this._inputFormatOptions;
  }
  public putInputFormatOptions(value: DynamodbTableImportTableInputFormatOptions) {
    this._inputFormatOptions.internalValue = value;
  }
  public resetInputFormatOptions() {
    this._inputFormatOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatOptionsInput() {
    return this._inputFormatOptions.internalValue;
  }

  // s3_bucket_source - computed: false, optional: false, required: true
  private _s3BucketSource = new DynamodbTableImportTableS3BucketSourceOutputReference(this, "s3_bucket_source");
  public get s3BucketSource() {
    return this._s3BucketSource;
  }
  public putS3BucketSource(value: DynamodbTableImportTableS3BucketSource) {
    this._s3BucketSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketSourceInput() {
    return this._s3BucketSource.internalValue;
  }
}
export interface DynamodbTableLocalSecondaryIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#name DynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}
  */
  readonly nonKeyAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}
  */
  readonly projectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
  */
  readonly rangeKey: string;
}

export function dynamodbTableLocalSecondaryIndexToTerraform(struct?: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    non_key_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonKeyAttributes),
    projection_type: cdktf.stringToTerraform(struct!.projectionType),
    range_key: cdktf.stringToTerraform(struct!.rangeKey),
  }
}


export function dynamodbTableLocalSecondaryIndexToHclTerraform(struct?: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_key_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonKeyAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    projection_type: {
      value: cdktf.stringToHclTerraform(struct!.projectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_key: {
      value: cdktf.stringToHclTerraform(struct!.rangeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableLocalSecondaryIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamodbTableLocalSecondaryIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nonKeyAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonKeyAttributes = this._nonKeyAttributes;
    }
    if (this._projectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionType = this._projectionType;
    }
    if (this._rangeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeKey = this._rangeKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nonKeyAttributes = undefined;
      this._projectionType = undefined;
      this._rangeKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nonKeyAttributes = value.nonKeyAttributes;
      this._projectionType = value.projectionType;
      this._rangeKey = value.rangeKey;
    }
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

  // non_key_attributes - computed: false, optional: true, required: false
  private _nonKeyAttributes?: string[]; 
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }
  public set nonKeyAttributes(value: string[]) {
    this._nonKeyAttributes = value;
  }
  public resetNonKeyAttributes() {
    this._nonKeyAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonKeyAttributesInput() {
    return this._nonKeyAttributes;
  }

  // projection_type - computed: false, optional: false, required: true
  private _projectionType?: string; 
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
  public set projectionType(value: string) {
    this._projectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionTypeInput() {
    return this._projectionType;
  }

  // range_key - computed: false, optional: false, required: true
  private _rangeKey?: string; 
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
  public set rangeKey(value: string) {
    this._rangeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyInput() {
    return this._rangeKey;
  }
}

export class DynamodbTableLocalSecondaryIndexList extends cdktf.ComplexList {
  public internalValue? : DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable

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
  public get(index: number): DynamodbTableLocalSecondaryIndexOutputReference {
    return new DynamodbTableLocalSecondaryIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbTablePointInTimeRecovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dynamodbTablePointInTimeRecoveryToHclTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTablePointInTimeRecovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
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
    return this.getBooleanAttribute('enabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}
  */
  readonly pointInTimeRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}
  */
  readonly regionName: string;
}

export function dynamodbTableReplicaToTerraform(struct?: DynamodbTableReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    point_in_time_recovery: cdktf.booleanToTerraform(struct!.pointInTimeRecovery),
    propagate_tags: cdktf.booleanToTerraform(struct!.propagateTags),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


export function dynamodbTableReplicaToHclTerraform(struct?: DynamodbTableReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    point_in_time_recovery: {
      value: cdktf.booleanToHclTerraform(struct!.pointInTimeRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagate_tags: {
      value: cdktf.booleanToHclTerraform(struct!.propagateTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableReplicaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamodbTableReplica | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._pointInTimeRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecovery = this._pointInTimeRecovery;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableReplica | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
      this._pointInTimeRecovery = undefined;
      this._propagateTags = undefined;
      this._regionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
      this._pointInTimeRecovery = value.pointInTimeRecovery;
      this._propagateTags = value.propagateTags;
      this._regionName = value.regionName;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery?: boolean | cdktf.IResolvable; 
  public get pointInTimeRecovery() {
    return this.getBooleanAttribute('point_in_time_recovery');
  }
  public set pointInTimeRecovery(value: boolean | cdktf.IResolvable) {
    this._pointInTimeRecovery = value;
  }
  public resetPointInTimeRecovery() {
    this._pointInTimeRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryInput() {
    return this._pointInTimeRecovery;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: boolean | cdktf.IResolvable; 
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktf.IResolvable) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_label - computed: true, optional: false, required: false
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }
}

export class DynamodbTableReplicaList extends cdktf.ComplexList {
  public internalValue? : DynamodbTableReplica[] | cdktf.IResolvable

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
  public get(index: number): DynamodbTableReplicaOutputReference {
    return new DynamodbTableReplicaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbTableServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function dynamodbTableServerSideEncryptionToHclTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyArn !== undefined) {
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
    return this.getBooleanAttribute('enabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#create DynamodbTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#update DynamodbTable#update}
  */
  readonly update?: string;
}

export function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dynamodbTableTimeoutsToHclTerraform(struct?: DynamodbTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dynamodbTableTtlToHclTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbTableTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamodbTableTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbTableTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributeName = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributeName = value.attributeName;
      this._enabled = value.enabled;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table aws_dynamodb_table}
*/
export class DynamodbTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dynamodb_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbTable to import
  * @param importFromId The id of the existing DynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dynamodb_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.55.0/docs/resources/dynamodb_table aws_dynamodb_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbTableConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.55.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingMode = config.billingMode;
    this._deletionProtectionEnabled = config.deletionProtectionEnabled;
    this._hashKey = config.hashKey;
    this._id = config.id;
    this._name = config.name;
    this._rangeKey = config.rangeKey;
    this._readCapacity = config.readCapacity;
    this._restoreDateTime = config.restoreDateTime;
    this._restoreSourceName = config.restoreSourceName;
    this._restoreToLatestTime = config.restoreToLatestTime;
    this._streamEnabled = config.streamEnabled;
    this._streamViewType = config.streamViewType;
    this._tableClass = config.tableClass;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._writeCapacity = config.writeCapacity;
    this._attribute.internalValue = config.attribute;
    this._globalSecondaryIndex.internalValue = config.globalSecondaryIndex;
    this._importTable.internalValue = config.importTable;
    this._localSecondaryIndex.internalValue = config.localSecondaryIndex;
    this._pointInTimeRecovery.internalValue = config.pointInTimeRecovery;
    this._replica.internalValue = config.replica;
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

  // deletion_protection_enabled - computed: false, optional: true, required: false
  private _deletionProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }
  public set deletionProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._deletionProtectionEnabled = value;
  }
  public resetDeletionProtectionEnabled() {
    this._deletionProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionEnabledInput() {
    return this._deletionProtectionEnabled;
  }

  // hash_key - computed: true, optional: true, required: false
  private _hashKey?: string; 
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }
  public set hashKey(value: string) {
    this._hashKey = value;
  }
  public resetHashKey() {
    this._hashKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyInput() {
    return this._hashKey;
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

  // read_capacity - computed: true, optional: true, required: false
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

  // restore_date_time - computed: false, optional: true, required: false
  private _restoreDateTime?: string; 
  public get restoreDateTime() {
    return this.getStringAttribute('restore_date_time');
  }
  public set restoreDateTime(value: string) {
    this._restoreDateTime = value;
  }
  public resetRestoreDateTime() {
    this._restoreDateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreDateTimeInput() {
    return this._restoreDateTime;
  }

  // restore_source_name - computed: false, optional: true, required: false
  private _restoreSourceName?: string; 
  public get restoreSourceName() {
    return this.getStringAttribute('restore_source_name');
  }
  public set restoreSourceName(value: string) {
    this._restoreSourceName = value;
  }
  public resetRestoreSourceName() {
    this._restoreSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSourceNameInput() {
    return this._restoreSourceName;
  }

  // restore_to_latest_time - computed: false, optional: true, required: false
  private _restoreToLatestTime?: boolean | cdktf.IResolvable; 
  public get restoreToLatestTime() {
    return this.getBooleanAttribute('restore_to_latest_time');
  }
  public set restoreToLatestTime(value: boolean | cdktf.IResolvable) {
    this._restoreToLatestTime = value;
  }
  public resetRestoreToLatestTime() {
    this._restoreToLatestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreToLatestTimeInput() {
    return this._restoreToLatestTime;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // write_capacity - computed: true, optional: true, required: false
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

  // attribute - computed: false, optional: true, required: false
  private _attribute = new DynamodbTableAttributeList(this, "attribute", true);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: DynamodbTableAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // global_secondary_index - computed: false, optional: true, required: false
  private _globalSecondaryIndex = new DynamodbTableGlobalSecondaryIndexList(this, "global_secondary_index", true);
  public get globalSecondaryIndex() {
    return this._globalSecondaryIndex;
  }
  public putGlobalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable) {
    this._globalSecondaryIndex.internalValue = value;
  }
  public resetGlobalSecondaryIndex() {
    this._globalSecondaryIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecondaryIndexInput() {
    return this._globalSecondaryIndex.internalValue;
  }

  // import_table - computed: false, optional: true, required: false
  private _importTable = new DynamodbTableImportTableOutputReference(this, "import_table");
  public get importTable() {
    return this._importTable;
  }
  public putImportTable(value: DynamodbTableImportTable) {
    this._importTable.internalValue = value;
  }
  public resetImportTable() {
    this._importTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTableInput() {
    return this._importTable.internalValue;
  }

  // local_secondary_index - computed: false, optional: true, required: false
  private _localSecondaryIndex = new DynamodbTableLocalSecondaryIndexList(this, "local_secondary_index", true);
  public get localSecondaryIndex() {
    return this._localSecondaryIndex;
  }
  public putLocalSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable) {
    this._localSecondaryIndex.internalValue = value;
  }
  public resetLocalSecondaryIndex() {
    this._localSecondaryIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSecondaryIndexInput() {
    return this._localSecondaryIndex.internalValue;
  }

  // point_in_time_recovery - computed: false, optional: true, required: false
  private _pointInTimeRecovery = new DynamodbTablePointInTimeRecoveryOutputReference(this, "point_in_time_recovery");
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
  private _replica = new DynamodbTableReplicaList(this, "replica", true);
  public get replica() {
    return this._replica;
  }
  public putReplica(value: DynamodbTableReplica[] | cdktf.IResolvable) {
    this._replica.internalValue = value;
  }
  public resetReplica() {
    this._replica.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica.internalValue;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new DynamodbTableServerSideEncryptionOutputReference(this, "server_side_encryption");
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
  private _timeouts = new DynamodbTableTimeoutsOutputReference(this, "timeouts");
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
  private _ttl = new DynamodbTableTtlOutputReference(this, "ttl");
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
      deletion_protection_enabled: cdktf.booleanToTerraform(this._deletionProtectionEnabled),
      hash_key: cdktf.stringToTerraform(this._hashKey),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      range_key: cdktf.stringToTerraform(this._rangeKey),
      read_capacity: cdktf.numberToTerraform(this._readCapacity),
      restore_date_time: cdktf.stringToTerraform(this._restoreDateTime),
      restore_source_name: cdktf.stringToTerraform(this._restoreSourceName),
      restore_to_latest_time: cdktf.booleanToTerraform(this._restoreToLatestTime),
      stream_enabled: cdktf.booleanToTerraform(this._streamEnabled),
      stream_view_type: cdktf.stringToTerraform(this._streamViewType),
      table_class: cdktf.stringToTerraform(this._tableClass),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      write_capacity: cdktf.numberToTerraform(this._writeCapacity),
      attribute: cdktf.listMapper(dynamodbTableAttributeToTerraform, true)(this._attribute.internalValue),
      global_secondary_index: cdktf.listMapper(dynamodbTableGlobalSecondaryIndexToTerraform, true)(this._globalSecondaryIndex.internalValue),
      import_table: dynamodbTableImportTableToTerraform(this._importTable.internalValue),
      local_secondary_index: cdktf.listMapper(dynamodbTableLocalSecondaryIndexToTerraform, true)(this._localSecondaryIndex.internalValue),
      point_in_time_recovery: dynamodbTablePointInTimeRecoveryToTerraform(this._pointInTimeRecovery.internalValue),
      replica: cdktf.listMapper(dynamodbTableReplicaToTerraform, true)(this._replica.internalValue),
      server_side_encryption: dynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
      timeouts: dynamodbTableTimeoutsToTerraform(this._timeouts.internalValue),
      ttl: dynamodbTableTtlToTerraform(this._ttl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_mode: {
        value: cdktf.stringToHclTerraform(this._billingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._deletionProtectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_key: {
        value: cdktf.stringToHclTerraform(this._hashKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_key: {
        value: cdktf.stringToHclTerraform(this._rangeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_capacity: {
        value: cdktf.numberToHclTerraform(this._readCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restore_date_time: {
        value: cdktf.stringToHclTerraform(this._restoreDateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_source_name: {
        value: cdktf.stringToHclTerraform(this._restoreSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_to_latest_time: {
        value: cdktf.booleanToHclTerraform(this._restoreToLatestTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stream_enabled: {
        value: cdktf.booleanToHclTerraform(this._streamEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stream_view_type: {
        value: cdktf.stringToHclTerraform(this._streamViewType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_class: {
        value: cdktf.stringToHclTerraform(this._tableClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      write_capacity: {
        value: cdktf.numberToHclTerraform(this._writeCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attribute: {
        value: cdktf.listMapperHcl(dynamodbTableAttributeToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbTableAttributeList",
      },
      global_secondary_index: {
        value: cdktf.listMapperHcl(dynamodbTableGlobalSecondaryIndexToHclTerraform, true)(this._globalSecondaryIndex.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbTableGlobalSecondaryIndexList",
      },
      import_table: {
        value: dynamodbTableImportTableToHclTerraform(this._importTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbTableImportTableList",
      },
      local_secondary_index: {
        value: cdktf.listMapperHcl(dynamodbTableLocalSecondaryIndexToHclTerraform, true)(this._localSecondaryIndex.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbTableLocalSecondaryIndexList",
      },
      point_in_time_recovery: {
        value: dynamodbTablePointInTimeRecoveryToHclTerraform(this._pointInTimeRecovery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbTablePointInTimeRecoveryList",
      },
      replica: {
        value: cdktf.listMapperHcl(dynamodbTableReplicaToHclTerraform, true)(this._replica.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbTableReplicaList",
      },
      server_side_encryption: {
        value: dynamodbTableServerSideEncryptionToHclTerraform(this._serverSideEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbTableServerSideEncryptionList",
      },
      timeouts: {
        value: dynamodbTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbTableTimeouts",
      },
      ttl: {
        value: dynamodbTableTtlToHclTerraform(this._ttl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamodbTableTtlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
