// https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ImagebuilderComponentConfig extends TerraformMetaArguments {
  readonly changeDescription?: string;
  readonly data?: string;
  readonly description?: string;
  readonly kmsKeyId?: string;
  readonly name: string;
  readonly platform: string;
  readonly supportedOsVersions?: string[];
  readonly tags?: { [key: string]: string };
  readonly uri?: string;
  readonly version: string;
}

// Resource

export class ImagebuilderComponent extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_component',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._changeDescription = config.changeDescription;
    this._data = config.data;
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._platform = config.platform;
    this._supportedOsVersions = config.supportedOsVersions;
    this._tags = config.tags;
    this._uri = config.uri;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // change_description - computed: false, optional: true, required: false
  private _changeDescription?: string;
  public get changeDescription() {
    return this._changeDescription;
  }
  public set changeDescription(value: string | undefined) {
    this._changeDescription = value;
  }

  // data - computed: true, optional: true, required: false
  private _data?: string;
  public get data() {
    return this._data ?? this.getStringAttribute('data');
  }
  public set data(value: string | undefined) {
    this._data = value;
  }

  // date_created - computed: true, optional: false, required: true
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // encrypted - computed: true, optional: false, required: true
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // platform - computed: false, optional: false, required: true
  private _platform: string;
  public get platform() {
    return this._platform;
  }
  public set platform(value: string) {
    this._platform = value;
  }

  // supported_os_versions - computed: false, optional: true, required: false
  private _supportedOsVersions?: string[];
  public get supportedOsVersions() {
    return this._supportedOsVersions;
  }
  public set supportedOsVersions(value: string[] | undefined) {
    this._supportedOsVersions = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string;
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_description: this._changeDescription,
      data: this._data,
      description: this._description,
      kms_key_id: this._kmsKeyId,
      name: this._name,
      platform: this._platform,
      supported_os_versions: this._supportedOsVersions,
      tags: this._tags,
      uri: this._uri,
      version: this._version,
    };
  }
}
