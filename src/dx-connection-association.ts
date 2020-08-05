// https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "connection_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lag_id": {
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

export interface DxConnectionAssociationConfig extends TerraformMetaArguments {
  readonly connectionId: string;
  readonly lagId: string;
}

// Resource

export class DxConnectionAssociation extends TerraformResource {

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
    return this._connectionId;
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lag_id - computed: false, optional: false, required: true
  private _lagId: string;
  public get lagId() {
    return this._lagId;
  }
  public set lagId(value: string) {
    this._lagId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: this._connectionId,
      lag_id: this._lagId,
    };
  }
}
