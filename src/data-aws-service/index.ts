// https://www.terraform.io/docs/providers/aws/d/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#dns_name DataAwsService#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#id DataAwsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#region DataAwsService#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#reverse_dns_name DataAwsService#reverse_dns_name}
  */
  readonly reverseDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#reverse_dns_prefix DataAwsService#reverse_dns_prefix}
  */
  readonly reverseDnsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service#service_id DataAwsService#service_id}
  */
  readonly serviceId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/service aws_service}
*/
export class DataAwsService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/service aws_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_service',
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
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._region = config.region;
    this._reverseDnsName = config.reverseDnsName;
    this._reverseDnsPrefix = config.reverseDnsPrefix;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
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

  // reverse_dns_name - computed: true, optional: true, required: false
  private _reverseDnsName?: string; 
  public get reverseDnsName() {
    return this.getStringAttribute('reverse_dns_name');
  }
  public set reverseDnsName(value: string) {
    this._reverseDnsName = value;
  }
  public resetReverseDnsName() {
    this._reverseDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsNameInput() {
    return this._reverseDnsName;
  }

  // reverse_dns_prefix - computed: true, optional: true, required: false
  private _reverseDnsPrefix?: string; 
  public get reverseDnsPrefix() {
    return this.getStringAttribute('reverse_dns_prefix');
  }
  public set reverseDnsPrefix(value: string) {
    this._reverseDnsPrefix = value;
  }
  public resetReverseDnsPrefix() {
    this._reverseDnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsPrefixInput() {
    return this._reverseDnsPrefix;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      reverse_dns_name: cdktf.stringToTerraform(this._reverseDnsName),
      reverse_dns_prefix: cdktf.stringToTerraform(this._reverseDnsPrefix),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }
}
