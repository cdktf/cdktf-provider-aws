/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceswebBrowserSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}
  */
  readonly additionalEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}
  */
  readonly browserPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}
  */
  readonly customerManagedKey?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#region WorkspaceswebBrowserSettings#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings}
*/
export class WorkspaceswebBrowserSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_browser_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceswebBrowserSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebBrowserSettings to import
  * @param importFromId The id of the existing WorkspaceswebBrowserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_browser_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebBrowserSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebBrowserSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_browser_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
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
    this._additionalEncryptionContext = config.additionalEncryptionContext;
    this._browserPolicy = config.browserPolicy;
    this._customerManagedKey = config.customerManagedKey;
    this._region = config.region;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_encryption_context - computed: false, optional: true, required: false
  private _additionalEncryptionContext?: { [key: string]: string }; 
  public get additionalEncryptionContext() {
    return this.getStringMapAttribute('additional_encryption_context');
  }
  public set additionalEncryptionContext(value: { [key: string]: string }) {
    this._additionalEncryptionContext = value;
  }
  public resetAdditionalEncryptionContext() {
    this._additionalEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEncryptionContextInput() {
    return this._additionalEncryptionContext;
  }

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
  }

  // browser_policy - computed: false, optional: false, required: true
  private _browserPolicy?: string; 
  public get browserPolicy() {
    return this.getStringAttribute('browser_policy');
  }
  public set browserPolicy(value: string) {
    this._browserPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get browserPolicyInput() {
    return this._browserPolicy;
  }

  // browser_settings_arn - computed: true, optional: false, required: false
  public get browserSettingsArn() {
    return this.getStringAttribute('browser_settings_arn');
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey?: string; 
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }
  public set customerManagedKey(value: string) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey;
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
      additional_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalEncryptionContext),
      browser_policy: cdktf.stringToTerraform(this._browserPolicy),
      customer_managed_key: cdktf.stringToTerraform(this._customerManagedKey),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      browser_policy: {
        value: cdktf.stringToHclTerraform(this._browserPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: cdktf.stringToHclTerraform(this._customerManagedKey),
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
