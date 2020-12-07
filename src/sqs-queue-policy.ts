// https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueuePolicyConfig extends cdktf.TerraformMetaArguments {
  readonly policy: string;
  readonly queueUrl: string;
}

// Resource

export class SqsQueuePolicy extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl: string;
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy: cdktf.stringToTerraform(this._policy),
      queue_url: cdktf.stringToTerraform(this._queueUrl),
    };
  }
}
