// https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#bucket_name RedshiftLogging#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#cluster_identifier RedshiftLogging#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#log_destination_type RedshiftLogging#log_destination_type}
  */
  readonly logDestinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#log_exports RedshiftLogging#log_exports}
  */
  readonly logExports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#s3_key_prefix RedshiftLogging#s3_key_prefix}
  */
  readonly s3KeyPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging aws_redshift_logging}
*/
export class RedshiftLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftLogging to import
  * @param importFromId The id of the existing RedshiftLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/redshift_logging aws_redshift_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_logging',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.49.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._clusterIdentifier = config.clusterIdentifier;
    this._logDestinationType = config.logDestinationType;
    this._logExports = config.logExports;
    this._s3KeyPrefix = config.s3KeyPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination_type - computed: false, optional: true, required: false
  private _logDestinationType?: string; 
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string) {
    this._logDestinationType = value;
  }
  public resetLogDestinationType() {
    this._logDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType;
  }

  // log_exports - computed: false, optional: true, required: false
  private _logExports?: string[]; 
  public get logExports() {
    return cdktf.Fn.tolist(this.getListAttribute('log_exports'));
  }
  public set logExports(value: string[]) {
    this._logExports = value;
  }
  public resetLogExports() {
    this._logExports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logExportsInput() {
    return this._logExports;
  }

  // s3_key_prefix - computed: false, optional: true, required: false
  private _s3KeyPrefix?: string; 
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
  public set s3KeyPrefix(value: string) {
    this._s3KeyPrefix = value;
  }
  public resetS3KeyPrefix() {
    this._s3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyPrefixInput() {
    return this._s3KeyPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
      log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
      log_exports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logExports),
      s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_identifier: {
        value: cdktf.stringToHclTerraform(this._clusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_destination_type: {
        value: cdktf.stringToHclTerraform(this._logDestinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_exports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logExports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      s3_key_prefix: {
        value: cdktf.stringToHclTerraform(this._s3KeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
