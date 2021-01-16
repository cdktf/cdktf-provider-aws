// https://www.terraform.io/docs/providers/aws/r/data_aws_codeartifact_authorization_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsCodeartifactAuthorizationTokenConfig extends TerraformMetaArguments {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly durationSeconds?: number;
}

// Resource

export class DataAwsCodeartifactAuthorizationToken extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCodeartifactAuthorizationTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_authorization_token',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._durationSeconds = config.durationSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_token - computed: true, optional: false, required: true
  public get authorizationToken() {
    return this.getStringAttribute('authorization_token');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // domain_owner - computed: true, optional: true, required: false
  private _domainOwner?: string;
  public get domainOwner() {
    return this._domainOwner ?? this.getStringAttribute('domain_owner');
  }
  public set domainOwner(value: string | undefined) {
    this._domainOwner = value;
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number;
  public get durationSeconds() {
    return this._durationSeconds;
  }
  public set durationSeconds(value: number | undefined) {
    this._durationSeconds = value;
  }

  // expiration - computed: true, optional: false, required: true
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      domain_owner: this._domainOwner,
      duration_seconds: this._durationSeconds,
    };
  }
}
