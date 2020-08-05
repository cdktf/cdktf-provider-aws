// https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html
// generated from terraform resource schema

/*
{
  "version": 1,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "policy": {
        "type": "string",
        "required": true
      },
      "queue_url": {
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

export interface SqsQueuePolicyConfig extends TerraformMetaArguments {
  readonly policy: string;
  readonly queueUrl: string;
}

// Resource

export class SqsQueuePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqsQueuePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policy = config.policy;
    this._queueUrl = config.queueUrl;
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

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl: string;
  public get queueUrl() {
    return this._queueUrl;
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy: this._policy,
      queue_url: this._queueUrl,
    };
  }
}
