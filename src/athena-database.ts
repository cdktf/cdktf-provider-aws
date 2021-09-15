// https://www.terraform.io/docs/providers/aws/r/athena_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#bucket AthenaDatabase#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#force_destroy AthenaDatabase#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#name AthenaDatabase#name}
  */
  readonly name: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_configuration AthenaDatabase#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration[];
}
export interface AthenaDatabaseEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_option AthenaDatabase#encryption_option}
  */
  readonly encryptionOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#kms_key AthenaDatabase#kms_key}
  */
  readonly kmsKey?: string;
}

function athenaDatabaseEncryptionConfigurationToTerraform(struct?: AthenaDatabaseEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database}
*/
export class AthenaDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_athena_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_database',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._encryptionConfiguration = config.encryptionConfiguration;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }
  public set encryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration[] ) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      encryption_configuration: cdktf.listMapper(athenaDatabaseEncryptionConfigurationToTerraform)(this._encryptionConfiguration),
    };
  }
}
