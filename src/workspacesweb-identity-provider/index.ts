/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceswebIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#identity_provider_details WorkspaceswebIdentityProvider#identity_provider_details}
  */
  readonly identityProviderDetails: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#identity_provider_name WorkspaceswebIdentityProvider#identity_provider_name}
  */
  readonly identityProviderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#identity_provider_type WorkspaceswebIdentityProvider#identity_provider_type}
  */
  readonly identityProviderType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#portal_arn WorkspaceswebIdentityProvider#portal_arn}
  */
  readonly portalArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#region WorkspaceswebIdentityProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#tags WorkspaceswebIdentityProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider aws_workspacesweb_identity_provider}
*/
export class WorkspaceswebIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceswebIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebIdentityProvider to import
  * @param importFromId The id of the existing WorkspaceswebIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/workspacesweb_identity_provider aws_workspacesweb_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.12.0',
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
    this._identityProviderDetails = config.identityProviderDetails;
    this._identityProviderName = config.identityProviderName;
    this._identityProviderType = config.identityProviderType;
    this._portalArn = config.portalArn;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // identity_provider_arn - computed: true, optional: false, required: false
  public get identityProviderArn() {
    return this.getStringAttribute('identity_provider_arn');
  }

  // identity_provider_details - computed: false, optional: false, required: true
  private _identityProviderDetails?: { [key: string]: string }; 
  public get identityProviderDetails() {
    return this.getStringMapAttribute('identity_provider_details');
  }
  public set identityProviderDetails(value: { [key: string]: string }) {
    this._identityProviderDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderDetailsInput() {
    return this._identityProviderDetails;
  }

  // identity_provider_name - computed: false, optional: false, required: true
  private _identityProviderName?: string; 
  public get identityProviderName() {
    return this.getStringAttribute('identity_provider_name');
  }
  public set identityProviderName(value: string) {
    this._identityProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderNameInput() {
    return this._identityProviderName;
  }

  // identity_provider_type - computed: false, optional: false, required: true
  private _identityProviderType?: string; 
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }
  public set identityProviderType(value: string) {
    this._identityProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderTypeInput() {
    return this._identityProviderType;
  }

  // portal_arn - computed: false, optional: false, required: true
  private _portalArn?: string; 
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }
  public set portalArn(value: string) {
    this._portalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalArnInput() {
    return this._portalArn;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_provider_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._identityProviderDetails),
      identity_provider_name: cdktf.stringToTerraform(this._identityProviderName),
      identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
      portal_arn: cdktf.stringToTerraform(this._portalArn),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_provider_details: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._identityProviderDetails),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity_provider_name: {
        value: cdktf.stringToHclTerraform(this._identityProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_type: {
        value: cdktf.stringToHclTerraform(this._identityProviderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_arn: {
        value: cdktf.stringToHclTerraform(this._portalArn),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
