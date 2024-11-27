// https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxMacsecKeyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}
  */
  readonly cak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}
  */
  readonly ckn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#id DxMacsecKeyAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}
  */
  readonly secretArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association aws_dx_macsec_key_association}
*/
export class DxMacsecKeyAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_macsec_key_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DxMacsecKeyAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DxMacsecKeyAssociation to import
  * @param importFromId The id of the existing DxMacsecKeyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DxMacsecKeyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_dx_macsec_key_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/dx_macsec_key_association aws_dx_macsec_key_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxMacsecKeyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DxMacsecKeyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_macsec_key_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.78.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cak = config.cak;
    this._ckn = config.ckn;
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._secretArn = config.secretArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cak - computed: false, optional: true, required: false
  private _cak?: string; 
  public get cak() {
    return this.getStringAttribute('cak');
  }
  public set cak(value: string) {
    this._cak = value;
  }
  public resetCak() {
    this._cak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakInput() {
    return this._cak;
  }

  // ckn - computed: true, optional: true, required: false
  private _ckn?: string; 
  public get ckn() {
    return this.getStringAttribute('ckn');
  }
  public set ckn(value: string) {
    this._ckn = value;
  }
  public resetCkn() {
    this._ckn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cknInput() {
    return this._ckn;
  }

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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // start_on - computed: true, optional: false, required: false
  public get startOn() {
    return this.getStringAttribute('start_on');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cak: cdktf.stringToTerraform(this._cak),
      ckn: cdktf.stringToTerraform(this._ckn),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cak: {
        value: cdktf.stringToHclTerraform(this._cak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ckn: {
        value: cdktf.stringToHclTerraform(this._ckn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_arn: {
        value: cdktf.stringToHclTerraform(this._secretArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
