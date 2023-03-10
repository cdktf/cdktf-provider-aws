// https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsReservedInstanceOfferingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}
  */
  readonly multiAz: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}
  */
  readonly offeringType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}
  */
  readonly productDescription: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering}
*/
export class DataAwsRdsReservedInstanceOffering extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_reserved_instance_offering";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsReservedInstanceOfferingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsReservedInstanceOfferingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_reserved_instance_offering',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._dbInstanceClass = config.dbInstanceClass;
    this._duration = config.duration;
    this._id = config.id;
    this._multiAz = config.multiAz;
    this._offeringType = config.offeringType;
    this._productDescription = config.productDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // fixed_price - computed: true, optional: false, required: false
  public get fixedPrice() {
    return this.getNumberAttribute('fixed_price');
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

  // multi_az - computed: false, optional: false, required: true
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // offering_id - computed: true, optional: false, required: false
  public get offeringId() {
    return this.getStringAttribute('offering_id');
  }

  // offering_type - computed: false, optional: false, required: true
  private _offeringType?: string; 
  public get offeringType() {
    return this.getStringAttribute('offering_type');
  }
  public set offeringType(value: string) {
    this._offeringType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringTypeInput() {
    return this._offeringType;
  }

  // product_description - computed: false, optional: false, required: true
  private _productDescription?: string; 
  public get productDescription() {
    return this.getStringAttribute('product_description');
  }
  public set productDescription(value: string) {
    this._productDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productDescriptionInput() {
    return this._productDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      offering_type: cdktf.stringToTerraform(this._offeringType),
      product_description: cdktf.stringToTerraform(this._productDescription),
    };
  }
}
