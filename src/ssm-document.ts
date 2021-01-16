// https://www.terraform.io/docs/providers/aws/r/ssm_document.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
  readonly content: string;
  readonly documentFormat?: string;
  readonly documentType: string;
  readonly name: string;
  readonly permissions?: { [key: string]: string };
  readonly tags?: { [key: string]: string };
  readonly targetType?: string;
  /** attachments_source block */
  readonly attachmentsSource?: SsmDocumentAttachmentsSource[];
}
export class SsmDocumentParameter extends cdktf.ComplexComputedList {

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SsmDocumentAttachmentsSource {
  readonly key: string;
  readonly name?: string;
  readonly values: string[];
}

function ssmDocumentAttachmentsSourceToTerraform(struct?: SsmDocumentAttachmentsSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class SsmDocument extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmDocumentConfig) {
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
    this._content = config.content;
    this._documentFormat = config.documentFormat;
    this._documentType = config.documentType;
    this._name = config.name;
    this._permissions = config.permissions;
    this._tags = config.tags;
    this._targetType = config.targetType;
    this._attachmentsSource = config.attachmentsSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // document_type - computed: false, optional: false, required: true
  private _documentType: string;
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType
  }

  // document_version - computed: true, optional: false, required: false
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // hash_type - computed: true, optional: false, required: false
  public get hashType() {
    return this.getStringAttribute('hash_type');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parameter - computed: true, optional: false, required: false
  public parameter(index: string) {
    return new SsmDocumentParameter(this, 'parameter', index);
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: { [key: string]: string };
  public get permissions() {
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: { [key: string]: string } ) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // platform_types - computed: true, optional: false, required: false
  public get platformTypes() {
    return this.getListAttribute('platform_types');
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string ) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType
  }

  // attachments_source - computed: false, optional: true, required: false
  private _attachmentsSource?: SsmDocumentAttachmentsSource[];
  public get attachmentsSource() {
    return this.interpolationForAttribute('attachments_source') as any;
  }
  public set attachmentsSource(value: SsmDocumentAttachmentsSource[] ) {
    this._attachmentsSource = value;
  }
  public resetAttachmentsSource() {
    this._attachmentsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsSourceInput() {
    return this._attachmentsSource
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      document_format: cdktf.stringToTerraform(this._documentFormat),
      document_type: cdktf.stringToTerraform(this._documentType),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.hashMapper(cdktf.anyToTerraform)(this._permissions),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_type: cdktf.stringToTerraform(this._targetType),
      attachments_source: cdktf.listMapper(ssmDocumentAttachmentsSourceToTerraform)(this._attachmentsSource),
    };
  }
}
