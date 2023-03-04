// https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueueRedriveAllowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}
  */
  readonly redriveAllowPolicy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy}
*/
export class SqsQueueRedriveAllowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queue_redrive_allow_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqsQueueRedriveAllowPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SqsQueueRedriveAllowPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue_redrive_allow_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._queueUrl = config.queueUrl;
    this._redriveAllowPolicy = config.redriveAllowPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // redrive_allow_policy - computed: false, optional: false, required: true
  private _redriveAllowPolicy?: string; 
  public get redriveAllowPolicy() {
    return this.getStringAttribute('redrive_allow_policy');
  }
  public set redriveAllowPolicy(value: string) {
    this._redriveAllowPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redriveAllowPolicyInput() {
    return this._redriveAllowPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      queue_url: cdktf.stringToTerraform(this._queueUrl),
      redrive_allow_policy: cdktf.stringToTerraform(this._redriveAllowPolicy),
    };
  }
}
