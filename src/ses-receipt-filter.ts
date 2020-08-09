// https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "cidr": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policy": {
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

export interface SesReceiptFilterConfig extends TerraformMetaArguments {
  readonly cidr: string;
  readonly name: string;
  readonly policy: string;
}

// Resource

export class SesReceiptFilter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SesReceiptFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_receipt_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidr = config.cidr;
    this._name = config.name;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr: string;
  public get cidr() {
    return this._cidr;
  }
  public set cidr(value: string) {
    this._cidr = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: this._cidr,
      name: this._name,
      policy: this._policy,
    };
  }
}
