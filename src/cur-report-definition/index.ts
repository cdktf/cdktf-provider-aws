/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}
  */
  readonly additionalArtifacts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}
  */
  readonly additionalSchemaElements: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#format CurReportDefinition#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#id CurReportDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}
  */
  readonly refreshClosedReports?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}
  */
  readonly reportName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}
  */
  readonly reportVersioning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}
  */
  readonly s3Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}
  */
  readonly s3Region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#tags_all CurReportDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}
  */
  readonly timeUnit: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition aws_cur_report_definition}
*/
export class CurReportDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cur_report_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CurReportDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurReportDefinition to import
  * @param importFromId The id of the existing CurReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurReportDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cur_report_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cur_report_definition aws_cur_report_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurReportDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: CurReportDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cur_report_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalArtifacts = config.additionalArtifacts;
    this._additionalSchemaElements = config.additionalSchemaElements;
    this._compression = config.compression;
    this._format = config.format;
    this._id = config.id;
    this._refreshClosedReports = config.refreshClosedReports;
    this._reportName = config.reportName;
    this._reportVersioning = config.reportVersioning;
    this._s3Bucket = config.s3Bucket;
    this._s3Prefix = config.s3Prefix;
    this._s3Region = config.s3Region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeUnit = config.timeUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_artifacts - computed: false, optional: true, required: false
  private _additionalArtifacts?: string[]; 
  public get additionalArtifacts() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_artifacts'));
  }
  public set additionalArtifacts(value: string[]) {
    this._additionalArtifacts = value;
  }
  public resetAdditionalArtifacts() {
    this._additionalArtifacts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalArtifactsInput() {
    return this._additionalArtifacts;
  }

  // additional_schema_elements - computed: false, optional: false, required: true
  private _additionalSchemaElements?: string[]; 
  public get additionalSchemaElements() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_schema_elements'));
  }
  public set additionalSchemaElements(value: string[]) {
    this._additionalSchemaElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSchemaElementsInput() {
    return this._additionalSchemaElements;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // refresh_closed_reports - computed: false, optional: true, required: false
  private _refreshClosedReports?: boolean | cdktf.IResolvable; 
  public get refreshClosedReports() {
    return this.getBooleanAttribute('refresh_closed_reports');
  }
  public set refreshClosedReports(value: boolean | cdktf.IResolvable) {
    this._refreshClosedReports = value;
  }
  public resetRefreshClosedReports() {
    this._refreshClosedReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshClosedReportsInput() {
    return this._refreshClosedReports;
  }

  // report_name - computed: false, optional: false, required: true
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // report_versioning - computed: false, optional: true, required: false
  private _reportVersioning?: string; 
  public get reportVersioning() {
    return this.getStringAttribute('report_versioning');
  }
  public set reportVersioning(value: string) {
    this._reportVersioning = value;
  }
  public resetReportVersioning() {
    this._reportVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportVersioningInput() {
    return this._reportVersioning;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: false, required: true
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
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

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_artifacts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalArtifacts),
      additional_schema_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalSchemaElements),
      compression: cdktf.stringToTerraform(this._compression),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      refresh_closed_reports: cdktf.booleanToTerraform(this._refreshClosedReports),
      report_name: cdktf.stringToTerraform(this._reportName),
      report_versioning: cdktf.stringToTerraform(this._reportVersioning),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_prefix: cdktf.stringToTerraform(this._s3Prefix),
      s3_region: cdktf.stringToTerraform(this._s3Region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_artifacts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalArtifacts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_schema_elements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalSchemaElements),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_closed_reports: {
        value: cdktf.booleanToHclTerraform(this._refreshClosedReports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      report_name: {
        value: cdktf.stringToHclTerraform(this._reportName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_versioning: {
        value: cdktf.stringToHclTerraform(this._reportVersioning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_prefix: {
        value: cdktf.stringToHclTerraform(this._s3Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_region: {
        value: cdktf.stringToHclTerraform(this._s3Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
