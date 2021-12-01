// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface DataAwsSsmDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_format DataAwsSsmDocument#document_format}
  */
  readonly documentFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_version DataAwsSsmDocument#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#name DataAwsSsmDocument#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document}
*/
export class DataAwsSsmDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsmDocumentConfig
  */
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
  public set documentFormat(value: string) {
    this._documentFormat = value;
  }
  public resetDocumentFormat() {
    this._documentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentFormatInput() {
    return this._documentFormat;
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
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
