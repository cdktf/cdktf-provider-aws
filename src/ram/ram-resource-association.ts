// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Resource Access Manager
*/
export interface RamResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_arn RamResourceAssociation#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html#resource_share_arn RamResourceAssociation#resource_share_arn}
  */
  readonly resourceShareArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association}
*/
export class RamResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ram_resource_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html aws_ram_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RamResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RamResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceArn = config.resourceArn;
    this._resourceShareArn = config.resourceShareArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
    };
  }
}
