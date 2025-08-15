/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}
  */
  readonly confirmationTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}
  */
  readonly deliveryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}
  */
  readonly endpointAutoConfirms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}
  */
  readonly filterPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}
  */
  readonly filterPolicyScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#id SnsTopicSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#protocol SnsTopicSubscription#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}
  */
  readonly rawMessageDelivery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#region SnsTopicSubscription#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#replay_policy SnsTopicSubscription#replay_policy}
  */
  readonly replayPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}
  */
  readonly subscriptionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}
  */
  readonly topicArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription aws_sns_topic_subscription}
*/
export class SnsTopicSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sns_topic_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnsTopicSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnsTopicSubscription to import
  * @param importFromId The id of the existing SnsTopicSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnsTopicSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_topic_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/sns_topic_subscription aws_sns_topic_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnsTopicSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SnsTopicSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_topic_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._confirmationTimeoutInMinutes = config.confirmationTimeoutInMinutes;
    this._deliveryPolicy = config.deliveryPolicy;
    this._endpoint = config.endpoint;
    this._endpointAutoConfirms = config.endpointAutoConfirms;
    this._filterPolicy = config.filterPolicy;
    this._filterPolicyScope = config.filterPolicyScope;
    this._id = config.id;
    this._protocol = config.protocol;
    this._rawMessageDelivery = config.rawMessageDelivery;
    this._redrivePolicy = config.redrivePolicy;
    this._region = config.region;
    this._replayPolicy = config.replayPolicy;
    this._subscriptionRoleArn = config.subscriptionRoleArn;
    this._topicArn = config.topicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // confirmation_timeout_in_minutes - computed: false, optional: true, required: false
  private _confirmationTimeoutInMinutes?: number; 
  public get confirmationTimeoutInMinutes() {
    return this.getNumberAttribute('confirmation_timeout_in_minutes');
  }
  public set confirmationTimeoutInMinutes(value: number) {
    this._confirmationTimeoutInMinutes = value;
  }
  public resetConfirmationTimeoutInMinutes() {
    this._confirmationTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationTimeoutInMinutesInput() {
    return this._confirmationTimeoutInMinutes;
  }

  // confirmation_was_authenticated - computed: true, optional: false, required: false
  public get confirmationWasAuthenticated() {
    return this.getBooleanAttribute('confirmation_was_authenticated');
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string; 
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // endpoint_auto_confirms - computed: false, optional: true, required: false
  private _endpointAutoConfirms?: boolean | cdktf.IResolvable; 
  public get endpointAutoConfirms() {
    return this.getBooleanAttribute('endpoint_auto_confirms');
  }
  public set endpointAutoConfirms(value: boolean | cdktf.IResolvable) {
    this._endpointAutoConfirms = value;
  }
  public resetEndpointAutoConfirms() {
    this._endpointAutoConfirms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAutoConfirmsInput() {
    return this._endpointAutoConfirms;
  }

  // filter_policy - computed: false, optional: true, required: false
  private _filterPolicy?: string; 
  public get filterPolicy() {
    return this.getStringAttribute('filter_policy');
  }
  public set filterPolicy(value: string) {
    this._filterPolicy = value;
  }
  public resetFilterPolicy() {
    this._filterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPolicyInput() {
    return this._filterPolicy;
  }

  // filter_policy_scope - computed: true, optional: true, required: false
  private _filterPolicyScope?: string; 
  public get filterPolicyScope() {
    return this.getStringAttribute('filter_policy_scope');
  }
  public set filterPolicyScope(value: string) {
    this._filterPolicyScope = value;
  }
  public resetFilterPolicyScope() {
    this._filterPolicyScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPolicyScopeInput() {
    return this._filterPolicyScope;
  }

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

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // pending_confirmation - computed: true, optional: false, required: false
  public get pendingConfirmation() {
    return this.getBooleanAttribute('pending_confirmation');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // raw_message_delivery - computed: false, optional: true, required: false
  private _rawMessageDelivery?: boolean | cdktf.IResolvable; 
  public get rawMessageDelivery() {
    return this.getBooleanAttribute('raw_message_delivery');
  }
  public set rawMessageDelivery(value: boolean | cdktf.IResolvable) {
    this._rawMessageDelivery = value;
  }
  public resetRawMessageDelivery() {
    this._rawMessageDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawMessageDeliveryInput() {
    return this._rawMessageDelivery;
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string; 
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replay_policy - computed: false, optional: true, required: false
  private _replayPolicy?: string; 
  public get replayPolicy() {
    return this.getStringAttribute('replay_policy');
  }
  public set replayPolicy(value: string) {
    this._replayPolicy = value;
  }
  public resetReplayPolicy() {
    this._replayPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayPolicyInput() {
    return this._replayPolicy;
  }

  // subscription_role_arn - computed: false, optional: true, required: false
  private _subscriptionRoleArn?: string; 
  public get subscriptionRoleArn() {
    return this.getStringAttribute('subscription_role_arn');
  }
  public set subscriptionRoleArn(value: string) {
    this._subscriptionRoleArn = value;
  }
  public resetSubscriptionRoleArn() {
    this._subscriptionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRoleArnInput() {
    return this._subscriptionRoleArn;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confirmation_timeout_in_minutes: cdktf.numberToTerraform(this._confirmationTimeoutInMinutes),
      delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      endpoint_auto_confirms: cdktf.booleanToTerraform(this._endpointAutoConfirms),
      filter_policy: cdktf.stringToTerraform(this._filterPolicy),
      filter_policy_scope: cdktf.stringToTerraform(this._filterPolicyScope),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      raw_message_delivery: cdktf.booleanToTerraform(this._rawMessageDelivery),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
      region: cdktf.stringToTerraform(this._region),
      replay_policy: cdktf.stringToTerraform(this._replayPolicy),
      subscription_role_arn: cdktf.stringToTerraform(this._subscriptionRoleArn),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confirmation_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._confirmationTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delivery_policy: {
        value: cdktf.stringToHclTerraform(this._deliveryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_auto_confirms: {
        value: cdktf.booleanToHclTerraform(this._endpointAutoConfirms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_policy: {
        value: cdktf.stringToHclTerraform(this._filterPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_policy_scope: {
        value: cdktf.stringToHclTerraform(this._filterPolicyScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raw_message_delivery: {
        value: cdktf.booleanToHclTerraform(this._rawMessageDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redrive_policy: {
        value: cdktf.stringToHclTerraform(this._redrivePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_policy: {
        value: cdktf.stringToHclTerraform(this._replayPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_role_arn: {
        value: cdktf.stringToHclTerraform(this._subscriptionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_arn: {
        value: cdktf.stringToHclTerraform(this._topicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
