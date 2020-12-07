// https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotThingPrincipalAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly principal: string;
  readonly thing: string;
}

// Resource

export class IotThingPrincipalAttachment extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // thing - computed: false, optional: false, required: true
  private _thing: string;
  public get thing() {
    return this.getStringAttribute('thing');
  }
  public set thing(value: string) {
    this._thing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thingInput() {
    return this._thing
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principal: cdktf.stringToTerraform(this._principal),
      thing: cdktf.stringToTerraform(this._thing),
    };
  }
}
