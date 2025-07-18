/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#region DataAwsIdentitystoreGroup#region}
  */
  readonly region?: string;
  /**
  * alternate_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}
  */
  readonly alternateIdentifier?: DataAwsIdentitystoreGroupAlternateIdentifier;
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


export function dataAwsIdentitystoreGroupExternalIdsToHclTerraform(struct?: DataAwsIdentitystoreGroupExternalIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#id DataAwsIdentitystoreGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}
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


export function dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierExternalId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}
  */
  readonly attributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}
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


export function dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference | DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_path: {
      value: cdktf.stringToHclTerraform(struct!.attributePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}
  */
  readonly externalId?: DataAwsIdentitystoreGroupAlternateIdentifierExternalId;
  /**
  * unique_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}
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


export function dataAwsIdentitystoreGroupAlternateIdentifierToHclTerraform(struct?: DataAwsIdentitystoreGroupAlternateIdentifierOutputReference | DataAwsIdentitystoreGroupAlternateIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: dataAwsIdentitystoreGroupAlternateIdentifierExternalIdToHclTerraform(struct!.externalId),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsIdentitystoreGroupAlternateIdentifierExternalIdList",
    },
    unique_attribute: {
      value: dataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeToHclTerraform(struct!.uniqueAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group aws_identitystore_group}
*/
export class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_identitystore_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsIdentitystoreGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsIdentitystoreGroup to import
  * @param importFromId The id of the existing DataAwsIdentitystoreGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsIdentitystoreGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_identitystore_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/identitystore_group aws_identitystore_group} Data Source
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
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
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
    this._region = config.region;
    this._alternateIdentifier.internalValue = config.alternateIdentifier;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      region: cdktf.stringToTerraform(this._region),
      alternate_identifier: dataAwsIdentitystoreGroupAlternateIdentifierToTerraform(this._alternateIdentifier.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      identity_store_id: {
        value: cdktf.stringToHclTerraform(this._identityStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alternate_identifier: {
        value: dataAwsIdentitystoreGroupAlternateIdentifierToHclTerraform(this._alternateIdentifier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsIdentitystoreGroupAlternateIdentifierList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
