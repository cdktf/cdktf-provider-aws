// https://www.terraform.io/docs/providers/aws/d/glue_catalog_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#catalog_id DataAwsGlueCatalogTable#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#database_name DataAwsGlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#id DataAwsGlueCatalogTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#name DataAwsGlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#query_as_of_time DataAwsGlueCatalogTable#query_as_of_time}
  */
  readonly queryAsOfTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table#transaction_id DataAwsGlueCatalogTable#transaction_id}
  */
  readonly transactionId?: number;
}
export interface DataAwsGlueCatalogTablePartitionIndex {
}

export function dataAwsGlueCatalogTablePartitionIndexToTerraform(struct?: DataAwsGlueCatalogTablePartitionIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTablePartitionIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTablePartitionIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTablePartitionIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_status - computed: true, optional: false, required: false
  public get indexStatus() {
    return this.getStringAttribute('index_status');
  }

  // keys - computed: true, optional: false, required: false
  public get keys() {
    return this.getListAttribute('keys');
  }
}

export class DataAwsGlueCatalogTablePartitionIndexList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTablePartitionIndexOutputReference {
    return new DataAwsGlueCatalogTablePartitionIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTablePartitionKeys {
}

export function dataAwsGlueCatalogTablePartitionKeysToTerraform(struct?: DataAwsGlueCatalogTablePartitionKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTablePartitionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTablePartitionKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTablePartitionKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
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

export class DataAwsGlueCatalogTablePartitionKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTablePartitionKeysOutputReference {
    return new DataAwsGlueCatalogTablePartitionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorColumns {
}

export function dataAwsGlueCatalogTableStorageDescriptorColumnsToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
}

export function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorSchemaReference {
}

export function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSchemaReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSchemaReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_id - computed: true, optional: false, required: false
  private _schemaId = new DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList(this, "schema_id", false);
  public get schemaId() {
    return this._schemaId;
  }

  // schema_version_id - computed: true, optional: false, required: false
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }

  // schema_version_number - computed: true, optional: false, required: false
  public get schemaVersionNumber() {
    return this.getNumberAttribute('schema_version_number');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorSerDeInfo {
}

export function dataAwsGlueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSerDeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSerDeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSerDeInfo | undefined) {
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

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // serialization_library - computed: true, optional: false, required: false
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorSkewedInfo {
}

export function dataAwsGlueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSkewedInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSkewedInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // skewed_column_names - computed: true, optional: false, required: false
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }

  // skewed_column_value_location_maps - computed: true, optional: false, required: false
  private _skewedColumnValueLocationMaps = new cdktf.StringMap(this, "skewed_column_value_location_maps");
  public get skewedColumnValueLocationMaps() {
    return this._skewedColumnValueLocationMaps;
  }

  // skewed_column_values - computed: true, optional: false, required: false
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptorSortColumns {
}

export function dataAwsGlueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSortColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSortColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.getStringAttribute('column');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorSortColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableStorageDescriptor {
}

export function dataAwsGlueCatalogTableStorageDescriptorToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_columns - computed: true, optional: false, required: false
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataAwsGlueCatalogTableStorageDescriptorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // compressed - computed: true, optional: false, required: false
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }

  // input_format - computed: true, optional: false, required: false
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // number_of_buckets - computed: true, optional: false, required: false
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // schema_reference - computed: true, optional: false, required: false
  private _schemaReference = new DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList(this, "schema_reference", false);
  public get schemaReference() {
    return this._schemaReference;
  }

  // ser_de_info - computed: true, optional: false, required: false
  private _serDeInfo = new DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList(this, "ser_de_info", false);
  public get serDeInfo() {
    return this._serDeInfo;
  }

  // skewed_info - computed: true, optional: false, required: false
  private _skewedInfo = new DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList(this, "skewed_info", false);
  public get skewedInfo() {
    return this._skewedInfo;
  }

  // sort_columns - computed: true, optional: false, required: false
  private _sortColumns = new DataAwsGlueCatalogTableStorageDescriptorSortColumnsList(this, "sort_columns", false);
  public get sortColumns() {
    return this._sortColumns;
  }

  // stored_as_sub_directories - computed: true, optional: false, required: false
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories');
  }
}

export class DataAwsGlueCatalogTableStorageDescriptorList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableStorageDescriptorOutputReference {
    return new DataAwsGlueCatalogTableStorageDescriptorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlueCatalogTableTargetTable {
}

export function dataAwsGlueCatalogTableTargetTableToTerraform(struct?: DataAwsGlueCatalogTableTargetTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsGlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlueCatalogTableTargetTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlueCatalogTableTargetTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsGlueCatalogTableTargetTableList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlueCatalogTableTargetTableOutputReference {
    return new DataAwsGlueCatalogTableTargetTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table aws_glue_catalog_table}
*/
export class DataAwsGlueCatalogTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_glue_catalog_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_catalog_table aws_glue_catalog_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlueCatalogTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlueCatalogTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table',
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
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._queryAsOfTime = config.queryAsOfTime;
    this._transactionId = config.transactionId;
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
    return this._catalogId;
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
    return this._databaseName;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // partition_index - computed: true, optional: false, required: false
  private _partitionIndex = new DataAwsGlueCatalogTablePartitionIndexList(this, "partition_index", false);
  public get partitionIndex() {
    return this._partitionIndex;
  }

  // partition_keys - computed: true, optional: false, required: false
  private _partitionKeys = new DataAwsGlueCatalogTablePartitionKeysList(this, "partition_keys", false);
  public get partitionKeys() {
    return this._partitionKeys;
  }

  // query_as_of_time - computed: false, optional: true, required: false
  private _queryAsOfTime?: string; 
  public get queryAsOfTime() {
    return this.getStringAttribute('query_as_of_time');
  }
  public set queryAsOfTime(value: string) {
    this._queryAsOfTime = value;
  }
  public resetQueryAsOfTime() {
    this._queryAsOfTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAsOfTimeInput() {
    return this._queryAsOfTime;
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // storage_descriptor - computed: true, optional: false, required: false
  private _storageDescriptor = new DataAwsGlueCatalogTableStorageDescriptorList(this, "storage_descriptor", false);
  public get storageDescriptor() {
    return this._storageDescriptor;
  }

  // table_type - computed: true, optional: false, required: false
  public get tableType() {
    return this.getStringAttribute('table_type');
  }

  // target_table - computed: true, optional: false, required: false
  private _targetTable = new DataAwsGlueCatalogTableTargetTableList(this, "target_table", false);
  public get targetTable() {
    return this._targetTable;
  }

  // transaction_id - computed: false, optional: true, required: false
  private _transactionId?: number; 
  public get transactionId() {
    return this.getNumberAttribute('transaction_id');
  }
  public set transactionId(value: number) {
    this._transactionId = value;
  }
  public resetTransactionId() {
    this._transactionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionIdInput() {
    return this._transactionId;
  }

  // view_expanded_text - computed: true, optional: false, required: false
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }

  // view_original_text - computed: true, optional: false, required: false
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_as_of_time: cdktf.stringToTerraform(this._queryAsOfTime),
      transaction_id: cdktf.numberToTerraform(this._transactionId),
    };
  }
}
