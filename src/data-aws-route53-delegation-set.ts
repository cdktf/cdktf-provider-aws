// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_delegation_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "caller_reference": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "required": true
      },
      "name_servers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRoute53DelegationSetConfig extends TerraformMetaArguments {
  readonly id: string;
}

// Resource

export class DataAwsRoute53DelegationSet extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRoute53DelegationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_delegation_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: true
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  // name_servers - computed: true, optional: false, required: true
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      id: this._id,
    };
  }
}
