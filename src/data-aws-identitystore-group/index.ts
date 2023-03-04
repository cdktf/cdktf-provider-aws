// https://www.terraform.io/docs/providers/aws/d/identitystore_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * alternate_identifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}
  */
  readonly alternateIdentifier?: DataAwsIdentitystoreGroupAlternateIdentifier;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}
  */
  readonly filter?: DataAwsIdentitystoreGroupFilter;
}
export interface DataAwsIdentitystoreGroupExternalIds {
}

export function dataAwsIdentitystoreGroupExternalIdsToTerraform(struct?: DataAwsIdentitystoreGroupExternalIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsIdentitystoreGroupExternalIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsIdentitystoreGroupExternalIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreGroupExternalIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}

export class DataAwsIdentitystoreGroupExternalIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsIdentitystoreGroupExternalIdsOutputReference {
    return new DataAwsIdentitystoreGroupExternalIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsIdentitystoreGroupAlternateIdentifierExternalId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}
  */
  readonly issuer: string;
}

export function dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierExternalId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}

export class DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifierExternalId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifierExternalId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._issuer = value.issuer;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}
  */
  readonly attributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}
  */
  readonly attributeValue: string;
}

export function dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}

export class DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePath = this._attributePath;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributePath = undefined;
      this._attributeValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributePath = value.attributePath;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_path - computed: false, optional: false, required: true
  private _attributePath?: string; 
  public get attributePath() {
    return this.getStringAttribute('attribute_path');
  }
  public set attributePath(value: string) {
    this._attributePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePathInput() {
    return this._attributePath;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}
export interface DataAwsIdentitystoreGroupAlternateIdentifier {
  /**
  * external_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}
  */
  readonly externalId?: DataAwsIdentitystoreGroupAlternateIdentifierExternalId;
  /**
  * unique_attribute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}
  */
  readonly uniqueAttribute?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute;
}

export function dataAwsIdentitystoreGroupAlternateIdentifierToTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierOutputReference | DataAwsIdentitystoreGroupAlternateIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToTerraform(struct!.externalId),
    unique_attribute: dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToTerraform(struct!.uniqueAttribute),
  }
}

export class DataAwsIdentitystoreGroupAlternateIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsIdentitystoreGroupAlternateIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId?.internalValue;
    }
    if (this._uniqueAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueAttribute = this._uniqueAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreGroupAlternateIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId.internalValue = undefined;
      this._uniqueAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId.internalValue = value.externalId;
      this._uniqueAttribute.internalValue = value.uniqueAttribute;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId = new DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference(this, "external_id");
  public get externalId() {
    return this._externalId;
  }
  public putExternalId(value: DataAwsIdentitystoreGroupAlternateIdentifierExternalId) {
    this._externalId.internalValue = value;
  }
  public resetExternalId() {
    this._externalId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId.internalValue;
  }

  // unique_attribute - computed: false, optional: true, required: false
  private _uniqueAttribute = new DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference(this, "unique_attribute");
  public get uniqueAttribute() {
    return this._uniqueAttribute;
  }
  public putUniqueAttribute(value: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute) {
    this._uniqueAttribute.internalValue = value;
  }
  public resetUniqueAttribute() {
    this._uniqueAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAttributeInput() {
    return this._uniqueAttribute.internalValue;
  }
}
export interface DataAwsIdentitystoreGroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}
  */
  readonly attributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}
  */
  readonly attributeValue: string;
}

export function dataAwsIdentitystoreGroupFilterToTerraform(struct?: DataAwsIdentitystoreGroupFilterOutputReference | DataAwsIdentitystoreGroupFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}

export class DataAwsIdentitystoreGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsIdentitystoreGroupFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePath = this._attributePath;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsIdentitystoreGroupFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributePath = undefined;
      this._attributeValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributePath = value.attributePath;
      this._attributeValue = value.attributeValue;
    }
  }

  // attribute_path - computed: false, optional: false, required: true
  private _attributePath?: string; 
  public get attributePath() {
    return this.getStringAttribute('attribute_path');
  }
  public set attributePath(value: string) {
    this._attributePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePathInput() {
    return this._attributePath;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group aws_identitystore_group}
*/
export class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_identitystore_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group aws_identitystore_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIdentitystoreGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_group',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._identityStoreId = config.identityStoreId;
    this._alternateIdentifier.internalValue = config.alternateIdentifier;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_ids - computed: true, optional: false, required: false
  private _externalIds = new DataAwsIdentitystoreGroupExternalIdsList(this, "external_ids", false);
  public get externalIds() {
    return this._externalIds;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // alternate_identifier - computed: false, optional: true, required: false
  private _alternateIdentifier = new DataAwsIdentitystoreGroupAlternateIdentifierOutputReference(this, "alternate_identifier");
  public get alternateIdentifier() {
    return this._alternateIdentifier;
  }
  public putAlternateIdentifier(value: DataAwsIdentitystoreGroupAlternateIdentifier) {
    this._alternateIdentifier.internalValue = value;
  }
  public resetAlternateIdentifier() {
    this._alternateIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateIdentifierInput() {
    return this._alternateIdentifier.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataAwsIdentitystoreGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataAwsIdentitystoreGroupFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      alternate_identifier: dataAwsIdentitystoreGroupAlternateIdentifierToTerraform(this._alternateIdentifier.internalValue),
      filter: dataAwsIdentitystoreGroupFilterToTerraform(this._filter.internalValue),
    };
  }
}
