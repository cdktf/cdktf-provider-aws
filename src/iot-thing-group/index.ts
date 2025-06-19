/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#id IotThingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#name IotThingGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#parent_group_name IotThingGroup#parent_group_name}
  */
  readonly parentGroupName?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#region IotThingGroup#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#tags IotThingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#tags_all IotThingGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#properties IotThingGroup#properties}
  */
  readonly properties?: IotThingGroupProperties;
}
export interface IotThingGroupMetadataRootToParentGroups {
}

export function iotThingGroupMetadataRootToParentGroupsToTerraform(struct?: IotThingGroupMetadataRootToParentGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iotThingGroupMetadataRootToParentGroupsToHclTerraform(struct?: IotThingGroupMetadataRootToParentGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IotThingGroupMetadataRootToParentGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotThingGroupMetadataRootToParentGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupMetadataRootToParentGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_arn - computed: true, optional: false, required: false
  public get groupArn() {
    return this.getStringAttribute('group_arn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class IotThingGroupMetadataRootToParentGroupsList extends cdktf.ComplexList {

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
  public get(index: number): IotThingGroupMetadataRootToParentGroupsOutputReference {
    return new IotThingGroupMetadataRootToParentGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotThingGroupMetadata {
}

export function iotThingGroupMetadataToTerraform(struct?: IotThingGroupMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iotThingGroupMetadataToHclTerraform(struct?: IotThingGroupMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IotThingGroupMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IotThingGroupMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // parent_group_name - computed: true, optional: false, required: false
  public get parentGroupName() {
    return this.getStringAttribute('parent_group_name');
  }

  // root_to_parent_groups - computed: true, optional: false, required: false
  private _rootToParentGroups = new IotThingGroupMetadataRootToParentGroupsList(this, "root_to_parent_groups", false);
  public get rootToParentGroups() {
    return this._rootToParentGroups;
  }
}

export class IotThingGroupMetadataList extends cdktf.ComplexList {

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
  public get(index: number): IotThingGroupMetadataOutputReference {
    return new IotThingGroupMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotThingGroupPropertiesAttributePayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#attributes IotThingGroup#attributes}
  */
  readonly attributes?: { [key: string]: string };
}

export function iotThingGroupPropertiesAttributePayloadToTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
  }
}


export function iotThingGroupPropertiesAttributePayloadToHclTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotThingGroupPropertiesAttributePayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotThingGroupPropertiesAttributePayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupPropertiesAttributePayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }
}
export interface IotThingGroupProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#description IotThingGroup#description}
  */
  readonly description?: string;
  /**
  * attribute_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#attribute_payload IotThingGroup#attribute_payload}
  */
  readonly attributePayload?: IotThingGroupPropertiesAttributePayload;
}

export function iotThingGroupPropertiesToTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    attribute_payload: iotThingGroupPropertiesAttributePayloadToTerraform(struct!.attributePayload),
  }
}


export function iotThingGroupPropertiesToHclTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_payload: {
      value: iotThingGroupPropertiesAttributePayloadToHclTerraform(struct!.attributePayload),
      isBlock: true,
      type: "list",
      storageClassType: "IotThingGroupPropertiesAttributePayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotThingGroupPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotThingGroupProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._attributePayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributePayload = this._attributePayload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._attributePayload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._attributePayload.internalValue = value.attributePayload;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // attribute_payload - computed: false, optional: true, required: false
  private _attributePayload = new IotThingGroupPropertiesAttributePayloadOutputReference(this, "attribute_payload");
  public get attributePayload() {
    return this._attributePayload;
  }
  public putAttributePayload(value: IotThingGroupPropertiesAttributePayload) {
    this._attributePayload.internalValue = value;
  }
  public resetAttributePayload() {
    this._attributePayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributePayloadInput() {
    return this._attributePayload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group aws_iot_thing_group}
*/
export class IotThingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_thing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotThingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotThingGroup to import
  * @param importFromId The id of the existing IotThingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotThingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_thing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/iot_thing_group aws_iot_thing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotThingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotThingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.0.0',
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
    this._id = config.id;
    this._name = config.name;
    this._parentGroupName = config.parentGroupName;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new IotThingGroupMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
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

  // parent_group_name - computed: false, optional: true, required: false
  private _parentGroupName?: string; 
  public get parentGroupName() {
    return this.getStringAttribute('parent_group_name');
  }
  public set parentGroupName(value: string) {
    this._parentGroupName = value;
  }
  public resetParentGroupName() {
    this._parentGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentGroupNameInput() {
    return this._parentGroupName;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new IotThingGroupPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: IotThingGroupProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_group_name: cdktf.stringToTerraform(this._parentGroupName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      properties: iotThingGroupPropertiesToTerraform(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      parent_group_name: {
        value: cdktf.stringToHclTerraform(this._parentGroupName),
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
      properties: {
        value: iotThingGroupPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotThingGroupPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
