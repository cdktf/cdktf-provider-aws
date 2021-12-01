// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#content SsmDocument#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_format SsmDocument#document_format}
  */
  readonly documentFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_type SsmDocument#document_type}
  */
  readonly documentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#permissions SsmDocument#permissions}
  */
  readonly permissions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags SsmDocument#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags_all SsmDocument#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#target_type SsmDocument#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#version_name SsmDocument#version_name}
  */
  readonly versionName?: string;
  /**
  * attachments_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#attachments_source SsmDocument#attachments_source}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#key SsmDocument#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#values SsmDocument#values}
  */
  readonly values: string[];
}

export function ssmDocumentAttachmentsSourceToTerraform(struct?: SsmDocumentAttachmentsSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document}
*/
export class SsmDocument extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmDocumentConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._targetType = config.targetType;
    this._versionName = config.versionName;
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
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // document_type - computed: false, optional: false, required: true
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parameter - computed: true, optional: false, required: false
  public parameter(index: string) {
    return new SsmDocumentParameter(this, 'parameter', index);
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: { [key: string]: string } | cdktf.IResolvable; 
  public get permissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('permissions') as any;
  }
  public set permissions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // version_name - computed: false, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // attachments_source - computed: false, optional: true, required: false
  private _attachmentsSource?: SsmDocumentAttachmentsSource[]; 
  public get attachmentsSource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attachments_source') as any;
  }
  public set attachmentsSource(value: SsmDocumentAttachmentsSource[]) {
    this._attachmentsSource = value;
  }
  public resetAttachmentsSource() {
    this._attachmentsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsSourceInput() {
    return this._attachmentsSource;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_type: cdktf.stringToTerraform(this._targetType),
      version_name: cdktf.stringToTerraform(this._versionName),
      attachments_source: cdktf.listMapper(ssmDocumentAttachmentsSourceToTerraform)(this._attachmentsSource),
    };
  }
}
