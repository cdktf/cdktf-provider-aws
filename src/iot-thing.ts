// https://www.terraform.io/docs/providers/aws/r/iot_thing.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingConfig extends cdktf.TerraformMetaArguments {
  readonly attributes?: { [key: string]: string };
  readonly name: string;
  readonly thingTypeName?: string;
}

// Resource

export class IotThing extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotThingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attributes = config.attributes;
    this._name = config.name;
    this._thingTypeName = config.thingTypeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string };
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } ) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
  }

  // default_client_id - computed: true, optional: false, required: false
  public get defaultClientId() {
    return this.getStringAttribute('default_client_id');
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

  // thing_type_name - computed: false, optional: true, required: false
  private _thingTypeName?: string;
  public get thingTypeName() {
    return this.getStringAttribute('thing_type_name');
  }
  public set thingTypeName(value: string ) {
    this._thingTypeName = value;
  }
  public resetThingTypeName() {
    this._thingTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingTypeNameInput() {
    return this._thingTypeName
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
      name: cdktf.stringToTerraform(this._name),
      thing_type_name: cdktf.stringToTerraform(this._thingTypeName),
    };
  }
}
