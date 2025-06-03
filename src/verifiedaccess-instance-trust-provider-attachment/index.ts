/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VerifiedaccessInstanceTrustProviderAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment#id VerifiedaccessInstanceTrustProviderAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment#verifiedaccess_instance_id VerifiedaccessInstanceTrustProviderAttachment#verifiedaccess_instance_id}
  */
  readonly verifiedaccessInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment#verifiedaccess_trust_provider_id VerifiedaccessInstanceTrustProviderAttachment#verifiedaccess_trust_provider_id}
  */
  readonly verifiedaccessTrustProviderId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment aws_verifiedaccess_instance_trust_provider_attachment}
*/
export class VerifiedaccessInstanceTrustProviderAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_verifiedaccess_instance_trust_provider_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VerifiedaccessInstanceTrustProviderAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VerifiedaccessInstanceTrustProviderAttachment to import
  * @param importFromId The id of the existing VerifiedaccessInstanceTrustProviderAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VerifiedaccessInstanceTrustProviderAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_verifiedaccess_instance_trust_provider_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/verifiedaccess_instance_trust_provider_attachment aws_verifiedaccess_instance_trust_provider_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VerifiedaccessInstanceTrustProviderAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: VerifiedaccessInstanceTrustProviderAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_verifiedaccess_instance_trust_provider_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._verifiedaccessInstanceId = config.verifiedaccessInstanceId;
    this._verifiedaccessTrustProviderId = config.verifiedaccessTrustProviderId;
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

  // verifiedaccess_instance_id - computed: false, optional: false, required: true
  private _verifiedaccessInstanceId?: string; 
  public get verifiedaccessInstanceId() {
    return this.getStringAttribute('verifiedaccess_instance_id');
  }
  public set verifiedaccessInstanceId(value: string) {
    this._verifiedaccessInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedaccessInstanceIdInput() {
    return this._verifiedaccessInstanceId;
  }

  // verifiedaccess_trust_provider_id - computed: false, optional: false, required: true
  private _verifiedaccessTrustProviderId?: string; 
  public get verifiedaccessTrustProviderId() {
    return this.getStringAttribute('verifiedaccess_trust_provider_id');
  }
  public set verifiedaccessTrustProviderId(value: string) {
    this._verifiedaccessTrustProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verifiedaccessTrustProviderIdInput() {
    return this._verifiedaccessTrustProviderId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      verifiedaccess_instance_id: cdktf.stringToTerraform(this._verifiedaccessInstanceId),
      verifiedaccess_trust_provider_id: cdktf.stringToTerraform(this._verifiedaccessTrustProviderId),
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
      verifiedaccess_instance_id: {
        value: cdktf.stringToHclTerraform(this._verifiedaccessInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verifiedaccess_trust_provider_id: {
        value: cdktf.stringToHclTerraform(this._verifiedaccessTrustProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
