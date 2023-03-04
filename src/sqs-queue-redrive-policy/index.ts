// https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueueRedrivePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#id SqsQueueRedrivePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#queue_url SqsQueueRedrivePolicy#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#redrive_policy SqsQueueRedrivePolicy#redrive_policy}
  */
  readonly redrivePolicy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy}
*/
export class SqsQueueRedrivePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queue_redrive_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqsQueueRedrivePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SqsQueueRedrivePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue_redrive_policy',
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
    this._redrivePolicy = config.redrivePolicy;
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

  // redrive_policy - computed: false, optional: false, required: true
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      queue_url: cdktf.stringToTerraform(this._queueUrl),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
    };
  }
}
