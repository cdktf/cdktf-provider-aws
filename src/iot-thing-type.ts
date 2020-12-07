// https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
  readonly deprecated?: boolean;
  readonly name: string;
  /** properties block */
  readonly properties?: IotThingTypeProperties[];
}
export interface IotThingTypeProperties {
  readonly description?: string;
  readonly searchableAttributes?: string[];
}

function iotThingTypePropertiesToTerraform(struct?: IotThingTypeProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    searchable_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchableAttributes),
  }
}


// Resource

export class IotThingType extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotThingTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deprecated = config.deprecated;
    this._name = config.name;
    this._properties = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: boolean;
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean ) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated
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

  // properties - computed: false, optional: true, required: false
  private _properties?: IotThingTypeProperties[];
  public get properties() {
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: IotThingTypeProperties[] ) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.listMapper(iotThingTypePropertiesToTerraform)(this._properties),
    };
  }
}
