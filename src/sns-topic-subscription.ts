// https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html
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
      "confirmation_timeout_in_minutes": {
        "type": "number",
        "optional": true
      },
      "delivery_policy": {
        "type": "string",
        "optional": true
      },
      "endpoint": {
        "type": "string",
        "required": true
      },
      "endpoint_auto_confirms": {
        "type": "bool",
        "optional": true
      },
      "filter_policy": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "raw_message_delivery": {
        "type": "bool",
        "optional": true
      },
      "topic_arn": {
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

export interface SnsTopicSubscriptionConfig extends TerraformMetaArguments {
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

export class SnsTopicSubscription extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // confirmation_timeout_in_minutes - computed: false, optional: true, required: false
  private _confirmationTimeoutInMinutes?: number;
  public get confirmationTimeoutInMinutes() {
    return this._confirmationTimeoutInMinutes;
  }
  public set confirmationTimeoutInMinutes(value: number | undefined) {
    this._confirmationTimeoutInMinutes = value;
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string;
  public get deliveryPolicy() {
    return this._deliveryPolicy;
  }
  public set deliveryPolicy(value: string | undefined) {
    this._deliveryPolicy = value;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: string;
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }

  // endpoint_auto_confirms - computed: false, optional: true, required: false
  private _endpointAutoConfirms?: boolean;
  public get endpointAutoConfirms() {
    return this._endpointAutoConfirms;
  }
  public set endpointAutoConfirms(value: boolean | undefined) {
    this._endpointAutoConfirms = value;
  }

  // filter_policy - computed: false, optional: true, required: false
  private _filterPolicy?: string;
  public get filterPolicy() {
    return this._filterPolicy;
  }
  public set filterPolicy(value: string | undefined) {
    this._filterPolicy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // raw_message_delivery - computed: false, optional: true, required: false
  private _rawMessageDelivery?: boolean;
  public get rawMessageDelivery() {
    return this._rawMessageDelivery;
  }
  public set rawMessageDelivery(value: boolean | undefined) {
    this._rawMessageDelivery = value;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn: string;
  public get topicArn() {
    return this._topicArn;
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      confirmation_timeout_in_minutes: this._confirmationTimeoutInMinutes,
      delivery_policy: this._deliveryPolicy,
      endpoint: this._endpoint,
      endpoint_auto_confirms: this._endpointAutoConfirms,
      filter_policy: this._filterPolicy,
      protocol: this._protocol,
      raw_message_delivery: this._rawMessageDelivery,
      topic_arn: this._topicArn,
    };
  }
}
