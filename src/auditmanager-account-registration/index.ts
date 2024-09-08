// https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}
  */
  readonly delegatedAdminAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}
  */
  readonly deregisterOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}
  */
  readonly kmsKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration}
*/
export class AuditmanagerAccountRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_account_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditmanagerAccountRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditmanagerAccountRegistration to import
  * @param importFromId The id of the existing AuditmanagerAccountRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditmanagerAccountRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_auditmanager_account_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerAccountRegistrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerAccountRegistrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_account_registration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.66.0',
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
    this._delegatedAdminAccount = config.delegatedAdminAccount;
    this._deregisterOnDestroy = config.deregisterOnDestroy;
    this._kmsKey = config.kmsKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegated_admin_account - computed: false, optional: true, required: false
  private _delegatedAdminAccount?: string; 
  public get delegatedAdminAccount() {
    return this.getStringAttribute('delegated_admin_account');
  }
  public set delegatedAdminAccount(value: string) {
    this._delegatedAdminAccount = value;
  }
  public resetDelegatedAdminAccount() {
    this._delegatedAdminAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminAccountInput() {
    return this._delegatedAdminAccount;
  }

  // deregister_on_destroy - computed: false, optional: true, required: false
  private _deregisterOnDestroy?: boolean | cdktf.IResolvable; 
  public get deregisterOnDestroy() {
    return this.getBooleanAttribute('deregister_on_destroy');
  }
  public set deregisterOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deregisterOnDestroy = value;
  }
  public resetDeregisterOnDestroy() {
    this._deregisterOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterOnDestroyInput() {
    return this._deregisterOnDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_admin_account: cdktf.stringToTerraform(this._delegatedAdminAccount),
      deregister_on_destroy: cdktf.booleanToTerraform(this._deregisterOnDestroy),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegated_admin_account: {
        value: cdktf.stringToHclTerraform(this._delegatedAdminAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deregisterOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
