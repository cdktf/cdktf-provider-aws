// https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** ip_set_descriptor block */
  readonly ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
}
export interface WafregionalIpsetIpSetDescriptor {
  readonly type: string;
  readonly value: string;
}

function wafregionalIpsetIpSetDescriptorToTerraform(struct?: WafregionalIpsetIpSetDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class WafregionalIpset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_ipset',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._ipSetDescriptor = config.ipSetDescriptor;
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

  // ip_set_descriptor - computed: false, optional: true, required: false
  private _ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
  public get ipSetDescriptor() {
    return this.interpolationForAttribute('ip_set_descriptor') as any;
  }
  public set ipSetDescriptor(value: WafregionalIpsetIpSetDescriptor[] ) {
    this._ipSetDescriptor = value;
  }
  public resetIpSetDescriptor() {
    this._ipSetDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetDescriptorInput() {
    return this._ipSetDescriptor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ip_set_descriptor: cdktf.listMapper(wafregionalIpsetIpSetDescriptorToTerraform)(this._ipSetDescriptor),
    };
  }
}
