// https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html
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
      "policy_document": {
        "type": "string",
        "required": true
      },
      "policy_name": {
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

export interface CloudwatchLogResourcePolicyConfig extends TerraformMetaArguments {
  readonly policyDocument: string;
  readonly policyName: string;
}

// Resource

export class CloudwatchLogResourcePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudwatchLogResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyDocument = config.policyDocument;
    this._policyName = config.policyName;
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

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: string;
  public get policyDocument() {
    return this._policyDocument;
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this._policyName;
  }
  public set policyName(value: string) {
    this._policyName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_document: this._policyDocument,
      policy_name: this._policyName,
    };
  }
}
