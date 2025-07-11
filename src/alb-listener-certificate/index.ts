/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate#certificate_arn AlbListenerCertificate#certificate_arn}
  */
  readonly certificateArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate#id AlbListenerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate#listener_arn AlbListenerCertificate#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate#region AlbListenerCertificate#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate aws_alb_listener_certificate}
*/
export class AlbListenerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_alb_listener_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlbListenerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlbListenerCertificate to import
  * @param importFromId The id of the existing AlbListenerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlbListenerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_alb_listener_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/alb_listener_certificate aws_alb_listener_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbListenerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: AlbListenerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_listener_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.3.0',
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
    this._certificateArn = config.certificateArn;
    this._id = config.id;
    this._listenerArn = config.listenerArn;
    this._region = config.region;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      id: cdktf.stringToTerraform(this._id),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      region: cdktf.stringToTerraform(this._region),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
