// https://www.terraform.io/docs/providers/aws/r/iot_thing_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#deprecated IotThingType#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#id IotThingType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#name IotThingType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#tags IotThingType#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#tags_all IotThingType#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#properties IotThingType#properties}
  */
  readonly properties?: IotThingTypeProperties;
}
export interface IotThingTypeProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#description IotThingType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}
  */
  readonly searchableAttributes?: string[];
}

export function iotThingTypePropertiesToTerraform(struct?: IotThingTypePropertiesOutputReference | IotThingTypeProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    searchable_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchableAttributes),
  }
}

export class IotThingTypePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IotThingTypeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._searchableAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchableAttributes = this._searchableAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotThingTypeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._searchableAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._searchableAttributes = value.searchableAttributes;
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

  // searchable_attributes - computed: true, optional: true, required: false
  private _searchableAttributes?: string[]; 
  public get searchableAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('searchable_attributes'));
  }
  public set searchableAttributes(value: string[]) {
    this._searchableAttributes = value;
  }
  public resetSearchableAttributes() {
    this._searchableAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableAttributesInput() {
    return this._searchableAttributes;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type aws_iot_thing_type}
*/
export class IotThingType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_thing_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type aws_iot_thing_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotThingTypeConfig
  */
  public constructor(scope: Construct, id: string, config: IotThingTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_type',
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
    this._deprecated = config.deprecated;
    this._id = config.id;
    this._name = config.name;
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

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
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

  // properties - computed: false, optional: true, required: false
  private _properties = new IotThingTypePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: IotThingTypeProperties) {
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
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      properties: iotThingTypePropertiesToTerraform(this._properties.internalValue),
    };
  }
}
