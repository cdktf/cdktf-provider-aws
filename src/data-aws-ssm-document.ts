// https://www.terraform.io/docs/providers/aws/r/data_aws_ssm_document.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsmDocumentConfig extends cdktf.TerraformMetaArguments {
  readonly documentFormat?: string;
  readonly documentVersion?: string;
  readonly name: string;
}

// Resource

export class DataAwsSsmDocument extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSsmDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_document',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._documentFormat = config.documentFormat;
    this._documentVersion = config.documentVersion;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // document_format - computed: false, optional: true, required: false
  private _documentFormat?: string;
  public get documentFormat() {
    return this.getStringAttribute('document_format');
  }
  public set documentFormat(value: string ) {
    this._documentFormat = value;
  }
  public resetDocumentFormat() {
    this._documentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentFormatInput() {
    return this._documentFormat
  }

  // document_type - computed: true, optional: false, required: false
  public get documentType() {
    return this.getStringAttribute('document_type');
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string;
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string ) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      document_format: cdktf.stringToTerraform(this._documentFormat),
      document_version: cdktf.stringToTerraform(this._documentVersion),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
