// https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SignerSigningProfilePermissionConfig extends TerraformMetaArguments {
  readonly action: string;
  readonly principal: string;
  readonly profileName: string;
  readonly profileVersion?: string;
  readonly statementId?: string;
  readonly statementIdPrefix?: string;
}

// Resource

export class SignerSigningProfilePermission extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_signer_signing_profile_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._principal = config.principal;
    this._profileName = config.profileName;
    this._profileVersion = config.profileVersion;
    this._statementId = config.statementId;
    this._statementIdPrefix = config.statementIdPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this._action;
  }
  public set action(value: string) {
    this._action = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this._principal;
  }
  public set principal(value: string) {
    this._principal = value;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this._profileName;
  }
  public set profileName(value: string) {
    this._profileName = value;
  }

  // profile_version - computed: true, optional: true, required: false
  private _profileVersion?: string;
  public get profileVersion() {
    return this._profileVersion ?? this.getStringAttribute('profile_version');
  }
  public set profileVersion(value: string | undefined) {
    this._profileVersion = value;
  }

  // statement_id - computed: true, optional: true, required: false
  private _statementId?: string;
  public get statementId() {
    return this._statementId ?? this.getStringAttribute('statement_id');
  }
  public set statementId(value: string | undefined) {
    this._statementId = value;
  }

  // statement_id_prefix - computed: false, optional: true, required: false
  private _statementIdPrefix?: string;
  public get statementIdPrefix() {
    return this._statementIdPrefix;
  }
  public set statementIdPrefix(value: string | undefined) {
    this._statementIdPrefix = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: this._action,
      principal: this._principal,
      profile_name: this._profileName,
      profile_version: this._profileVersion,
      statement_id: this._statementId,
      statement_id_prefix: this._statementIdPrefix,
    };
  }
}
