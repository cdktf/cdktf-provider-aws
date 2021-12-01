// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Resource Access Manager
*/
export interface RamPrincipalAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#principal RamPrincipalAssociation#principal}
  */
  readonly principal: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html#resource_share_arn RamPrincipalAssociation#resource_share_arn}
  */
  readonly resourceShareArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association}
*/
export class RamPrincipalAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ram_principal_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html aws_ram_principal_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamPrincipalAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RamPrincipalAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_principal_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._principal = config.principal;
    this._resourceShareArn = config.resourceShareArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      principal: cdktf.stringToTerraform(this._principal),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
    };
  }
}
