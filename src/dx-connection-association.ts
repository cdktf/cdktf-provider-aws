// https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxConnectionAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly connectionId: string;
  readonly lagId: string;
}

// Resource

export class DxConnectionAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxConnectionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_connection_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionId = config.connectionId;
    this._lagId = config.lagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId: string;
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lag_id - computed: false, optional: false, required: true
  private _lagId: string;
  public get lagId() {
    return this.getStringAttribute('lag_id');
  }
  public set lagId(value: string) {
    this._lagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lagIdInput() {
    return this._lagId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      lag_id: cdktf.stringToTerraform(this._lagId),
    };
  }
}
