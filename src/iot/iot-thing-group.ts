// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export interface IotThingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#name IotThingGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#parent_group_name IotThingGroup#parent_group_name}
  */
  readonly parentGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#tags IotThingGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#tags_all IotThingGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#properties IotThingGroup#properties}
  */
  readonly properties?: IotThingGroupProperties;
}
export class IotThingGroupMetadataRootToParentGroups extends cdktf.ComplexComputedList {

  // group_arn - computed: true, optional: false, required: false
  public get groupArn() {
    return this.getStringAttribute('group_arn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}
export class IotThingGroupMetadata extends cdktf.ComplexComputedList {

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // parent_group_name - computed: true, optional: false, required: false
  public get parentGroupName() {
    return this.getStringAttribute('parent_group_name');
  }

  // root_to_parent_groups - computed: true, optional: false, required: false
  public get rootToParentGroups() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('root_to_parent_groups') as any;
  }
}
export interface IotThingGroupPropertiesAttributePayload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#attributes IotThingGroup#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
}

export function iotThingGroupPropertiesAttributePayloadToTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
  }
}

export class IotThingGroupPropertiesAttributePayloadOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IotThingGroupPropertiesAttributePayload | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._attributes) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupPropertiesAttributePayload | undefined) {
    if (value === undefined) {
      this._attributes = undefined;
    }
    else {
      this._attributes = value.attributes;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string } | cdktf.IResolvable; 
  public get attributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } | cdktf.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#description IotThingGroup#description}
  */
  readonly description?: string;
  /**
  * attribute_payload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#attribute_payload IotThingGroup#attribute_payload}
  */
  readonly attributePayload?: IotThingGroupPropertiesAttributePayload;
}

export function iotThingGroupPropertiesToTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    attribute_payload: iotThingGroupPropertiesAttributePayloadToTerraform(struct!.attributePayload),
  }
}

export class IotThingGroupPropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): IotThingGroupProperties | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._description) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._attributePayload) {
      hasAnyValues = true;
      internalValueResult.attributePayload = this._attributePayload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingGroupProperties | undefined) {
    if (value === undefined) {
      this._description = undefined;
      this._attributePayload.internalValue = undefined;
    }
    else {
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
  private _attributePayload = new IotThingGroupPropertiesAttributePayloadOutputReference(this as any, "attribute_payload", true);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group}
*/
export class IotThingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iot_thing_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotThingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: IotThingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._parentGroupName = config.parentGroupName;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(index: string) {
    return new IotThingGroupMetadata(this, 'metadata', index);
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new IotThingGroupPropertiesOutputReference(this as any, "properties", true);
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
      name: cdktf.stringToTerraform(this._name),
      parent_group_name: cdktf.stringToTerraform(this._parentGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      properties: iotThingGroupPropertiesToTerraform(this._properties.internalValue),
    };
  }
}
