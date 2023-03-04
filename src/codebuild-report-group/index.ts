// https://www.terraform.io/docs/providers/aws/r/codebuild_report_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}
  */
  readonly deleteReports?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}
  */
  readonly type: string;
  /**
  * export_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#export_config CodebuildReportGroup#export_config}
  */
  readonly exportConfig: CodebuildReportGroupExportConfig;
}
export interface CodebuildReportGroupExportConfigS3Destination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}
  */
  readonly encryptionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}
  */
  readonly encryptionKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}
  */
  readonly packaging?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}
  */
  readonly path?: string;
}

export function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3DestinationOutputReference | CodebuildReportGroupExportConfigS3Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    packaging: cdktf.stringToTerraform(struct!.packaging),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class CodebuildReportGroupExportConfigS3DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildReportGroupExportConfigS3Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._encryptionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionDisabled = this._encryptionDisabled;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._packaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.packaging = this._packaging;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildReportGroupExportConfigS3Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._encryptionDisabled = undefined;
      this._encryptionKey = undefined;
      this._packaging = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._encryptionDisabled = value.encryptionDisabled;
      this._encryptionKey = value.encryptionKey;
      this._packaging = value.packaging;
      this._path = value.path;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // encryption_disabled - computed: false, optional: true, required: false
  private _encryptionDisabled?: boolean | cdktf.IResolvable; 
  public get encryptionDisabled() {
    return this.getBooleanAttribute('encryption_disabled');
  }
  public set encryptionDisabled(value: boolean | cdktf.IResolvable) {
    this._encryptionDisabled = value;
  }
  public resetEncryptionDisabled() {
    this._encryptionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDisabledInput() {
    return this._encryptionDisabled;
  }

  // encryption_key - computed: false, optional: false, required: true
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // packaging - computed: false, optional: true, required: false
  private _packaging?: string; 
  public get packaging() {
    return this.getStringAttribute('packaging');
  }
  public set packaging(value: string) {
    this._packaging = value;
  }
  public resetPackaging() {
    this._packaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingInput() {
    return this._packaging;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface CodebuildReportGroupExportConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}
  */
  readonly type: string;
  /**
  * s3_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}
  */
  readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination;
}

export function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfigOutputReference | CodebuildReportGroupExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    s3_destination: codebuildReportGroupExportConfigS3DestinationToTerraform(struct!.s3Destination),
  }
}

export class CodebuildReportGroupExportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildReportGroupExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._s3Destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Destination = this._s3Destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildReportGroupExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._s3Destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._s3Destination.internalValue = value.s3Destination;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // s3_destination - computed: false, optional: true, required: false
  private _s3Destination = new CodebuildReportGroupExportConfigS3DestinationOutputReference(this, "s3_destination");
  public get s3Destination() {
    return this._s3Destination;
  }
  public putS3Destination(value: CodebuildReportGroupExportConfigS3Destination) {
    this._s3Destination.internalValue = value;
  }
  public resetS3Destination() {
    this._s3Destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group aws_codebuild_report_group}
*/
export class CodebuildReportGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codebuild_report_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group aws_codebuild_report_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildReportGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_report_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteReports = config.deleteReports;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._exportConfig.internalValue = config.exportConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // delete_reports - computed: false, optional: true, required: false
  private _deleteReports?: boolean | cdktf.IResolvable; 
  public get deleteReports() {
    return this.getBooleanAttribute('delete_reports');
  }
  public set deleteReports(value: boolean | cdktf.IResolvable) {
    this._deleteReports = value;
  }
  public resetDeleteReports() {
    this._deleteReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReportsInput() {
    return this._deleteReports;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // export_config - computed: false, optional: false, required: true
  private _exportConfig = new CodebuildReportGroupExportConfigOutputReference(this, "export_config");
  public get exportConfig() {
    return this._exportConfig;
  }
  public putExportConfig(value: CodebuildReportGroupExportConfig) {
    this._exportConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportConfigInput() {
    return this._exportConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_reports: cdktf.booleanToTerraform(this._deleteReports),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      export_config: codebuildReportGroupExportConfigToTerraform(this._exportConfig.internalValue),
    };
  }
}
