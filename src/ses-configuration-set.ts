// https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** delivery_options block */
  readonly deliveryOptions?: SesConfigurationSetDeliveryOptions[];
}
export interface SesConfigurationSetDeliveryOptions {
  readonly tlsPolicy?: string;
}

function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    tls_policy: cdktf.stringToTerraform(struct!.tlsPolicy),
  }
}


// Resource

export class SesConfigurationSet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      delivery_options: cdktf.listMapper(sesConfigurationSetDeliveryOptionsToTerraform)(this._deliveryOptions),
    };
  }
}
