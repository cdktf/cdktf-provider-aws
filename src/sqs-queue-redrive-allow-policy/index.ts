/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueueRedriveAllowPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy#id SqsQueueRedriveAllowPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy#queue_url SqsQueueRedriveAllowPolicy#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy#redrive_allow_policy SqsQueueRedriveAllowPolicy#redrive_allow_policy}
  */
  readonly redriveAllowPolicy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy}
*/
export class SqsQueueRedriveAllowPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sqs_queue_redrive_allow_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqsQueueRedriveAllowPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqsQueueRedriveAllowPolicy to import
  * @param importFromId The id of the existing SqsQueueRedriveAllowPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqsQueueRedriveAllowPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sqs_queue_redrive_allow_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/resources/sqs_queue_redrive_allow_policy aws_sqs_queue_redrive_allow_policy} Resource
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
        providerVersion: '5.72.0',
        providerVersionConstraint: '~> 5.0'
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_url: {
        value: cdktf.stringToHclTerraform(this._queueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redrive_allow_policy: {
        value: cdktf.stringToHclTerraform(this._redriveAllowPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
