// https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DlmLifecyclePolicyConfig extends TerraformMetaArguments {
  readonly description: string;
  readonly executionRoleArn: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** policy_details block */
  readonly policyDetails: DlmLifecyclePolicyPolicyDetails[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
  readonly interval: number;
  readonly intervalUnit?: string;
  readonly times?: string[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
  readonly count: number;
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
  readonly copyTags?: boolean;
  readonly name: string;
  readonly tagsToAdd?: { [key: string]: string };
  /** create_rule block */
  readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule[];
  /** retain_rule block */
  readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule[];
}
export interface DlmLifecyclePolicyPolicyDetails {
  readonly resourceTypes: string[];
  readonly targetTags: { [key: string]: string };
  /** schedule block */
  readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[];
}

// Resource

export class DlmLifecyclePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dlm_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._executionRoleArn = config.executionRoleArn;
    this._state = config.state;
    this._tags = config.tags;
    this._policyDetails = config.policyDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // policy_details - computed: false, optional: false, required: true
  private _policyDetails: DlmLifecyclePolicyPolicyDetails[];
  public get policyDetails() {
    return this.interpolationForAttribute('policy_details') as any;
  }
  public set policyDetails(value: DlmLifecyclePolicyPolicyDetails[]) {
    this._policyDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDetailsInput() {
    return this._policyDetails
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      execution_role_arn: this._executionRoleArn,
      state: this._state,
      tags: this._tags,
      policy_details: this._policyDetails,
    };
  }
}
