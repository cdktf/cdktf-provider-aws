// https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "principal": {
        "type": "string",
        "required": true
      },
      "thing": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IotThingPrincipalAttachmentConfig extends TerraformMetaArguments {
  readonly principal: string;
  readonly thing: string;
}

// Resource

export class IotThingPrincipalAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_thing_principal_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._principal = config.principal;
    this._thing = config.thing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
  }

  // thing - computed: false, optional: false, required: true
  private _thing: string;
  public get thing() {
    return this._thing;
  }
  public set thing(value: string) {
    this._thing = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      principal: this._principal,
      thing: this._thing,
    };
  }
}
