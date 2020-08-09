// https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html
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
      "principal": {
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

export interface RamPrincipalAssociationConfig extends TerraformMetaArguments {
  readonly principal: string;
  readonly resourceShareArn: string;
}

// Resource

export class RamPrincipalAssociation extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
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
      principal: this._principal,
      resource_share_arn: this._resourceShareArn,
    };
  }
}
