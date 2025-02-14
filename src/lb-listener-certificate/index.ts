/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate#certificate_arn LbListenerCertificate#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate#id LbListenerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate#listener_arn LbListenerCertificate#listener_arn}
  */
  readonly listenerArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate aws_lb_listener_certificate}
*/
export class LbListenerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb_listener_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListenerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListenerCertificate to import
  * @param importFromId The id of the existing LbListenerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListenerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb_listener_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/lb_listener_certificate aws_lb_listener_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LbListenerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_listener_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.87.0',
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
    this._certificateArn = config.certificateArn;
    this._id = config.id;
    this._listenerArn = config.listenerArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      id: cdktf.stringToTerraform(this._id),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_arn: {
        value: cdktf.stringToHclTerraform(this._certificateArn),
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
      listener_arn: {
        value: cdktf.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
