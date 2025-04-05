// https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XrayResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy#bypass_policy_lockout_check XrayResourcePolicy#bypass_policy_lockout_check}
  */
  readonly bypassPolicyLockoutCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy#policy_document XrayResourcePolicy#policy_document}
  */
  readonly policyDocument: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy#policy_name XrayResourcePolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy#policy_revision_id XrayResourcePolicy#policy_revision_id}
  */
  readonly policyRevisionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy aws_xray_resource_policy}
*/
export class XrayResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_xray_resource_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a XrayResourcePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XrayResourcePolicy to import
  * @param importFromId The id of the existing XrayResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XrayResourcePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_xray_resource_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/xray_resource_policy aws_xray_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XrayResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: XrayResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_xray_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.1',
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
    this._bypassPolicyLockoutCheck = config.bypassPolicyLockoutCheck;
    this._policyDocument = config.policyDocument;
    this._policyName = config.policyName;
    this._policyRevisionId = config.policyRevisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_policy_lockout_check - computed: false, optional: true, required: false
  private _bypassPolicyLockoutCheck?: boolean | cdktf.IResolvable; 
  public get bypassPolicyLockoutCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_check');
  }
  public set bypassPolicyLockoutCheck(value: boolean | cdktf.IResolvable) {
    this._bypassPolicyLockoutCheck = value;
  }
  public resetBypassPolicyLockoutCheck() {
    this._bypassPolicyLockoutCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutCheckInput() {
    return this._bypassPolicyLockoutCheck;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_revision_id - computed: true, optional: true, required: false
  private _policyRevisionId?: string; 
  public get policyRevisionId() {
    return this.getStringAttribute('policy_revision_id');
  }
  public set policyRevisionId(value: string) {
    this._policyRevisionId = value;
  }
  public resetPolicyRevisionId() {
    this._policyRevisionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRevisionIdInput() {
    return this._policyRevisionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_policy_lockout_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutCheck),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_revision_id: cdktf.stringToTerraform(this._policyRevisionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_policy_lockout_check: {
        value: cdktf.booleanToHclTerraform(this._bypassPolicyLockoutCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_document: {
        value: cdktf.stringToHclTerraform(this._policyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_revision_id: {
        value: cdktf.stringToHclTerraform(this._policyRevisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
