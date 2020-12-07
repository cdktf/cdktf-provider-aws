// https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamPrincipalAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly principal: string;
  readonly resourceShareArn: string;
}

// Resource

export class RamPrincipalAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // resource_share_arn - computed: false, optional: false, required: true
  private _resourceShareArn: string;
  public get resourceShareArn() {
    return this.getStringAttribute('resource_share_arn');
  }
  public set resourceShareArn(value: string) {
    this._resourceShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceShareArnInput() {
    return this._resourceShareArn
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
