// https://www.terraform.io/docs/providers/aws/r/codeartifact_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodeartifactDomainConfig extends TerraformMetaArguments {
  readonly domain: string;
  readonly encryptionKey: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class CodeartifactDomain extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodeartifactDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._encryptionKey = config.encryptionKey;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // asset_size_bytes - computed: true, optional: false, required: true
  public get assetSizeBytes() {
    return this.getNumberAttribute('asset_size_bytes');
  }

  // created_time - computed: true, optional: false, required: true
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey: string;
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // repository_count - computed: true, optional: false, required: true
  public get repositoryCount() {
    return this.getNumberAttribute('repository_count');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      encryption_key: this._encryptionKey,
      tags: this._tags,
    };
  }
}
