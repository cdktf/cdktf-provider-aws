// https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketAnalyticsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket S3BucketAnalyticsConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#name S3BucketAnalyticsConfiguration#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#filter S3BucketAnalyticsConfiguration#filter}
  */
  readonly filter?: S3BucketAnalyticsConfigurationFilter[];
  /**
  * storage_class_analysis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#storage_class_analysis S3BucketAnalyticsConfiguration#storage_class_analysis}
  */
  readonly storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis[];
}
export interface S3BucketAnalyticsConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#tags S3BucketAnalyticsConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

function s3BucketAnalyticsConfigurationFilterToTerraform(struct?: S3BucketAnalyticsConfigurationFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_account_id S3BucketAnalyticsConfiguration#bucket_account_id}
  */
  readonly bucketAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#bucket_arn S3BucketAnalyticsConfiguration#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#format S3BucketAnalyticsConfiguration#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#prefix S3BucketAnalyticsConfiguration#prefix}
  */
  readonly prefix?: string;
}

function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_account_id: cdktf.stringToTerraform(struct!.bucketAccountId),
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination {
  /**
  * s3_bucket_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#s3_bucket_destination S3BucketAnalyticsConfiguration#s3_bucket_destination}
  */
  readonly s3BucketDestination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination[];
}

function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_bucket_destination: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestinationToTerraform)(struct!.s3BucketDestination),
  }
}

export interface S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#output_schema_version S3BucketAnalyticsConfiguration#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#destination S3BucketAnalyticsConfiguration#destination}
  */
  readonly destination: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestination[];
}

function s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_schema_version: cdktf.stringToTerraform(struct!.outputSchemaVersion),
    destination: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportDestinationToTerraform)(struct!.destination),
  }
}

export interface S3BucketAnalyticsConfigurationStorageClassAnalysis {
  /**
  * data_export block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html#data_export S3BucketAnalyticsConfiguration#data_export}
  */
  readonly dataExport: S3BucketAnalyticsConfigurationStorageClassAnalysisDataExport[];
}

function s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform(struct?: S3BucketAnalyticsConfigurationStorageClassAnalysis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_export: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisDataExportToTerraform)(struct!.dataExport),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration}
*/
export class S3BucketAnalyticsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_analytics_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_analytics_configuration.html aws_s3_bucket_analytics_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketAnalyticsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketAnalyticsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_analytics_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._name = config.name;
    this._filter = config.filter;
    this._storageClassAnalysis = config.storageClassAnalysis;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
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

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketAnalyticsConfigurationFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: S3BucketAnalyticsConfigurationFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // storage_class_analysis - computed: false, optional: true, required: false
  private _storageClassAnalysis?: S3BucketAnalyticsConfigurationStorageClassAnalysis[];
  public get storageClassAnalysis() {
    return this.interpolationForAttribute('storage_class_analysis') as any;
  }
  public set storageClassAnalysis(value: S3BucketAnalyticsConfigurationStorageClassAnalysis[] ) {
    this._storageClassAnalysis = value;
  }
  public resetStorageClassAnalysis() {
    this._storageClassAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassAnalysisInput() {
    return this._storageClassAnalysis
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      name: cdktf.stringToTerraform(this._name),
      filter: cdktf.listMapper(s3BucketAnalyticsConfigurationFilterToTerraform)(this._filter),
      storage_class_analysis: cdktf.listMapper(s3BucketAnalyticsConfigurationStorageClassAnalysisToTerraform)(this._storageClassAnalysis),
    };
  }
}
