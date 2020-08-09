// https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resource_arn": {
        "type": "string",
        "required": true
      },
      "resource_share_arn": {
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

export interface RamResourceAssociationConfig extends TerraformMetaArguments {
  readonly resourceArn: string;
  readonly resourceShareArn: string;
}

// Resource

export class RamResourceAssociation extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn: string;
  public get resourceArn() {
    return this._resourceArn;
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }

  // resource_share_arn - computed: false, optional: false, required: true
  private _resourceShareArn: string;
  public get resourceShareArn() {
    return this._resourceShareArn;
  }
  public set resourceShareArn(value: string) {
    this._resourceShareArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_arn: this._resourceArn,
      resource_share_arn: this._resourceShareArn,
    };
  }
}
