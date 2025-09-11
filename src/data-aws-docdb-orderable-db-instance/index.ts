/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsDocdbOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#engine DataAwsDocdbOrderableDbInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#engine_version DataAwsDocdbOrderableDbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#id DataAwsDocdbOrderableDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#instance_class DataAwsDocdbOrderableDbInstance#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#license_model DataAwsDocdbOrderableDbInstance#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#preferred_instance_classes DataAwsDocdbOrderableDbInstance#preferred_instance_classes}
  */
  readonly preferredInstanceClasses?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#region DataAwsDocdbOrderableDbInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#vpc DataAwsDocdbOrderableDbInstance#vpc}
  */
  readonly vpc?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance aws_docdb_orderable_db_instance}
*/
export class DataAwsDocdbOrderableDbInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_docdb_orderable_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsDocdbOrderableDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsDocdbOrderableDbInstance to import
  * @param importFromId The id of the existing DataAwsDocdbOrderableDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsDocdbOrderableDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_docdb_orderable_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/docdb_orderable_db_instance aws_docdb_orderable_db_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDocdbOrderableDbInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsDocdbOrderableDbInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_orderable_db_instance',
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
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._licenseModel = config.licenseModel;
    this._preferredInstanceClasses = config.preferredInstanceClasses;
    this._region = config.region;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // license_model - computed: false, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // preferred_instance_classes - computed: false, optional: true, required: false
  private _preferredInstanceClasses?: string[]; 
  public get preferredInstanceClasses() {
    return this.getListAttribute('preferred_instance_classes');
  }
  public set preferredInstanceClasses(value: string[]) {
    this._preferredInstanceClasses = value;
  }
  public resetPreferredInstanceClasses() {
    this._preferredInstanceClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInstanceClassesInput() {
    return this._preferredInstanceClasses;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: boolean | cdktf.IResolvable; 
  public get vpc() {
    return this.getBooleanAttribute('vpc');
  }
  public set vpc(value: boolean | cdktf.IResolvable) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredInstanceClasses),
      region: cdktf.stringToTerraform(this._region),
      vpc: cdktf.booleanToTerraform(this._vpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_instance_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredInstanceClasses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc: {
        value: cdktf.booleanToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
