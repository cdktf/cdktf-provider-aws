// https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RamResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly resourceArn: string;
  readonly resourceShareArn: string;
}

// Resource

export class RamResourceAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _resourceArn: string;
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
      resource_arn: cdktf.stringToTerraform(this._resourceArn),
      resource_share_arn: cdktf.stringToTerraform(this._resourceShareArn),
    };
  }
}
