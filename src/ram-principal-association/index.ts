// https://www.terraform.io/docs/providers/aws/r/ram_principal_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamPrincipalAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association#id RamPrincipalAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association#principal RamPrincipalAssociation#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association#resource_share_arn RamPrincipalAssociation#resource_share_arn}
  */
  readonly resourceShareArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association aws_ram_principal_association}
*/
export class RamPrincipalAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ram_principal_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association aws_ram_principal_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamPrincipalAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RamPrincipalAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_principal_association',
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
    this._id = config.id;
    this._principal = config.principal;
    this._resourceShareArn = config.resourceShareArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource_share_arn - computed: false, optional: false, required: true
  private _resourceShareArn?: string; 
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }
  public set resourceShareArn(value: string) {
    this._resourceShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareArnInput() {
    return this._resourceShareArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      principal: cdktf.stringToTerraform(this._principal),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
    };
  }
}
