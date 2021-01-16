// https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSamlProviderConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly samlMetadataDocument: string;
}

// Resource

export class IamSamlProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamSamlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_saml_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._samlMetadataDocument = config.samlMetadataDocument;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // saml_metadata_document - computed: false, optional: false, required: true
  private _samlMetadataDocument: string;
  public get samlMetadataDocument() {
    return this.getStringAttribute('saml_metadata_document');
  }
  public set samlMetadataDocument(value: string) {
    this._samlMetadataDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataDocumentInput() {
    return this._samlMetadataDocument
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      saml_metadata_document: cdktf.stringToTerraform(this._samlMetadataDocument),
    };
  }
}
