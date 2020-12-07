// https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsTopicSubscriptionConfig extends cdktf.TerraformMetaArguments {
  readonly confirmationTimeoutInMinutes?: number;
  readonly deliveryPolicy?: string;
  readonly endpoint: string;
  readonly endpointAutoConfirms?: boolean;
  readonly filterPolicy?: string;
  readonly protocol: string;
  readonly rawMessageDelivery?: boolean;
  readonly topicArn: string;
}

// Resource

export class SnsTopicSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SnsTopicSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_topic_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._confirmationTimeoutInMinutes = config.confirmationTimeoutInMinutes;
    this._deliveryPolicy = config.deliveryPolicy;
    this._endpoint = config.endpoint;
    this._endpointAutoConfirms = config.endpointAutoConfirms;
    this._filterPolicy = config.filterPolicy;
    this._protocol = config.protocol;
    this._rawMessageDelivery = config.rawMessageDelivery;
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
  public set confirmationTimeoutInMinutes(value: number ) {
    this._confirmationTimeoutInMinutes = value;
  }
  public resetConfirmationTimeoutInMinutes() {
    this._confirmationTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationTimeoutInMinutesInput() {
    return this._confirmationTimeoutInMinutes
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string;
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string ) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: string;
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // endpoint_auto_confirms - computed: false, optional: true, required: false
  private _endpointAutoConfirms?: boolean;
  public get endpointAutoConfirms() {
    return this.getBooleanAttribute('endpoint_auto_confirms');
  }
  public set endpointAutoConfirms(value: boolean ) {
    this._endpointAutoConfirms = value;
  }
  public resetEndpointAutoConfirms() {
    this._endpointAutoConfirms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAutoConfirmsInput() {
    return this._endpointAutoConfirms
  }

  // filter_policy - computed: false, optional: true, required: false
  private _filterPolicy?: string;
  public get filterPolicy() {
    return this.getStringAttribute('filter_policy');
  }
  public set filterPolicy(value: string ) {
    this._filterPolicy = value;
  }
  public resetFilterPolicy() {
    this._filterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPolicyInput() {
    return this._filterPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // raw_message_delivery - computed: false, optional: true, required: false
  private _rawMessageDelivery?: boolean;
  public get rawMessageDelivery() {
    return this.getBooleanAttribute('raw_message_delivery');
  }
  public set rawMessageDelivery(value: boolean ) {
    this._rawMessageDelivery = value;
  }
  public resetRawMessageDelivery() {
    this._rawMessageDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawMessageDeliveryInput() {
    return this._rawMessageDelivery
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn: string;
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn
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
      protocol: cdktf.stringToTerraform(this._protocol),
      raw_message_delivery: cdktf.booleanToTerraform(this._rawMessageDelivery),
      topic_arn: cdktf.stringToTerraform(this._topicArn),
    };
  }
}
