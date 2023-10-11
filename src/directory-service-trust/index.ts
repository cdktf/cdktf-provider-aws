// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServiceTrustConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#conditional_forwarder_ip_addrs DirectoryServiceTrust#conditional_forwarder_ip_addrs}
  */
  readonly conditionalForwarderIpAddrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#delete_associated_conditional_forwarder DirectoryServiceTrust#delete_associated_conditional_forwarder}
  */
  readonly deleteAssociatedConditionalForwarder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#directory_id DirectoryServiceTrust#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#remote_domain_name DirectoryServiceTrust#remote_domain_name}
  */
  readonly remoteDomainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#selective_auth DirectoryServiceTrust#selective_auth}
  */
  readonly selectiveAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#trust_direction DirectoryServiceTrust#trust_direction}
  */
  readonly trustDirection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#trust_password DirectoryServiceTrust#trust_password}
  */
  readonly trustPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust#trust_type DirectoryServiceTrust#trust_type}
  */
  readonly trustType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust aws_directory_service_trust}
*/
export class DirectoryServiceTrust extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_directory_service_trust";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/directory_service_trust aws_directory_service_trust} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServiceTrustConfig
  */
  public constructor(scope: Construct, id: string, config: DirectoryServiceTrustConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_directory_service_trust',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._conditionalForwarderIpAddrs = config.conditionalForwarderIpAddrs;
    this._deleteAssociatedConditionalForwarder = config.deleteAssociatedConditionalForwarder;
    this._directoryId = config.directoryId;
    this._remoteDomainName = config.remoteDomainName;
    this._selectiveAuth = config.selectiveAuth;
    this._trustDirection = config.trustDirection;
    this._trustPassword = config.trustPassword;
    this._trustType = config.trustType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conditional_forwarder_ip_addrs - computed: false, optional: true, required: false
  private _conditionalForwarderIpAddrs?: string[]; 
  public get conditionalForwarderIpAddrs() {
    return cdktf.Fn.tolist(this.getListAttribute('conditional_forwarder_ip_addrs'));
  }
  public set conditionalForwarderIpAddrs(value: string[]) {
    this._conditionalForwarderIpAddrs = value;
  }
  public resetConditionalForwarderIpAddrs() {
    this._conditionalForwarderIpAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalForwarderIpAddrsInput() {
    return this._conditionalForwarderIpAddrs;
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // delete_associated_conditional_forwarder - computed: true, optional: true, required: false
  private _deleteAssociatedConditionalForwarder?: boolean | cdktf.IResolvable; 
  public get deleteAssociatedConditionalForwarder() {
    return this.getBooleanAttribute('delete_associated_conditional_forwarder');
  }
  public set deleteAssociatedConditionalForwarder(value: boolean | cdktf.IResolvable) {
    this._deleteAssociatedConditionalForwarder = value;
  }
  public resetDeleteAssociatedConditionalForwarder() {
    this._deleteAssociatedConditionalForwarder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAssociatedConditionalForwarderInput() {
    return this._deleteAssociatedConditionalForwarder;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date_time - computed: true, optional: false, required: false
  public get lastUpdatedDateTime() {
    return this.getStringAttribute('last_updated_date_time');
  }

  // remote_domain_name - computed: false, optional: false, required: true
  private _remoteDomainName?: string; 
  public get remoteDomainName() {
    return this.getStringAttribute('remote_domain_name');
  }
  public set remoteDomainName(value: string) {
    this._remoteDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDomainNameInput() {
    return this._remoteDomainName;
  }

  // selective_auth - computed: true, optional: true, required: false
  private _selectiveAuth?: string; 
  public get selectiveAuth() {
    return this.getStringAttribute('selective_auth');
  }
  public set selectiveAuth(value: string) {
    this._selectiveAuth = value;
  }
  public resetSelectiveAuth() {
    this._selectiveAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveAuthInput() {
    return this._selectiveAuth;
  }

  // state_last_updated_date_time - computed: true, optional: false, required: false
  public get stateLastUpdatedDateTime() {
    return this.getStringAttribute('state_last_updated_date_time');
  }

  // trust_direction - computed: false, optional: false, required: true
  private _trustDirection?: string; 
  public get trustDirection() {
    return this.getStringAttribute('trust_direction');
  }
  public set trustDirection(value: string) {
    this._trustDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDirectionInput() {
    return this._trustDirection;
  }

  // trust_password - computed: false, optional: false, required: true
  private _trustPassword?: string; 
  public get trustPassword() {
    return this.getStringAttribute('trust_password');
  }
  public set trustPassword(value: string) {
    this._trustPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPasswordInput() {
    return this._trustPassword;
  }

  // trust_state - computed: true, optional: false, required: false
  public get trustState() {
    return this.getStringAttribute('trust_state');
  }

  // trust_state_reason - computed: true, optional: false, required: false
  public get trustStateReason() {
    return this.getStringAttribute('trust_state_reason');
  }

  // trust_type - computed: true, optional: true, required: false
  private _trustType?: string; 
  public get trustType() {
    return this.getStringAttribute('trust_type');
  }
  public set trustType(value: string) {
    this._trustType = value;
  }
  public resetTrustType() {
    this._trustType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustTypeInput() {
    return this._trustType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conditional_forwarder_ip_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._conditionalForwarderIpAddrs),
      delete_associated_conditional_forwarder: cdktf.booleanToTerraform(this._deleteAssociatedConditionalForwarder),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName),
      selective_auth: cdktf.stringToTerraform(this._selectiveAuth),
      trust_direction: cdktf.stringToTerraform(this._trustDirection),
      trust_password: cdktf.stringToTerraform(this._trustPassword),
      trust_type: cdktf.stringToTerraform(this._trustType),
    };
  }
}
