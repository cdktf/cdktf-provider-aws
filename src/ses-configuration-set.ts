// https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#name SesConfigurationSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}
  */
  readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#sending_enabled SesConfigurationSet#sending_enabled}
  */
  readonly sendingEnabled?: boolean | cdktf.IResolvable;
  /**
  * delivery_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#delivery_options SesConfigurationSet#delivery_options}
  */
  readonly deliveryOptions?: SesConfigurationSetDeliveryOptions[];
}
export interface SesConfigurationSetDeliveryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#tls_policy SesConfigurationSet#tls_policy}
  */
  readonly tlsPolicy?: string;
}

function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls_policy: cdktf.stringToTerraform(struct!.tlsPolicy),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set}
*/
export class SesConfigurationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_configuration_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: SesConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_configuration_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._reputationMetricsEnabled = config.reputationMetricsEnabled;
    this._sendingEnabled = config.sendingEnabled;
    this._deliveryOptions = config.deliveryOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_fresh_start - computed: true, optional: false, required: false
  public get lastFreshStart() {
    return this.getStringAttribute('last_fresh_start');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // reputation_metrics_enabled - computed: false, optional: true, required: false
  private _reputationMetricsEnabled?: boolean | cdktf.IResolvable;
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
  public set reputationMetricsEnabled(value: boolean | cdktf.IResolvable ) {
    this._reputationMetricsEnabled = value;
  }
  public resetReputationMetricsEnabled() {
    this._reputationMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMetricsEnabledInput() {
    return this._reputationMetricsEnabled
  }

  // sending_enabled - computed: false, optional: true, required: false
  private _sendingEnabled?: boolean | cdktf.IResolvable;
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
  public set sendingEnabled(value: boolean | cdktf.IResolvable ) {
    this._sendingEnabled = value;
  }
  public resetSendingEnabled() {
    this._sendingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingEnabledInput() {
    return this._sendingEnabled
  }

  // delivery_options - computed: false, optional: true, required: false
  private _deliveryOptions?: SesConfigurationSetDeliveryOptions[];
  public get deliveryOptions() {
    return this.interpolationForAttribute('delivery_options') as any;
  }
  public set deliveryOptions(value: SesConfigurationSetDeliveryOptions[] ) {
    this._deliveryOptions = value;
  }
  public resetDeliveryOptions() {
    this._deliveryOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOptionsInput() {
    return this._deliveryOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      reputation_metrics_enabled: cdktf.booleanToTerraform(this._reputationMetricsEnabled),
      sending_enabled: cdktf.booleanToTerraform(this._sendingEnabled),
      delivery_options: cdktf.listMapper(sesConfigurationSetDeliveryOptionsToTerraform)(this._deliveryOptions),
    };
  }
}
