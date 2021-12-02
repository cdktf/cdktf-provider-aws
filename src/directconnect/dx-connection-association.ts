// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Direct Connect
*/
export interface DxConnectionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#connection_id DxConnectionAssociation#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html#lag_id DxConnectionAssociation#lag_id}
  */
  readonly lagId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association}
*/
export class DxConnectionAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dx_connection_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html aws_dx_connection_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxConnectionAssociationConfig
  */
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
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lag_id - computed: false, optional: false, required: true
  private _lagId?: string; 
  public get lagId() {
    return this.getStringAttribute('lag_id');
  }
  public set lagId(value: string) {
    this._lagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lagIdInput() {
    return this._lagId;
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
